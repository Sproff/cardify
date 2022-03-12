import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Header from "../layouts/Header";
import { filterSearch } from "../redux/actions/action";

const Home = () => {
	const userLayout = useSelector((state) => state.layout);
	const userContacts = useSelector((state) => state.filteredData);
	const [contact, setContacts] = useState(userContacts);
	const [filterResults, setFilterResults] = useState(userContacts);

	const selectFavourite = (shortName) => {
		const nonSelectedCard = userContacts.filter(
			(item) => item.shortName !== shortName
		);

		setContacts(() => {
			const selectedCard = userContacts.find(
				(item) => item.shortName === shortName
			);
			selectedCard.filter = true;

			return [...nonSelectedCard, selectedCard];
		});
	};

	const unselectFavourite = (shortName) => {
		const nonSelectedCard = userContacts.filter(
			(item) => item.shortName !== shortName
		);

		setContacts(() => {
			const selectedCard = userContacts.find(
				(item) => item.shortName === shortName
			);
			selectedCard.filter = false;

			return [...nonSelectedCard, selectedCard];
		});
	};

	return (
		<div className="max-w-[1024px] m-auto pb-8">
			<Header setFilterResults={setFilterResults} />

			<main>
				<div>
					<p className="font-medium text-xl">Favourites</p>
				</div>

				<div className="grid grid-cols-4 gap-4">
					{contact
						.filter((item) => item.filter === true)
						.map((item) => {
							return (
								<div
									key={item.shortName}
									className="mt-10 w-[250px] h-[250px] bg-default rounded p-5 shadow-100"
								>
									<div
										role="presentation"
										onClick={() => unselectFavourite(item.shortName)}
									>
										<AiFillStar className="icon active" />
									</div>

									<div className="flex flex-col justify-center items-center pt-8">
										<img
											src={item.image}
											alt=""
											className="rounded-full h-[70px] w-[70px]"
										/>
										<p className="font-bold text-xl pt-6 pb-4">{item.name}</p>
										<p className="font-light">{item.plan}</p>
									</div>
								</div>
							);
						})}
				</div>
			</main>

			<hr className="text-[#9daaaf] my-6" />

			<section>
				<div>
					<p className="font-medium text-xl">Contacts</p>
				</div>

				<div className={userLayout ? "grid grid-cols-4 gap-4" : "block"}>
					{filterSearch &&
						filterResults &&
						contact
							.filter((item) => item.filter !== true)
							.map((item) => {
								return (
									<div
										key={item.shortName}
										className="mt-10 w-[250px] h-[250px] bg-default rounded p-5 shadow-100"
									>
										<div
											role="presentation"
											onClick={() => selectFavourite(item.shortName)}
										>
											<AiOutlineStar className="icon" />
										</div>

										<div className="flex flex-col justify-center items-center pt-8">
											<img
												src={item.image}
												alt=""
												className="rounded-full h-[70px] w-[70px]"
											/>
											<p className="font-bold text-xl pt-6 pb-4">{item.name}</p>
											<p className="font-light">{item.plan}</p>
										</div>
									</div>
								);
							})}
				</div>
			</section>
		</div>
	);
};

export default Home;
