import styled from '@emotion/styled';

import icon1 from '../../assets/icons/icon-eclips.png';
import icon2 from '../../assets/icons/icon-vsc.png';
import icon3 from '../../assets/icons/icon-intellij.png';
import ctabutton from '../../assets/images/ctabutton.png';

interface Feature {
  label: string;
  iconUrl?: string;
}

interface ProductProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  ctaText?: string;
}

const ProductCard = ({ title, subtitle, description, features, ctaText }: ProductProps) => {
  const iconFeatures = features.filter(feature => feature.iconUrl);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardHeader>
      <CardDescription>{description}</CardDescription>
      {ctaText && 
         <CTAButton>
          <a href="https://thefutureinside.lgcns.com/Counsel?ibch=aicoding" target="_blank" rel="noopener noreferrer">
          <img src={ctabutton} alt="CTA Button" style={{maxWidth: '100%', height: 'auto'}} />
          </a>
          </CTAButton>
      }
      {iconFeatures.length > 0 && (
        <IconWrapper>
          {iconFeatures.map((feature, index) => (
            <FeatureItem key={index}>
              <Icon src={feature.iconUrl} alt={feature.label} />
              {feature.label}
            </FeatureItem>
          ))}
        </IconWrapper>
      )}

      <FeatureList>
        {features.filter(feature => !feature.iconUrl).map((feature, index) => (
          <FeatureItem key={index}>
            {feature.label}
          </FeatureItem>
        ))}
      </FeatureList>
    </Card>
  );
};

const ProductComparison = () => {
  const standardProduct: ProductProps = {
    title: "DevOn AIDD",
    subtitle: "Standard",
    description: "코드를 신속하게 개발하고자 하는 개인 개발자",
    features: [
      { label: "Eclipse", iconUrl: icon1 },
      { label: "Visual Studio Code", iconUrl: icon2 },
      { label: "IntelliJ Idea", iconUrl: icon3 },
      { label: "라이선스 : 도구 라이선스 + 추론 모델 Key" },
      { label: "도구 라이선스 : 다운로드 후 6개월간 무상" },
      { label: "추론 모델 Key : 1개월 무상" },
      { label: "(이후 Azure 본인 계정의 Key 입력 후 사용 가능)" },
      { label: "구체적인 비용 협의 필요" }
    ]
  };

  const enterpriseProduct: ProductProps = {
    title: "DevOn AIDD",
    subtitle: "Enterprise",
    description: "개발 공정 전체에 걸쳐서 AI를 도입하여 조직에 맞게 AI를 적용하고 싶어 하는 기업",
    features: [
      { label: "자사 DevOn IDE와 연계 제공" },
      { label: "분석/설계/개발/테스트 전 공정 지원" },
      { label: "기업 인프라 환경에 추론 모델 제공 가능" },
      { label: "on-prem 환경, 고객사 CSP, 자사 CSP" },
      { label: "라이선스 및 비용 협의 필요" }
    ],
    ctaText: "Contact us"
  };

  return (
    <ComparisonWrapper>
      <ProductCard {...standardProduct} />
      <ProductCard {...enterpriseProduct} />
    </ComparisonWrapper>
  );
};

const ComparisonWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 80px;
  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 40px;
  }
`;

const Card = styled.div`
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.60) 0.01%, rgba(250, 250, 250, 0.60) 100%);
  backdrop-filter: blur(14px);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  padding: 52px;
  flex: 1;

  button ~ ul {
  margin-top: 69px;
  
    li:nth-of-type(2) {
      padding-left: 38px;

      &::before {
        left: 16px;
      }
  }
}
`;

const CardHeader = styled.div`
  color: #412f8b;
`;

const CardTitle = styled.h3`
  font-weight: 400;
  font-size: 20px;
  letter-spacing: -0.4px;
`;

const CardSubtitle = styled.h4`
  font-weight: 600;
  font-size:48px;
  letter-spacing: -0.96px;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const CardDescription = styled.p`
  color: #412f8b;
  letter-spacing: -0.96px;
  margin-top: 16px;
  font-weight: 500;
  font-size: 24px;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 12px;
  padding-left: 36px;
`;

const FeatureItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  color: #412f8b;
  letter-spacing: -0.96px;
  font-weight: 600;
  font-size: 24px;
  line-height: 44px;

  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    left: -24px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #412F8B;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 72px;
  padding: 25px 64px;
  margin-top: 40px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.60) 0.01%, rgba(250, 250, 250, 0.60) 100%);
  border-radius: 24px;

  > li {
    display: flex;
    flex-direction: column;
    gap: 6px;

    &::before {
      display: none;
    }
  }
`;

const Icon = styled.img`
  width: 88px;
  height: 88px;
`;

const CTAButton = styled.button`
  height: 72px;
  padding: 0 128px;
  align-self: center;
  margin-top: 65px;
  font-weight: 600;
  font-size: 32px;
  letter-spacing: -1.28px;
  color: #412f8b;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export default ProductComparison;