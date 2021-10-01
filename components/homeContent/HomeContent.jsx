import { Grid, Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import home from "../../public/static/images/homeImage.jpg";
import styles from "./HomeContent.module.css";
import { ThemeProvider } from "@mui/material";
import theme from "../../utils/globalThemeMUI";

const HomeContent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container p="1em">
        <Grid item xs={12} sm={6} p="1em">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb="0.5em"
          >
            <Typography
              mb="0.5em"
              variant="h2"
              color="black"
              align="center"
              width="70%"
              fontSize={{ xs: "2.2em", sm: "4em" }}
            >
              Productos para el hogar por mayoreo al mejor precio.
            </Typography>
            <Button variant="contained">Empieza a comprar</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} p={{ xs: 0, sm: "1em" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={{ xs: 0, sm: "1em" }}
          >
            <Image src={home} className={styles.homeImage} />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HomeContent;
