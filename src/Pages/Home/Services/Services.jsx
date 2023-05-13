import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-5">
            <div className="text-center">
                <h1 className="text-3xl text-orange-500 font-semibold">Services</h1>
                <h1 className="text-6xl font-bold">Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 lx:grid-cols-3 gap-3 mt-6 mb-8">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;