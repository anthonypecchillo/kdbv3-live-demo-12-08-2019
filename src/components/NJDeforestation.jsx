/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';

const data6 = [
  {
    label: 'Still<br/>Forested',
    value: 148125,
  },
  {
    label: 'Deforested',
    value: 16096,
    // color: '#ff69b4',
  },
];

const dataTotal6 = data6.reduce((acc, { value }) => acc + value, 0).toLocaleString();

const dataSourceConfig5 = {
  caption: 'Deforestation Rate',
  xAxisName: 'Year',
  yAxisName: 'Deforested Area (km²)',
  numberSuffix: ' km²',
};

const dataSourceConfig6 = {
  caption: 'Total Deforestation',
  centerLabel: '$label:<br/><br/>$value',
  defaultCenterLabel: `Original<br/>Forest Area:<br/><br/>${dataTotal6} km²`,
  numberSuffix: ' km²',
};

const TAG_LIST = [
  'Tag 1',
  'Tag 2',
  'Tag 3',
  'Tag 4',
  'Tag 5',
  'Tag 6',
  'Tag 7',
  'Tag 8',
  'Tag 9',
  'Tag 10',
];

const DeforestationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 5fr 5fr;
  /* justify-items: center; */
  height: 100%;
  width: 100%;
`;

const DeforestationTitle = styled.h3`
  grid-column: 1/4;
  height: 100%;
  /* padding-top: 20px; */
  margin: 0;
  text-align: center;
  width: 100%;
`;

const DeforestationText = styled.div`
  grid-column: 1/3;
  padding: 0 5%;
  width: 100%;
`;

const DeforestationDriversTitle = styled.div`
  align-self: end;
  font-weight: 600;
  text-align: center;
`;

const DeforestationTagList = styled.ul`
  list-style-type: none;
  overflow: hidden;
  overflow-y: scroll;
  height: 250px;
  width: 100%;
`;

const DeforestationTagListItem = styled.li`
  border: 1px solid black;
  background-color: tomato;
  height: 50px;
  margin: 15px 0;
  width: 90%;
`;

// TODO: Use primary key from DB as uniqueID for props
const NJDeforestation = () => (
  <DeforestationGrid>
    <DeforestationTitle>Deforestation</DeforestationTitle>
    <DoughnutChart
      data={data6}
      dataSourceConfig={dataSourceConfig6}
      gridColumn="1/2"
      justify="left"
    />
    <LineChart data={null} dataSourceConfig={dataSourceConfig5} gridColumn="2/4" justify="center" />
    <DeforestationText>
      <p>
        The majority of deforestation in Acre occurs along primary and secondary roads as well as
        rivers. The main driver of deforestation in Acre is cattle ranching (occupying 70% of the
        total area deforested in 1989 and increasing to 81% in 2004). Factors such as land
        speculation, lack of zoning and formal designation of public lands, profitability of cattle
        ranching, and subsidized loans for ranching have created incentives for deforestation
        throughout the Amazon, including Acre.
      </p>
      <p>
        Historically, the main agents of deforestation agents were owners of mid-size and large
        farms and ranches, but in recent years smallholder farmers have contributed significantly to
        deforestation in Acre. The pavement of the BR-317 (completed in 2007) and BR-364 (completed
        in 2011) highways now connect the southwestern Amazon (including Acre) to Peruvian Pacific
        coast harbors and is likely to lead to increased deforestation. The risk of deforestation is
        likely to be most intense along the BR-364 from Sena Madureira to Cruzeiro do Sul.
      </p>
    </DeforestationText>
    <div>
      <DeforestationDriversTitle>Drivers of Deforestation</DeforestationDriversTitle>
      <DeforestationTagList>
        {TAG_LIST.map((tag, index) => (
          <DeforestationTagListItem key={index}>{tag}</DeforestationTagListItem>
        ))}
      </DeforestationTagList>
    </div>
  </DeforestationGrid>
);

export default NJDeforestation;
