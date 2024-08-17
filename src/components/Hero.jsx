import React from "react";
import { HERO } from "../constants";
import heroImg from "../assets/heroImg.png";
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
			{/* <motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="w-[60%] h-screen absolute top-0 right-0 z-[-1]  lg:p-8"
			>
				<div className="flex justify-center h-full w-full relative">
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.3 }}
						transition={{ duration: 1 }}
						src={heroImg}
						width={750}
						height={850}
						alt="carl-img"
						className="rounded-3xl object-cover blur-sm"
					/>
				</div>
			</motion.div> */}
		</section>
	);
};

export default Hero;
