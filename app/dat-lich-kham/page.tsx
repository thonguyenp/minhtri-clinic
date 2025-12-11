'use client';

import { Box, Typography, TextField, Button, Stack } from '@mui/material';  // ← Thêm Stack vào đây
import { DatePicker } from '@mui/x-date-pickers/DatePicker';               // ← Dùng package mới
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';         // ← Adapter mới
import { useState } from 'react';

export default function DatLichKhamPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState<Date | null>(null);

  const handleSubmit = () => {
    alert(`Cảm ơn ${name}, lịch khám của bạn đã được đặt vào ${date?.toLocaleDateString('vi-VN') || 'ngày chưa chọn'}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ py: { xs: 6, md: 10 }, px: 2, maxWidth: 600, mx: 'auto' }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Playfair Display', serif",
            mb: 5,
            textAlign: 'center',
            color: '#00796b',
          }}
        >
          Đặt lịch khám
        </Typography>

        <Stack spacing={3}>
          <TextField
            label="Họ và tên"
            fullWidth
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Số điện thoại"
            fullWidth
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <DatePicker
            label="Chọn ngày khám"
            value={date}
            onChange={(newDate) => setDate(newDate)}
            slotProps={{
              textField: {
                fullWidth: true,
                required: true,
                helperText: 'Phòng khám làm việc từ Thứ 2 đến Chủ Nhật',
              },
            }}
          />
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
            sx={{
              bgcolor: '#ffd54f',
              color: '#00796b',
              fontWeight: 'bold',
              py: 1.8,
              borderRadius: '12px',
              fontSize: '1.1rem',
              '&:hover': {
                bgcolor: '#ffb400',
                boxShadow: '0 6px 20px rgba(255, 213, 79, 0.4)',
              },
            }}
          >
            Xác nhận đặt lịch
          </Button>
        </Stack>
      </Box>
    </LocalizationProvider>
  );
}