import React from 'react';

const MenuHeader = ({ title, restaurant, description }) => {
    return (
        <div class="text-center">
            <h1>{title}</h1>
            <h2 class="fancyText">{restaurant}</h2>
            <h2>{description}</h2>
            <br></br>
        </div>
    );
};

export default MenuHeader;