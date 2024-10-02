import styled from '@emotion/styled';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

import ContentCard from '@/components/atom/ContentCard';
import myProjectIcon from '@/assets/images/my-project.gif';
import anytimeIcon from '@/assets/images/anytime.gif';
import anywhereIcon from '@/assets/images/anywhere.gif';

const ThreeSection = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const sectionRef = useRef(null);

	const CardData = [
		{
			title: 'My Project \n AIDD',
			content:
				'자사만의 강점인 AI Coding Orchestrator를 통해 \n 별도의 학습 없이도​ 프로젝트 특성 정보(코딩 표준, 보안 표준, 메타 시스템, DB 스키마 등)를 빠르게 반영하여 프로젝트에 \n 최적화된 맞춤형 코드를 생성합니다.',
			img: myProjectIcon
		},
		{
			title: 'Anytime \n AIDD',
			content:
				'프로젝트 개발 공정의 모든 단계에서 AI Coding을 통해 \n 효율성과 생산성을 향상 시킬 수 있습니다. 프로젝트 관리와 \n 실행의 모든 단계에서 AI의 통합 사용을 통해 일괄된 품질과 \n 효율성을 보장합니다.',
			img: anytimeIcon
		},
		{
			title: 'Anywhere \n AIDD',
			content:
				'코드 분석, 생성, 요약, 테스트 작성 등 개발 공정에 최적화된 \n 자사의 설치형 모델과 Open API LLM을 통한 Best of Bread 전략으로 특정 작업에 적합한 LLM을 선택할 수 있습니다. \n 이를 통해 다양한 작업 환경과 요구사항에 맞게 \n 최적화된 AI Coding 솔루션을 제공함으로써 폭넓은 적용 \n 가능성과 유연성을 제공합니다.',
			img: anywhereIcon
		}
	];

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{
				threshold: 0.1
			}
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<Container ref={sectionRef}>
			<Wrap>
				<Title
					initial={{ y: 50, opacity: 0 }}
					animate={isVisible ? { y: 0, opacity: 1 } : {}}
					exit={{ y: 50, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					보다 극대화 된 워크시스템
				</Title>
				<Group
					initial={{ y: 70, opacity: 0 }}
					animate={isVisible ? { y: 0, opacity: 1 } : {}}
					exit={{ y: 70, opacity: 0 }}
					transition={{ duration: 0.8 }}
				>
					{CardData.map((item, index) => (
						<li key={index}>
							<ContentCard width='100%' height='588px' padding='52px' borderRadius='24px'>
								<CardTitle>{item.title}</CardTitle>
								<CardDescription>{item.content}</CardDescription>
								<CardImg src={item.img} alt='' />
							</ContentCard>
						</li>
					))}
				</Group>
			</Wrap>
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100.5%;
	background-color: #f9f9f9;
`;

const Wrap = styled.div`
	max-width: 1496px;
`;

const Title = styled(motion.h2)`
	margin-top: 40px;
	text-align: center;
	font-size: 56px;
	font-weight: 800;
	color: #412f8b;
`;

const Group = styled(motion.ul)`
	display: flex;
	margin-top: 80px;

	li {
		flex: 1;
	}

	> li + li {
		margin-left: 24px;
	}
`;

const CardTitle = styled.p`
	font-family: 'Lexend';
	font-weight: 400;
	font-size: 40px;
	color: #412f8b;
	white-space: pre-line;
`;

const CardDescription = styled.p`
	margin-top: 32px;
	font-size: 16px;
	color: #412f8b;
	white-space: pre-line;
`;

const CardImg = styled.img`
	width: 140px;
	height: 140px;
`;

export default ThreeSection;
