import React from 'react';
import { heroOne, heroTwo, heroThree, pricingData } from '../../data/homeData';
import { Pricing } from '../../components';
import Hero from '../../components/Hero/Hero';
import Content from '../../components/Content/Content';

function Home() {
	return (
		<>
			<Hero></Hero>
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Pricing pricingData={pricingData} />
		</>
	);
}

export default Home;
