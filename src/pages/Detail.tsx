import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { data } from "../util/snakeData";

const Detail = () => {
  const id = useParams().id;
  const detail = data.find((d) => d.Id === Number(id));
  if (!detail) return null;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: 5,
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: { xs: "80%", sm: "50%", md: "40%", lg: "30%" },
          bgcolor: "success.main",
          borderRadius: 5,
        }}
      >
        <Box
          component="img"
          sx={{ width: "100%" }}
          src={`../img/${detail.Id}.png`}
        />
      </Box>
      <Box
        sx={{
          width: "90%",
          bgcolor: "success.main",
          p: 2,
          m: 2,
          borderRadius: 5,
        }}
      >
        <Typography
          sx={{
            lineHeight: 2,
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            fontWeight: "bold",
            mb: 3,
          }}
        >
          {detail.MMName}
        </Typography>

        <Typography
          sx={{ lineHeight: 2, fontSize: { xs: "0.7rem", md: "1rem" } }}
        >
          {detail.Detail}
        </Typography>
      </Box>
    </Box>
  );
};
export default Detail;
