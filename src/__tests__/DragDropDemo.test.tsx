import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import '../i18n';
import '../test/setupTests';
import DragDropDemo from '../components/demos/DragDropDemo';

test('renders drag & drop demo and tasks', () => {
  render(<DragDropDemo />);
  expect(screen.getByText(/Drag & Drop \(démo\)|Drag & Drop \(demo\)/)).toBeDefined();
  expect(screen.getByText(/Tâche A|Task A/)).toBeDefined();
});
