import { Box, Typography, Stack } from "@mui/material";
import { doctors } from "../../lib/mockData";
import DoctorCard from "../../components/team/DoctorCard";

export default function DoiNguBacSiPage() {
  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 6, textAlign: "center" }}>
        Đội ngũ bác sĩ
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} flexWrap="wrap" justifyContent="center">
        {doctors.map(d => <DoctorCard key={d.id} doctor={d} />)}
      </Stack>
    </Box>
  );
}
