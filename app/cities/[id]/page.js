'use client'

import {useEffect, useState} from 'react';
import {useMyContext} from "@/app/context/myContext";
import {useParams} from "next/navigation";
import api from "@/lib/api";
import MapComponent from "@/app/components/MapComponent";

const CityPage = () => {
    const {id} = useParams();  // Dynamic city ID from URL
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(true);
    const {citiesData, setCitiesData} = useMyContext();

    useEffect(() => {
        if (citiesData.length === 0) {
            api.get('/cities').then(response => {
                setCitiesData(response.data);
            })
        }
    }, [citiesData]);


    useEffect(() => {
        if (!id) return;

        setCity(citiesData.find(e => e.name === id.replace(/%20/g, ' ')))

    }, [id, citiesData]);


    return (
        <div className="h-screen bg-black mx-auto text-white">
            {citiesData.length > 0 && (<MapComponent cities={citiesData} currentCity={city} />)}
        </div>
    );
};

export default CityPage;
