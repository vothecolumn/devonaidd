import { motion } from 'framer-motion';

export interface IAnimationProps {
	children?: React.ReactNode;
	initial?: {
		opacity?: number;
		y?: number;
	};
	animate?: {
		opacity?: number;
		y?: number;
		transition?: {
			delay?: number;
		};
	};
	transition?: {
		duration?: number;
		delay?: number;
		when?: 'beforeChildren' | 'afterChildren';
	};
	exit?: {
		opacity?: number;
		y?: number;
		transition?: {
			duration?: number;
			delay?: number;
		};
	};
	onAnimationComplete?: () => void;
}

export const Animation = ({ children, initial, animate, transition, exit, onAnimationComplete }: IAnimationProps) => {
	return (
		<motion.div initial={initial} animate={animate} transition={transition} exit={exit} onAnimationComplete={onAnimationComplete}>
			{children}
		</motion.div>
	);
};
