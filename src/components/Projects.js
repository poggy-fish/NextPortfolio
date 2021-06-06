import ProjectCard from "./ProjectCard";
import GoogleClone from "../images/googleclone.jpg";
import InstagramClone from "../images/Instagramclone.jpg";
import MusicPlayer from "../images/musicplayer.jpg";
import GithubWhite from "../images/github-white.svg";
import Github from "../images/github.svg";
import ProjectCard2 from "./ProjectCard2";
import Portfolio from "../images/portfolio.svg";

function Projects() {
	return (
		<div
			className="flex flex-col items-center bg-white pt-10 pb-12 px-4 sm:px-16"
			id="projects"
		>
			<h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nik-dark mb-10">
				My Work
			</h3>
			<div className="flex flex-col items-center space-y-8">
				<ProjectCard
					img={Portfolio}
					title="My Portfolio"
					description="I built this Responsive Portfolio using NextJS, Tailwind CSS & Framer Motion."
					link="#"
				/>
				<ProjectCard2
					img={InstagramClone}
					title="Instagram Clone"
					description="Redesign Instagram Clone using React, Tailwind CSS & React Hooks"
					link=""
				/>
				<ProjectCard
					img={GoogleClone}
					title="Google Clone"
					description="I built this Google Clone using NextJS, React, Tailwind CSS & Google API."
					link=""
				/>
				<ProjectCard2
					img={MusicPlayer}
					title="Music Player"
					description="Responsive Music Player built with React, SCSS & React Hooks"
					link=""
				/>
			</div>
			<a
				href="https://github.com/NikunjThesiya?tab=repositories"
				target="_blank"
				className="flex items-center shadow-lg bg-gray-50 hover:bg-gray-100 md:h-20 px-6 py-5 md:px-8 md:py-6 rounded-3xl text-gray-500 space-x-4 mt-12 focus:outline-none text-base md:text-lg border border-transparent hover:border-gray-200 cursor-pointer"
			>
				<img src={Github} alt="Nikunj Thesiya" className="h-7 md:h-10" />
				<p>See More</p>
			</a>
		</div>
	);
}

export default Projects;
