function CertificateCard({ logo, company, title, link }) {
	return (
		<div className="flex flex-col items-start bg-white py-5 px-6 sm:py-8 sm:px-10 rounded-2xl space-y-4 border border-transparent hover:border-gray-300 hover:shadow-lg cursor-pointer w-4/5 md:w-5/12">
			<div className="flex items-center space-x-3 lg:space-x-5">
				<span className="p-3.5 bg-nik-lightGray w-12 h-12 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14 xl:w-16 xl:h-16 rounded-xl flex items-center justify-center shadow-lg">
					<img src={logo} alt="Nikunj Thesiya Certificate" />
				</span>
				<span className="p-4 bg-nik-lightGray text-gray-500 rounded-xl text-xs sm:text-sm lg:text-base xl:text-lg">
					{company}
				</span>
			</div>
			<div className="flex flex-col items-start space-y-6">
				<h3 className="font-bold text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-gray-500 line-clamp-3">
					{title}
				</h3>
				<a
					href={link}
					target="_blank"
					className="bg-gray-500 text-white text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg px-3 py-3 sm:px-4 sm:py-3 lg:px-5 lg:py-4 rounded-xl hover:shadow-lg hover:bg-gray-200 hover:text-gray-500"
				>
					View Certificate
				</a>
			</div>
		</div>
	);
}

export default CertificateCard;
