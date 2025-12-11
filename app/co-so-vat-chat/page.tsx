import { Box, Typography, Stack } from "@mui/material";
import { facilities } from "../../lib/mockData";

export default function CoSoVatChatPage() {
  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 6, textAlign: "center" }}>
        Cơ sở vật chất
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4} flexWrap="wrap" justifyContent="center">
        {facilities.map(f => (
          <Box key={f.id} sx={{ width: 300, borderRadius: 2, boxShadow: 1, overflow: "hidden", bgcolor: "#fff" }}>
            <img src={f.image} alt={f.name} />
            <Box sx={{ p: 2 }}>
              <Typography variant="h6">{f.name}</Typography>
              <Typography variant="body2">{f.description}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
