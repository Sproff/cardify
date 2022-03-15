import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import moment from "moment";

import { ImLocation2 } from "react-icons/im";
import {
	BiCurrentLocation,
	BiMessageDetail,
	BiMessageRoundedDetail,
} from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { GiUmbrella } from "react-icons/gi";

import { getSingleUser } from "../redux/actions/action";

const Profile = () => {
	const { shortName } = useParams();
	const singleContact = useSelector((state) => state.singleContact);
	const dispatch = useDispatch();

	const formatDate = moment(singleContact.created).utc().format("DD/MM/YYYY");

	useEffect(() => {
		dispatch(getSingleUser(shortName));
	}, []);

	return (
		<div className="max-w-[1024px] m-auto px-8 py-8 lg:px-0">
			<Link to="/">
				<div className="text-ash text-[1.5rem] md:text-[2rem] font-bold mb-4">
					My Chatbots
				</div>
			</Link>

			<h1 className="text-ash text-xl font-medium pb-6">Profile</h1>

			<div className="block md:flex md:justify-between md:items-center text-center rounded bg-default p-12">
				<div className="block md:flex md:items-center">
					<img
						src={singleContact?.image}
						alt=""
						className="m-auto md:mr-4 mb-4 md:mb-0 rounded-full h-[70px] w-[70px]"
					/>
					<div>
						<p className="font-bold text-xl">{singleContact?.name}</p>
						<p>{singleContact?.template}</p>
					</div>
				</div>

				<div>
					<p className="font-light text-md">{`Created at ${formatDate}`}</p>
				</div>
			</div>

			<div className="block lg:flex lg:justify-between mb-10">
				<div className="w-full lg:w-[63%]">
					<div className="block md:flex md:justify-between">
						<div className="mt-10 w-full md:w-[35%] h-[250px] bg-default rounded p-5 shadow-100 flex flex-col justify-center">
							<div className="flex items-center">
								<div className="mr-3 text-[2rem] text-blue-200">
									<ImLocation2 />
								</div>
								<div>
									<p className="font-medium text-md">Region and Idiom</p>
									<p className="font-light text-sm">EUA -English (EN)</p>
								</div>
							</div>

							<div className="flex items-center mt-5">
								<div className="mr-3 text-[2rem] text-blue-200">
									<BiCurrentLocation />
								</div>
								<div>
									<p className="font-medium text-md">Timezone</p>
									<p className="font-light text-sm">EUA -English (EN)</p>
								</div>
							</div>
						</div>

						<div className="mt-5 md:mt-10 w-full md:w-[63%] h-[250px] bg-default rounded p-5 shadow-100 flex">
							<div className="flex items-center">
								<div className="mr-3 text-[2rem] text-blue-200">
									<IoMdContact />
								</div>
								<div>
									<p className="font-medium text-md">
										{singleContact?.analytics?.user?.total}
									</p>
									<p className="font-light text-sm">Active users</p>
								</div>
							</div>
						</div>
					</div>

					<div className="block md:flex md:justify-between mt-5">
						<div className="w-full md:w-[63%] h-[250px] bg-default rounded p-5 shadow-100 flex">
							<div className="flex items-center">
								<div className="mr-3 text-[2rem] text-blue-200">
									<BiMessageRoundedDetail />
								</div>
								<div>
									<p className="font-medium text-md">
										{singleContact?.analytics?.message?.received}
									</p>
									<p className="font-light text-sm">Messages Received</p>
								</div>
							</div>
						</div>

						<div className="w-full mt-5 md:mt-0 md:w-[35%] h-[250px] bg-default rounded p-5 shadow-100 flex">
							<div className="flex items-center">
								<div className="mr-3 text-[2rem] text-blue-200">
									<BiMessageDetail />
								</div>
								<div>
									<p className="font-medium text-md">
										{singleContact?.analytics?.message?.sent}
									</p>
									<p className="font-light text-sm">Messages Sent</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full lg:w-[35%] mt-10 bg-default rounded p-5 shadow-100">
					<div className="flex flex-col justify-center items-center pt-8">
						<div className="mr-3 text-[8rem] text-blue-200">
							<GiUmbrella />
						</div>
						<p className="font-light text-md pt-6 pb-4">Status Account</p>
						<p className="font-medium text-md pb-4">Free</p>
						<button
							className="bg-blue-200 rounded-md text-white-100 text-sm py-1.5 px-2 font-light"
							type="submit"
						>
							Update Account
						</button>
					</div>
				</div>
			</div>

			<div className="flex justify-between items-center rounded bg-default p-12 mt-4">
				<div className="m-auto">
					<p className="font-medium text-md md:text-xl">BLIP | Terms of use</p>
				</div>
			</div>
		</div>
	);
};

export default Profile;
