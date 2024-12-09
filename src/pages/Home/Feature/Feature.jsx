import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const Feature = () => {

    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => {
                console.log("Fetched data:", data);
                setFeatures(data);
            })
    }, []);
    return (
        <div className="my-12">
            <div className="text-center space-y-6">
                <h3 className="text-2xl font-semibold">Features</h3>
                <h2 className="text-4xl">Why Choose Study Sync</h2>
                <p className="text-lg px-20">At StudySync, we believe in the power of collaboration. Our platform offers a suite of features designed to make group study easy, engaging, and effective. From creating assignments to peer grading and real-time communication, we provide everything you need to achieve your academic goals—together.</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-6">
                {
                    features.map(feature => <FeatureCard key={feature.id} feature={feature}
                    ></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;