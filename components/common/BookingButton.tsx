"use client";

import { Fab, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function BookingButton() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!isMobile) return null;

  return (
    <Fab
      variant="extended"
      color="secondary"
      href="/dat-lich-kham"
      sx={{
        position: "fixed",
        bottom: 16,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 1000
      }}
    >
      Đặt lịch khám
    </Fab>
  );
}
