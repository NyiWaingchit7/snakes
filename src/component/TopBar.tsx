import { Box, Typography } from "@mui/material";

const TopBar = () => {
  return (
    <Box
      sx={{
        bgcolor: "secondary.dark",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          px: 3,
          mx: { xs: 2, md: 5 },
        }}
      >
        <Box>
          <Box component="img" sx={{ width: "50px" }} src="../icon.png" />
        </Box>
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "cursive",
              fontWeight: "bold",
              color: "success.light",
            }}
          >
            Snakes
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default TopBar;
