import { Box, Typography, Button } from "@mui/material";
import { Service } from "../../types";

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  return (
    <Box
      sx={{
        width: 300,
        borderRadius: 2,
        boxShadow: 1,
        overflow: "hidden",
        bgcolor: "#fff",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
        }
      }}
    >
      <img src={service.image} alt={service.title} />
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {service.title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          {service.description}
        </Typography>
        <Button
          href={`/dich-vu/${service.id}`}
          variant="contained"
          sx={{ bgcolor: "#ffd54f", color: "#263238", "&:hover": { bgcolor: "#ffeb7f" } }}
        >
          Xem chi tiết
        </Button>
      </Box>
    </Box>
  );
}
