import { Button, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { GridItemsButton } from "components/Button";
import { GridItemsTextInput } from "components/TextField";
import React from "react";
import theme from "theme/theme";

const App: React.FC = () => {
  const textFieldLabels = ["Client ID", "Client Secret", "Callback URL"];
  const buttonLabels = ["Submit", "Clear"];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <Grid item>
            <h2>OAuth テストクライアント</h2>
          </Grid>
          <GridItemsTextInput labels={textFieldLabels} />
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {/* 多分良くないんだろうな */}
            <br />
            <br />
            <br />
            <GridItemsButton labels={buttonLabels} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default App;
