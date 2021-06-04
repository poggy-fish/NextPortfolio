import Head from "next/head";
import About from "../components/About";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import Resume from "../components/Resume";
import favicon from "../images/logo.svg";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Head>
				<title>Nikunj Thesiya</title>
				<link rel="icon" href={favicon} />
			</Head>
			<Nav />
			<HeroSection />
			<About />
			<Resume />
		</div>
	);
}
