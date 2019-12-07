/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';

const data1 = [
  {
    label: 'Forest',
    value: 246856,
    // color: '#ff69b4',
  },
  {
    label: 'Non-Forest',
    value: 123456,
  },
];

const data2 = [
  {
    label: 'Protected',
    value: 206856,
    // color: '#ff69b4',
  },
  {
    label: 'Unprotected',
    value: 163456,
  },
];

const data3 = [
  {
    label: 'Forest',
    value: 246856,
    // color: '#ff69b4',
  },
  {
    label: 'Pasture',
    value: 100000,
  },
  {
    label: 'Agriculture',
    value: 20000,
  },
  {
    label: 'Secondary',
    value: 3000,
  },
  {
    label: 'Other',
    value: 456,
  },
];

const dataTotal1 = data1.reduce((acc, { value }) => acc + value, 0).toLocaleString();
const dataTotal2 = data2.reduce((acc, { value }) => acc + value, 0).toLocaleString();

const dataSourceConfig1 = {
  caption: 'Land Distribution',
  centerLabel: '$label:<br/><br/>$value',
  defaultCenterLabel: `Total:<br/><br/>${dataTotal1} km²`,
  numberSuffix: ' km²',
};

const dataSourceConfig2 = {
  caption: 'Forest Management',
  centerLabel: '$label:<br/><br/>$value',
  defaultCenterLabel: `Total:<br/><br/>${dataTotal2} km²`,
  numberSuffix: ' km²',
};

const dataSourceConfig3 = {
  caption: 'Major Vegetation Types',
  xAxisName: 'Vegetation Type',
  yAxisName: 'Land Area (km²)',
  numberSuffix: ' km²',
};

const LandGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr 2fr;
`;

const LandTitle = styled.h3`
  grid-column: 1/3;
  height: 100%;
  /* padding-top: 20px; */
  margin: 0;
  text-align: center;
  width: 100%;
`;

const NJLand = () => (
  <LandGrid>
    <LandTitle>Land</LandTitle>
    <DoughnutChart
      data={data1}
      dataSourceConfig={dataSourceConfig1}
      justify="left"
    />
    <DoughnutChart
      data={data2}
      dataSourceConfig={dataSourceConfig2}
      justify="right"
    />
    <BarChart
      data={data3}
      dataSourceConfig={dataSourceConfig3}
      justify="left"
    />
  </LandGrid>
);

export default NJLand;
