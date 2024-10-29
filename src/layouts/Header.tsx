import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { IAnimationProps } from '@/styles/Animation';
import logoCns from '@/assets/icons/logo-cns.png';
import logoCnsDark from '@/assets/icons/logo-cns-dark.png';
import logoDevonaide from '@/assets/icons/logo-devonaide.png';
import logoDevonaideDark from '@/assets/icons/logo-devonaide-dark.png';
import { Link } from 'react-router-dom';

export enum EHeaderStyleType {
	NONE = 'none',
	FILED = 'field',
	OUTLINE = 'outline'
}

interface IHeaderProps extends IAnimationProps {
	styleType?: EHeaderStyleType;
}

const Header = ({ styleType = EHeaderStyleType.NONE, ...animationProps }: IHeaderProps) => {
	const navData = [
		{ label: 'DevOn AIDD', link: '/' },
		{ label: '다운로드', link: '/download' },
	];

	const getLogo = (styleType: EHeaderStyleType, lightLogo: string, darkLogo: string) => {
		return styleType === EHeaderStyleType.FILED ? lightLogo : darkLogo;
	};

	const devonaideLogo = getLogo(styleType, logoDevonaide, logoDevonaideDark);
	const cnsLogo = getLogo(styleType, logoCns, logoCnsDark);

	return (
		<Container styleType={styleType} {...animationProps}>
			<Logo className='description-hidden' img={devonaideLogo}>
				devonaide logo
			</Logo>
			{styleType !== EHeaderStyleType.NONE && (
				<NavBar styleType={styleType}>
					<Menu>
						{navData.map((item, index) => (
							<li key={index}>
								<Item type='button' styleType={styleType} to={item.link} 
								onClick={(event) => {
									if (item.label==='이벤트') {
									event.preventDefault();
									window.open(item.link, '_blank');
									}
								}}>
									{item.label}
								</Item>
							</li>
						))}
					</Menu>
				</NavBar>
			)}
			<Logo className='description-hidden' img={cnsLogo}>
				cns logo
			</Logo>
		</Container>
	);
};

const Container = styled(motion.header)<IHeaderProps>`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 60px;
	padding: 20px 40px;
	z-index: 100;

	${({ styleType }) => {
		switch (styleType) {
			case EHeaderStyleType.NONE:
				return css`
					background-color: transparent;
				`;
			case EHeaderStyleType.FILED:
				return css`
					background: linear-gradient(#4fbbdc 0%, rgba(94, 191, 220, 0) 100%);
				`;
			case EHeaderStyleType.OUTLINE:
				return css`
					background-color: #fff;
					backdrop-filter: blur(80px);
					box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.06);
				`;
		}
	}}
`;

const Logo = styled.h1<{ img: string }>`
	width: 184px;
	background-image: url(${props => props.img});
	background-repeat: no-repeat;
	background-size: contain;

	:first-of-type {
		height: 25px;
		background-position: left;
	}

	:last-of-type {
		height: 32px;
		background-position: right;
	}
`;

const NavBar = styled.nav<IHeaderProps>`
	height: 60px;
	padding: 0 70px;

	${({ styleType }) =>
		styleType === EHeaderStyleType.FILED &&
		css`
			border: inset 1px solid rgba(255, 255, 255, 0.05);
			border-radius: 30px;
			background-color: rgba(255, 255, 255, 0.15);
		`}
`;

const Menu = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 40px;
	height: 100%;
`;

const Item = styled(Link)<IHeaderProps>`
	color: #000;
	font-size: 20px;
	font-weight: 500;
	line-height: 25px;
	letter-spacing: -2%;

	${({ styleType }) =>
		styleType === EHeaderStyleType.FILED &&
		css`
			color: #fff;
		`}
`;

export default Header;
