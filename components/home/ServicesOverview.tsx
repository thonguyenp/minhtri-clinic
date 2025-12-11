import { Box, Typography, Stack } from "@mui/material";
import { services } from "../../lib/mockData";
import ServiceCard from "../services/ServiceCard";

export default function ServicesOverview() {
  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 6, textAlign: "center" }}>
        Dịch vụ nổi bật
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} flexWrap="wrap" justifyContent="center">
        {services.slice(0, 6).map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Stack>
    </Box>
  );
}
