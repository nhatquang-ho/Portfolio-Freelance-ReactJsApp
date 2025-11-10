import React, { useState } from 'react'
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Grid,
  useTheme,
  Snackbar,
  Alert,
  Link,
} from '@mui/material'
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const inputStyles = {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.mode === 'dark' ? '#404040' : undefined,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.mode === 'dark' ? '#525252' : undefined,
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.mode === 'dark' ? '#a3a3a3' : undefined,
    },
  } as const;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 3,
          backgroundColor: theme.palette.mode === 'dark' ? '#1a1a1a' : '#ffffff',
          border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#e5e5e5'}`,
          width: '100%'
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label={t('contact.form.name')} variant="outlined" required sx={inputStyles} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={t('contact.form.email')}
                variant="outlined"
                type="email"
                required
                sx={inputStyles}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth label={t('contact.form.subject')} variant="outlined" required sx={inputStyles} />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t('contact.form.message')}
                variant="outlined"
                multiline
                rows={4}
                required
                sx={inputStyles}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  height: 56,
                  background: theme.palette.mode === 'dark'
                    ? `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`
                    : `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
                }}
              >
                {t('contact.form.send')}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={10000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="info" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          <Box sx={{ mb: 1 }}>{t('contact.form.demo_message')}</Box>
          <Link 
            href="mailto:nhatquang.ho.96@gmail.com"
            sx={{ 
              color: 'inherit', 
              textDecoration: 'underline',
              fontWeight: 'bold'
            }}
          >
            nhatquang.ho.96@gmail.com
          </Link>
          <Box sx={{ mt: 1, fontSize: '0.8em', opacity: 0.8 }}>
            {t('contact.form.demo_note')}
          </Box>
        </Alert>
      </Snackbar>
    </motion.div>
  )
};

export default ContactForm;