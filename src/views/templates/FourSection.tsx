import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

import Table from '@/components/atom/MainTable';

import lgcnsLogo from '@/assets/icons/logo.svg';
import icon1 from '@/assets/images/four-section-icon-1.png';
import icon2 from '@/assets/images/four-section-icon-2.gif';
import icon3 from '@/assets/images/four-section-icon-3.png';
import icon4 from '@/assets/images/four-section-icon-4.png';
import icon5 from '@/assets/images/four-section-icon-5.png';
import SlideIcon from '@/components/atom/SlideIcon';

const FourSection = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const sectionRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<Container ref={sectionRef}>
			<Wrap>
				<TitleGroup>
					<Title>
						개발자의 창의성과 생산성을
						<br /> 극대화하는 AI Assistant
						<br /> DevOn AIDD
					</Title>
					<SubTitle>
						DevOn AIDD AI Assistant로서 개발자가 필요한 순간에 적절한 도움을 제공합니다.
						<br /> 'DevOn' 개발 도구와 AI 기반 보조 시스템을 결합하여 코딩, 디버깅, 최적화, 문서화 등 <br /> 다양한 개발 작업을 지원하여 개발자의
						창의성과 생산성을 극대화합니다.
					</SubTitle>
				</TitleGroup>

				<SlideIcon src={icon1} initialY={-100} opacityInitial={0} top='250px' left='20px' isVisible={isVisible} />
				<SlideIcon src={icon2} initialY={100} opacityInitial={0} top='360px' left='300px' isVisible={isVisible} zIndex={5} width='200px' />
				<SlideIcon src={icon3} initialY={-100} opacityInitial={0} top='190px' left='620px' isVisible={isVisible} />
				<SlideIcon src={icon4} initialY={100} opacityInitial={0} top='-40px' right='90px' isVisible={isVisible} />
				<SlideIcon src={icon5} initialY={100} opacityInitial={0} top='220px' right='120px' isVisible={isVisible} />

				<Content
					initial={{ y: 100, opacity: 0 }}
					animate={isVisible && { y: 0, opacity: 1 }}
					exit={{ y: 100, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<TableTitle>DevOn AIDD 공정별 기능 설명</TableTitle>
					<Table caption='공정별 기능 설명' />
				</Content>
				<Logo>
					<img src='/logo.svg' alt='LG CNS' />
				</Logo>
			</Wrap>
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 1583px;
	background: radial-gradient(74.11% 131.76% at 50% 100%, rgba(53, 231, 255, 0.6) 0%, rgba(76, 156, 229, 0.6) 100%),
		radial-gradient(75.98% 132.62% at 50% 100%, #cf5eeb 0%, #687bdb 83.48%);
	background-blend-mode: color-dodge, normal;
`;

const Wrap = styled.div`
	position: relative;
	max-width: 1496px;
`;

const TitleGroup = styled.div`
	display: flex;
	color: #ffffff;
`;

const Title = styled.h2`
	font-size: 48px;
	font-weight: 800;
	margin-right: 68px;
`;

const SubTitle = styled.p`
	font-size: 24px;
`;

const Content = styled(motion.div)`
	position: relative;
	margin-top: 287px;
	padding: 120px 152px;
	z-index: 1;
	background-color: rgba(255, 255, 255, 0.3);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 30px;
`;

const TableTitle = styled.p`
	font-size: 32px;
	font-weight: 800;
`;

const Logo = styled.div`
	margin-top: 130px;
	text-align: center;
`;

export default FourSection;
