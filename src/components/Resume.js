import CertificateCard from "./CertificateCard";
import EducationCard from "./EducationCard";
import Udemy from "../images/udemy.svg";
import FreeCodeCamp from "../images/freecodecamp.svg";
import LinkedIn from "../images/linkedin.svg";
import Coursera from "../images/coursera.svg";
import Educative from "../images/educative.svg";

function Resume() {
	return (
		<div
			className="flex flex-col items-center bg-nik-lightGray pt-10 pb-12 px-4 sm:px-16"
			id="resume"
		>
			<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nik-dark mb-10">
				Resume
			</h3>

			<div className="flex flex-col items-start self-start w-full mb-10">
				<h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-nik-dark mb-6 md:mb-10 px-8 sm:px-0">
					Education
				</h6>
				<div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center justify-around w-full">
					<EducationCard
						year="2017-2020"
						degree="Bachelor of Computer Applications"
						university="Veer Narmad South Gujarat University"
					/>
					<EducationCard
						year="2020-2022"
						degree="Master of Computer Applications"
						university="Parul University"
					/>
				</div>
			</div>

			<div className="flex flex-col items-start self-start w-full mb-10">
				<h6 className="text-xl md:text-2xl lg:text-3xl font-bold text-nik-dark mb-6 md:mb-10 px-8 sm:px-0">
					Certificates
				</h6>
				<div className="flex flex-col space-y-6 md:space-y-0 md:flex-row items-center justify-around w-full mb-6">
					<CertificateCard
						logo={Udemy}
						company="Udemy"
						title="Advanced CSS and Sass: Flexbox, Grid, Animations and More!"
						link="#"
					/>
					<CertificateCard
						logo={Udemy}
						company="Udemy"
						title="The Complete JavaScript Course 2020: From Zero to Expert!"
						link="#"
					/>
				</div>
				<div className="flex flex-col space-y-6 md:space-y-0 md:flex-row items-center justify-around w-full mb-6">
					<CertificateCard
						logo={Coursera}
						company="Coursera"
						title="Google UX Design"
						link="#"
					/>
					<CertificateCard
						logo={FreeCodeCamp}
						company="FreeCodeCamp"
						title="Front End Libraries"
						link="#"
					/>
				</div>
				<div className="flex flex-col space-y-6 md:space-y-0 md:flex-row items-center md:items-start justify-around w-full mb-6">
					<CertificateCard
						logo={LinkedIn}
						company="LinkedIn"
						title="React.js Essential Training"
						link="#"
					/>
					<CertificateCard
						logo={Educative}
						company="Educative"
						title="Understanding Redux: A Beginner's Guide To State Management"
						link="#"
					/>
				</div>
			</div>
		</div>
	);
}

export default Resume;
