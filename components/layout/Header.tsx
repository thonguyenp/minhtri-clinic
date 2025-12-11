"use client";

import { AppBar, Toolbar, Box, Typography, Button, useScrollTrigger } from "@mui/material";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import BookingButton from "../common/BookingButton";

const navItems = [
  { title: "Giới thiệu", href: "/gioi-thieu" },
  { title: "Tầm nhìn & Sứ mệnh", href: "/tam-nhin-su-menh" },
  { title: "Dịch vụ", href: "/dich-vu" },
  { title: "Đội ngũ bác sĩ", href: "/doi-ngu-bac-si" },
  { title: "Cơ sở vật chất", href: "/co-so-vat-chat" },
  { title: "Đặt lịch khám", href: "/dat-lich-kham" },
  { title: "Liên hệ", href: "/lien-he" }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={trigger ? 4 : 0}
        sx={{
          transition: "0.3s",
          backgroundColor: trigger ? "#fff" : "transparent",
          color: trigger ? "#263238" : "#fff"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif" }}>
            Minh Trí Clinic
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map(item => (
              <Button key={item.title} href={item.href} color="inherit">
                {item.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button onClick={() => setMobileOpen(true)}>Menu</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} navItems={navItems} />
      <BookingButton />
    </>
  );
}
