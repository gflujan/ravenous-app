import React from "react";
import "./BusinessList.css";

/* ---------------------------------------------
// Importing additional/external modules
--------------------------------------------- */
import Business from "../Business/Business"; // remove the .js? -- YES

class BusinessList extends React.Component {
	render() {
		return (
			<div className="BusinessList">
				{this.props.businesses.map(business => {
					return <Business business={business} key={business.id} />;
				})}
			</div>
		);
	}
}

export default BusinessList;
