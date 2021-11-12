import { ThemeProvider } from "@emotion/react";
import { Divider, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import theme from "../../utils/globalThemeMUI";
const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" justifyContent="center" borderTop="1px solid #49bcbe">
        <Typography variant="subtitle2" padding="1em">
          Sitio creado por David Chávez Núñez 2021
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
