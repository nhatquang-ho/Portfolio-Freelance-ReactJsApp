import React, { useState, useEffect } from 'react';
import { Box, Paper, TextField, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useTranslation } from 'react-i18next';

// Ajoutez une configuration personnalisée pour remark-gfm
const remarkGfmOptions = {
  singleTilde: false,
  tableCellPadding: true,
  tablePipeAlign: true
};

export default function MarkdownEditor() {
  const { t } = useTranslation();
  const [text, setText] = useState<string>(`## ${t('demos.markdown_editor.placeholder')}`);

  useEffect(() => {
    const saved = localStorage.getItem('md-demo');
    if (saved) setText(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('md-demo', text);
  }, [text]);

  return (
    <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
      <Paper sx={{ p: 2, flex: 1 }} elevation={3}>
        <Typography variant="h6" sx={{ mb: 1 }}>{t('demos.markdown_editor.title')}</Typography>
        <TextField
          multiline
          minRows={12}
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
      </Paper>

      <Paper sx={{ p: 2, flex: 1 }} elevation={3}>
        <Typography variant="h6" sx={{ mb: 1 }}>{t('demos.markdown_editor.preview')}</Typography>
        <Box sx={{ overflow: 'auto' }}>
          <ReactMarkdown remarkPlugins={[[remarkGfm, remarkGfmOptions]]}>{text}</ReactMarkdown>
        </Box>
      </Paper>
    </Box>
  );
}
