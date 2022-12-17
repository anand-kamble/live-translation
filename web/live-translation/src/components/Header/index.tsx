import React from 'react';
import { AppState } from '../../App';
import { openLink } from '../../utils';

const Header = ({
	state,
	setState,
}: {
	setState: React.Dispatch<React.SetStateAction<AppState>>;
	state: AppState;
}) => {
	return (
		<div className="h-full w-full flex flex-row">
			<p className="text-xl text-gray-100 ml-10 px-10 py-10 w-[50%]">
				<b>Live Translator</b>
			</p>
			<div className="text-gray-100 w-[50%] flex flex-row justify-end py-10 float-right">
				<span
					onClick={() => {
						setState({ activePage: 'home' });
					}}
					className={`px-4 cursor-pointer hover:font-bold duration-200 w-36 ${
						state.activePage === 'home' ? 'underline' : ''
					}`}
				>
					Home
				</span>
				<span
					onClick={() => {
						setState({ activePage: 'about' });
					}}
					className={`px-4 cursor-pointer hover:font-bold duration-200 w-36 ${
						state.activePage === 'about' ? 'underline' : ''
					}`}
				>
					About
				</span>
				<span
					className="pl-4 cursor-pointer hover:font-bold duration-200 w-36 mr-10"
					onClick={() =>
						openLink('https://github.com/anand-kamble/live-translation')
					}
				>
					Source code
				</span>
			</div>
		</div>
	);
};

export default Header;
