import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../util/snakeData";

const Detail = () => {
  const id = useParams().id;
  const detail = data.find((d) => d.Id === Number(id));
  const navigate = useNavigate();
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
          bgcolor: "info.main",
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
          bgcolor: "info.main",
          p: 2,
          m: 2,
          borderRadius: 5,
          color: "success.light",
        }}
      >
        <Box>
          <Button
            variant="contained"
            sx={{ px: 4, borderRadius: 3, m: 2 }}
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </Button>
        </Box>

        <Typography
          sx={{
            lineHeight: 2,
            fontSize: { xs: "1.3rem", md: "1.5rem" },
            fontWeight: "bold",
            mb: 3,
          }}
        >
          {detail.MMName}{" "}
          {detail.IsDanger === "Yes" ? "(အန္တရာယ်ရှိ) " : "(အန္တရာယ်မရှိ) "}
          {detail.IsPoison === "Yes" ? "(အဆိပ်ရှိ)" : "(အဆိပ်မရှိ)"}
        </Typography>

        <Typography
          sx={{ lineHeight: 2, fontSize: { xs: "0.9rem", md: "1.2rem" } }}
        >
          {detail.Detail}
        </Typography>
      </Box>
    </Box>
  );
};
export default Detail;
