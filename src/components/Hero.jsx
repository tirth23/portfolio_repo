import React from "react";
import { HERO } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<section className="flex min-h-screen flex-wrap items-center relative">
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
				className="w-[80%] z-20"
			>
				<h2 className="my-8 p-2 text-[5rem] font-bold md:text-[7rem] lg:text-[8rem] grad">
					{HERO.name}
				</h2>
				<p className="p-2 text-3xl tracking-tightier lg:text-4xl">
					{HERO.greet}
				</p>
				<p className="mb-8 p-2 text-xl">{HERO.description}</p>
			</motion.div>
		</section>
	);
};

export default Hero;
