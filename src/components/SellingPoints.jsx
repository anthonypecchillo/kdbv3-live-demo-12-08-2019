/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import Carousel from './Carousel';

import GCFTFLogo from '../assets/logos/GCFTF.png';
import ForestCarbonURL from '../assets/images/Forest-Carbon.jpg';
import TropicalForestURL from '../assets/images/Tropical-Forest.jpg';
import SquareKilometersForestURL from '../assets/images/Square-Kilometers-Forest.jpg';

const carouselSlidesData = [
  {
  //   content: 'STATES AND PROVINCES',
  //   value: '35',
  // }, {
    content: 'MILLION SQUARE KILOMETERS OF TROPICAL FOREST',
    imageURL: SquareKilometersForestURL,
    value: '4.9',
  }, {
    content: 'BILLION TONNES OF FOREST CARBON',
    imageURL: ForestCarbonURL,
    value: '55',
  // }, {
  //   content: 'COUNTRIES',
  //   value: '10',
  }, {
    content: 'WORLD\'s TROPICAL FORESTS',
    imageURL: TropicalForestURL,
    value: '1/3',
  },
];

const SellingPointsGrid = styled.div`
  display: grid;
  /* grid-area: sellingpoints; */
  grid-template-rows: 1fr 8fr;
  /* background-color: #eeeeee; */
  /* background-color: #C3D2DA; */
  background-color: #fff;
  background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
`;

const SellingPointsMiniGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); */
  /* align-items: center; */
  /* justify-items: center; */
  /* grid-gap: 30px; */
  @media (max-width: 765px) {
    grid-template-columns: 1fr;
    grid-template-rows: 605px 1fr;
  }
`;

const SellingPointsTitle = styled.h1`
  align-self: end;
  justify-self: center;
  margin: 0;

  @media (max-width: 765px) {
    font-size: 24px;
  }

  @media (max-width: 525px) {
    font-size: 20px;
  }
`;

const Rectangle2 = styled.div`
  place-self: center;
  height: 515px;
  width: 290px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);

  list-style-type: none;
  text-align: center;

  @media (max-width: 1025px) {
    height: 50vw;
    width: 85%;
  }

  @media (max-width: 765px) {
    height: 515px;
    width: 290px;
    display: ${({ hideBelow765 }) => (hideBelow765 ? 'none' : 'initial')}
  }
`;

const Image = styled.div`
  align-self: start;
  justify-self: center;
  background: ${({ imageURL }) => `no-repeat center/100% url(${imageURL})`};
  background-size: cover;
  width: 100%;
  height: 100%;
`;

// const CarouselSlide = styled.li`
//   margin-right: auto;
//   margin-left: auto;
//   display: none;
//   list-style-type: none;
//   text-align: center;
//   height: 515px;
//   width: 290px;
//   padding: 30px;
//
//   @media (max-width: 1025px) {
//     height: 50vw;
//     width: 85%;
//   }
//
//   @media (max-width: 765px) {
//     height: 515px;
//     width: 290px;
//
//     ${({ isActive }) => isActive && css`
//       place-self: center;
//       background-color: white;
//       border-radius: 5px;
//       box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
//       display: block;
//     `}
//   }
// `;

const CarouselSlideContent = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  /* grid-gap: 20px; */
  place-items: center;

  height: 100%;
  width: 100%
`;

const CarouselSlideValue = styled.div`
  align-self: end;
  font-size: 60px;
  /* margin-bottom: 20px; */
`;

const CarouselSlideDescription = styled.div`
  padding: 30px;
  font-size: 16px;
`;

const SellingPoints = ({ content }) => {
  const { TITLE, TEXT_ONE, TEXT_TWO, TEXT_THREE } = content;

  return (
    <SellingPointsGrid>
      <SellingPointsTitle>{TITLE}</SellingPointsTitle>
      <SellingPointsMiniGrid>
        {carouselSlidesData.map((slide, index) => (
          <Rectangle2
            key={index}
            slide={slide}
            hideBelow765
          >
            <CarouselSlideContent>
              <Image imageURL={slide.imageURL} />
              <CarouselSlideValue>{slide.value}</CarouselSlideValue>
              <CarouselSlideDescription>{slide.content}</CarouselSlideDescription>
            </CarouselSlideContent>
          </Rectangle2>
        ))}
        <Carousel slides={carouselSlidesData} />
      </SellingPointsMiniGrid>
    </SellingPointsGrid>
  );
};

export default SellingPoints;
