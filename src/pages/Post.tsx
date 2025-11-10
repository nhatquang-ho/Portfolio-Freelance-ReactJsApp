import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const remarkGfmOptions = {
  singleTilde: false,
  tableCellPadding: true,
  tablePipeAlign: true
};

export default function Post() {
  const { t } = useTranslation();
  const { slug } = useParams();
  const modules = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' });
  const key = Object.keys(modules).find((k) => k.includes(slug as string));
  const content = key ? (modules[key] as string) : `# ${t('blog.not_found')}`;

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 3 }}>{slug}</Typography>
      <ReactMarkdown remarkPlugins={[[remarkGfm, remarkGfmOptions]]}>{content}</ReactMarkdown>
    </Container>
  );
}
