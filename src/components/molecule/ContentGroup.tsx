import styled from '@emotion/styled';

import ContentCard from '@/components/atom/ContentCard';

import backIcon from '@/assets/icons/button-back-icon.svg';

type ContentGroupType = 'default' | 'back';

interface IconBoxItem {
	content: string[];
	iconUrl: string;
}

interface ContentGroupStyle {
	type?: ContentGroupType;
}

export interface ContentGroupProps extends ContentGroupStyle {
	title: string;
	subTitle?: string;
	imgUrl: string;
	icon: IconBoxItem;
	onClick?: () => void;
}

const ContentGroup = ({ type = 'default', title, subTitle, imgUrl, icon, onClick }: ContentGroupProps) => {
	return (
		<>
			{type === 'back' && <BackButton type='button' onClick={onClick} />}
			<TitleWrap>
				<Title>{title}</Title>
				<p>{subTitle}</p>
			</TitleWrap>
			<Img src={imgUrl} alt='' />
			<IconWrap>
				<ContentCard useShadow>
					{icon.content.map((contentText, index) => (
						<ContentItem key={index}>
							{icon.content.length > 1 && <CircleIndicator />}
							<p>{contentText}</p>
						</ContentItem>
					))}
					<CardImg src={icon.iconUrl} alt='' />
				</ContentCard>
			</IconWrap>
		</>
	);
};

const BackButton = styled.button`
	position: absolute;
	top: 40px;
	left: 40px;

	width: 44px;
	height: 44px;
	border: none;
	border-radius: 50px;
	background: #ffffff url(/button-back-icon.svg) center no-repeat;
`;

const TitleWrap = styled.div`
	text-align: center;

	min-width: 240px;
`;

const Title = styled.p`
	text-align: center;
	font-size: 52px;
	line-height: 52px;
	margin-bottom: 4px;
	white-space: pre-line;
`;

const Img = styled.img`
	width: 840px;
	height: 473px;
	margin: 0 40px;
	border-radius: 12px;
`;

const IconWrap = styled.div`
	div + div {
		margin-top: 17px;
	}
`;

const ContentItem = styled.div`
	display: flex;

	p {
		flex: 1;
	}
`;

const CircleIndicator = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 100px;
	background-color: #412f8b;
	margin-right: 8px;
	margin-top: 5px;
`;

const CardImg = styled.img`
	width: 68px;
	height: 68px;
`;

export default ContentGroup;
