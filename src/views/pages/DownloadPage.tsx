import React from 'react';
import styled from '@emotion/styled';
import ProductCard from '../../components/molecule/ProductCard';
import PricingTable from '../../components/molecule/PricingTable';
import { AnimatePresence } from 'framer-motion';
import Header, { EHeaderStyleType } from '@/layouts/Header';

const DownloadPage = () => {
	const headerStyle = EHeaderStyleType.OUTLINE;
	
	return (
		<>
			<Header styleType={headerStyle}/>
			<PageWrapper>
				<MainContent>
					<HeroSection>
						<HeroTitle>나만의 AIDD와 함께, AI! 개발자의 일상이 되다</HeroTitle>
						<ProductCard />
					</HeroSection>
					<FeatureComparisonSection>
						<SectionTitle>주요 기능 비교</SectionTitle>
						<PricingTable />
					</FeatureComparisonSection>
				</MainContent>
			</PageWrapper>
		</>
		
	);
};

const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #fff;
	overflow: hidden;
`;

const MainContent = styled.main`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: flex-start;

	section + section {
		margin-top: 100px;
	}
`;

const HeroSection = styled.section`
	background: radial-gradient(74.11% 131.76% at 50% 100%, rgba(53, 231, 255, 0.6) 0%, rgba(76, 156, 229, 0.6) 100%),
		radial-gradient(75.98% 132.62% at 50% 100%, #cf5eeb 0%, #687bdb 83.48%);
	background-blend-mode: color-dodge, normal;
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 120px 88px 80px;
	@media (max-width: 991px) {
		padding: 40px 20px;
	}
`;

const HeroTitle = styled.h1`
	color: #fff;
	text-align: center;
	letter-spacing: -2.24px;
	font:
		700 56px/1 Pretendard,
		sans-serif;
	@media (max-width: 991px) {
		font-size: 40px;
	}
`;

const FeatureComparisonSection = styled.section`
	background-color: #f9f9f9;
	display: flex;
	width: 100%;
	flex-direction: column;
	padding: 14px 212px 73px;
	@media (max-width: 991px) {
		padding: 14px 20px 73px;
	}
`;

const SectionTitle = styled.h2`
	color: #412f8b;
	text-align: center;
	letter-spacing: -2.24px;
	font:
		700 56px/1 Pretendard,
		sans-serif;
	@media (max-width: 991px) {
		font-size: 40px;
	}
`;

export default DownloadPage;
