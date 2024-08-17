import React, { useState } from "react";
import { NAVIGATION_LINKS } from "../constants/index.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const handleLinkClick = (e, href) => {
		e.preventDefault();
		if (href === "/Tirth_Patel_Resume.pdf") {
			window.open(href, "_blank");
			return;
		}
		const targetElement = document.querySelector(href);
		if (targetElement) {
			const offset = -48;
			const elementPosition = targetElement.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY + offset;
			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<div>
			<nav className="fixed left-0 right-0 top-4 z-50">
				{/* <Desktop Menu /> */}
				<div className="mx-auto hidden max-w-[44rem] items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg md:flex">
					<div className="flex justify-between items-center gap-6">
						<div>
							<a href="#">
								<span className="bg-gradient-to-r from-purple-800 via-blue-800 to-pink-800 bg-clip-text text-transparent text-2xl font-bold">
									TIRTH PATEL
								</span>
							</a>
						</div>
						<div>
							<ul className="flex items-center gap-4">
								{NAVIGATION_LINKS.map((item, index) => (
									<li key={index}>
										<a
											className="text-sm hover:text-yellow-400"
											href={item.href}
											onClick={(e) => handleLinkClick(e, item.href)}
										>
											{item.label}
										</a>
                    {/* for directly downloading the resume */}
										{/* <a
											className="text-sm hover:text-yellow-400"
											href={item.href}
											download={
												item.href === "/Tirth_Patel_Resume.pdf" &&
												"Tirth_Patel_Resume.pdf"
											}
											onClick={(e) =>
												item.href === "/Tirth_Patel_Resume.pdf"
													? null
													: handleLinkClick(e, item.href)
											}
										>
											{item.label}
										</a> */}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				{/* Mobile Menu */}
				<div className="rounded-lg backdrop-blur-md md:hidden">
					<div className="flex items-center justify-between pl-3 pr-3">
						<div>
							<a href="#">
								<span className="bg-gradient-to-r from-purple-800 via-blue-800 to-pink-800 bg-clip-text text-transparent text-3xl font-bold p-2">
									TIRTH PATEL
								</span>
							</a>
						</div>
						<div className="flex items-center">
							<button
								className="focus:outline-none lg:hidden"
								onClick={toggleMobileMenu}
							>
								{isMobileMenuOpen ? (
									<FaTimes className="m-2 h-6 w-5" />
								) : (
									<FaBars className="m-2 h-6 w-5" />
								)}
							</button>
						</div>
					</div>
					{isMobileMenuOpen && (
						<ul className="pl-6 pr-6 pb-4 pt-4 flex flex-col gap-4 backdrop-blur-lg text-2xl">
							{NAVIGATION_LINKS.map((item, index) => (
								<li key={index}>
									<a
										className="block w-full text-lg"
										href={item.href}
										onClick={(e) => handleLinkClick(e, item.href)}
									>
										{item.label}
									</a>
                  {/* for directly downloading the resume */}
									{/* <a
											className="text-sm hover:text-yellow-400"
											href={item.href}
											download={
												item.href === "/Tirth_Patel_Resume.pdf" &&
												"Tirth_Patel_Resume.pdf"
											}
											onClick={(e) =>
												item.href === "/Tirth_Patel_Resume.pdf"
													? null
													: handleLinkClick(e, item.href)
											}
										>
											{item.label}
										</a> */}
								</li>
							))}
						</ul>
					)}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
