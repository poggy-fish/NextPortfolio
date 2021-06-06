import Illustration from "../images/illustration1.svg";

function Contact() {
	return (
		<div
			className="flex flex-col items-center bg-nik-lightGray pt-10 pb-12 px-10 sm:px-16"
			id="contact"
		>
			<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nik-dark mb-10">
				Contact
			</h3>

			<div className="flex items-center w-full">
				<div className="w-0 md:w-1/2 p-5 hidden lg:flex">
					<img src={Illustration} alt="3D Illustration" />
				</div>
				<div className="flex flex-col items-start w-full lg:w-1/2 bg-white rounded-2xl px-7 py-8 sm:px-12 sm:py-12 border border-transparent hover:border-gray-200 hover:shadow-md space-y-6 text-sm sm:text-base">
					<div className="flex flex-col w-full space-y-4">
						<div className="flex flex-col items-start text-gray-500 space-y-3">
							<label className="text-base sm:text-lg">Your Name</label>
							<div className="w-full bg-nik-lightGray rounded-xl px-5 py-4 sm:px-6 sm:py-5 border border-transparent hover:shadow-inner hover:border-gray-200">
								<input
									type="text"
									name="name"
									placeholder="Write Your Name.."
									className="w-full bg-transparent focus:outline-none"
								/>
							</div>
						</div>
						<div className="flex flex-col items-start text-gray-500 space-y-3">
							<label className="text-base sm:text-lg">Email</label>
							<div className="w-full bg-nik-lightGray rounded-xl px-5 py-4 sm:px-6 sm:py-5 border border-transparent hover:shadow-inner hover:border-gray-200">
								<input
									type="email"
									name="email"
									placeholder="Write Your Email.."
									className="w-full bg-transparent focus:outline-none"
								/>
							</div>
						</div>
						<div className="flex flex-col items-start text-gray-500 space-y-3">
							<label className="text-base sm:text-lg">Message</label>
							<div className="w-full bg-nik-lightGray rounded-xl px-5 py-4 sm:px-6 sm:py-5 border border-transparent hover:shadow-inner hover:border-gray-200">
								<textarea
									name="message"
									placeholder="Write a Message..."
									className="w-full bg-transparent focus:outline-none"
								></textarea>
							</div>
						</div>
					</div>
					<button
						type="submit"
						className="bg-gray-500 text-white text-sm md:text-sm lg:text-base xl:text-lg px-3 py-3 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-xl hover:shadow-xl hover:bg-gray-200 hover:text-gray-500 border border-transparent hover:border-gray-300"
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
}

export default Contact;
