import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import MapCard from '../components/MapCard';
import ContactIntro from '../components/ContactIntro';
import { Grid } from '@mui/material';

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>{t('nav.contact')}</Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactIntro />

            <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>{t('contact.social.title')}</Typography>
              <SocialLinks
                github="https://github.com/nhatquang-ho"
                linkedin="https://www.linkedin.com/in/nhatquangho"
                malt="https://www.malt.fr/profile/nhatquangho"
                website="https://nhatquang-ho.github.io/FrontEnd-VueJs-Simple-CV/"
              />
            </Paper>

            <Box sx={{ mt: 3 }}>
              <MapCard />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mb: 2 }}>{t('contact.form.title')}</Typography>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </motion.div>
  );
}