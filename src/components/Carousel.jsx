/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled, { css } from 'styled-components';

import GCFTFLogo from '../assets/logos/GCFTF.png';

const CarouselArrow = styled.div`
  position: absolute;
  top: 50%;
  display: block;
  color: #111;
  cursor: pointer;
  opacity: 0.75;
  transform: translateY(-50%);
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  left: ${({ left }) => left && '32px'};
  right: ${({ right }) => right && '32px'};

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.5;
  }
`;

const CarouselStyled = styled.div`
  margin-top: 50px;
  position: relative;
  @media (min-width: 766px) {
    display: none;
  }
`;

const CarouselSlide = styled.li`
  margin-right: auto;
  margin-left: auto;
  display: none;
  list-style-type: none;
  text-align: center;
  height: 515px;
  width: 290px;
  padding: 30px;

  @media (max-width: 1025px) {
    height: 50vw;
    width: 85%;
  }

  @media (max-width: 765px) {
    height: 515px;
    width: 290px;

    ${({ isActive }) => isActive && css`
      place-self: center;
      background-color: white;
      border-radius: 5px;
      box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
      display: block;
    `}
  }
`;

const CarouselSlideContent = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  /* grid-gap: 20px; */
  place-items: center;

  height: 100%;
  width: 100%
`;

const CarouselSlideValue = styled.div`
  font-size: 60px;
  /* margin-bottom: 20px; */
`;

const CarouselSlideDescription = styled.div`
  font-size: 16px;
`;

const Dots = styled.ol`
  /* Pulled these in from the rectangular indicators */
  display: flex;
  flex-direction: row;
  justify-content: center;

  /* These are my original styles */
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 20px;
  text-align: center;
`;

const Dot = styled.li`
  background-color: ${({ color }) => color};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  cursor: pointer;
  margin: 0 9px;
  opacity: ${({ isActive }) => (isActive && '0.75') || '0.15'}
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    opacity: ${({ isActive }) => (isActive && '0.75') || '0.5'}
  }
`;

const Logo = styled.div`
  place-self: center;
  background: no-repeat center/100% url(${GCFTFLogo});
  width: 100%;
  height: 100%;
`;

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index,
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let { activeIndex } = this.state;
    const { slides } = this.props;

    if (activeIndex < 1) {
      activeIndex = slides.length;
    }

    this.setState({
      activeIndex: activeIndex - 1,
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let { activeIndex } = this.state;
    const { slides } = this.props;

    if (activeIndex === slides.length - 1) {
      activeIndex = -1;
    }

    this.setState({
      activeIndex: activeIndex + 1,
    });
  }

  render() {
    const { slides } = this.props;
    const { activeIndex } = this.state;
    return (
      <CarouselStyled className="carousel">
        <CarouselArrow  onClick={e => this.goToPrevSlide(e)} left>
          <span className='fa fa-2x fa-angle-left' />
        </CarouselArrow>
        {slides.map((slide, index) => (
          <CarouselSlide
            key={index}
            index={index}
            activeIndex={activeIndex}
            slide={slide}
            isActive={index === activeIndex}
          >
            <CarouselSlideContent>
              <Logo />
              <CarouselSlideValue>{slide.value}</CarouselSlideValue>
              <CarouselSlideDescription>{slide.content}</CarouselSlideDescription>
            </CarouselSlideContent>
          </CarouselSlide>
        ))}
        <CarouselArrow onClick={e => this.goToNextSlide(e)} right>
          <span className='fa fa-2x fa-angle-right' />
        </CarouselArrow>

        <Dots className="carousel__indicators">
          {slides.map((slide, index) => (
            <Dot
              color="#b5db37"
              key={index}
              index={index}
              activeIndex={activeIndex}
              isActive={activeIndex === index}
              onClick={() => this.goToSlide(index)}
            />
          ))}
        </Dots>
      </CarouselStyled>
    );
  }
}

export default Carousel;
