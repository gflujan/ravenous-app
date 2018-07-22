import React from "react";
// import CSS from './App.css'; // does this declaration work?
import "./App.css"; // or does this one work?
// (either one of these declarations work for this project, but I'm wondering if the first one will break things down the road because it might cause confusion?)

/* ---------------------------------------------
// Importing additional/external modules
--------------------------------------------- */
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";

/* ---------------------------------------------
// Importing the Yelp module
--------------------------------------------- */
import Yelp from "./util/Yelp";

/*const business = {
	imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90,
};*/

/*const businesses = [
	business,
	business,
	business,
	business,
	business,
	business,
];*/

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			businesses: []
		};

		this.searchYelp = this.searchYelp.bind(this);
	}

	searchYelp(term, location, sortBy) {
		Yelp.search(term, location, sortBy).then(businesses => {
			this.setState({ businesses: businesses });
		});
		// console.log(`Hi, you've searched for "${term}" in the location of "${location}" with this filter: "${sortBy}".`);
	}

	render() {
		return (
			<div className="App">
				<h1>ravenous</h1>
				<SearchBar searchYelp={this.searchYelp} />
				<BusinessList businesses={this.state.businesses} />
			</div>
		);
	}
}

export default App;
