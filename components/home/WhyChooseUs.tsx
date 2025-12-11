import { Box, Typography, Stack } from "@mui/material";

export default function WhyChooseUs() {
  const points = [
    "Đội ngũ bác sĩ chuyên môn cao",
    "Cơ sở vật chất hiện đại",
    "Quy trình khám chữa bệnh nhanh chóng",
    "Dịch vụ chăm sóc khách hàng tận tâm"
  ];

  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 6, textAlign: "center" }}>
        Vì sao chọn Minh Trí Clinic
      </Typography>
      <Stack spacing={2} alignItems="center">
        {points.map((point, idx) => (
          <Box key={idx} sx={{ bgcolor: "#fff", p: 3, borderRadius: 2, boxShadow: 1, width: "100%", maxWidth: 600 }}>
            <Typography variant="h6">{point}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
