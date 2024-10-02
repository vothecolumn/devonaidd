import styled from '@emotion/styled';

interface IAnimationTitleProps {
	description?: string;
	title: string;
}

const AnimationTitle = ({ description, title }: IAnimationTitleProps) => {
	return (
		<>
			<Description>{description}</Description>
			<Title>{title}</Title>
		</>
	);
};

const Description = styled.p`
	font-size: 18px;
	font-weight: 500;
	line-height: 140%;
	letter-spacing: -4%;
	text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
	font-size: 101px;
	font-weight: 800;
	line-height: 100%;
	font-family: Lexend;
	letter-spacing: -3px;
	text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export default AnimationTitle;
