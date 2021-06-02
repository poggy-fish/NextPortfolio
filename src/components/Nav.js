import { useState } from "react";
import Logo from "../images/logo.svg";
import { RiMenuLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

function Nav() {
	const [sidebar, setSidebar] = useState(false);
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};
	return (
		<>
			<div className="flex bg-[#F6F8FB] sticky top-0 items-center justify-between w-full py-8 px-8 sm:px-16">
				<div className="flex items-center space-x-3">
					<img src={Logo} alt="Nikunj Thesiya" className="w-12" />
					<h3 className="text-2xl text-[#5C637C] font-light hidden md:flex">
						NIKUNJ<span className="font-semibold">THESIYA</span>
					</h3>
				</div>
				<div className="flex text-[#5C637C] items-center space-x-5">
					<div className="hidden lg:flex items-center space-x-5">
						<p className="px-2 py-2">Home</p>
						<p className="px-2 py-2">About</p>
						<p className="px-2 py-2">Resume</p>
						<p className="px-2 py-2">Portfolio</p>
						<p className="px-2 py-2">Contact</p>
					</div>
					<button className="bg-gray-200 focus:outline-none font-medium text-[#5C637C] px-5 py-3 rounded-lg">
						Hire me
					</button>
					<button
						className="lg:hidden bg-gray-200 focus:outline-none font-medium text-[#5C637C] p-3.5 rounded-lg text-xl"
						onClick={() => setSidebar(true)}
					>
						<RiMenuLine />
					</button>
				</div>
			</div>

			<motion.div
				className="z-50 flex items-center lg:hidden flex-col fixed top-0 h-screen px-4 w-80 sm:w-96 bg-[#F6F8FB]  overflow-y-scroll hide-scrollbar shadow-2xl"
				animate={sidebar ? "open" : "closed"}
				variants={variants}
			>
				<div className="flex items-center justify-between py-8 sticky top-0 w-full">
					<div className="flex items-center space-x-2">
						<img src={Logo} alt="Nikunj Thesiya" className="w-10 sm:w-12" />
						<h3 className="text-xl text-[#5C637C] font-light">
							NIKUNJ<span className="font-semibold">THESIYA</span>
						</h3>
					</div>

					<button
						className="lg:hidden bg-gray-200 focus:outline-none font-medium text-[#5C637C] p-3.5 rounded-lg text-xl"
						onClick={() => setSidebar(false)}
					>
						<IoMdClose />
					</button>
				</div>

				{/* Mobile First Menu */}
				<div className="flex flex-col items-center space-y-2 w-full">
					<p className="sidebar-link active" onClick={() => setSidebar(false)}>
						Home
					</p>
					<p className="sidebar-link" onClick={() => setSidebar(false)}>
						About
					</p>
					<p className="sidebar-link" onClick={() => setSidebar(false)}>
						Resume
					</p>
					<p className="sidebar-link" onClick={() => setSidebar(false)}>
						Portfolio
					</p>
					<p className="sidebar-link" onClick={() => setSidebar(false)}>
						Contact
					</p>
				</div>

				<button className="text-gray-100 focus:outline-none font-medium bg-[#5C637C] px-5 text-lg py-3 rounded-lg w-full mt-10">
					Hire me
				</button>
			</motion.div>
		</>
	);
}

export default Nav;
