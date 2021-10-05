import { Grid, ThemeProvider, Box } from "@mui/material";
import Image from "next/image";

const ProductDetails = ({ id, itemName, image }) => {
  return (
    <ThemeProvider>
      <Grid container mt="7em">
        <Grid
          item
          sm="5"
          xs="12"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Box sx={{ width: "80%" }}>
            <Image src={image} alt="test" width={500} height={400} />
          </Box>
          <Box
            display="flex"
            bgcolor="grey"
            width="80%"
            justifyContent="space-evenly"
          >
            <div style={{ backgroundColor: "green" }}>IMAGE 1</div>
            <div style={{ backgroundColor: "yellow" }}>IMAGE 2</div>
            <div style={{ backgroundColor: "black" }}>IMAGE 3</div>
            <div style={{ backgroundColor: "orange" }}>IMAGE 4</div>
          </Box>
        </Grid>
        <Grid item sm="1" xs="0" sx={{ backgroundColor: "red" }}>
          Middle
        </Grid>
        <Grid item sm="6" xs="12">
          RIGHT
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ProductDetails;
