import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import EducationSection from "./components/EducationSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Background from "./components/Background";


const App = () => {
	return (
		<div>
			<h1 className="relative h-full overflow-y-auto antialiased">
				<Background />
				<div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
					<Hero />
					<Navbar />
					<Projects />
					<Bio />
					<Skills />
					<WorkExperience />
					<EducationSection />
					<ContactForm />
					<Footer />
				</div>
			</h1>
		</div>
	);
};

export default App;
