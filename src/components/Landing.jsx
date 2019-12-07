/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './Footer';
import Jumbotron from './Jumbotron';
import Map from './Map';
import SellingPoints from './SellingPoints';

// One fragment is 90.6px!
const LandingGrid = styled.div`
  display: grid;
  padding-top: 75px;
  grid-template-rows: 8fr 8fr 9fr;
  /* grid-template-columns: auto; */
  /* grid-template-areas: "navbar navbar"
                       "jumbotron jumbotron"
                       "map map"
                       "sellingpoints sellingpoints"
                       "footer footer"; */
  /* height: 2265px; */
  /* height: 2537px; */
  /* height: 2265px; */
  height: 2367.5px;
`;

const Landing = ({ content }) => {
  const { jumbotron, map, sellingPoints, footer } = content;
  return (
    <LandingGrid>
      <Jumbotron content={jumbotron} />
      <Map content={map} />
      <SellingPoints content={sellingPoints} />
    </LandingGrid>
  );
}

export default Landing;
