import { Box, Button, Typography } from "@mui/material";
import useCounter from "../hooks/useCounter";

function Practice3() {
  const { count, increase } = useCounter();
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h6">
        {" "}
        Bạn đã click{" "}
        <Box
          component="span"
          sx={{ color: "primary.main", fontSize: "1.5rem" }}
        >
          {count}
        </Box>{" "}
        lần
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={increase}
        sx={{ px: 6, py: 1.5, fontSize: "1.1rem" }}
      >
        Click me!
      </Button>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        {count === 0 && (
          <Typography sx={{ mt: 2, textAlign: "center" }}>
            Chưa click nào, hãy bắt đầu bằng cách nhấn nút!
          </Typography>
        )}
        {count > 0 && count <= 10 && (
          <Typography>
            Bạn đã click {count} lần, tiếp tục phát huy nhé!
          </Typography>
        )}
        {count > 10 && count <= 20 && (
          <Typography>Wow, bạn đã click {count} lần, Hơi nhiều rồi!</Typography>
        )}
        {count > 20 && (
          <Typography>
            What the heck, bạn đã click {count} lần, Nghiện thật rồi đấy!
          </Typography>
        )}
      </Box>
    </Box>
  );
}
export default Practice3;
