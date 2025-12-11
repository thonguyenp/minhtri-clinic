import { Box, Skeleton, Stack } from "@mui/material";

export default function SkeletonCard() {
  return (
    <Box sx={{ width: 300, borderRadius: 2, boxShadow: 1, overflow: "hidden", bgcolor: "#fff", p: 2 }}>
      <Skeleton variant="rectangular" height={140} sx={{ mb: 2 }} />
      <Stack spacing={1}>
        <Skeleton variant="text" height={30} />
        <Skeleton variant="text" height={20} width="80%" />
        <Skeleton variant="rectangular" height={36} sx={{ borderRadius: 2, mt: 1 }} />
      </Stack>
    </Box>
  );
}
