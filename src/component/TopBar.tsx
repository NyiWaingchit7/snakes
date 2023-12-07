import { Box, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 1,
        px: 3,
        bgcolor: "secondary.main",
      }}
    >
      <Box>
        <Box component="img" sx={{ width: "50px" }} src="../icon.png" />
      </Box>
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "serif",
            fontWeight: "bold",
            color: "success.light",
          }}
        >
          Snakes
        </Typography>
      </Box>
    </Box>
  );
};
export default TopBar;
