import { IAnimationProps } from '@/styles/Animation';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

interface IMainLabelProps extends IAnimationProps {
	label: string;
}

const MainLabel = ({ label, ...animationProps }: IMainLabelProps) => {
	return <Label {...animationProps}>{label}</Label>;
};

const Label = styled(motion.h2)`
	position: absolute;
	color: #000;
	font-size: 80px;
	font-weight: 500;
	line-height: 110%;
	letter-spacing: -4%;
	text-align: center;
	white-space: pre-wrap;
`;

export default MainLabel;
