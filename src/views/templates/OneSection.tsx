import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MainLabel from '@/components/atom/MainLabel';
import IntroSection from './IntroSection';

const OneSection = () => {
	const [isFirstLabelVisible, setIsFirstLabelVisible] = useState(true);
	const [isSecondLabelVisible, setIsSecondLabelVisible] = useState(false);
	const [isIntroVisible, setIsIntroVisible] = useState(false);

	useEffect(() => {
		const timer1 = setTimeout(() => {
			setIsFirstLabelVisible(false);
		}, 1200);

		const timer2 = setTimeout(() => {
			setIsSecondLabelVisible(true);
		}, 1000);

		const timer3 = setTimeout(() => {
			setIsSecondLabelVisible(false);
			setIsIntroVisible(true);
		}, 2300);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
			clearTimeout(timer3);
		};
	}, []);

	return (
		<Container>
			<AnimatePresence>
				{isFirstLabelVisible && (
					<MainLabel
						label={`나만의\nAIDD와 함께!`}
						initial={{ y: 78, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -78, opacity: 0, transition: { duration: 0.5 } }}
						transition={{
							duration: 0.5,
							delay: 0.5,
							when: 'beforeChildren'
						}}
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{isSecondLabelVisible && (
					<MainLabel
						label={`AI 개발자의 일상이 되다!`}
						initial={{ y: 78, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -78, opacity: 0, transition: { duration: 0.5 } }}
						transition={{
							duration: 0.5,
							delay: 0.5
						}}
					/>
				)}
			</AnimatePresence>
			{isIntroVisible && <IntroSection />}
		</Container>
	);
};

const Container = styled.section`
	position: relative;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default OneSection;
