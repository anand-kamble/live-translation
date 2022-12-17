import React from 'react';
import { openLink } from '../../utils';

const About = () => {
	return (
		<div className="px-96 text-gray-100 pt-28">
			<p>
				We are still thinking how to describe this project, once we get it we
				will update this page.
			</p>
			<p className="py-4">Till then you can reach out to us through </p>
			<div className="mt-24 grid grid-cols-2">
				<div className="flex justify-center items-center flex-col">
					<p className="text-2xl font-bold">Anand Kamble</p>
					<p
						className="py-4 cursor-pointer"
						onClick={() => openLink('mailto:anandmk837@gmail.com')}
					>
						anandmk837@gmail.com
					</p>
					<div
						className="flex flex-row cursor-pointer"
						onClick={() =>
							openLink('https://www.linkedin.com/in/anandmkamble/')
						}
					>
						<svg
							className="invert"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
						<p className="ml-2">@anandmkamble</p>
					</div>
				</div>
				<div className="flex justify-center items-center flex-col">
					<p className="text-2xl font-bold">Aniket Tathe</p>
					<p
						className="py-4 cursor-pointer"
						onClick={() => openLink('mailto:aniket.motog3.tathe@gmail.com')}
					>
						aniket.motog3.tathe@gmail.com
					</p>
					<div
						className="flex flex-row cursor-pointer"
						onClick={() =>
							openLink('https://www.linkedin.com/in/aniket-tathe-458793200/')
						}
					>
						<svg
							className="invert"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
						<p className="ml-2">@aniket-tathe</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
