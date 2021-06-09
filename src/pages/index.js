import React, { useState, useEffect } from "react";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Loading from "../components/Loading";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import favicon from "../images/logo.svg";
import Preview from "../images/portfolio.jpg";
import TwitterCardImg from "../images/twittercardimg.png";

export default function Home() {
	const [spinner, setSpinner] = useState(true);

	useEffect(() => {
		setTimeout(() => setSpinner(false), 3000);
	}, []);

	return (
		<div className="flex flex-col">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="This is Nikunj Thesiya. I am Front End Developer || JavaScript - React Developer || Self Taught Programmer. I design & develop a Modern Responsive Websites. You can check my work on my portfolio."
				/>
				{/* Open Graph Meta Tags*/}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@NikunjThesiya2" />
				<meta name="twitter:creator" content="@NikunjThesiya2" />
				<meta
					name="twitter:title"
					content="Nikunj Thesiya - JavaScript / React Developer"
				/>
				<meta
					name="twitter:description"
					content="I Design and Develop a modern stylish websites using modern tools like React, NextJS, Tailwind CSS etc."
				/>
				<meta name="twitter:image" content={TwitterCardImg} />
				<meta
					name="twitter:title"
					content="Nikunj Thesiya - JavaScript / React Developer"
				/>
				<meta
					name="twitter:description"
					content="I Design and Develop a modern stylish websites using modern tools like React, NextJS, Tailwind CSS etc."
				/>
				<meta name="twitter:image" content={Preview} />
				<meta property="og:url" content="https://www.nikunjthesiya.tech/" />
				<meta
					property="article:author"
					content="https://www.nikunjthesiya.tech/"
				/>
				<meta property="og:type" content="website" />
				<meta property="fb:app_id" content="482063489741872" />
				<meta name="author" content="Nikunj Thesiya"></meta>
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
			{spinner ? (
				<Loading />
			) : (
				<div className="flex flex-col">
					<Nav />
					<HeroSection />
					<About />
					<Resume />
					<Projects />
					<Contact />
					<Footer />
				</div>
			)}
		</div>
	);
}
