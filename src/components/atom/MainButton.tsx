import styled from '@emotion/styled';
import arrowIcon from '@/assets/icons/arrow-main-btn.svg';
import { Link } from 'react-router-dom';


const MainButton = () => {
	return <Link to='/download'><Container type='button'>Download</Container></Link>;
};

const Container = styled.button`
	min-width: 240px;
	height: 80px;
	padding: 30px 52px 28px;
	background-color: #fff;
	color: #412f8b;
	font-size: 20px;
	font-weight: 800;
	line-height: 21px;
	transition: box-shadow 0.3s;

	:hover {
		box-shadow: inset 0 80px 0 0 #412f8b;
		transition: box-shadow 0.3s;
		font-size: 0;
		line-height: 0;

		:before {
			content: '';
			display: inline-block;
			width: 26px;
			height: 32px;
			margin-top: -5px;
			background: url(/arrow-main-btn.svg) center / contain no-repeat;
		}
	}
`;

export default MainButton;
