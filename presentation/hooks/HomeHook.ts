import { useEffect, useState } from "react";

export const useHomeHook = () => {
    const [testData, setTestData] = useState<string>('Hello, World!');

    useEffect(() => {
        // Simulate fetching data or performing some side effect
        const timer = setTimeout(() => {
            setTestData('Data fetched successfully!');
        }, 2000);

        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);
    
    const handlePress = () => {
        console.log('Button pressed!');
    };

    return {
        testData,
        handlePress,
    };
}