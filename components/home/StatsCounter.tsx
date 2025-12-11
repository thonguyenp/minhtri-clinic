import { Box, Typography, Stack } from "@mui/material";

const stats = [
  { label: "Bác sĩ", value: 20 },
  { label: "Dịch vụ", value: 12 },
  { label: "Khách hàng hài lòng", value: 5000 },
  { label: "Cơ sở", value: 2 }
];

export default function StatsCounter() {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#00796b", color: "#fff" }}>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} justifyContent="center" textAlign="center">
        {stats.map((stat, idx) => (
          <Box key={idx}>
            <Typography variant="h4" sx={{ fontFamily: "Playfair Display, serif", mb: 1 }}>
              {stat.value}
            </Typography>
            <Typography variant="subtitle1">{stat.label}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
