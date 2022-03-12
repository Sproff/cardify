import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoGrid } from "react-icons/io5";
import { MdViewList } from "react-icons/md";
import { filterSearch, getlayout } from "../redux/actions/action";

const Header = () => {
	// const userLayout = useSelector((state) => state.layout);
	const userContacts = useSelector((state) => state.data);
	// const dispatch = useDispatch(userLayout);
	const dispatch = useDispatch();
	// const [search, setSearch] = useState("");
	const [, setData] = useState([]);
	const [sortType, setSortType] = useState("name");

	// const handleSearch = (e) => {
	// 	setSearch(e.target.value);
	// };

	const filterUserValue = (e) => {
		const input = e.target.value;

		dispatch(filterSearch({ search: input }));
	};

	useEffect(() => {
		const sortArray = (type) => {
			const types = {
				name: "name",
				created: "created",
			};
			const sortProperty = types[type];
			const sorted = [...userContacts].sort(
				(a, b) => b[sortProperty] - a[sortProperty]
			);
			setData(sorted);
			console.log(sorted);
		};

		sortArray(sortType);
	}, [sortType]);

	return (
		<div className="max-w-[1024px] m-auto">
			<header className="flex justify-between py-14">
				<div className="text-ash text-[2rem] font-bold">My Chatbots</div>

				<div className="space-x-4 flex items-center">
					<input
						onChange={(e) => filterUserValue(e)}
						className="bg-default py-1.5 px-2 rounded-md font-light focus:outline-none"
						type="text"
						placeholder="Search..."
					/>

					<button
						onClick={(e) => setSortType(e.target.value)}
						value="name"
						className="bg-blue-200 rounded-md text-white-100 text-sm py-1.5 px-2 font-light"
						type="submit"
					>
						Order by name
					</button>
					<button
						onClick={(e) => setSortType(e.target.value)}
						value="created"
						className="bg-blue-200 rounded-md text-white-100 text-sm py-1.5 px-2 font-light"
						type="submit"
					>
						Order by creation
					</button>

					<div
						onClick={() => dispatch(getlayout())}
						role="presentation"
						// className={layout ? "grid active" : "list"}
					>
						<IoGrid className="text-2xl text-ash cursor-pointer" />
					</div>
					<div
						onClick={() => dispatch(getlayout())}
						role="presentation"
						// className={layout ? "gridLayout" : "listLayout active"}
					>
						<MdViewList className="text-[2rem] cursor-pointer" />
					</div>
				</div>

				{/* <div>
					{filteredResults.map((user) => {
						return <p key={user.name}>{user.name}</p>;
					})}
				</div> */}
			</header>
		</div>
	);
};

export default Header;
