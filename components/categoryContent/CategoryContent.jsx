import {
  Grid,
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardActions,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import Layout from "../layout/layout";
import Navigation from "../navigation/Navigation";
import CategoryCard from "./CategoryCard";
import styles from "./CategoryContent.module.css";
const CategoryContent = () => {
  return (
    <Box
      mt="8em"
      mx="5em"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap="2em"
    >
      <CategoryCard
        category="Repostería"
        imgSrc="/static/images/reposteria.png"
        cardColor="pink"
      />
      <CategoryCard
        category="Limpieza"
        imgSrc="/static/images/limpieza.jpg"
        cardColor="#7FC9FF"
      />
      <CategoryCard
        category="Mascotas"
        imgSrc="/static/images/mascotas.jpg"
        cardColor="#BEFDB0"
      />
      <CategoryCard category="Cocina" imgSrc="/static/images/cocina.jpg" />
      <CategoryCard
        category="Baño"
        imgSrc="/static/images/baño.jpg"
        cardColor="#EFEFEF"
      />
      <CategoryCard
        category="Tecnología"
        imgSrc="/static/images/tecnologia.jpg"
        cardColor="#FB7A7A"
      />
    </Box>
  );
};

export default CategoryContent;
