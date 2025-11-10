import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type Project = {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  image?: string;
};

const getProjects = (t: any): Project[] => {
  const projectsList = t('projects.list', { returnObjects: true }) as Array<{
    title: string;
    description: string;
    tags: string[];
  }>;

  return projectsList.map((p, index) => ({
    ...p,
    link: '#',
    image: `/Portfolio-Freelance-ReactJsApp/assets/project-${index + 1}.png`,
  }));
};

export default function Projects() {
  const { t } = useTranslation();
  const projects = getProjects(t);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
          {t('nav.projects')}
        </Typography>

        <Grid container spacing={4}>
          {projects.map((p, index) => (
            <Grid item xs={12} md={6} key={p.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card
                  component={motion.div}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                  }}
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  {p.image && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={p.image}
                      alt={p.title}
                      sx={{
                        objectFit: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  )}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {p.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {p.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {(p.tags || []).map((t) => (
                        <Chip
                          key={t}
                          label={t}
                          size="small"
                          sx={{
                            background: (theme) => 
                              theme.palette.mode === 'dark' 
                                ? 'rgba(255,255,255,0.08)'
                                : 'rgba(0,0,0,0.08)'
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
}