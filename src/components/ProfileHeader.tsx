import React from 'react';
import { Box, Avatar, Typography, Paper, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import QRCode from 'qrcode.react';
import { useTheme } from '@mui/material/styles';

const ProfileHeader = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Paper 
          elevation={3}
          sx={{
            p: 4,
            mt: 4,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
            background: theme.palette.mode === 'dark' 
              ? 'linear-gradient(145deg, #1a1a1a 0%, #262626 100%)'
              : 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
            border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#e5e5e5'}`,
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Avatar
              sx={{
                width: 200,
                height: 200,
                border: `4px solid ${theme.palette.mode === 'dark' ? '#333333' : '#ffffff'}`,
                boxShadow: '0 0 20px rgba(0,0,0,0.1)',
              }}
              alt={t('profile.name')}
              src="/Portfolio-Freelance-ReactJsApp/assets/profile-photo.jpg"
            />
          </motion.div>

          <Box sx={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                {t('profile.name')}
              </Typography>
              <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
                {t('profile.title')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                {t('profile.description')}
              </Typography>
            </motion.div>
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Paper
                elevation={2}
                sx={{
                  p: 2,
                  background: theme.palette.mode === 'dark' ? '#262626' : '#ffffff',
                  border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#e5e5e5'}`,
                }}
              >
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {t('profile.scan_cv')}
                </Typography>
                <QRCode
                  value="https://nhatquang-ho.github.io/FrontEnd-VueJs-Simple-CV/"
                  size={120}
                  level="H"
                  includeMargin={true}
                  bgColor={theme.palette.mode === 'dark' ? '#262626' : '#ffffff'}
                  fgColor={theme.palette.mode === 'dark' ? '#ffffff' : '#000000'}
                />
              </Paper>
            </motion.div>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default ProfileHeader;