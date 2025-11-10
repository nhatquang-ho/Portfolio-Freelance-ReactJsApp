import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import '../i18n';
import '../test/setupTests';
import ContactForm from '../components/ContactForm';

test('renders contact form fields and submit button', () => {
  render(<ContactForm />);

  // Labels come from i18n (fr/en)
  expect(screen.getByLabelText(/Nom|Name/)).toBeDefined();
  expect(screen.getByLabelText(/Email/)).toBeDefined();
  expect(screen.getByLabelText(/Sujet|Subject/)).toBeDefined();
  expect(screen.getByLabelText(/Message/)).toBeDefined();
  expect(screen.getByRole('button')).toBeDefined();
});
