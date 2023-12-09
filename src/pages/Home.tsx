import { Box, Typography } from "@mui/material";
import { data } from "../util/snakeData";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((d) => (
          <Box sx={{ width: { xs: "90%", sm: "45%", md: "30%" }, ml: 2 }}>
            <Link
              to={`detail/${d.Id}`}
              key={d.Id}
              style={{ textDecoration: "none", marginLeft: "20px" }}
            >
              <Box
                sx={{
                  bgcolor: "info.main",
                  "&:hover": { bgcolor: "info.light" },
                  p: 1,
                  borderRadius: 5,
                  boxShadow: 3,
                  m: 1,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "100%", sm: "150px", md: "200px" },
                  }}
                >
                  <Box
                    component="img"
                    src={`../img/${d.Id}.png`}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 10,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    color: "success.light",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "1.1rem",

                      mb: 2,
                    }}
                  >
                    {d.EngName}
                  </Typography>
                  <Typography sx={{ fontSize: "1.25rem", mb: 2 }}>
                    {d.MMName}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Home;
