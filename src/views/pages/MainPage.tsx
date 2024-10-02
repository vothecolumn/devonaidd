import styled from '@emotion/styled';
import { useEffect, useState, useRef } from 'react';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import FourSection from '../templates/FourSection';
import OneSection from '../templates/OneSection';
import ThreeSection from '../templates/ThreeSection';
import TwoSection from '../templates/TwoSection';
import { AnimatePresence } from 'framer-motion';
import Header, { EHeaderStyleType } from '@/layouts/Header';

interface IMainPageProps {
	initialSlide?: number;
	onSlideChange?: (swiper: any) => void;
}

const MainPage = ({ initialSlide = 0, onSlideChange = () => {} }: IMainPageProps) => {
	const [headerStyle, setHeaderStyle] = useState(EHeaderStyleType.NONE);
	const [isVisible, setIsVisible] = useState(true);
	const swiperRef = useRef<any>(null);

	useEffect(() => {
		if (swiperRef.current) {
			const swiper = swiperRef.current.swiper;

			swiper.on('slideChange', () => {
				handleSlideChange(swiper);
			});

			const handleWheel = (event: WheelEvent) => {
				if (swiper.activeIndex === 0) {
					if (event.deltaY > 0) {
						event.preventDefault();
						swiper.slideNext();
					}
				} else if (swiper.activeIndex === 1 || 2) {
					const activeSlide = swiper.slides[swiper.activeIndex];
					const scrollTop = activeSlide.scrollTop;
					const clientHeight = activeSlide.clientHeight;
					const scrollHeight = activeSlide.scrollHeight;

					if (scrollTop === 0 && event.deltaY < 0) {
						event.preventDefault();
						swiper.slidePrev();
					} else if (scrollTop + clientHeight >= scrollHeight && event.deltaY > 0) {
						event.preventDefault();
						swiper.slideNext();
					}
				} else if (swiper.activeIndex === 3) {
					const activeSlide = swiper.slides[swiper.activeIndex];
					const scrollTop = activeSlide.scrollTop;

					if (scrollTop === 0 && event.deltaY < 0) {
						event.preventDefault();
						swiper.slidePrev();
					}
				}
			};

			if (swiper.wrapperEl) {
				swiper.wrapperEl.addEventListener('wheel', handleWheel);
			}

			return () => {
				if (swiper.wrapperEl) {
					swiper.wrapperEl.removeEventListener('wheel', handleWheel);
				}
			};
		}
	}, []);

	const handleSlideChange = (swiper: any) => {
		if (swiper.activeIndex === 0) {
			setHeaderStyle(EHeaderStyleType.FILED);
		} else {
			setHeaderStyle(EHeaderStyleType.OUTLINE);
		}

		onSlideChange(swiper);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 3000);

		return () => clearTimeout(timer);
	}, []);

	useEffect(() => {
		if (!isVisible) {
			const transitionTimer = setTimeout(() => {
				setHeaderStyle(EHeaderStyleType.FILED);
				setIsVisible(true);
			}, 500);
			return () => clearTimeout(transitionTimer);
		}
	}, [isVisible]);

	return (
		<>
			<AnimatePresence>
				{isVisible && <Header styleType={headerStyle} initial={{ y: 40 }} animate={{ y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} />}
			</AnimatePresence>

			<SwiperContainer
				direction={'vertical'}
				slidesPerView={1}
				spaceBetween={0}
				centeredSlides
				initialSlide={initialSlide}
				simulateTouch={false}
				ref={swiperRef}
			>
				<SwiperWrapper>
					<OneSection />
				</SwiperWrapper>
				<SwiperWrapper>
					<TwoSection />
				</SwiperWrapper>
				<SwiperWrapper>
					<ThreeSection />
				</SwiperWrapper>
				<SwiperWrapper>
					<FourSection />
				</SwiperWrapper>
			</SwiperContainer>
		</>
	);
};

const SwiperContainer = styled(SwiperComponent)`
	width: 100%;
	height: 100vh;
	background-color: #fff;

	.swiper-wrapper {
		transition: 1s ease !important;
	}
`;

const SwiperWrapper = styled(SwiperSlide)`
	width: 100%;
	height: 100%;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
`;

export default MainPage;
