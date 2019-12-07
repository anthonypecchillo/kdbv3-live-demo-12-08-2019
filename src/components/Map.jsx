/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import WorldMap from './WorldMap';

const MapGrid = styled.div`
  display: grid;
  /* grid-area: map; */
  grid-template-rows: 17fr 3fr;
  /* grid-template-columns: auto; */
  align-items: center;
  justify-items: center;
  background-color: white;
`;

const MapTitle = styled.h1`
  margin: 0;
`;

const MapSubTitle = styled.h3`
  margin: 0;
`;

const MapButton = styled.div`
  background-color: transparent;
  border: solid black 2px;
  border-radius: 0;
  cursor: pointer !important;
  display: flex;
  height: 60%;
  align-items: center;
  justify-content: center;
  transition: border 0.6s ease 0s, background-color 0.6s ease 0s, color 0.6s ease 0s;
  width: 25%;
  min-width: 260px;
  &:hover {
    /* border: solid #3E522D 2px;
    background-color: #3E522D; */
    border: solid #3E522D 2px;
    background-color: #3E522D;
    /* border: solid #426539 2px;
    background-color: #426539; */
    /* color: #582399; */
    color: white;
  }
`;

const MapButtonText = styled.span`
  /* transition: color 0.4s ease 0s; */
  /* color: black; */
  /* font-family: Arial, Helvetica, sans-serif; */
  font-size: 18px;
  font-weight: 700;
  padding: 0 25px;
`;

const MapContainer = styled.div`
  /* height: 600px; */
  height: 662.5px;
  width: 100vw;
`;

const Map = ({ content }) => {
  const { TITLE, SUB_TITLE, NAVIGATE_FULL_DATABASE } = content;

  return (
    <MapGrid>
      <MapContainer>
        <center><MapTitle>GCF Task Force</MapTitle></center>
        <center><MapSubTitle>38 States and Provinces from 10 countries</MapSubTitle></center>
        <WorldMap />
      </MapContainer>
      <MapButton>
        <MapButtonText>{NAVIGATE_FULL_DATABASE}</MapButtonText>
      </MapButton>
    </MapGrid>
  );
}

export default Map;
