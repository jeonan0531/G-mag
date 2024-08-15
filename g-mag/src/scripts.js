import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrollPos, setScrollPos] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const mainNav = document.getElementById('mainNav');
        const headerHeight = mainNav.clientHeight;

        const handleScroll = () => {
            const currentTop = document.body.getBoundingClientRect().top * -1;

            if (currentTop < scrollPos) {
                // Scrolling Up
                if (currentTop > 0 && isFixed) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                    setIsFixed(false);
                }
            } else {
                // Scrolling Down
                setIsVisible(false);
                if (currentTop > headerHeight && !isFixed) {
                    setIsFixed(true);
                }
            }

            setScrollPos(currentTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos, isFixed]);

    return (
        <nav id="mainNav" className={`${isFixed ? 'is-fixed' : ''} ${isVisible ? 'is-visible' : ''}`}>
            {/* 네비게이션 내용 */}
        </nav>
    );
};

export default Navbar;
