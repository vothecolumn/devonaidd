import { useState } from 'react';
import styled from '@emotion/styled';

import ContentGroup, { ContentGroupProps } from './ContentGroup';
import ContentCard from '@/components/atom/ContentCard';

export interface CardGroupProps {
	titles: string[];
	animationIcon: string;
	data: ContentGroupProps[];
}

const CardGroup = ({ titles, animationIcon, data }: CardGroupProps) => {
	const [cardDetail, setCardDetail] = useState<number | null>(null);

	const handleCard = (index: number) => {
		setCardDetail(index);
	};

	return (
		<>
			{cardDetail === null ? (
				<CardGroupWrapper>
					{titles.map((item, index) => (
						<ContentCard
							type='button'
							animationIcon={animationIcon}
							key={index}
							onClick={() => handleCard(index)}
							buttonCount={index + 1}
							buttonTitle={item}
						/>
					))}
				</CardGroupWrapper>
			) : (
				<ContentGroupWrapper>
					<ContentGroup
						type='back'
						title={data[cardDetail]!.title}
						subTitle={data[cardDetail]?.subTitle}
						imgUrl={data[cardDetail]!.imgUrl}
						icon={data[cardDetail].icon}
						onClick={() => setCardDetail(null)}
					/>
				</ContentGroupWrapper>
			)}
		</>
	);
};

const CardGroupWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	justify-items: center;
	gap: 24px;
`;

const ContentGroupWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default CardGroup;
