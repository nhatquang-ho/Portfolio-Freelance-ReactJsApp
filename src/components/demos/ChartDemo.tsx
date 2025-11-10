import React from 'react';
import { Paper, Typography } from '@mui/material';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useTranslation } from 'react-i18next';

const data = [
  { name: 'Jan', views: 120 },
  { name: 'Feb', views: 200 },
  { name: 'Mar', views: 150 },
  { name: 'Apr', views: 250 },
  { name: 'May', views: 300 },
];

export default function ChartDemo() {
  const { t } = useTranslation();
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{t('demos.chart.title')}</Typography>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="#4f46e5" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
}
