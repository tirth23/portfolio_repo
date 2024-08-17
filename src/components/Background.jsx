import React from "react";
import heroImg from "../assets/heroImg.png";
import { motion } from "framer-motion";

const Background = () => {
	return (
		<>
			<div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				className="w-screen h-screen absolute"
			>
				<div className="flex justify-end h-full w-full relative md:w-[60%] ml-auto">
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.2 }}
						transition={{ duration: 1 }}
						src={heroImg}
						alt="carl-img"
						className="rounded-3xl object-cover blur-sm"
					/>
				</div>
			</motion.div>
		</>
	);
};

export default Background;
