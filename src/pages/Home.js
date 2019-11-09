import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Home = props => {
	return (
		<div>
			<Hero hero="defaultHero">
				<Banner
					title="Luxirious Rooms"
					subtitle="Deluxe rooms starting at $299"
				>
					<Link to="/rooms" className="btn-primary">
						Get Started Now
					</Link>
				</Banner>
			</Hero>
		</div>
	);
};

Hero.defaultProps = {
	hero: "defaultHero"
};
export default Home;
