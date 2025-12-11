"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Stack, TextField, FormControlLabel, Checkbox, Pagination } from "@mui/material";
import { services } from "../../lib/mockData";
import ServiceCard from "../../components/services/ServiceCard";
import SkeletonCard from "../../components/common/SkeletonCard";
import { filterServices, paginateServices, totalPages } from "../../lib/utils";

export default function DichVuPage() {
  const [search, setSearch] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const perPage = 9;
  const [loading, setLoading] = useState(true);
  const [filteredServices, setFilteredServices] = useState(services);

  const specialties = Array.from(new Set(services.map(s => s.specialty)));

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      let result = filterServices(services, search);
      if (selectedSpecialties.length) {
        result = result.filter(s => selectedSpecialties.includes(s.specialty));
      }
      setFilteredServices(result);
      setPage(1);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [search, selectedSpecialties]);

  const displayedServices = paginateServices(filteredServices, page, perPage);
  const pages = totalPages(filteredServices.length, perPage);

  return (
    <Box sx={{ py: 10, px: 2 }}>
      <Typography variant="h3" sx={{ fontFamily: "Playfair Display, serif", mb: 6, textAlign: "center" }}>
        Dịch vụ
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Box sx={{ width: { xs: "100%", md: "30%" } }}>
          <TextField
            fullWidth
            label="Tìm kiếm dịch vụ"
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ mb: 2 }}
          />
          {specialties.map(spec => (
            <FormControlLabel
              key={spec}
              control={
                <Checkbox
                  checked={selectedSpecialties.includes(spec)}
                  onChange={e => {
                    if (e.target.checked) {
                      setSelectedSpecialties([...selectedSpecialties, spec]);
                    } else {
                      setSelectedSpecialties(selectedSpecialties.filter(s => s !== spec));
                    }
                  }}
                />
              }
              label={spec}
            />
          ))}
        </Box>
        <Box sx={{ width: { xs: "100%", md: "70%" } }}>
          <Stack direction="row" spacing={3} flexWrap="wrap" justifyContent="center">
            {loading
              ? Array.from({ length: perPage }).map((_, i) => <SkeletonCard key={i} />)
              : displayedServices.map(s => <ServiceCard key={s.id} service={s} />)}
          </Stack>
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Pagination
              count={pages}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="primary"
              sx={{ "& .MuiPaginationItem-root": { borderRadius: 2 } }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
