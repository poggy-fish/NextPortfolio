function ProjectCard2({ img, title, link, description }) {
	return (
		<div className="flex flex-col md:flex-row-reverse items-start md:items-center justify-between bg-nik-lightGray rounded-3xl px-6 py-8 sm:px-10 sm:py-10 w-11/12 md:h-80 xl:h-96 space-y-6 md:space-y-0 md:space-x-8 border border-transparent hover:border-gray-200 hover:shadow-lg">
			<div className="md:w-1/2 w-full rounded-3xl md:h-full">
				<img
					src={img}
					alt={title}
					className="rounded-xl sm:rounded-3xl w-full md:w-auto h-full shadow-lg object-cover"
				/>
			</div>
			<div className="flex w-full md:w-1/2 flex-col items-start space-y-6 md:space-y-6 xl:space-y-12 px-4 sm:px-0">
				<div className="flex flex-col space-y-4 md:space-y-5">
					<h3 className="text-nik-dark text-xl sm:text-2xl md:text-2xl xl:text-4xl font-bold line-clamp-1">
						{title}
					</h3>
					<p className="md:text-lg xl:text-xl font-normal line-clamp-2 sm:line-clamp-3 text-gray-500">
						{description}
					</p>
				</div>
				<a
					href={link}
					className="bg-white text-nik-dark px-5 py-4 md:py-3 md:px-4 xl:py-4 xl:px-6 rounded-xl text-base md:text-base xl:text-lg font-normal shadow-xl hover:bg-nik-dark hover:text-white focus:outline-none"
				>
					See Live
				</a>
			</div>
		</div>
	);
}

export default ProjectCard2;
