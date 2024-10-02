import styled from '@emotion/styled';
import { delay, motion } from 'framer-motion';
import graphic1 from '@/assets/images/graphic-3.png';
import graphic2 from '@/assets/images/graphic-4.png';

interface IGraphicAnimationProps {
	graphic: string;
	initialX: number;
	finalX: number;
}

const animationVariants = {
	initial: { x: 0 },
	animate: {
		transition: { duration: 2, ease: 'easeInOut', delay: 1.6 }
	}
};

const GraphicAnimation = ({ graphic, initialX, finalX }: IGraphicAnimationProps) => (
	<motion.span
		className='description-hidden'
		variants={{
			...animationVariants,
			animate: {
				...animationVariants.animate,
				x: [initialX, finalX, 0]
			}
		}}
		initial='initial'
		animate='animate'
	>
		{graphic}
	</motion.span>
);

const OneSectionLayout = () => {
	return (
		<Container>
			<Wrapper>
				<GraphicAnimation graphic='graphic image1' initialX={-850} finalX={80} />
				<GraphicAnimation graphic='graphic image2' initialX={500} finalX={-80} />
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background: radial-gradient(74.11% 131.76% at 50% 100%, rgba(53, 231, 255, 0.6) 0%, rgba(76, 156, 229, 0.6) 100%),
		radial-gradient(170.03% 124.7% at 94.32% 83.83%, #db74ff 2.89%, #4c60a6 83.48%);
	background-blend-mode: color-dodge, normal;
`;

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	span {
		position: absolute;
		display: inline-block;

		:first-of-type {
			top: 0;
			left: 0;
			width: 1068px;
			height: 1068px;
			background: url(${graphic1}) center / contain no-repeat;
		}

		:last-of-type {
			bottom: 0;
			right: 0;
			width: 669px;
			height: 669px;
			background: url(${graphic2}) center / contain no-repeat;
		}
	}
`;

export default OneSectionLayout;
