import React from "react";
import { useDispatch } from "react-redux";
import { IoGrid } from "react-icons/io5";
import { MdViewList } from "react-icons/md";
import {
	filterSearch,
	sortByCreation,
	sortByName,
} from "../redux/actions/action";

const Header = () => {
	const dispatch = useDispatch();

	const filterUserValue = (e) => {
		const input = e.target.value;

		dispatch(filterSearch({ search: input }));
	};

	return (
		<div className="max-w-[1024px] m-auto">
			<header className="block md:flex md:justify-between py-14">
				<div className="text-ash text-[2rem] font-bold mb-4 md:mb-0">
					My Chatbots
				</div>

				<div className="space-x-0 lg:space-x-3 block lg:flex lg:items-center">
					<div className="">
						<input
							onChange={(e) => filterUserValue(e)}
							className="bg-default py-1.5 px-2 rounded-md font-light focus:outline-none"
							type="text"
							placeholder="Search..."
						/>
					</div>

					<div className="mt-3 lg:mt-0 flex items-center space-x-2">
						<button
							onClick={() => dispatch(sortByName())}
							className="bg-blue-200 rounded-md text-white-100 text-sm py-1.5 px-2 font-light"
							type="submit"
						>
							Order by name
						</button>
						<button
							onClick={() => dispatch(sortByCreation())}
							className="bg-blue-200 rounded-md text-white-100 text-sm py-1.5 px-2 font-light"
							type="submit"
						>
							Order by creation
						</button>

						<div
							role="presentation"
							// className={layout ? "grid active" : "list"}
						>
							<IoGrid className="text-2xl text-ash cursor-pointer" />
						</div>
						<div
							role="presentation"
							// className={layout ? "gridLayout" : "listLayout active"}
						>
							<MdViewList className="text-[2.1rem] cursor-pointer" />
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
