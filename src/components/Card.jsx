import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { selectFavourite } from "../redux/actions/action";

export const Card = ({ shortName, name, image, plan, created, favourite }) => {
	const dispatch = useDispatch();

	const formatDate = moment(created).utc().format("DD/MM/YYYY");

	const userContacts = useSelector((state) => state.filteredData);
	const layout = useSelector((state) => state.layout);

	const handleFavourite = (favName, isFavourite) => {
		const nonSelectedCard = userContacts.filter(
			(item) => item.shortName !== favName
		);

		const selectedCard = userContacts.find(
			(item) => item.shortName === favName
		);
		selectedCard.filter = !isFavourite;

		dispatch(selectFavourite([...nonSelectedCard, selectedCard]));
	};

	return (
		<div className="flex items-center">
			{layout === "grid" ? null : (
				<div
					className="mt-10"
					role="presentation"
					onClick={() => handleFavourite(shortName, favourite)}
				>
					{favourite ? (
						<AiFillStar className="icon mr-5" />
					) : (
						<AiOutlineStar className="icon mr-5" />
					)}
				</div>
			)}

			<div
				data-testid="card-body"
				key={shortName}
				className={
					layout === "grid"
						? "mx-auto mt-10 w-[250px] h-[250px] bg-default rounded p-5 shadow-100 hover:shadow-200"
						: "mt-10 flex justify-between items-center w-full h-full bg-default rounded p-5 shadow-100 hover:shadow-200"
				}
			>
				{layout === "grid" ? (
					<div
						role="presentation"
						onClick={() => handleFavourite(shortName, favourite)}
					>
						{favourite ? (
							<AiFillStar className="icon" />
						) : (
							<AiOutlineStar className="icon" />
						)}
					</div>
				) : null}

				<div
					className={
						layout === "grid"
							? "flex flex-col justify-center items-center pt-8"
							: "flex items-center"
					}
				>
					<Link to={`/profile/${shortName}`}>
						<img
							src={image}
							alt=""
							className="rounded-full h-[70px] w-[70px]"
							role="presentation"
						/>
					</Link>

					{layout === "grid" ? (
						<div>
							<p className="font-bold text-xl pt-6 pb-4 text-center">{name}</p>
							<p className="font-light text-center">{plan}</p>
						</div>
					) : (
						<p className="font-bold text-xl pt-6 pb-4 ml-6">{shortName}</p>
					)}
				</div>

				{layout === "grid" ? null : (
					<div>
						<p className="font-light">{`Created at ${formatDate}`}</p>
					</div>
				)}
			</div>
		</div>
	);
};
