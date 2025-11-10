import React from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useTranslation } from 'react-i18next';

const posts = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });

export default function Blog() {
  const { t } = useTranslation();
  const keys = Object.keys(posts).map((k) => k.split('/').pop());

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>{t('blog.title')}</Typography>
      <List>
        {keys.map((k) => (
          <ListItem key={k} component="a" href={`/Portfolio-Freelance-ReactJsApp/posts/${k?.replace('.md','')}`}>
            <ListItemText primary={k} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
