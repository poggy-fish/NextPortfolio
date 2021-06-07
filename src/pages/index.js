import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import favicon from "../images/logo.svg";
import Preview from "../images/portfolio.jpg";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="This is Nikunj Thesiya. I am Front End Developer || JavaScript - React Developer || Self Taught Programmer. I design & develop a Modern Responsive Websites. You can check my work on my portfolio."
				/>

				{/* Open Graph */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@NikunjThesiya" />
				<meta name="twitter:creator" content="@NikunjThesiya2" />

				<meta property="og:url" content="https://www.nikunjthesiya.tech/" />
				<meta property="og:image" content={Preview} key="ogimage" />
				<meta
					property="og:site_name"
					content="Nikunj Thesiya"
					key="ogsitename"
				/>
				<meta
					property="og:title"
					content="Nikunj Thesiya - JS Developer"
					key="ogtitle"
				/>
				<meta
					property="og:description"
					content="This is Nikunj Thesiya. I am Front End Developer || JavaScript - React Developer || Self Taught Programmer. I design & develop a Modern Responsive Websites. You can check my work on my portfolio."
					key="ogdesc"
				/>

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
