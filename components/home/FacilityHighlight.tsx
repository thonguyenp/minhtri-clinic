import { Box, Typography, Stack } from "@mui/material";
import { facilities } from "../../lib/mockData";

export default function FacilityHighlight() {
  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 6, textAlign: "center" }}>
        Cơ sở vật chất
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} flexWrap="wrap" justifyContent="center">
        {facilities.map(facility => (
          <Box key={facility.id} sx={{ width: 300, borderRadius: 2, overflow: "hidden", boxShadow: 1 }}>
            <img src={facility.image} alt={facility.name} />
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">{facility.name}</Typography>
              <Typography variant="body2">{facility.description}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
