import Logo from "../images/logo.svg";
import { RiMenuLine } from "react-icons/ri";

function Nav() {
	return (
		<div className="flex items-center justify-between w-full py-8 px-8 sm:px-16">
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
				<button className="bg-[#DCDFFF] focus:outline-none font-medium text-[#5C637C] px-5 py-3 rounded-lg">
					Hire me
				</button>
				<button className="lg:hidden bg-[#DCDFFF] focus:outline-none font-medium text-[#5C637C] p-3.5 rounded-lg text-xl">
					<RiMenuLine />
				</button>
			</div>
		</div>
	);
}

export default Nav;
