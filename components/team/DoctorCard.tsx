import { Box, Typography, Rating } from "@mui/material";
import { Doctor } from "../../types";

interface Props {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: Props) {
  return (
    <Box
      sx={{
        width: 300,
        borderRadius: 2,
        boxShadow: 1,
        overflow: "hidden",
        bgcolor: "#fff",
        textAlign: "center",
        transition: "0.3s",
        "&:hover": { transform: "translateY(-5px)", boxShadow: "0 8px 20px rgba(0,0,0,0.12)" }
      }}
    >
      <img src={doctor.avatar} alt={doctor.name} style={{ width: "100%", height: 200, objectFit: "cover" }} />
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">{doctor.name}</Typography>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          {doctor.title} - {doctor.specialty}
        </Typography>
        <Rating value={doctor.rating} precision={0.1} readOnly size="small" />
        <Typography variant="body2">{doctor.reviews} đánh giá</Typography>
      </Box>
    </Box>
  );
}
