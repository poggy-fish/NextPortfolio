import EducationCard from "./EducationCard";

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
                <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center justify-around w-full">
                    
                </div>
			</div>
		</div>
	);
}

export default Resume;
