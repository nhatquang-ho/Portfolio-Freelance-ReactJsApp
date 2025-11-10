import React from 'react'
import { Typography, Box, Paper, useTheme } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useTranslation } from 'react-i18next'

export default function ContactIntro() {
  const theme = useTheme()
  const { t } = useTranslation()
  
  const contactInfo = [
    { icon: <EmailIcon />, title: t('contact.email'), value: 'nhatquang.ho.96@gmail.com' },
    { icon: <PhoneIcon />, title: t('contact.phone'), value: '+33 6 02 29 08 16' },
    { icon: <LocationOnIcon />, title: t('contact.location'), value: 'Houilles, France' },
  ]

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>{t('contact.get_in_touch')}</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>{t('contact.reach_me')}</Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {contactInfo.map((info) => (
          <Paper
            key={info.title}
            elevation={1}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              backgroundColor: theme.palette.mode === 'dark' ? '#262626' : 'rgba(255,255,255,0.9)',
              border: `1px solid ${theme.palette.mode === 'dark' ? '#333333' : '#e5e5e5'}`,
            }}
          >
            <Box sx={{ color: theme.palette.primary.main, display: 'flex', alignItems: 'center' }}>{info.icon}</Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">{info.title}</Typography>
              <Typography variant="body1">{info.value}</Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </div>
  )
}
