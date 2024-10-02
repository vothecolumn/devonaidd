import styled from '@emotion/styled';

interface TableProps {
	caption: string;
}

const MainTable = ({ caption }: TableProps) => {
	return (
		<TableContainer>
			<caption>{caption}</caption>
			<colgroup>
				<col width='168px' />
				<col width='168px' />
				<col width='auto' />
			</colgroup>
			<thead>
				<tr>
					<th scope='col'>공정</th>
					<th scope='col'>기능</th>
					<th scope='col'>기능 설명</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>코드 변환</td>
					<td>AI-Trans</td>
					<td>As-is 소스 코드(SQL)를 패턴화 하여 To-Be 개발 표준에 적합한 코드(SQL)로 변환</td>
				</tr>
				<tr>
					<td>분석</td>
					<td>AI-Analysis</td>
					<td>As-is 코드에서 Biz Spec을 추출하여 As-is 코드를 이해하기 쉬운 형태의 설명문으로 요약</td>
				</tr>
				<tr>
					<td>설계</td>
					<td>AI-Design</td>
					<td>As-Analysis 결과에 비즈니스 요건을 반영 하여 To-Be 표준에 맞는 코드 자동 생성</td>
				</tr>
				<tr>
					<td>개발</td>
					<td>AI-Coding</td>
					<td>
						코드 생성/완성, 코드 추천, 코드 리팩토링, SQL 생성 및 튜닝, 오류 로그 기반 해결책 제시, 코드 품질 파악 및 오류 수정 등 개발 관련 다양한
						기능 제공
					</td>
				</tr>
				<tr>
					<td>테스트</td>
					<td>AI-Test</td>
					<td>소스 코드의 기능별로 실행 가능한 수준의 단위 테스트 케이스와 데이터 자동 생성</td>
				</tr>
			</tbody>
		</TableContainer>
	);
};

const TableContainer = styled.table`
	width: 100%;
	border-bottom: 1px solid rgba(0, 0, 0, 0.7);
	margin-top: 24px;

	th {
		height: 64px;
		background-color: #ffffff;

		&:first-child {
			border-top-left-radius: 8px;
			border-bottom-left-radius: 8px;
		}

		&:last-child {
			border-top-right-radius: 8px;
			border-bottom-right-radius: 8px;
		}
	}

	tr + tr {
		border-top: 1px solid rgba(0, 0, 0, 0.7);
	}

	tr > td:not(:last-child) {
		text-align: center;
	}

	td {
		padding: 24px 0;
	}

	td + td {
		margin-left: 20px;
	}
`;

export default MainTable;
