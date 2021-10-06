import {
  Grid,
  ThemeProvider,
  Box,
  Typography,
  Rating,
  Button,
  TextField,
  Divider,
} from "@mui/material";
import Image from "next/image";
import theme from "../../utils/globalThemeMUI";

const ProductDetails = ({ id, itemName, image, description, price }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container mt="8em">
        <Grid
          item
          sm="6"
          xs="12"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box sx={{ width: "80%" }}>
            <Image src={image} alt="test" width={500} height={400} />
          </Box>
          <Box display="flex" bgcolor="grey" width="60%" mt="1em" gap="1em">
            <Box flexGrow="1">
              <Image src={image} alt="test" width={100} height={80} />
            </Box>
            <Box flexGrow="1">
              <Image src={image} alt="test" width={100} height={80} />
            </Box>
            <Box flexGrow="1">
              <Image src={image} alt="test" width={100} height={80} />
            </Box>
            <Box flexGrow="1">
              <Image src={image} alt="test" width={100} height={80} />
            </Box>
          </Box>
        </Grid>

        <Grid item sm="6" xs="12" p="1em">
          <Box display="flex" flexDirection="column" height="80vh">
            <Box>
              <Typography variant="h4">{itemName}</Typography>
              <Typography color="gray">Juego de 3 piezas</Typography>
            </Box>
            <Box display="flex" mt="2em">
              <Typography variant="h4">
                ${price}
                <span style={{ fontSize: "0.4em" }}> MXN</span>
              </Typography>
            </Box>
            <Box display="flex">
              <Rating name="read-only" value={3} readOnly />
              <Typography ml="1em">0 opiniones</Typography>
            </Box>
            <Divider />
            <Box flexGrow="1" mt="1em">
              <Typography>{description}</Typography>
            </Box>
            <Divider />
            <Box mt="2em" mb="2em">
              <Box mb="2em" display="flex" gap="1em">
                <TextField
                  label="Cantidad"
                  id="outlined-size-small"
                  defaultValue="1"
                  size="small"
                />
                <Button variant="contained">-</Button>
                <Button variant="contained">+</Button>
                <TextField
                  label="Precio por mayoreo"
                  id="outlined-size-small"
                  defaultValue="0"
                  size="small"
                />
              </Box>
              <Divider />
              <Box
                mt="2em"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Box display="flex" gap="1em">
                  <Button variant="contained">Agregar al carrito</Button>
                  <Button variant="contained">Proceder al pago</Button>
                </Box>
                <Box
                  display="flex"
                  gap="1em"
                  sx={{ marginTop: { xs: "1em", sm: "0" } }}
                >
                  <Typography variant="h5">Total:</Typography>
                  <Typography variant="h5">$200</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ProductDetails;
