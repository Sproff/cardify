import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Header from "../layouts/Header";
import { filterSearch, selectFavourite } from "../redux/actions/action";

const Home = () => {
	const userContacts = useSelector((state) => state.filteredData);
	const dispatch = useDispatch();

	const handleFavourite = (shortName) => {
		const nonSelectedCard = userContacts.filter(
			(item) => item.shortName !== shortName
		);

		const selectedCard = userContacts.find(
			(item) => item.shortName === shortName
		);
		selectedCard.filter = true;

		dispatch(selectFavourite([...nonSelectedCard, selectedCard]));
	};

	const unhandleFavourite = (shortName) => {
		const nonSelectedCard = userContacts.filter(
			(item) => item.shortName !== shortName
		);

		const selectedCard = userContacts.find(
			(item) => item.shortName === shortName
		);
		selectedCard.filter = false;

		dispatch(selectFavourite([...nonSelectedCard, selectedCard]));
	};

	return (
		<div className="max-w-[1024px] m-auto px-8 lg:px-0 pb-8">
			<Header />

			<main>
				<div>
					<p className="font-medium text-xl">Favourites</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
					{userContacts
						.filter((item) => item.filter === true)
						.map((item) => {
							return (
								<div
									key={item.shortName}
									className="mx-auto mt-10 w-[250px] h-[250px] bg-default rounded p-5 shadow-100"
								>
									<div
										role="presentation"
										onClick={() => unhandleFavourite(item.shortName)}
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

				<div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-4">
					{filterSearch &&
						userContacts
							.filter((item) => item.filter !== true)
							.map((item) => {
								return (
									<div
										key={item.shortName}
										className="mx-auto mt-10 w-[250px] h-[250px] bg-default rounded p-5 shadow-100"
									>
										<div
											role="presentation"
											onClick={() => handleFavourite(item.shortName)}
										>
											<AiOutlineStar className="icon" />
										</div>

										<div className="flex flex-col justify-center items-center pt-8">
											<Link to={`/profile/${item.shortName}`}>
												<img
													src={item.image}
													alt=""
													className="rounded-full h-[70px] w-[70px]"
													role="presentation"
												/>
											</Link>

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
