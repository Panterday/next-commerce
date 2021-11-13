import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { CardActionArea, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import theme from "../../utils/globalThemeMUI";
import Link from "next/link";

export default function MyCard({
  nombre,
  srcImg,
  precio,
  category,
  slug,
  itemId,
}) {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ minWidth: 320 }}>
        <Link href={`/${category}/${slug}?id=${itemId}`} passHref>
          <CardActionArea>
            <CardHeader title={nombre} subheader="Repostería" align="center" />
            <CardMedia
              component="img"
              height="200"
              image={srcImg}
              alt="Paella dish"
            />
          </CardActionArea>
        </Link>
        <CardActions sx={{ justifyContent: "center" }}>
          <Typography>${precio} x 1 pieza</Typography>
        </CardActions>
        <Box
          sx={{ backgroundColor: "primary.main" }}
          display="flex"
          justifyContent="center"
        >
          <Typography fontSize="1em">
            Click en la imagen para ver detalles
          </Typography>
        </Box>
      </Card>
    </ThemeProvider>
  );
}
