import { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import AnimationTitle from '@/components/atom/AnimationTitle';
import OneSectionLayout from '@/layouts/OneSectionLayout';
import CodeCardBox, { gifData } from '@/components/molecule/CodeCardBox';
import MainButton from '@/components/atom/MainButton';

const titles = ['Analysis', 'Design', 'Development', 'Testing', 'Special Features'];
const defaultTitle = 'YOUR AI CODING PARTNER';
const defaultDescription = '나만의 AIDD와 함께, AI! 개발자의 일상이 되다';
const selectedDescription = 'AIDD Highlight';

const IntroSection = () => {
	const [selectedTitle, setSelectedTitle] = useState(defaultTitle);
	const [description, setDescription] = useState(defaultDescription);
	const [rotation, setRotation] = useState(0);
	const [justifyContent, setJustifyContent] = useState('center');

	const handleCardClick = (index: number) => {
		setSelectedTitle(titles[index]);
		setDescription(selectedDescription);
		setRotation(prev => prev + 45);

		if (index === 0) {
			setJustifyContent('flex-start');
		} else if (index === gifData.length - 1) {
			setJustifyContent('flex-end');
		} else {
			setJustifyContent('center');
		}
	};

	return (
		<Container
			initial={{ width: '20%', height: '30%', borderRadius: '100px' }}
			animate={{
				width: '100%',
				height: '100%',
				borderRadius: '0px'
			}}
			transition={{
				duration: 1,
				ease: 'easeInOut',
				borderRadius: {
					duration: 0.8,
					delay: 0.2
				},
				width: { duration: 1 },
				height: { duration: 1 }
			}}
		>
			<WrapperBg rotation={rotation}>
				<OneSectionLayout />
			</WrapperBg>
			<WrapperTitle initial={{ marginTop: 0 }} animate={{ marginTop: -200 }} transition={{ duration: 0.7, delay: 0.3 }}>
				<AnimationTitle title={selectedTitle} description={description} />
			</WrapperTitle>
			<WrapperContents
				initial={{ width: '480px', gap: '56px', top: '130%' }}
				animate={{
					width: '100%',
					gap: ['56px', '120px', '56px'],
					top: ['130%', '55%', '60%'],
					justifyContent: justifyContent
				}}
				transition={{
					width: { duration: 1.5, ease: 'easeInOut', delay: 1.6 },
					gap: { duration: 1.5, ease: 'easeInOut', times: [0, 0.3, 1], delay: 1.6 },
					top: { duration: 1.9, delay: 1.2 }
				}}
				justifyContent={justifyContent}
			>
				<CodeCardBox onCardClick={handleCardClick} />
			</WrapperContents>
			<WrapperButton initial={{ opacity: 0, marginTop: 0 }} animate={{ opacity: 1, marginTop: -50 }} transition={{ duration: 1, delay: 2 }}>
				<MainButton />
			</WrapperButton>
		</Container>
	);
};

const Container = styled(motion.div)`
	position: relative;
	width: 100%;
	height: 100%;
	border-radius: 100px;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const WrapperBg = styled(motion.div)<{ rotation: number }>`
	position: absolute;
	width: 100%;
	height: 100%;

	& > div > div {
		transition: all 0.3s;
		transform: rotate(${({ rotation }) => rotation}deg);
	}
`;

const WrapperTitle = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: #fff;
	text-align: center;
	white-space: nowrap;
`;

const WrapperContents = styled(motion.ul)<{ justifyContent: string }>`
	position: absolute;
	top: 130%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: ${({ justifyContent }) => justifyContent};
	gap: 56px;
	transition: 0.3s;
	padding: 0 80px;
`;

const WrapperButton = styled(motion.div)`
	position: absolute;
	top: 90%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: fit-content;
	border-radius: 40px;
	overflow: hidden;
`;

export default IntroSection;
