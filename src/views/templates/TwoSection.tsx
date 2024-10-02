import styled from '@emotion/styled';

import TabMeum, { TabMeumData } from '@/components/organism/TabMeum';

// 기능 설명 때 나오는 중간 움짤 부분
import bizSpec from '@/assets/images/LGCNS_AAI_16_코드분석.gif';
import aIDesign from '@/assets/images/LGCNS_AAI_18_AIDesign(BizSpec).gif';
import testCase from '@/assets/images/LGCNS_AAI_17_테스트케이스생성.gif';
import CommentChat from '@/assets/images/LGCNS_AAI_03_CommentChat.gif';
import annotationBased from '@/assets/images/LGCNS_AAI_01_주석기반메서드생성.gif';
import nextCode from '@/assets/images/LGCNS_AAI_02_다음코드추천.gif';
import automaticError from '@/assets/images/LGCNS_AAI_06_오류자동수정.gif';
import exceptionHelper from '@/assets/images/LGCNS_AAI_14_ExceptionHelper.gif';
import sqlCreation from '@/assets/images/LGCNS_AAI_09_SQL생성.gif';
import sqlTuning from '@/assets/images/LGCNS_AAI_15_SQL튜닝.gif';
import aiPlay from '@/assets/images/LGCNS_AAI_08_AI Play.gif';
import summary from '@/assets/images/LGCNS_AAI_07_요약.gif';
import autoAI from '@/assets/images/LGCNS_AAI_13_AutoAI.gif';
import codeConversion from '@/assets/images/LGCNS_AAI_11_코드변환.gif';

// developmetn와 special 호버시 나오는 아이콘 움짤 부분
import developmentIcon from '@/assets/images/development.gif';
import specialFeaturesIcon from '@/assets/images/special-features.gif';

// 기능 설명 때 나오는 아이콘 부분
import specialFeaturesDetailIcon from '@/assets/images/special-features-detail-icon.png';
import developmentDetailIcon from '@/assets/images/development-detail-icon.png';
import testingDetailIcon from '@/assets/images/testing-detail-icon.png';
import designDetailIcon from '@/assets/images/design-detail-icon.png';
import analysisDetailIcon from '@/assets/images/analysis-detail-icon.png';

const TwoSection = () => {
	const Tab: TabMeumData[] = [
		{
			buttonLabel: 'Analysis',
			contentType: 'content',
			contentData: {
				title: '코드 분석',
				subTitle: 'BizSpec',
				imgUrl: bizSpec,
				icon: {
					iconUrl: analysisDetailIcon,
					content: ['As-Is 코드에서 자연어로 된 Biz Spec 추출하여 이해하기 쉬운 형태의 설명문으로 요약']
				}
			}
		},
		{
			buttonLabel: 'Design',
			contentType: 'content',
			contentData: {
				title: '코드 설계',
				subTitle: 'BizSpec 편집',
				imgUrl: aIDesign,
				icon: {
					iconUrl: designDetailIcon,
					content: ['Biz Spec을 수정하거나 새로운 로직을 추가하여 To-Be형식의 소스코드 생성이 가능한 설계 문서 작성 ']
				}
			}
		},
		{
			buttonLabel: 'Development',
			contentType: 'card',
			cardData: [
				'Comment \n Chat',
				'주석 기반 \n 코드 생성',
				'다음 코드 \n 추천',
				'오류 자동 수정',
				'Exception Helper',
				'SQL \n 생성',
				'SQL \n 튜닝'
			],
			animationIcon: developmentIcon,
			cardDataDetail: [
				{
					title: 'Comment \n Chat',
					imgUrl: CommentChat,
					icon: {
						iconUrl: developmentDetailIcon,
						content: ['프롬프트 기반 요청 및 응답이 가능한 인터페이스 제공']
					}
				},
				{
					title: '주석 기반  \n 코드 생성',
					imgUrl: annotationBased,
					icon: {
						iconUrl: developmentDetailIcon,
						content: [
							'사용자 입력 주석 기반 메서드를 패턴화 하여 응용 프레임워크에 맞는 코드 생성',
							'클래스 내 반복되는 메서드 생성 자동화',
							'패턴에 따른 적용 범위 확대 가능'
						]
					}
				},
				{
					title: '다음 코드 \n 추천',
					imgUrl: nextCode,
					icon: {
						iconUrl: developmentDetailIcon,
						content: ['임의의 위치에서 다음으로 이어질 한 줄 또는 여러 줄의 코드를 개발 표준에 맞게 추천']
					}
				},
				{
					title: '오류 자동 수정',
					imgUrl: automaticError,
					icon: {
						iconUrl: developmentDetailIcon,
						content: ['별도의 탐색 과정 없이 즉각적인 결함 수정', '에디터 내 결함 즉시 수정', '오류의 원인과 해결 방안 제시']
					}
				},
				{
					title: 'Exception Helper',
					imgUrl: exceptionHelper,
					icon: {
						iconUrl: developmentDetailIcon,
						content: ['오류 로그를 기반으로 오류의 원인을 파악', '개발자가 즉시 활용 가능한 해결책을 제시']
					}
				},
				{
					title: 'SQL \n 생성',
					imgUrl: sqlCreation,
					icon: {
						iconUrl: developmentDetailIcon,
						content: ['DB 기반 사용자 임의 쿼리 생성', '테이블 및 컬럼 기반 사용자 입력 요청사항을 반영한 쿼리 생성']
					}
				},
				{
					title: 'SQL \n 튜닝',
					imgUrl: sqlTuning,
					icon: {
						iconUrl: developmentDetailIcon,
						content: ['쿼리 실행 계획을 기반으로 성능 상의 한계를 탐지하고 해결 방안을 제시']
					}
				}
			]
		},
		{
			buttonLabel: 'Testing',
			contentType: 'content',
			contentData: {
				title: '테스트 \n 케이스 생성',
				imgUrl: testCase,
				icon: {
					iconUrl: testingDetailIcon,
					content: ['소스 코드의 기능(함수) 별로 바로 실행 가능한 수준의 단위 테스트 케이스와 데이터를 자동 생성 ']
				}
			}
		},
		{
			buttonLabel: 'Special Features',
			contentType: 'card',
			cardData: ['AI \n Play', '요약', 'Auto \n AI', '코드 \n 변환'],
			animationIcon: specialFeaturesIcon,
			cardDataDetail: [
				{
					title: 'AI \n Play',
					imgUrl: aiPlay,
					icon: {
						iconUrl: specialFeaturesDetailIcon,
						content: ['프롬프트 기반 \n 요청 및 응답이 가능한 \n 인터페이스 제공']
					}
				},
				{
					title: '요약',
					imgUrl: summary,
					icon: {
						iconUrl: specialFeaturesDetailIcon,
						content: [' 코드에 대한 간략한 설명 제공', '선택한 코드를 10글자 이내의 한글로 요약', '코드 내 로직과 주요 단어에 대한 설명 제시']
					}
				},
				{
					title: 'Auto \n AI',
					imgUrl: autoAI,
					icon: {
						iconUrl: specialFeaturesDetailIcon,
						content: ['단순한 기능을 One-Click으로 개발 완료', '코드/SQL생성, 테스트, 품질 검증 및 오류 수정 자동 수행']
					}
				},
				{
					title: '코드 \n 변환',
					imgUrl: codeConversion,
					icon: {
						iconUrl: specialFeaturesDetailIcon,
						content: ['As-is 코드와 SQL을 To-Be 표준에 맞게 변환', 'LG CNS의 전문 프롬프트 엔지니어가 고객사 방문하여 변환 서비스 제공']
					}
				}
			]
		}
	];

	return (
		<Container>
			<Wrap>
				<Title>
					<span>AIDD</span> 하이라이트
				</Title>
				<TabMeum data={Tab} />
			</Wrap>
		</Container>
	);
};

const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;

	height: 1100px;
	background-color: #f9f9f9;
`;

const Wrap = styled.div`
	width: 1920px;
`;

const Title = styled.h2`
	text-align: center;

	font-size: 56px;
	font-weight: 800;
	color: #412f8b;

	span {
		font-family: 'Lexend';
		font-weight: 500;
	}
`;

export default TwoSection;
