import { render, screen } from '@testing-library/react';
import PageTransition from '../components/PageTransition';
import { usePathname } from 'next/navigation';

// Mock the `usePathname` hook to simulate pathname changes
jest.mock('next/navigation', () => ({
    usePathname: jest.fn(),
}));

describe('PageTransition Component', () => {

    test('renders the children correctly', () => {
        usePathname.mockReturnValue('/home');

        render(
            <PageTransition>
                <div>Test content</div>
            </PageTransition>
        );

        // Check if the children content is rendered
        expect(screen.getByText('Test content')).toBeInTheDocument();
    });
});
