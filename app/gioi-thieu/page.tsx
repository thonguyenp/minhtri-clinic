import { Box, Typography } from "@mui/material";

export default function GioiThieuPage() {
  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 4 }}>
        Giới thiệu Minh Trí Clinic
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Minh Trí Clinic là phòng khám đa khoa cao cấp tại TP.HCM, với đội ngũ bác sĩ giàu kinh nghiệm và cơ sở vật chất hiện đại.
      </Typography>
      <Typography variant="body1">
        Chúng tôi cam kết mang đến dịch vụ chăm sóc sức khỏe toàn diện, an toàn và đáng tin cậy cho mọi bệnh nhân.
      </Typography>
    </Box>
  );
}
