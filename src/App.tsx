import React, { useMemo, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, AppBar, Toolbar, Typography, IconButton, Container, Select, MenuItem, Button } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Post from './pages/Post'
import Demos from './pages/Demos'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const { t, i18n } = useTranslation()
  const theme = useMemo(() => createTheme({
    palette: { 
      mode, 
      primary: { 
        main: '#4f46e5',
        light: '#6366f1',
        dark: '#4338ca' 
      },
      background: {
        default: mode === 'dark' ? '#0a0a0a' : '#ffffff',
        paper: mode === 'dark' ? '#1a1a1a' : '#ffffff'
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#000000',
        secondary: mode === 'dark' ? '#a3a3a3' : '#666666'
      }
    },
    typography: { 
      fontFamily: ['Inter', 'Poppins', 'Roboto', 'sans-serif'].join(','),
      h3: {
        fontWeight: 700,
        color: mode === 'dark' ? '#ffffff' : '#000000'
      },
      h4: {
        fontWeight: 700,
        color: mode === 'dark' ? '#ffffff' : '#000000'
      },
      h5: {
        color: mode === 'dark' ? '#ffffff' : '#000000'
      }
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'dark' ? '#1a1a1a' : '#ffffff',
            backgroundImage: 'none'
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: mode === 'dark' ? '#404040' : '#e5e5e5'
              },
              '&:hover fieldset': {
                borderColor: mode === 'dark' ? '#525252' : '#d4d4d4'
              }
            }
          }
        }
      }
    }
  }), [mode])

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', color: 'text.primary', minHeight: '100vh' }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Container>
            <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component={Link} to="/" variant="h6" sx={{ textDecoration: 'none', color: 'inherit' }}>
                {t('nav.portfolio')}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Button component={Link} to="/projects" color="inherit" size="small">{t('nav.projects')}</Button>
                <Button component={Link} to="/demos" color="inherit" size="small">{t('nav.demos')}</Button>
                <Button component={Link} to="/blog" color="inherit" size="small">{t('nav.blog')}</Button>
                <Button component={Link} to="/contact" color="inherit" size="small">{t('nav.contact')}</Button>

                <Box sx={{ borderLeft: 1, borderColor: 'divider', pl: 2, display: 'flex', gap: 1 }}>
                  <Select size="small" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)} sx={{'.MuiSelect-select': {py: 0.5, px: 1}}}>
                    <MenuItem value="fr">FR</MenuItem>
                    <MenuItem value="en">EN</MenuItem>
                  </Select>

                  <IconButton onClick={() => setMode(prev => prev === 'light' ? 'dark' : 'light')} color="inherit" size="small">
                    {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                  </IconButton>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Container sx={{ py: 6 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/demos" element={<Demos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/posts/:slug" element={<Post />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
