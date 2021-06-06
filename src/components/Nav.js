import { useEffect, useState } from "react";
import Logo from "../images/logo.svg";
import { RiMenuLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

function Nav() {
	const [sidebar, setSidebar] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};

	const changeBackground = () => {
		if (window.scrollY >= 80) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeBackground);
	}, []);

	return (
		<motion.div
			animate={
				navbar ? { position: "sticky", top: 0 } : { position: "relative" }
			}
		>
			<div
				className={
					navbar
						? "stickyNavbarStyles"
						: "flex bg-[#F6F8FB] items-center justify-between w-full py-8 px-8 sm:px-16"
				}
			>
				<Link
					to="heroSection"
					smooth={true}
					offset={-110}
					duration={200}
					activeClass="active"
					className="flex items-center space-x-3 cursor-pointer"
				>
					<img src={Logo} alt="Nikunj Thesiya" className="w-12" />
					<h3 className="text-2xl text-[#5C637C] font-light hidden md:flex">
						NIKUNJ<span className="font-semibold">THESIYA</span>
					</h3>
				</Link>
				<div className="flex text-[#5C637C] items-center space-x-3">
					<div className="hidden lg:flex items-center space-x-4">
						<Link
							to="heroSection"
							spy={true}
							smooth={true}
							offset={-110}
							duration={200}
							activeClass="active"
							className="navLink"
						>
							Home
						</Link>
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={-90}
							duration={500}
							activeClass="active"
							className="navLink"
						>
							About
						</Link>
						<Link
							to="resume"
							spy={true}
							smooth={true}
							offset={-90}
							duration={500}
							activeClass="active"
							className="navLink"
						>
							Resume
						</Link>
						<Link
							to="projects"
							spy={true}
							smooth={true}
							offset={-90}
							duration={500}
							activeClass="active"
							className="navLink"
						>
							Projects
						</Link>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-90}
							duration={500}
							activeClass="active"
							className="navLink"
						>
							Contact
						</Link>
					</div>
					<Link
						to="contact"
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						className="bg-white shadow-lg border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none font-medium text-gray-500 px-5 py-3 rounded-lg cursor-pointer"
					>
						Hire me
					</Link>
					<button
						className="lg:hidden bg-white border border-transparent hover:shadow-md hover:border-gray-200 focus:outline-none font-medium text-[#5C637C] p-3.5 rounded-lg text-xl"
						onClick={() => setSidebar(true)}
					>
						<RiMenuLine />
					</button>
				</div>
			</div>

			<motion.div
				className="z-50 flex items-center lg:hidden flex-col fixed top-0 h-screen px-4 w-80 sm:w-96 bg-[#F6F8FB]  overflow-y-scroll hide-scrollbar shadow-2xl bg-opacity-60 backdrop-filter backdrop-blur-md"
				animate={sidebar ? "open" : "closed"}
				variants={variants}
			>
				<div className="flex items-center justify-between py-8 w-full">
					<div className="flex items-center space-x-2">
						<img src={Logo} alt="Nikunj Thesiya" className="w-10 sm:w-12" />
						<h3 className="text-xl text-[#5C637C] font-light">
							NIKUNJ<span className="font-semibold">THESIYA</span>
						</h3>
					</div>

					<button
						className="lg:hidden bg-white border border-transparent hover:shadow-md hover:border-gray-200  focus:outline-none font-medium text-gray-500 p-3.5 rounded-lg text-xl"
						onClick={() => setSidebar(false)}
					>
						<IoMdClose />
					</button>
				</div>

				{/* Mobile First Menu */}
				<div className="flex flex-col items-center space-y-2 w-full py-5">
					<Link
						to="heroSection"
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						activeClass="active"
						className="sidebar-link"
						onClick={() => setSidebar(false)}
					>
						Home
					</Link>
					<Link
						to="about"
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						activeClass="active"
						className="sidebar-link"
						onClick={() => setSidebar(false)}
					>
						About
					</Link>
					<Link
						to="resume"
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						activeClass="active"
						className="sidebar-link"
						onClick={() => setSidebar(false)}
					>
						Resume
					</Link>
					<Link
						to="projects"
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						activeClass="active"
						className="sidebar-link"
						onClick={() => setSidebar(false)}
					>
						Projects
					</Link>
					<Link
						to="contact"
						spy={true}
						smooth={true}
						offset={-90}
						duration={500}
						activeClass="active"
						className="sidebar-link"
						onClick={() => setSidebar(false)}
					>
						Contact
					</Link>
				</div>

				<Link
					to="contact"
					spy={true}
					smooth={true}
					offset={-90}
					duration={500}
					className="text-gray-100 focus:outline-none font-medium bg-[#5C637C] px-5 text-lg py-3 rounded-lg w-full mt-3 mb-8"
				>
					Hire me
				</Link>
			</motion.div>
		</motion.div>
	);
}

export default Nav;
