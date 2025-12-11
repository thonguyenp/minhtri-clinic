// app/dich-vu/[slug]/page.tsx
import { Box, Typography, Button } from '@mui/material';
import { notFound } from 'next/navigation';
import { services } from '@/lib/mockData'; // dùng alias @ nếu có, hoặc ../../../lib/mockData

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>; // params là Promise
}) {
  const { slug } = await params; // ← BẮT BUỘC await ở đây

  // Tìm dịch vụ theo slug (giả sử mockData dùng slug làm key)
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound(); // 404 chuẩn Next.js
  }

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontFamily: "'Playfair Display', serif",
          mb: 4,
          color: '#00796b',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {service.title}
      </Typography>

      <Box
        component="img"
        src={service.image || 'https://source.unsplash.com/random/1200x600/?medical'}
        alt={service.title}
        sx={{
          width: '100%',
          height: { xs: '250px', md: '500px' },
          objectFit: 'cover',
          borderRadius: '16px',
          mb: 5,
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}
      />

      <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
        {service.description}
      </Typography>

      {service.price && (
        <Typography variant="h5" sx={{ mb: 4, color: '#00796b', fontWeight: 'bold' }}>
          Giá tham khảo: {service.price.toLocaleString('vi-VN')} VND
        </Typography>
      )}

      <Button
        variant="contained"
        size="large"
        href="/dat-lich-kham"
        sx={{
          bgcolor: '#ffd54f',
          color: '#00796b',
          fontWeight: 'bold',
          px: 5,
          py: 1.8,
          borderRadius: '12px',
          fontSize: '1.1rem',
          boxShadow: '0 4px 16px rgba(255, 213, 79, 0.4)',
          '&:hover': {
            bgcolor: '#ffb400',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 24px rgba(255, 213, 79, 0.6)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        Đặt lịch khám dịch vụ này
      </Button>
    </Box>
  );
}

// Tốt cho SEO: pre-generate các trang static nếu dùng mock data
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}