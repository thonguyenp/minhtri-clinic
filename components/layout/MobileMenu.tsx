'use client';

import { Drawer, List, ListItem, ListItemButton, ListItemText, Box } from "@mui/material";
import Link from 'next/link';  // Khuyến nghị dùng Next.js Link cho navigation tốt hơn

interface Props {
  open: boolean;
  onClose: () => void;
  navItems: { title: string; href: string }[];
}

export default function MobileMenu({ open, onClose, navItems }: Props) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} PaperProps={{ sx: { width: '80%' } }}>
      <Box sx={{ width: '100%' }} role="presentation">
        <List>
          {navItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                component="a"
                href={item.href}
                onClick={onClose}  // Đóng menu khi click
                sx={{
                  py: 2,
                  px: 3,
                  '&:hover': {
                    bgcolor: '#e0f2f1',
                  },
                }}
              >
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: '1.1rem',
                    fontWeight: 'medium',
                    color: '#263238',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}