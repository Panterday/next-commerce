import {
  Grid,
  Box,
  Toolbar,
  Avatar,
  Typography,
  Rating,
  Divider,
} from "@mui/material";
const FeedBackComponent = ({ name }) => {
  return (
    <Box display="flex" justifyContent="space-evenly">
      <Box display="flex" gap="1em" alignItems="center">
        <Avatar>DC</Avatar>
        <Rating value={5} readOnly />
      </Box>
      <Box
        display="flex"
        width="15em"
        justifyContent="center"
        alignItems="center"
      >
        <Typography>{name}</Typography>
      </Box>
      <Box display="flex" mt="2em">
        <Box sx={{ border: "1px solid", borderRadius: "8px", padding: "1em" }}>
          <Typography>Es un producto chido chido bueno.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeedBackComponent;
