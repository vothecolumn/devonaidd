import styled from '@emotion/styled';
import check from '../../assets/icons/check.svg';
import disabledCheck from '../../assets/icons/disabled-check.svg';
import { Fragment } from 'react/jsx-runtime';

interface FeatureCategory {
  name: string;
  features: string[];
}

interface ProductFeatures {
  name: string[];
  features: boolean[];
}

const featureCategories: FeatureCategory[] = [
  {
    name: "Prompt",
    features: ["프롬프트 반영 템플릿", "프롬프트 컨설팅"]
  },
  {
    name: "Premium Service",
    features: ["Code 변환", "SQL 변환"]
  },
  {
    name: "Code Feature Task",
    features: [
      "Code 분석", "Code 설계", "주석 기반 코드 생성", "다음코드 추천",
      "Comment Chat", "SQL 생성", "SQL 튜닝", "Exception Helper",
      "오류 자동 수정", "요약", "AI Play", "테스트 케이스 생성"
    ]
  },
  {
    name: "AI Models",
    features: ["AOAI(Azure Open AI Model)", "LG CNS Owned Model"]
  },
  {
    name: "IDE",
    features: ["Eclipse", "VS Code", "IntelliJ"]
  }
];

const products: ProductFeatures[] = [
  {
    name: ["DevOn AIDD", "Standard"],
    features: [
      true, false, false, false, false, false, true, true, true, true, true, true,
      true, true, true, true, true, false, true, true, true
    ]
  },
  {
    name: ["DevOn AIDD", "Enterprise"],
    features: [
      true, true, true, true, true, true, true, true, true, true, true, true,
      true, true, true, true, true, true, true, true, true
    ]
  }
];

const PricingTable = () => {
  let currentIdx = 0;
  return (
    <ComparisonTable>
      <colgroup>
        <col style={{ width: '100%' }} />
        <col style={{ width: '100%' }} />
        <col style={{ width: '100%' }} />
      </colgroup>
      <thead>
        <tr>
          <th></th>
          {products.map((product) => (
            <th key={product.name.join("-")}>
              <Title>{product.name[0]}</Title>
              <Title>{product.name[1]}</Title>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {featureCategories.map((category, categoryIndex) => (
          <Fragment key={category.name}>
            <TableRow isTh>
              <CategoryHeader>
                <p>{category.name}</p>
              </CategoryHeader>
            </TableRow>
            {category.features.map((feature, featureIndex) => (
              <TableRow key={`${category.name}-${featureIndex}`}>
                <FeatureName>{feature}</FeatureName>
                {products.map((product, productIndex) => (
                  <FeatureCell key={`${product.name}-${featureIndex}-${productIndex}`}>
                    {product.features[productIndex==1?currentIdx++:currentIdx] ? (
                      <CheckIcon src={check} />
                    ) : (
                      <DCheckIcon src={disabledCheck} />
                    )}
                  </FeatureCell>
                ))}
              </TableRow>
            ))}
          </Fragment>
        ))}
      </tbody>
    </ComparisonTable>
  );
};
const TableRow = styled.tr<{ isTh?: boolean }>`

  ${({ isTh = false }) => isTh ? `
      &:first-of-type p {
        margin-top: 0;
      }
    `
    :
    `&:hover {
      background-color: #f5f4f9;
      cursor: pointer;
    }
      `}`;

const ComparisonTable = styled.table`
  width: 100%;
  margin-top: 80px;
  padding: 64px 80px;
  border-collapse: separate;
  background-color: #fff;
  border-radius: 24px;
  overflow: hidden;
`;

const CategoryHeader = styled.th`
  p {
  width: fit-content;
  padding: 2px 14px;
  margin-bottom: 16px;
  margin-top: 32px;
  border-radius: 67px;
  background-color: #412f8b;
  color: #fff;
  font-weight: 600;
  font-size: 24px;
  letter-spacing: -0.36px;
  text-align: left;
}
`;

const FeatureName = styled.td`
  position: relative;
  padding: 16px;
  font-weight: 500;
  font-size: 24px;
  color: #412f8b;
  letter-spacing: -0.96px;

  &::before {
    content: '';
    position: absolute;
    top: 47%;
    left: 0;
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #412f8b;
  }
`;

const FeatureCell = styled.td`
  text-align: center;
  font-size: 24px;
  color: #412f8b;
  padding: 16px;
`;

const CheckIcon = styled.span<{ src: string }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url(/check.svg);
  background-size: contain;
  background-repeat: no-repeat;
`;
const DCheckIcon = styled.span<{ src: string }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-image: url(/disabled-check.svg);
  background-size: contain;
  background-repeat: no-repeat;
`;
const Title = styled.p`
  padding: 0;
  font-weight: 400;
  font-size: 18px;
  color: #412f8b;

+ p {
  font-weight: 700;
  font-size: 34px;
}
`;

export default PricingTable;