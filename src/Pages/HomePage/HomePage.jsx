import React from 'react';
import Hero from '../../Componente/Hero/Hero';
import DesignCategory from '../../Componente/DesignCategory/DesignCategory';
import OurProducts from '../../Componente/OurProducts/OurProducts';

const HomePage = () => {
    return (
        <div>
            <Hero />
            <DesignCategory />
            <OurProducts />
        </div>
    );
};

export default HomePage;