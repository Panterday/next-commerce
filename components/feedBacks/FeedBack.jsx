import { Box, Divider, Grid, Typography } from "@mui/material";
const FeedBack = () => {
  return (
    <Box height="100vh" mt="5em">
      <Box>
        <Typography align="center" variant="h2">
          Opiniones
        </Typography>
      </Box>
      <Divider />
      <Grid container>
        <Grid item sm={1} bgcolor="red">
          TEST
        </Grid>
        <Grid item sm={5}>
          MIDDLE LEFT
        </Grid>
        <Grid item sm={5}>
          MIDDLE RIGHT
        </Grid>
        <Grid item sm={1} bgcolor="purple"></Grid>
      </Grid>
    </Box>
  );
};

export default FeedBack;
