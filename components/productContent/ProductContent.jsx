import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MyCard from "../myCard/MyCard";

import data from "../../src/fakeDB";

const ProductContent = () => {
  return (
    <Box display="flex" flexWrap="wrap">
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap="2em"
        sx={{
          marginLeft: { xs: "0", sm: "5em" },
          marginRight: { xs: "0", sm: "5em" },
        }}
      >
        {data.map((articulo) => {
          return (
            <MyCard
              nombre={articulo.articulo}
              srcImg={articulo.imagen}
              precio={articulo.precio}
              key={articulo.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductContent;
