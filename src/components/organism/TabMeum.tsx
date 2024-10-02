import styled from '@emotion/styled';
import { useState } from 'react';

import TabButton from '@/components/atom/TabButton';
import ContentGroup, { ContentGroupProps } from '@/components/molecule/ContentGroup';
import CardGroup from '@/components/molecule/CardGroup';

type ContentType = 'content' | 'card';

export interface TabMeumData {
	buttonLabel: string;
	contentType: ContentType;
	contentData?: ContentGroupProps;
	cardData?: string[];
	cardDataDetail?: ContentGroupProps[];
	animationIcon?: string;
}

interface TabMeumProps {
	data: TabMeumData[];
}

const TabMeum = ({ data }: TabMeumProps) => {
	const [selectedTab, setSelectedTab] = useState<number>(0);

	const handleTabChange = (index: number) => {
		setSelectedTab(index);
	};

	return (
		<TabMeumContainer>
			<TabButtonGroup>
				{data.map((item, index) => (
					<li key={index}>
						<TabButton label={item.buttonLabel} isActive={selectedTab === index} onClick={() => handleTabChange(index)} />
					</li>
				))}
			</TabButtonGroup>
			<ContentWrap>
				{data[selectedTab].contentType === 'content' ? (
					<ContentGroup
						title={data[selectedTab].contentData!.title}
						subTitle={data[selectedTab].contentData?.subTitle}
						imgUrl={data[selectedTab].contentData!.imgUrl}
						icon={data[selectedTab].contentData!.icon}
					/>
				) : (
					<CardGroup titles={data[selectedTab].cardData!} animationIcon={data[selectedTab].animationIcon!} data={data[selectedTab].cardDataDetail!} />
				)}
			</ContentWrap>
		</TabMeumContainer>
	);
};

const TabMeumContainer = styled.div`
	margin-top: 40px;
`;

const TabButtonGroup = styled.ul`
	display: flex;
	justify-content: center;

	> li:not(:last-child) {
		margin-right: 32px;
	}
`;

const ContentWrap = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 712px;
	margin-top: 32px;
	border-radius: 24px;

	background: linear-gradient(0deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%),
		radial-gradient(74.11% 131.76% at 50% 100%, rgba(53, 231, 255, 0.6) 0%, rgba(76, 156, 229, 0.6) 100%),
		radial-gradient(170.03% 124.7% at 94.32% 83.83%, #db74ff 2.89%, #4c60a6 83.48%);
	background-blend-mode: normal, color-dodge, normal;
`;

export default TabMeum;
