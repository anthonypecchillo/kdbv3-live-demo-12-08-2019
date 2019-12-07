/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

import styled from 'styled-components';

// Resolves charts dependancy
charts(FusionCharts);

class DoughnutDataSource {
  constructor(data, { caption, centerLabel, defaultCenterLabel, numberSuffix }) {
    this.chart = {
      animation: '1',
      animationDuration: '1',
      animateClockwise: '0',
      alphaAnimation: '0',
      showPercentValues: '0',
      showLabels: '1',
      showValues: '0',
      theme: 'fusion',
      caption: caption,
      captionAlignment: 'center',
      captionOnTop: '1',
      captionFontSize: 18,
      captionFontColor: '#000000',
      doughnutRadius: '81%',
      startingAngle: '210',
      enableSlicing: '1',
      slicingDistance: 5,
      bgAlpha: '0',
      canvasBgAlpha: '0',
      defaultCenterLabel: defaultCenterLabel,
      alignCaptionWithCanvas: '0',
      captionpadding: '0',
      decimals: '1',
      centerLabel: centerLabel,
      showLegend: '0',
      numberSuffix: numberSuffix,
      formatNumberScale: '0',
      chartRightMargin: '-6',
      // palette: '1',
      // paletteColors: '#FF0000, #0372AB, #FF5904',
      // showZeroPies: '0',
      // showPercentInToolTip: '1',
      // labelSepChar: ',',
      // clickURL: '/#',
      // clickURLOverridesPlotLinks: '',
      // useDataPlotColorForLabels: '0',
      // hasRTLText: '0',
      // plotHighlightEffect: 'fadeout|color=#ff0000, alpha=60',
      // showPrintMenuItem: '0',

      // subcaption: 'No Subcaption Necessary',

      // subCaptionFontSize: 10,
      // captionFont: 'Font Name Here',
      // subCaptionFont: 'Font Name Here',
      // subCaptionFontColor: 'Hex Code Here',
      // captionFontBold: '1',
      // subCaptionFontBold: '1',
      // alignCaptionWithCanvas: '0',
      // captionHorizontalPadding: 0,
      // use3DLighting: '1',
      // showShadow: '1',

      // pieRadius: '90%',
      // enableRotation: '1',
      // enableMultiSlicing: '1',

      // captionPadding: '-50',
      // chartTopMargin: '-80',
      // paletteColors: '#FF0000, #0372AB, #FF5904',
      // plottooltext: '<b>$percentValue</b> of our Android users are on <b>$label</b>',
      // legendPosition: 'right',
    };

    this.data = data;
  }
}

const DoughnutChartStyled = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  justify-self: ${({ justify }) => justify || 'center'};
  align-self: center;
`;

const DoughnutChart = ({ data, dataSourceConfig, gridColumn, gridRow, justify, nationName, stateName }) => {
  const dataSource = new DoughnutDataSource(data, dataSourceConfig);
  const chartConfigs = {
    type: 'doughnut2d',
    width: '350',
    height: '250',
    containerBackgroundOpacity: '0',
    dataFormat: 'json',
    dataSource,
  };

  return (
    <DoughnutChartStyled gridColumn={gridColumn} gridRow={gridRow} justify={justify}>
      <ReactFusioncharts {...chartConfigs} />
    </DoughnutChartStyled>
  );
};

export default DoughnutChart;
