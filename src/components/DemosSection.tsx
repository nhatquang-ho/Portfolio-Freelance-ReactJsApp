import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import MarkdownEditor from './demos/MarkdownEditor';
import ChartDemo from './demos/ChartDemo';
import DragDropDemo from './demos/DragDropDemo';

export default function DemosSection() {
  const { t } = useTranslation();
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 'bold' }}>{t('demos.title')}</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <MarkdownEditor />
        </Grid>

        <Grid item xs={12} md={6}>
          <ChartDemo />
        </Grid>

        <Grid item xs={12} md={6}>
          <DragDropDemo />
        </Grid>
      </Grid>
    </Container>
  );
}
