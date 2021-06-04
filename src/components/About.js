import AboutImg from "../images/aboutimg.svg";
import UiDesign from "../images/user-interface.svg";
import Coding from "../images/code.svg";
import Mountain from "../images/mountain.svg";
import Travel from "../images/travelling.svg";
import Music from "../images/headphones.svg";
import Educative from "../images/educative.svg";

function About() {
	return (
		<div
			className="flex flex-col items-center bg-white pt-10 pb-12 px-4 sm:px-16"
			id="about"
		>
			<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nik-dark mb-10">
				About me
			</h3>
			<div className="flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contai bg-nik-lightGray p-3 rounded-full shadow-xl hover:shadow-inner cursor-pointer hover:border-gray-100">
				<img src={AboutImg} alt="Nikunj Thesiya" className="rounded-full" />
			</div>

			<div className="p-8 flex flex-col space-y-4">
				<p className="text-justify text-lg text-gray-600">
					I'm a Freelance JavaScript Developer & Selt taught Programmer based in
					Gujarat, INDIA. I have completed my graduation in computer science,
					and currently I’m pursuing my Master Degree in computer science. I'm a
					self taught programmer and very passionate and dedicated to my work.
					With 1+ year experience as a professional Front End Developer, I have
					acquired the skills necessary to build great, modern and premium
					websites.
				</p>
				<h3 className="text-2xl text-gray-600 font-bold">I Love</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-5 xl:flex items-center justify-between">
					<div className="hobbyBox">
						<img
							src={UiDesign}
							alt="Nikunj Thesiya hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
							DESIGNING UI
						</h3>
					</div>
					<div className="hobbyBox">
						<img
							src={Coding}
							alt="Nikunj Thesiya hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
							CODING
						</h3>
					</div>
					<div className="hobbyBox">
						<img
							src={Mountain}
							alt="Nikunj Thesiya hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
							MOUNTAINS
						</h3>
					</div>
					<div className="hobbyBox">
						<img
							src={Travel}
							alt="Nikunj Thesiya hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
							TRAVELLING
						</h3>
					</div>
					<div className="hobbyBox">
						<img
							src={Music}
							alt="Nikunj Thesiya hobby"
							className="w-8 sm:w-10 md:w-10 lg:w-9 xl:w-10"
						/>
						<h3 className="text-base sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
							MUSIC
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
