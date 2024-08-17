import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<div className="mb-8 mt-20">
			<div className="flex items-center justify-center">
				<motion.span
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="my-20 bg-gradient-to-r from-purple-800 via-blue-800 to-pink-800 bg-clip-text text-transparent text-2xl font-bold"
				>
          SOCIAL LINKS
        </motion.span>
			</div>
			<div className="flex items-center justify-center gap-8">
				{SOCIAL_MEDIA_LINKS.map((link, index) => (
					<motion.a
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.2, delay: index * 0.5 }}
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						key={index}
					>
						{link.icon}
					</motion.a>
				))}
			</div>
			<p className="mt-8 text-center text-sm tracking-wide text-gray-400">
				&copy;TirthPatel. All rights reserved.
			</p>
		</div>
	);
};

export default Footer;
