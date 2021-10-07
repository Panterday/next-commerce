import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";
import theme from "../../utils/globalThemeMUI";
const CategoryCard = ({ category, imgSrc, cardColor }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ minWidth: 330, backgroundColor: cardColor }}>
        <Link href={`/products`} passHref>
          <CardActionArea>
            <CardHeader title={category} align="center" />
            <CardMedia
              component="img"
              image={imgSrc}
              alt="Paella dish"
              height="200"
            />
          </CardActionArea>
        </Link>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained">Explorar</Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
};

export default CategoryCard;
