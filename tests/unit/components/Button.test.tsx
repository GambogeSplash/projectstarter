import { render, screen } from '@testing-library/react';
import { Button } from '@/design-system/components/Button';
import { describe, it, expect } from 'vitest';
import '@testing-library/dom';

describe('Button', () => {
    it('renders correctly', () => {
        render(<Button>Click me</Button>);
        expect(screen.getByRole('button')).toBeDefined();
        expect(screen.getByText('Click me')).toBeDefined();
    });

    it('applies variant classes', () => {
        render(<Button variant="secondary">Secondary</Button>);
        const button = screen.getByRole('button');
        expect(button.className).toContain('border-white/10');
    });
});
