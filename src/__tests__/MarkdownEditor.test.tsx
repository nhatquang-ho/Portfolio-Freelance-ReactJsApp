import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import '../i18n';
import '../test/setupTests';
import MarkdownEditor from '../components/demos/MarkdownEditor';

test('renders markdown editor and preview', () => {
  render(<MarkdownEditor />);
  expect(screen.getByText(/Éditeur Markdown/)).toBeDefined();
  expect(screen.getByText(/Aperçu/)).toBeDefined();
});
