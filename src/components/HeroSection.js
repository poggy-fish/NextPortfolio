import HeroImg from "../images/lgimg.svg";
import Facebook from "../images/facebook.svg";
import Twitter from "../images/twitter.svg";
import Instagram from "../images/instagram.svg";
import LinkedIn from "../images/linkedin.svg";
import Github from "../images/github.svg";
// import Nav from "./Nav";

function HeroSection() {
	return (
		<div className="bg-[#F6F8FB] w-full" id="heroSection">
			{/* <Nav /> */}
			<div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 pb-16 px-8 sm:px-16">
				<div className="flex flex-col space-y-3 sm:space-y-6 items-start text-[#5C637C] xl:border-l-8 xl:pl-8 xl:border-gray-200 py-8">
					<p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal">
						Howdy,
					</p>
					<h4 className="md:hidden text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
						I'm Nikunj Thesiya
					</h4>
					<h4 className="hidden md:flex text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold">
						I am Nikunj Thesiya
					</h4>
					<h6 className="text-base text- md:text-lg lg:text-xl xl:text-2xl font-light">
						JavaScript | Front End Developer
					</h6>

					<div className="flex space-x-5 pt-5">
						<div className="socialLink">
							<img src={Twitter} alt="Nikunj Thesiya" />
						</div>
						<div className="socialLink">
							<img src={Instagram} alt="Nikunj Thesiya" className="" />
						</div>
						<div className="socialLink">
							<img src={LinkedIn} alt="Nikunj Thesiya" className="" />
						</div>
						<div className="socialLink">
							<img src={Github} alt="Nikunj Thesiya" className="" />
						</div>
					</div>
				</div>
				<div>
					<img
						src={HeroImg}
						alt="Nikunj Thesiya"
						className="md:w-[360px] lg:w-[400px] xl:w-[440px]"
					/>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
