import Globe from "globe.gl";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

const MapComponent = ({cities, currentCity}) => {
    const globeRef = useRef(null);
    const [selectedCity, setSelectedCity] = useState(currentCity);

    useEffect(() => {
        if (!globeRef.current && currentCity) {
            globeRef.current = Globe()(document.getElementById("globe"))
                .globeImageUrl("//unpkg.com/three-globe/example/img/earth-blue-marble.jpg")
                .bumpImageUrl("//unpkg.com/three-globe/example/img/earth-topology.png")
                .backgroundColor("#000")
                .pointOfView({
                    lat: +currentCity.latitude,
                    lng: +currentCity.longitude,
                    altitude: window.innerWidth > 768 ? 1 : 2
                });

            // Add city markers
            globeRef.current.labelsData(cities)
                .labelLat((d) => Number(d.latitude))
                .labelLng((d) => Number(d.longitude))
                .labelText((d) => d.name)
                .labelSize(2)
                .labelColor(() => "white")
                .onLabelClick((city) => handleCityClick(city)); // Handle click
        }
    }, [cities, currentCity]);

    useEffect(() => {
        if (currentCity) {
            setTimeout(() => {
                setSelectedCity(currentCity)
            }, 1000)
        }
    }, [currentCity])

    const handleCityClick = (city) => {
        setSelectedCity(city); // Set the selected city

        // Change the point of view of the globe to the selected city's latitude and longitude
        globeRef.current.pointOfView({
            lat: Number(city.latitude),
            lng: Number(city.longitude),
            altitude: window.innerWidth > 768 ? 1 : 2
        }, 1500);
    };

    const handleNext = () => {
        const currentIndex = cities.findIndex(e => e.name === selectedCity.name);
        if (currentIndex === cities.length - 1) {
            setSelectedCity(cities[0]);
            globeRef.current.pointOfView({
                lat: Number(cities[0].latitude),
                lng: Number(cities[0].longitude),
                altitude: window.innerWidth > 768 ? 1 : 2
            }, 1500);
        } else {
            setSelectedCity(cities[currentIndex + 1]);
            globeRef.current.pointOfView({
                lat: Number(cities[currentIndex + 1].latitude),
                lng: Number(cities[currentIndex + 1].longitude),
                altitude: window.innerWidth > 768 ? 1 : 2
            }, 1500);
        }
    }

    const handleBack = () => {
        const currentIndex = cities.findIndex(e => e.name === selectedCity.name);
        if (currentIndex === 0) {
            setSelectedCity(cities[cities.length - 1]);
            globeRef.current.pointOfView({
                lat: Number(cities[cities.length - 1].latitude),
                lng: Number(cities[cities.length - 1].longitude),
                altitude: window.innerWidth > 768 ? 1 : 2
            }, 1500);
        } else {
            setSelectedCity(cities[currentIndex - 1]);
            globeRef.current.pointOfView({
                lat: Number(cities[currentIndex - 1].latitude),
                lng: Number(cities[currentIndex - 1].longitude),
                altitude: window.innerWidth > 768 ? 1 : 2
            }, 1500);
        }
    }

    return (
        <div className="relative">
            <div id="globe" style={{width: "100vw", height: "120vh"}}/>

            {/* Popup for City Details */}
            {selectedCity && (
                <motion.div
                    className="absolute top-20 w-full rounded-lg text-black flex justify-center items-center md:p-10 p-5"
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                >
                    <div
                        className={'bg-gray-100 md:w-1/2 min-h-[300px] md:min-h-[100px] w-[90%] bg-opacity-60 flex flex-col justify-center items-center md:p-5 p-2 rounded-xl relative text-sm md:text-md'}>
                        <img src="/images/back.png" alt="back"
                             className={'absolute md:w-16 w-10 object-contain md:left-5 left-2 top-1/2 transform -translate-y-1/2 cursor-pointer'}
                             onClick={handleBack}
                        />
                        <h2 className="md:text-xl text-md font-bold">{selectedCity.name}</h2>

                        <p><strong>Country:</strong> {selectedCity.country}</p>
                        <p><strong>Population:</strong> {Number(selectedCity.population).toLocaleString()}</p>
                        <div className={'md:grid md:grid-cols-2 mt-5 md:gap-5 gap-2'}>
                            <h3 className="font-semibold md:text-right text-center">Landmarks:</h3>
                            <ul>
                                {selectedCity.landmarks?.map((landmark, index) => (
                                    <li key={index}>• {landmark}</li>
                                ))}
                            </ul>
                        </div>
                        <img src="/images/next.png" alt="next"
                             className={'absolute md:w-16 w-10 object-contain md:right-5 right-2 top-1/2 transform -translate-y-1/2 cursor-pointer'}
                             onClick={handleNext}/>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default MapComponent;
