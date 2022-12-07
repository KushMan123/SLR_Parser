import React, { useEffect, useState } from "react";

const Dummy = () => {
	const [data, getData] = useState([]);
	const fetchData = () => {
		fetch("/find")
			.then((response) => response.json())
			.then((data) => {
				getData(data);
			});
	};

	useEffect(() => {
		// fetchData();
	}, []);
	console.log(data);

	return <div className='container'></div>;
};

export default Dummy();
