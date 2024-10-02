import { motion } from 'framer-motion';
import styled from '@emotion/styled';

interface SlideIconProps {
	src: string;
	initialY: number;
	opacityInitial: number;
	width?: string;
	top?: string;
	left?: string;
	right?: string;
	transitionDuration?: number;
	isVisible: boolean;
	zIndex?: number;
}

const SlideIcon = ({ src, initialY, opacityInitial, width, top, left, right, transitionDuration = 0.5, isVisible, zIndex }: SlideIconProps) => {
	return (
		<Icon
			src={src}
			initial={{ y: initialY, width: width, top: top, left: left, right: right, opacity: opacityInitial }}
			animate={isVisible ? { y: 0, opacity: 1 } : {}}
			exit={{ y: initialY, opacity: 0 }}
			transition={{ duration: transitionDuration }}
			zIndex={zIndex}
		/>
	);
};

const Icon = styled(motion.img)<{ zIndex?: number }>`
	position: absolute;

	${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
`;

export default SlideIcon;
