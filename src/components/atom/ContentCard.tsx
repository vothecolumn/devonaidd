import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

type ContentCardType = 'button' | 'box';

interface ContentCardProps extends ContentCardStyle {
	children?: React.ReactNode;
	type?: ContentCardType;
	onClick?: () => void;
	buttonCount?: number;
	buttonTitle?: string;
	animationIcon?: string;
}

interface ContentCardStyle {
	useShadow?: boolean;
	width?: string;
	height?: string;
	padding?: string;
	borderRadius?: string;
}

const ContentCard = ({
	children,
	type = 'box',
	width = '240px',
	height = '300px',
	padding = '28px 28px 32px',
	useShadow = false,
	borderRadius,
	onClick,
	buttonCount,
	buttonTitle,
	animationIcon
}: ContentCardProps) => {
	const controls = useAnimation();
	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => {
		setIsHovered(true);
		controls.start({
			y: -200,
			transition: { duration: 0.4, ease: 'easeInOut' }
		});
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		controls.start({
			y: 0,
			transition: { duration: 0.4, ease: 'easeInOut' }
		});
	};

	console.log(animationIcon);

	return (
		<>
			{type === 'box' ? (
				<ContentCardBox width={width} height={height} padding={padding} useShadow={useShadow} borderRadius={borderRadius}>
					{children}
				</ContentCardBox>
			) : (
				<ContentCardButton
					type='button'
					width={width}
					height={height}
					padding={padding}
					useShadow={useShadow}
					borderRadius={borderRadius}
					onClick={onClick}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<CardNumber>{buttonCount}</CardNumber>
					<AnimationContent animate={controls}>
						<CardTitle>{buttonTitle}</CardTitle>
						<img src={animationIcon} alt='' />
					</AnimationContent>
				</ContentCardButton>
			)}
		</>
	);
};

const ContentCardBox = styled.div<ContentCardStyle>`
	display: flex;
	flex-direction: column;
	background-color: rgba(255, 255, 255, 255.7);
	border-radius: 12px;

	font-size: 16px;
	color: #412f8b;
	word-break: keep-all;
	white-space: pre-line;

	width: ${({ width }) => width};
	height: ${({ height }) => height};
	padding: ${({ padding }) => padding};
	border-radius: ${({ borderRadius }) => borderRadius};

	${({ useShadow }) =>
		useShadow &&
		css`
			box-shadow: 24px 40px 44px rgba(0, 0, 0, 0.05);
		`}

	img {
		margin-top: auto;
	}
`;

const ContentCardButton = styled.button<ContentCardStyle>`
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	background-color: rgba(255, 255, 255, 255.7);
	border-radius: 12px;

	font-size: 16px;
	color: #412f8b;

	width: ${({ width }) => width};
	height: ${({ height }) => height};
	padding: ${({ padding }) => padding};

	${({ useShadow }) =>
		useShadow &&
		css`
			box-shadow: 24px 40px 44px rgba(0, 0, 0, 0.05);
		`}
`;

const CardNumber = styled.div`
	width: 32px;
	height: 32px;
	text-align: center;

	border-radius: 50px;
	background-color: rgba(65, 47, 139, 0.1);

	font-size: 18px;
	line-height: 32px;
	color: #412f8b;
`;

const AnimationContent = styled(motion.div)`
	position: absolute;
	width: calc(100% - 64px);
	height: 200px;
	bottom: -40%;
	background-color: rgba(255, 255, 255, 255.7);

	text-align: center;

	img {
		width: 150px;
		height: 150px;
	}
`;

const CardTitle = styled.p`
	text-align: left;
	margin-bottom: 50px;

	font-size: 24px;
	color: #412f8b;
	white-space: pre-line;
`;

export default ContentCard;
