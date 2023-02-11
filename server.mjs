import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import formData from "express-form-data";
import path from "path";
import { fileURLToPath } from "url";

const SERVER_PORT = 8080;
const CLIENT_PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//HTTPリクエストのボディをjsonで扱えるようにする
app.use(bodyParser.json());

app.use(
  formData.parse({
    uploadDir: path.join(__dirname, "keys"),
    autoClean: true,
  })
);
// これを指定すると、サイズが0のファイルはfilesから削除してくれる
app.use(formData.format());

app.listen(SERVER_PORT, () => {
  console.log(__dirname);
  console.log(`Express server launched [port: ${SERVER_PORT}]`);
});

app.post("/api/savekey", (req, res) => {
  console.log(
    `[POST] /api/savekey http:localhost:${CLIENT_PORT} -> http:localhost:${SERVER_PORT}`
  );

  const contentType = req.headers["content-type"].split(";")[0];
  const body = req.body;
  const keyFiles = req.files;
  const folderName = body.name;

  // Content-Typeの検証
  if (contentType === "multipart/form-data") {
    if (!folderName) {
      res.status(400).json({ Message: "Invalid Request." });
    }
    Object.keys(keyFiles).forEach((name) => {
      const file = keyFiles[name];
      const bytes = fs.readFileSync(file.path);
      const filepath = path.join(__dirname, "keys", file.originalFilename);
      fs.writeFileSync(filepath, bytes);
    });
    res.status(200).end();
  } else {
    res.status(400).json({ Message: "Invalid Content-Type." });
  }
});
