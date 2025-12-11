import { Box, Typography, TextField, Button, Stack } from "@mui/material";

export default function LienHePage() {
  return (
    <Box sx={{ py: 10, px: 2, maxWidth: 500, mx: "auto" }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 4, textAlign: "center" }}>
        Liên hệ
      </Typography>
      <Stack spacing={3}>
        <TextField label="Họ và tên" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Số điện thoại" fullWidth />
        <TextField label="Nội dung" multiline rows={4} fullWidth />
        <Button variant="contained" sx={{ bgcolor: "#ffd54f", color: "#263238", "&:hover": { bgcolor: "#ffeb7f" } }}>
          Gửi liên hệ
        </Button>
      </Stack>
    </Box>
  );
}
