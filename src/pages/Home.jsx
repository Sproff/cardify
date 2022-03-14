import React from "react";
import { useSelector } from "react-redux";
import { BiFileFind } from "react-icons/bi";

import { filterSearch } from "../redux/actions/action";

import Header from "../layouts/Header";
import { GridWrapper } from "../components/GridWrapper";
import { Card } from "../components/Card";

const Home = () => {
	const userContacts = useSelector((state) => state.filteredData);

	return (
		<div className="max-w-[1024px] m-auto px-8 lg:px-0 pb-8">
			<Header />

			<main>
				<div>
					<p className="font-medium text-xl">Favourites</p>
				</div>

				<GridWrapper>
					{userContacts
						.filter((item) => item.filter === true)
						.map((item) => {
							return (
								<Card
									key={item.shortName}
									name={item.name}
									image={item.image}
									plan={item.plan}
									shortName={item.shortName}
									created={item.created}
									favourite
								/>
							);
						})}

					{userContacts.filter((item) => item.filter === true).length === 0 && (
						<div className="flex items-center text-ash py-6">
							<div className="text-[3rem]">
								<BiFileFind />
							</div>
							<p className="ml-2">No Favourite Found.</p>
						</div>
					)}
				</GridWrapper>
			</main>

			<hr className="text-[#9daaaf] my-6" />

			<section>
				<div>
					<p className="font-medium text-xl">Contacts</p>
				</div>

				<GridWrapper>
					{filterSearch &&
						userContacts
							.filter((item) => item.filter !== true)
							.map((item) => {
								return (
									<Card
										key={item.shortName}
										name={item.name}
										image={item.image}
										plan={item.plan}
										shortName={item.shortName}
										created={item.created}
									/>
								);
							})}

					{userContacts.filter((item) => item.filter !== true).length === 0 && (
						<div className="flex items-center text-ash py-6">
							<div className="text-[3rem]">
								<BiFileFind />
							</div>
							<p className="ml-2">No Contact Found.</p>
						</div>
					)}
				</GridWrapper>
			</section>
		</div>
	);
};

export default Home;
