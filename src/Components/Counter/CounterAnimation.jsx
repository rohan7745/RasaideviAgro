import React, { useRef, useEffect, useState } from 'react';
import './Counter.css';

const CounterAnimation = ({ startCount, endCount }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(startCount || 0);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '0px 0px -50% 0px' }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let timeout;
        if (isVisible) {
            timeout = setTimeout(() => {
                if (count < endCount) {
                    setCount(count + Math.ceil((endCount - count) / 10));
                }
            }, 100);
        }
        return () => clearTimeout(timeout);
    }, [isVisible, count, endCount]);

    return (
        <span ref={counterRef} className={`counter ${isVisible ? 'visible' : ''}`}>
            {count}
        </span>
    );
};

export default CounterAnimation;
