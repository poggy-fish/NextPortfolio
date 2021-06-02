import Head from "next/head";
import HeroSection from "../components/HeroSection";
import favicon from "../images/logo.png";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Head>
				<title>Nikunj Thesiya</title>
				<link rel="icon" href={favicon} />
			</Head>
			<HeroSection />
		</div>
	);
}
