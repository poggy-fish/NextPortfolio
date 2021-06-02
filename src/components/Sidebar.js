import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";

function Sidebar() {
	return (
		<motion.div
			className="z-50 flex flex-col fixed top-0 h-screen w-72 md:w-96 bg-gray-100 overflow-y-scroll hide-scrollbar divide-y-2 divide-gray-400 shadow-2xl"
			// animate={sidebar ? "open" : "closed"}
			// variants={variants}
		>
			<div className="flex items-center justify-between bg-amazon_blue-light p-4 sticky top-0">
				<p className="text-white text-base md:text-lg font-bold">
					Hello, Nikunj Thesiya
				</p>

				<span
					className="bg-gray-100 bg-opacity-25 text-white p-2 rounded-xl text-xl cursor-pointer hover:bg-opacity-10"
					onClick={() => setSidebar(false)}
				>
					<IoMdClose className="text-white text-opacity-70" />
				</span>
			</div>

			{/* Mobile First Menu */}
			<div className="flex flex-col">
				<p className="sidebar-link">Home</p>
				<p className="sidebar-link">About</p>
				<p className="sidebar-link">Resume</p>
				<p className="sidebar-link">Portfolio</p>
				<p className="sidebar-link">Contact</p>
			</div>
		</motion.div>
	);
}

export default Sidebar;
