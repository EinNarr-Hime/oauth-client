import { Grid, TextField } from "@mui/material";

type Props = {
  label: string;
};

const textFieldStyle = {
  width: "550px",
  "& .MuiInputBase-input": {
    color: "#FFFFFF", // 入力文字の色
  },
  "& label": {
    color: "#AAAAAA", // 通常時のラベル色
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#CCCCCC", // 通常時のボーダー色
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#DDDDDD", // ホバー時のボーダー色
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#CCCCCC", // 通常時のボーダー色(アウトライン)
    },
  },
};

export const TextInput: React.FC<Props> = (props: Props) => {
  return (
    <>
      <TextField
        label={props.label}
        variant="outlined"
        color="warning"
        sx={textFieldStyle}
        size="medium"
      />
    </>
  );
};

/**
 * ラベルの数だけテキストフィールドを作成
 */
export const GridItemsTextInput: React.FC<{ labels: Array<string> }> = (
  labelList
) => {
  return (
    <>
      {labelList.labels.map((label, index) => {
        return (
          <Grid item>
            <TextInput key={index} label={label}></TextInput>
          </Grid>
        );
      })}
    </>
  );
};
