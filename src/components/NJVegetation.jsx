/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import PieChart from './PieChart';
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

const dataSourceConfig3 = {
  caption: 'Major Vegetation Types',
  xAxisName: 'Vegetation Type',
  yAxisName: 'Land Area (km²)',
  numberSuffix: ' km²',
};

const VegetationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* justify-items: center; */
`;

const NJVegetation = () => (
  <VegetationGrid>
    <DoughnutChart
      data={data1}
      dataSourceConfig={dataSourceConfig1}
      justify="center"
    />
    <PieChart
      data={data3}
      dataSourceConfig={dataSourceConfig3}
      justify="center"
    />
    <DoughnutChart
      data={data2}
      dataSourceConfig={dataSourceConfig2}
      justify="center"
    />
  </VegetationGrid>
);

export default NJVegetation;
