// Client ID
// const clientID = 'b9UwAGm6BSQdBm9_sSsRUA';

// API Key
const apiKey =
	"qOZwr-3bckzZQqOqmNenM68Mto2h5iMEHvxoemairHJQm1wFUWn4WXG471Yk98gCQ1NG8nSHvmiGo074uLAmTA1JqxO26ZfrFh-KGAqAdgh2e5EmwCc3GOnV9_fOWnYx";

const Yelp = {
	search(term, location, sortBy) {
		const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

		return fetch(url, { headers: { Authorization: `Bearer ${apiKey}` } })
			.then(response => {
				return response.json();
			})
			.then(jsonResponse => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses.map(business => ({
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count
					}));
				}
			});
	}
};

export default Yelp;
