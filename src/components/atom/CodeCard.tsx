import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export enum ECodeCardStyleType {
	NORMAL = 'normal',
	ACTIVE = 'active',
	DISABLED = 'disabled'
}

interface ICodeCardProps {
	gif: string;
	isSelected: boolean;
	styleType: ECodeCardStyleType;
}

const CodeCard = ({ gif, isSelected, styleType = ECodeCardStyleType.NORMAL }: ICodeCardProps) => {
	return <Container type='button' gif={gif} isSelected={isSelected} styleType={styleType} />;
};

const Container = styled(motion.button)<ICodeCardProps>`
	width: 25vw;
	height: 14.063vw;
	border-radius: 8px;
	cursor: pointer;
	transition: 0.3s;
	background: url(${({ gif }) => gif}) center / contain no-repeat;

	${({ styleType }) => {
		switch (styleType) {
			case ECodeCardStyleType.NORMAL:
				return css`
					transform: scale(1);
					opacity: 1;
				`;
			case ECodeCardStyleType.ACTIVE:
				return css`
					transform: scale(1.1);
					opacity: 1;
				`;
			case ECodeCardStyleType.DISABLED:
				return css`
					transform: scale(0.9);
					opacity: 0.6;
				`;
		}
	}}
`;

export default CodeCard;
