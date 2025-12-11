import { Box, Typography, Stack, Rating } from "@mui/material";
import { testimonials } from "../../lib/mockData";

export default function Testimonials() {
  return (
    <Box sx={{ py: 10, px: 2, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 6, textAlign: "center" }}>
        Khách hàng nói gì
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} flexWrap="wrap" justifyContent="center">
        {testimonials.map(test => (
          <Box key={test.id} sx={{ width: 300, p: 3, bgcolor: "#fff", borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>"{test.content}"</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <img src={test.avatar} alt={test.name} style={{ width: 40, height: 40, borderRadius: "50%" }} />
              <Box>
                <Typography variant="subtitle2">{test.name}</Typography>
                <Rating value={test.rating} readOnly size="small" />
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
