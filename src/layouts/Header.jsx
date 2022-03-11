import React from "react";

const Header = () => {
	return (
		<div className="max-w-[1024px] m-auto">
			<header className="flex justify-between py-14">
				<div className="text-ash text-[2rem] font-bold">My Chatbots</div>

				<div className="space-x-4">
					<input
						className="bg-default py-1.5 px-2 rounded-md font-light focus:outline-none"
						type="text"
						placeholder="Search..."
					/>
					<button
						className="bg-blue-200 rounded-md text-white-100 text-sm py-1.5 px-2 font-light"
						type="submit"
					>
						Order by name
					</button>
					<button
						className="bg-blue-200 rounded-md text-white-100 text-sm py-1.5 px-2 font-light"
						type="submit"
					>
						Order by creation
					</button>
				</div>
			</header>
		</div>
	);
};

export default Header;
