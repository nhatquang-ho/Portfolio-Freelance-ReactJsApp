import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import '../i18n';
import '../test/setupTests';
import ChartDemo from '../components/demos/ChartDemo';

test('renders chart demo title', () => {
  render(<ChartDemo />);
  expect(screen.getByText(/Visualisation de données|Data Visualization/)).toBeDefined();
});
