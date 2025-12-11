import { Box, Typography } from "@mui/material";

export default function TamNhinSuMenhPage() {
  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 4 }}>
        Tầm nhìn & Sứ mệnh
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Tầm nhìn:</strong> Trở thành phòng khám đa khoa uy tín, hiện đại, được tin tưởng tại TP.HCM.
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Sứ mệnh:</strong> Cung cấp dịch vụ chăm sóc sức khỏe chất lượng cao, tận tâm và đáng tin cậy.
      </Typography>
    </Box>
  );
}
