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
import theme from "../utils/globalThemeMUI";

import Link from "next/link";

const Navigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.navBar}>
        <Typography
          variant="h5"
          sx={{ marginLeft: "5vw", fontSize: { sm: "2em", xs: "1.7em" } }}
        >
          MagicHouse<span style={{ color: "primary.main" }}>Store</span>
        </Typography>
        <Toolbar sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", gap: "1.5vw", marginRight: "1em" }}>
            <Link href="/" passHref>
              <MuiLink sx={{ display: { xs: "none", sm: "flex" } }}>
                Inicio
              </MuiLink>
            </Link>
            <Link href="/products" passHref>
              <MuiLink sx={{ display: { xs: "none", sm: "flex" } }}>
                Productos
              </MuiLink>
            </Link>
            <Link href="/category" passHref>
              <MuiLink sx={{ display: { xs: "none", sm: "flex" } }}>
                Categorías
              </MuiLink>
            </Link>
            <Link href="/aboutUs" passHref>
              <MuiLink sx={{ display: { xs: "none", sm: "flex" } }}>
                Nosotros
              </MuiLink>
            </Link>
          </Box>
          <IconButton sx={{ marginRight: { xs: "0" } }}>
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon sx={{ fontSize: "1em" }} />
            </Badge>
          </IconButton>
          <IconButton sx={{ display: { xs: "flex", sm: "none" } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </div>
    </ThemeProvider>
  );
};

export default Navigation;
