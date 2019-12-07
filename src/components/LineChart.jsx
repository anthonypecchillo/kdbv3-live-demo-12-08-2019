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

class LineDataSource {
  constructor(categories, data, { caption, numberSuffix, xAxisName, yAxisName }) {
    this.chart = {
      lineThickness: '2',


      showLegend: '1',
      animation: '1',
      animationDuration: '1',
      animateClockwise: '0',
      alphaAnimation: '0',
      rotateLabels: '1',
      slantLabels: '1',
      showLabels: '1',
      showValues: '0',
      placeValuesInside: '0',
      showShadow: '0',
      // maxColWidth: '40',
      useDataPlotColorForLabels: '0',
      theme: 'fusion',
      caption: caption,
      xAxisName: xAxisName,
      yAxisName: yAxisName,

      captionAlignment: 'center',
      captionOnTop: '1',
      // captionFont: 'Font Name Here',
      captionFontSize: 18,
      captionFontColor: '#000000',
      // alignCaptionWithCanvas: '1',

      showXAxisLine: '1',
      // xAxisLineColor: 'HEX CODE HERE',
      // xAxisLineThickness: '2',
      showYAxisLine: '1',
      // yAxisLineColor: 'HEX CODE HERE',
      // yAxisLineThickness: '2',
      showYAxisValues: '1',
      yAxisValuesStep: '5',
      rotateYAxisName: '1',
      // yAxisNameWidth: ,
      yAxisMinValue: 0,
      yAxisMaxValue: 1200,
      // forceYAxisValueDecimals: ,
      // yAxisValueDecimals: ,

      // xAxisNameFont: 'Font Name Here',
      // xAxisNameFontColor: 'Hex Code Here',
      // xAxisNameFontSize: 'Number Here',
      // xAxisNameFontBold: ,
      // xAxisNameFontItalic: ,
      // xAxisNameAlpha: ,
      // xAxisNameFontAlpha: ,
      // xAxisNameBorderPadding: ,
      // xAxisNameBorderDashGap: ,

      // yAxisNameFont: 'Font Name Here',
      // yAxisNameFontColor: 'Hex Code Here',
      // yAxisNameFontSize: 'Number Here',
      // yAxisNameFontBold: ,
      // yAxisNameFontItalic: ,
      // yAxisNameAlpha: ,
      // yAxisNameFontAlpha: ,
      // yAxisNameBorderPadding: ,
      // yAxisNameBorderDashGap: ,

      // plotFillAngle: '90',
      // plotFillRatio: '67',
      // plotGradientColor: '#abc123',
      // usePlotGradientColor: '#123abc',

      bgAlpha: '0',
      canvasBgAlpha: '0',
      alignCaptionWithCanvas: '1',

      // valueFont: ,
      // valueFontColor: ,
      // valueFontSize: ,
      // valueFontBold: ,
      // valueFontItalic: ,
      // valueBgColor: ,
      // valueBorderColor: ,
      // valueAlpha: ,
      // valueFontAlpha: ,
      // valueBgAlpha: ,
      // valueBorderAlpha: ,
      // valueBorderThickness: ,
      // valueBorderPadding: ,
      // valueBorderRadius: ,
      // valueBorderDashed: ,
      // valueBorderDashLen: ,
      // valueBorderDashGap: ,
      // textOutline: ,

      // yAxisValueFont: ,
      // yAxisValueFontColor: ,
      // yAxisValueFontSize: ,
      // yAxisValueFontBold: ,
      // yAxisValueFontItalic: ,
      // yAxisValueBgColor: ,
      // yAxisValueBorderColor: ,
      // yAxisValueAlpha: ,
      // yAxisValueBgAlpha: ,
      // yAxisValueBorderAlpha: ,
      // yAxisValueBorderPadding: ,
      // yAxisValueBorderRadius: ,
      // yAxisValueBorderThickness: ,
      // yAxisValueBorderDashed: ,
      // yAxisValueBorderDashLen: ,
      // yAxisValueBorderDashGap: ,
      // yAxisValueLink: ,

      numDivLines: 30,
      // divLineColor: 'Hex Code Here',
      // divLineThickness: Number Here,
      // divLineAlpha: ,
      // divLineDashed: ,
      // divLineDashLen: ,
      // divLineDashGap: ,
      // zeroPlaneColor: ,
      // zeroPlaneThickness: ,
      // zeroPlaneAlpha: ,
      // showZeroPlaneValue: ,
      showAlternateHGridColor: '1',
      // alternateHGridColor: ,
      // alternateHGridAlpha: ,

      formatNumber: '1',
      formatNumberScale: '1',
      // defaultNumberScale: String
      // numberScaleUnit: String
      // numberScaleValue: String
      // forceNumberScale: Boolean
      // scaleRecursively: Boolean
      // maxScaleRecursion: Number
      // scaleSeparator: String
      // numberPrefix: String
      numberSuffix: numberSuffix,
      // decimalSeparator: String
      // thousandSeparator: String
      // thousandSeparatorPosition: Number
      // inDecimalSeparator: String
      // inThousandSeparator: String
      decimals: '1',
      // forceDecimals: Boolean

      // showToolTip: '1',
      // toolTipBgColor: Color
      // toolTipColor: Color
      // toolTipBorderColor: Color
      // tooltipBorderAlpha: Number
      // toolTipSepChar: String
      // showToolTipShadow: Boolean
      // plottooltext: String

      // showHoverEffect: '1',            // All elements
      // plotHoverEffect: '1',         // Data plots only
      // plotFillHoverColor: '#ffffff',
      // plotFillHoverAlpha: Number
      // columnHoverColor: '#ffffff',
      // columnHoverAlpha: Number
      // plotHoverGradientColor: '#f76eac',
      // plotHoverRatio: Number
      // plotHoverAngle: Number
      // plotBorderHoverColor: Color
      // plotBorderHoverThickness: Number
      // plotBorderHoverDashed: Boolean
      // plotBorderHoverDashLen: Number
      // plotBorderHoverDashGap: Number

      // labelFont: String,
      // labelFontColor: Color,
      // labelFontSize: Number,
      // labelFontBold: Boolean,
      // labelFontItalic: Boolean,
      // labelBgColor: Color,
      // labelBorderColor: Color,
      // labelAlpha: Number,
      // labelBgAlpha: Number,
      // labelBorderAlpha: Number,
      // labelBorderPadding: Number,
      // labelBorderRadius: Number,
      // labelBorderThickness: Number,
      // labelBorderDashed: Boolean,
      // labelBorderDashLen: Number,
      // labelBorderDashGap: Number,
      // labelLink: URL,

      // captionPadding: Number,
      // xAxisNamePadding: Number,
      // yAxisNamePadding: Number,
      // yAxisValuesPadding: Number,
      // labelPadding: Number,
      // valuePadding: Number,
      // plotSpacePercent: Number,
      // canvasPadding: Number,
      // canvasLeftPadding: Number,
      // canvasRightPadding: Number,
      // canvasTopPadding: Number,
      // canvasBottomPadding: Number,
      // chartLeftMargin: -15,
      // chartRightMargin: Number,
      // chartTopMargin: Number,
      // chartBottomMargin: Number,
      canvasLeftMargin: 10,
      // canvasRightMargin: Number,
      // canvasTopMargin: Number,
      // canvasBottomMargin: Number,

      // trendlineColor: Color,
      // trendlineThickness: Number,
      // trendlineAlpha: Number,
      // trendLineToolText: String,
      // showTrendlinesOnTop: Boolean,

      // trendValueFont: String,
      // trendValueFontSize: Number,
      // trendValueFontBold: Boolean,
      // trendValueFontItalic: Boolean,
      // trendValueBgColor: Color,
      // trendValueBorderColor: Color,
      // trendValueAlpha: Number,
      // trendValueBgAlpha: Number,
      // trendValueBorderAlpha: Number,
      // trendValueBorderPadding: Number,
      // trendValueBorderRadius: Number,
      // trendValueBorderThickness: Number,
      // trendValueBorderDashed: Boolean,
      // trendValueBorderDashLen: Number,
      // trendValueBorderDashGap: Number,
    };

    // this.categories = categories;
    this.data = [
      {
        label: '1996',
        value: '433',
      },
      {
        label: '1997',
        value: '358',
      },
      {
        label: '1998',
        value: '536',
      },
      {
        label: '1999',
        value: '441',
      },
      {
        label: '2000',
        value: '547',
      },
      {
        label: '2001',
        value: '419',
      },
      {
        label: '2002',
        value: '883',
      },
      {
        label: '2003',
        value: '1078',
      },
      {
        label: '2004',
        value: '728',
      },
      {
        label: '2005',
        value: '592',
      },
      {
        label: '2006',
        value: '398',
      },
      {
        label: '2007',
        value: '184',
      },
      {
        label: '2008',
        value: '254',
      },
      {
        label: '2009',
        value: '167',
      },
      {
        label: '2010',
        value: '259',
      },
      {
        label: '2011',
        value: '271',
      },
      {
        label: '2012',
        value: '305',
      },
      {
        label: '2013',
        value: '221',
      },
      {
        label: '2014',
        value: '309',
      },
      {
        label: '2015',
        value: '264',
      },
      {
        label: '2016',
        value: '372',
      },
      {
        label: '2017',
        value: '257',
      },
      {
        label: '2018',
        value: null,
      },
      {
        label: '2019',
        value: null,
      },
      {
        label: '2020',
        value: null,
      },
    ];
  }
}

const LineChartStyled = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  justify-self: ${({ justify }) => justify || 'center'};
`;

const LineChart = ({ categories, data, dataSourceConfig, gridColumn, gridRow, justify, nationName, stateName }) => {
  const dataSource = new LineDataSource(categories, data, dataSourceConfig);
  const chartConfigs = {
    type: 'line',
    width: '700',
    height: '400',
    containerBackgroundOpacity: '0',
    dataFormat: 'json',
    dataSource,
  };

  return (
    <LineChartStyled gridColumn={gridColumn} gridRow={gridRow} justify={justify}>
      <ReactFusioncharts {...chartConfigs} />
    </LineChartStyled>
  );
};

export default LineChart;
