import {
  IconButton,
  Box,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Search,
  SearchIconWrapper,
  Container,
  Badge,
  Link as MuiLink,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Navigation.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeProvider } from "@mui/material";
import theme from "../../utils/globalThemeMUI";

import Link from "next/link";

const Navigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        sx={{
          backgroundColor: "white",
          height: "6em",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flecDirection: "row",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              marginLeft: "5vw",
              fontSize: { sm: "2em", xs: "1.5em" },
            }}
          >
            MagicHouse<span style={{ color: "#49bcbe" }}>Store</span>
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Toolbar sx={{ display: "flex", gap: "2em" }}>
              <Link href="/" passHref>
                <MuiLink
                  fontSize="1.1em"
                  underline="hover"
                  color="black"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  Inicio
                </MuiLink>
              </Link>
              <Link href="/products" passHref>
                <MuiLink
                  fontSize="1.1em"
                  underline="hover"
                  color="black"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  Productos
                </MuiLink>
              </Link>
              <Link href="/category" passHref>
                <MuiLink
                  fontSize="1.1em"
                  underline="hover"
                  color="black"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  Categorías
                </MuiLink>
              </Link>
              <Link href="/aboutUs" passHref>
                <MuiLink
                  fontSize="1.1em"
                  underline="hover"
                  color="black"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  Nosotros
                </MuiLink>
              </Link>
            </Toolbar>
            <Toolbar>
              <IconButton>
                <Badge badgeContent={1} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton sx={{ display: { sx: "flex", sm: "none" } }}>
                <MenuIcon sx={{ fontSize: 35 }} />
              </IconButton>
            </Toolbar>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navigation;
