import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
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
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
