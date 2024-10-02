import { useState } from 'react';
import CodeCard from '../atom/CodeCard';
import { ECodeCardStyleType } from '../atom/CodeCard';
import gif1 from '@/assets/images/LGCNS_AAI_16_코드분석.gif';
import gif2 from '@/assets/images/LGCNS_AAI_01_주석기반메서드생성.gif';
import gif3 from '@/assets/images/LGCNS_AAI_03_CommentChat.gif';
import gif4 from '@/assets/images/LGCNS_AAI_17_테스트케이스생성.gif';
import gif5 from '@/assets/images/LGCNS_AAI_07_요약.gif';

export const gifData: string[] = [gif1, gif2, gif3, gif4, gif5];

interface CodeCardBoxProps {
	onCardClick: (index: number) => void;
}

const CodeCardBox = ({ onCardClick }: CodeCardBoxProps) => {
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const handleCardClick = (index: number) => {
		setSelectedIndex(index);
		onCardClick(index);
	};

	return (
		<>
			{gifData.map((gif, i) => (
				<li key={i} onClick={() => handleCardClick(i)}>
					<CodeCard
						gif={gif}
						isSelected={selectedIndex === i}
						styleType={
							selectedIndex === i ? ECodeCardStyleType.ACTIVE : selectedIndex !== null ? ECodeCardStyleType.DISABLED : ECodeCardStyleType.NORMAL
						}
					/>
				</li>
			))}
		</>
	);
};

export default CodeCardBox;
