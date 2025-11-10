import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface TimelineEntry {
  year: string;
  title: string;
  desc: string;
}



export default function Timeline() {
  const { t } = useTranslation();
  const experiences = t('timeline.experiences', { returnObjects: true }) as TimelineEntry[];

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>{t('timeline.title')}</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {experiences.map((e: TimelineEntry, i: number) => (
          <motion.div key={e.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
            <Paper sx={{ p: 2, display: 'flex', gap: 2, alignItems: 'center' }} elevation={2}>
              <Box sx={{ minWidth: 80 }}>
                <Typography variant="h6">{e.year}</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{e.title}</Typography>
                <Typography variant="body2">{e.desc}</Typography>
              </Box>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
