import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface TabButtonStyle {
	isActive?: boolean;
}

interface TabButtonProps extends TabButtonStyle {
	label: string;
	onClick?: () => void;
}

const TabButton = ({ label, onClick, isActive }: TabButtonProps) => {
	return (
		<TabButtonContainer type='button' onClick={onClick} isActive={isActive}>
			{label}
		</TabButtonContainer>
	);
};

const TabButtonContainer = styled.button<TabButtonStyle>`
	text-align: center;

	padding: 16px 24px;
	border-radius: 100px;
	background-color: #f9f9f9;

	font-size: 20px;
	font-family: 'Lexend';
	font-weight: 500;
	color: #00000070;

	&:hover {
		background-color: #e9e9e9;
		color: #000000;
		font-weight: 600;
	}

	${({ isActive }) =>
		isActive &&
		css`
			background-color: #ffffff;
			color: #412f8b;
			font-weight: 600;

			border: 2px solid transparent;
			background-image: linear-gradient(#ffffff, #ffffff),
				linear-gradient(-45deg, #35e7ff, #cb35ff, #4c9ce5 14%, #3a58c0 28%, #4db7bd 42%, #5a90d0 56%, #6c82d2 70%, #4c9ce5 84%);
			background-origin: border-box;
			background-clip: padding-box, border-box;
		`}
`;

export default TabButton;
