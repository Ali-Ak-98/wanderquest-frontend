// __tests__/VideoBackground.test.js
import { render, screen } from '@testing-library/react';
import VideoBackground from '../components/VideoBackground';

describe('VideoBackground Component', () => {

    test('renders the overlay div', () => {
        render(<VideoBackground />);

        // Check if the overlay div is rendered
        const overlayDiv = screen.getByTestId('video-overlay');
        expect(overlayDiv).toBeInTheDocument();
    });
});
