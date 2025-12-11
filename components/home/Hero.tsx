import { Box, Typography, Button } from "@mui/material";
import BookingButton from "../common/BookingButton";

export default function Hero() {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2
      }}
    >
      <Typography variant="h2" sx={{ fontFamily: "Playfair Display, serif", color: "#fff", mb: 3 }}>
        Chăm sóc sức khỏe toàn diện
      </Typography>
      <Typography variant="h6" sx={{ color: "#fff", mb: 4 }}>
        Đội ngũ bác sĩ giàu kinh nghiệm, cơ sở vật chất hiện đại
      </Typography>
      <Button
        variant="contained"
        href="/dat-lich-kham"
        sx={{ bgcolor: "#ffd54f", color: "#263238", px: 4, py: 1.5, "&:hover": { bgcolor: "#ffeb7f" } }}
      >
        Đặt lịch khám
      </Button>
      <BookingButton />
    </Box>
  );
}
