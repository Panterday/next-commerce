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
import { useState, useEffect } from "react";

const ProductDetails = ({ id, itemName, image, description, price }) => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const handleChange = (event) => {
    const value = Number(event.target.value);
    setQuantity(value);
    if (value === 0) {
      setTotal(0);
      setSubTotal(0);
    }
  };
  const handleQuantityDown = () => {
    if (quantity >= 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleQuantityUp = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    if (quantity > 0 && quantity < 10) {
      setSubTotal(price);
      setTotal(quantity * subTotal);
    }
    if (quantity >= 10 && quantity < 50) {
      setSubTotal(price - price * 0.1);
      setTotal(quantity * subTotal);
    }
    if (quantity >= 50 && quantity < 100) {
      setSubTotal(price - price * 0.2);
      setTotal(quantity * subTotal);
    }
    if (quantity >= 100 && quantity < 300) {
      setSubTotal(price - price * 0.3);
      setTotal(quantity * subTotal);
    }
    if (quantity >= 300) {
      setSubTotal(price - price * 0.5);
      setTotal(quantity * subTotal);
    }
  }, [quantity, subTotal]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container mt="8em">
        <Grid
          item
          sm={6}
          xs={12}
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

        <Grid item sm={6} xs={12} p="1em">
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
                  size="small"
                  value={quantity}
                  onChange={handleChange}
                />
                <Button variant="contained" onClick={handleQuantityDown}>
                  -
                </Button>
                <Button variant="contained" onClick={handleQuantityUp}>
                  +
                </Button>
                <TextField
                  label="Precio por mayoreo"
                  id="outlined-size-small"
                  value={subTotal}
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
                  <Typography variant="h5">${total}</Typography>
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
