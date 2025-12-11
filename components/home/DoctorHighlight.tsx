import { Box, Typography, Stack } from "@mui/material";
import { doctors } from "../../lib/mockData";
import DoctorCard from "../team/DoctorCard";

export default function DoctorHighlight() {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#fff" }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 6, textAlign: "center" }}>
        Đội ngũ bác sĩ
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} flexWrap="wrap" justifyContent="center">
        {doctors.slice(0, 6).map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </Stack>
    </Box>
  );
}
