import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { CardActionArea, Typography } from '@mui/material';
import Button from '@mui/material/Button'
import { ThemeProvider} from '@mui/material'
import theme from '../utils/globalThemeMUI';

export default function MyCard({nombre, srcImg, precio}) {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ maxWidth: 300}}>
        <CardActionArea>
          <CardHeader
            title={nombre}
            subheader="Repostería"
            align="center"
          />
          <CardMedia
            component="img"
            height="200"
            image={srcImg}
            alt="Paella dish"
          />
        </CardActionArea>
        <CardActions sx={{justifyContent: 'center'}}>
          <Typography>
            ${precio} x 1 pieza
          </Typography>
        </CardActions>
        <CardActions sx={{backgroundColor: 'secondary.main'}}>
          <Button size="small" variant="contained">
            <Typography fontSize="1em">Comprar</Typography>
          </Button>
          <Button size="small" variant="contained">
            <Typography fontSize="1em">Agregar al carrito</Typography>
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
