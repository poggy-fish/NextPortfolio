import AboutImg from "../images/aboutimg.svg";

function About() {
	return (
		<div
			className="flex flex-col items-center bg-white pt-10 pb-16 px-4 sm:px-16"
			id="about"
		>
			<h3 className="text-5xl font-bold text-nik-dark mb-10">About me</h3>
			<div className="flex items-center justify-center w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contai bg-nik-lightGray p-3 rounded-full shadow-xl hover:shadow-inner cursor-pointer hover:border-gray-100">
				<img src={AboutImg} alt="Nikunj Thesiya" className="rounded-full" />
			</div>

			<div>
				<p className="text-justify text-lg p-8 text-gray-600">
					I'm a Freelance JavaScript Developer & Selt taught Programmer based in
					Gujarat, INDIA. I have completed my graduation in computer science,
					and currently I’m pursuing my Master Degree in computer science. I'm a
					self taught programmer and very passionate and dedicated to my work.
					With 1+ year experience as a professional Front End Developer, I have
					acquired the skills necessary to build great, modern and premium
					websites.
				</p>
			</div>
		</div>
	);
}

export default About;
