import { useState, useEffect } from 'react';
import api from '@/lib/api'; // Import the Axios instance

const useCityData = (cityId) => {
    const [cityData, setCityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCityData = async () => {
            try {
                const response = await api.get(`/cities/${cityId}`);
                setCityData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Something went wrong');
                setLoading(false);
            }
        };

        fetchCityData();
    }, [cityId]);

    return { cityData, loading, error };
};

export default useCityData;
