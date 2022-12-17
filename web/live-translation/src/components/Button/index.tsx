import React from 'react';

interface ButtonType {
	label: string;
	onClick: () => void;
}

const Button = ({ label, onClick }: ButtonType) => {
	return (
		<div onClick={onClick}>
			<p>{label}</p>
		</div>
	);
};

export default Button;
