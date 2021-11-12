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
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./Navigation.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ThemeProvider } from "@mui/material";
import theme from "../../utils/globalThemeMUI";
import { motion } from "framer-motion";

import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.1 } },
            }}
          >
            <Link href="/" passHref>
              <MuiLink underline="none">
                <Typography
                  variant="h5"
                  sx={{
                    marginLeft: "5vw",
                    fontSize: { sm: "2em", xs: "1.5em" },
                  }}
                >
                  MagicHouse<span style={{ color: "#49bcbe" }}>Store</span>
                </Typography>
              </MuiLink>
            </Link>
          </motion.div>
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
              <Link href="/categories" passHref>
                <MuiLink
                  fontSize="1.1em"
                  underline="hover"
                  color="black"
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  Categorías
                </MuiLink>
              </Link>
              <Link href="/about-us" passHref>
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
              <Link href="/car" passHref>
                <IconButton>
                  <Badge badgeContent={1} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Link>
              <IconButton
                sx={{ display: { sx: "flex", sm: "none" } }}
                onClick={() => setShowMenu(true)}
              >
                <MenuIcon sx={{ fontSize: 35 }} />
              </IconButton>
            </Toolbar>
          </Box>
        </Toolbar>
      </AppBar>
      {/* SIDE MENU */}
      <Drawer open={showMenu} onClose={() => setShowMenu(false)}>
        <Box width="70vw">
          <List>
            <ListItem>
              <Link href="/" passHref>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inicio" />
                </ListItemButton>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link href="/products" passHref>
                <ListItemButton>
                  <ListItemText primary="Productos" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/categories" passHref>
                <ListItemButton>
                  <ListItemText primary="Categorías" />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about-us" passHref>
                <ListItemButton>
                  <ListItemText primary="Nosotros" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </ThemeProvider>
  );
};

export default Navigation;
