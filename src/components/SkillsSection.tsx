import React from 'react';
import { Box, Chip, Paper, Typography, Container, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const SkillsSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const skills: Skill[] = [
    { name: 'React.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 70, category: 'frontend' },
    { name: 'Java', level: 90, category: 'backend' },
    { name: 'Spring Boot', level: 90, category: 'backend' },
    { name: 'Angular', level: 75, category: 'frontend' },
    { name: 'SQL/NoSQL', level: 80, category: 'database' },
    { name: 'CI/CD', level: 75, category: 'devOps' },
    { name: 'C#', level: 80, category: 'backend' },
    { name: 'Python', level: 80, category: 'backend' },
    { name: 'SIG', level: 70, category: 'carto' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <Container maxWidth="lg">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <Paper elevation={3} sx={{ 
          p: 4, 
          mt: 4,
          background: theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff',
          border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#e5e5e5'}`,
        }}>
          <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
            {t('skills.title')}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            {['frontend', 'backend', 'database', 'devOps'].map((category) => (
              <Chip
                key={category}
                label={t(`skills.categories.${category}`)}
                color="primary"
                variant={theme.palette.mode === 'dark' ? 'filled' : 'outlined'}
                sx={{
                  borderColor: theme.palette.mode === 'dark' ? '#404040' : undefined,
                  backgroundColor: theme.palette.mode === 'dark' ? '#262626' : undefined,
                }}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <Box sx={{ mb: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {skill.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ flex: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={skill.level}
                        sx={{
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 5,
                            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
                          },
                        }}
                      />
                    </Box>
                    <Typography variant="body2" color="textSecondary">
                      {skill.level}%
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default SkillsSection;