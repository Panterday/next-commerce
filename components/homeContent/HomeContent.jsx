import {
  Grid,
  Box,
  Typography,
  Button,
  Toolbar,
  Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
import home from "../../public/static/images/mops.jpg";
import styles from "./HomeContent.module.css";
import { ThemeProvider } from "@mui/material";
import theme from "../../utils/globalThemeMUI";
import Link from "next/link";
import { motion } from "framer-motion";

const HomeContent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container mt="6em">
        <Grid
          item
          xs={12}
          sm={6}
          p="1em"
          bgcolor="primary.main"
          display="flex"
          alignItems="center"
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.2 } },
              }}
            >
              <Typography color="whitesmoke">
                Tienda en línea de productos por mayoreo.
              </Typography>
            </motion.div>
            <Typography
              variant="h2"
              color="whitesmoke"
              align="center"
              width="70%"
              fontSize={{ xs: "2.2em", sm: "4em" }}
              mb="0.3em"
            >
              Productos para el hogar por mayoreo al mejor precio.
            </Typography>
            {/* <Button
              variant="contained"
              sx={{
                color: "primary.main",
                backgroundColor: "secondary.main",
                fontWeight: "bold",
              }}
            >
              Empieza a comprar
            </Button> */}
            <Link href="/products" passHref>
              <Button
                variant="contained"
                sx={{
                  color: "whitesmoke",
                  backgroundColor: "primary.dark",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                    color: "primary.dark",
                  },
                }}
              >
                Empieza a comprar
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} p={{ xs: 0, sm: 0 }}>
          <Toolbar>
            <Image src={home} />
          </Toolbar>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default HomeContent;
