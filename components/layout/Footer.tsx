import { Box, Typography, Stack, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#00796b", color: "#fff", py: 6 }}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif" }}>
          Minh Trí Clinic
        </Typography>
        <Typography variant="body2">
          123 Lê Lợi, Quận 1, TP.HCM | Điện thoại: 028 1234 5678
        </Typography>
        <Typography variant="body2">
          © 2025 Minh Trí Clinic. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link href="#" color="inherit">Facebook</Link>
          <Link href="#" color="inherit">Instagram</Link>
          <Link href="#" color="inherit">YouTube</Link>
        </Stack>
      </Stack>
    </Box>
  );
}
