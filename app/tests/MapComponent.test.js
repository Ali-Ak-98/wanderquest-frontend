import { render, screen, fireEvent, act } from '@testing-library/react';
import Globe from 'globe.gl';
import MapComponent from '../components/MapComponent';

jest.mock('globe.gl', () => {
    return jest.fn().mockImplementation(() => {
        const instance = {
            globeImageUrl: jest.fn().mockReturnThis(),
            bumpImageUrl: jest.fn().mockReturnThis(),
            backgroundColor: jest.fn().mockReturnThis(),
            labelsData: jest.fn().mockReturnThis(),
            labelLat: jest.fn().mockReturnThis(),
            labelLng: jest.fn().mockReturnThis(),
            labelText: jest.fn().mockReturnThis(),
            labelSize: jest.fn().mockReturnThis(),
            labelColor: jest.fn().mockReturnThis(),
            onLabelClick: jest.fn().mockReturnThis(),
            pointOfView: jest.fn().mockReturnThis(),
        };
        return () => instance;
    });
});

// Sample test data
const cities = [
    { name: 'City1', latitude: '1', longitude: '1', country: 'Country1', population: '1000000', landmarks: ['Landmark1'] },
    { name: 'City2', latitude: '2', longitude: '2', country: 'Country2', population: '2000000', landmarks: ['Landmark2'] },
];

describe('MapComponent', () => {
    const getGlobeInstance = () => Globe.mock.results[0].value();

    beforeEach(() => {
        jest.clearAllMocks();
        window.innerWidth = 1024;
    });

    it('initializes globe with correct configuration', () => {
        const currentCity = cities[0];
        render(<MapComponent cities={cities} currentCity={currentCity} />);

        const globe = getGlobeInstance();
        expect(globe.globeImageUrl).toHaveBeenCalledWith('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
        expect(globe.pointOfView).toHaveBeenCalledWith({
            lat: 1,
            lng: 1,
            altitude: 1
        });
    });

    it('updates selectedCity after currentCity changes', async () => {
        jest.useFakeTimers();
        const { rerender } = render(<MapComponent cities={cities} currentCity={null} />);

        act(() => {
            rerender(<MapComponent cities={cities} currentCity={cities[1]} />);
        });
        jest.advanceTimersByTime(1000);

        await screen.findByText('City2');
        jest.useRealTimers();
    });

    it('handles city navigation via buttons', () => {
        render(<MapComponent cities={cities} currentCity={cities[0]} />);
        const globe = getGlobeInstance();

        // Test next button
        fireEvent.click(screen.getByAltText('next'));
        expect(screen.getByText('City2')).toBeInTheDocument();
        expect(globe.pointOfView).toHaveBeenCalledWith(expect.objectContaining({
            lat: 2,
            lng: 2
        }), 1500);

        // Test wrap-around
        fireEvent.click(screen.getByAltText('next'));
        expect(screen.getByText('City1')).toBeInTheDocument();

        // Test back button
        fireEvent.click(screen.getByAltText('back'));
        expect(screen.getByText('City2')).toBeInTheDocument();
    });

    it('adjusts altitude for mobile view', () => {
        window.innerWidth = 500;
        render(<MapComponent cities={cities} currentCity={cities[0]} />);

        expect(getGlobeInstance().pointOfView).toHaveBeenCalledWith(
            expect.objectContaining({ altitude: 2 })
        );
    });
});
