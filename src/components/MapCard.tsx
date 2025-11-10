import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

type Props = {
  lat?: number;
  lon?: number;
  zoom?: number;
};

export default function MapCard({ lat = 48.9261, lon = 2.1892, zoom = 12 }: Props) {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.05}%2C${lat - 0.03}%2C${lon + 0.05}%2C${lat + 0.03}&layer=mapnik&marker=${lat}%2C${lon}`;

  const { t } = useTranslation();
  return (
    <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t('map.title')}
      </Typography>
      <Box sx={{ width: '100%', height: 300, borderRadius: 1, overflow: 'hidden' }}>
        <iframe
          title="map"
          width="100%"
          height="300"
          src={src}
          style={{ border: 0 }}
        />
      </Box>
    </Paper>
  );
}
