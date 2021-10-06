import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MyCard from "../myCard/MyCard";
import data from "../../src/fakeDB";

const ProductContent = () => {
  return (
    <Box display="flex" flexWrap="wrap" mt="8em">
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
        {data.map((item) => {
          return (
            <MyCard
              key={item.id}
              nombre={item.itemName}
              srcImg={item.image}
              precio={item.price}
              category={item.slugCategory}
              slug={item.slug}
              itemId={item.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductContent;
