import React from 'react';

const Content = ({onToggleContent }) => {
    const handleButtonClick = () => {
        onToggleContent(false); // При клике контент исчезает
    };
    const handleButtonClick2 = () => {
        onToggleContent(true); // При клике контент исчезает
    };
    return (
        <header>
            <button onClick={handleButtonClick}>
                Показать контент 1
            </button>
           
            <button onClick={handleButtonClick2}>
                Показать контент 1
            </button>
        </header>
    );
};

export default Content;