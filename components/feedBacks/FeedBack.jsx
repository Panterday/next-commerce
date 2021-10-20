import {
  Avatar,
  Box,
  Divider,
  Grid,
  Typography,
  Toolbar,
  Rating,
} from "@mui/material";
const FeedBack = () => {
  return (
    <Box height="100vh" mt="5em">
      <Box mb="2em">
        <Typography align="center" variant="h2">
          Opiniones
        </Typography>
      </Box>
      <Divider />
      <Grid container mt="2em">
        <Grid item sm={1} />
        <Grid item sm={10} display="flex" justifyContent="center">
          <Box display="flex" flexDirection="column" sx={{ gap: "1em" }}>
            <Toolbar display="flex" sx={{ gap: "1em" }}>
              <Avatar sx={{ backgroundColor: "primary.main" }}>DC</Avatar>
              <Typography>David Chávez Núñez</Typography>
              <Rating value={5} readOnly />
              <Box
                sx={{ border: "1px solid", borderRadius: "10px" }}
                width="10em"
                padding="1em"
              >
                Es un producto chido chido bueno, de la más alta calidad.
                Llevaré 10.
              </Box>
            </Toolbar>
            <Toolbar display="flex" sx={{ gap: "1em" }}>
              <Avatar sx={{ backgroundColor: "primary.main" }}>DC</Avatar>
              <Typography>David Chávez Núñez</Typography>
              <Rating value={5} readOnly />
              <Box
                sx={{ border: "1px solid", borderRadius: "10px" }}
                width="10em"
                padding="1em"
              >
                Es un producto chido chido bueno, de la más alta calidad.
                Llevaré 10.
              </Box>
            </Toolbar>
            <Toolbar display="flex" sx={{ gap: "1em" }}>
              <Avatar sx={{ backgroundColor: "primary.main" }}>DC</Avatar>
              <Typography>David Chávez</Typography>
              <Rating value={5} readOnly />
              <Box
                sx={{ border: "1px solid", borderRadius: "10px" }}
                width="10em"
                padding="1em"
              >
                Es un producto chido chido bueno, de la más alta calidad.
                Llevaré 10.
              </Box>
            </Toolbar>
          </Box>
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Box>
  );
};

export default FeedBack;
