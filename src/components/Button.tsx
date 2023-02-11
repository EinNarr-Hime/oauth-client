import { Button } from "@mui/material";

/**
 * ラベルの数だけボタンを作成
 */
export const GridItemsButton: React.FC<{ labels: Array<string> }> = (
  labelList
) => {
  return (
    <>
      {labelList.labels.map((label, index) => {
        return (
          <Button key={index} variant="outlined">
            {label}
          </Button>
        );
      })}
    </>
  );
};
