import {
  Avatar,
  Box,
  Divider,
  Grid,
  Typography,
  Toolbar,
  Rating,
} from "@mui/material";
import FeedBackComponent from "./FeedBackComponent";
const FeedBackContent = () => {
  return (
    <Box mt="5em">
      <Box mb="2em">
        <Typography align="center" variant="h2">
          Opiniones
        </Typography>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1em"
        mt="2em"
      >
        <FeedBackComponent name="David Chávez Núñez" />
        <Divider />
        <FeedBackComponent name="Volobin Volovan" />
        <Divider />
        <FeedBackComponent name="Volobin Volovan" />
        <Divider />
        <FeedBackComponent name="Volobin Volovan" />
        <Divider />
        <FeedBackComponent name="Volobin Volovan" />
      </Box>
    </Box>
  );
};

export default FeedBackContent;
