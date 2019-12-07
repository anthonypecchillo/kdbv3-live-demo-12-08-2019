/**
 * Copyright 2019-present'fusioncharts'e. All Rights Reserved.
 */

import React from 'react';

// import './styles.css';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import USA from 'fusioncharts/maps/fusioncharts.usa';
import Brazil from 'fusionmaps/maps/fusioncharts.brazil';
import Mexico from 'fusionmaps/maps/fusioncharts.mexico';
import Colombia from 'fusionmaps/maps/fusioncharts.colombia';
import Ecuador from 'fusionmaps/maps/fusioncharts.ecuador';
import Peru from 'fusionmaps/maps/fusioncharts.peru';
// import Spain from 'fusionmaps/maps/fusioncharts.spain';
import Nigeria from 'fusionmaps/maps/fusioncharts.nigeria';
import Indonesia from 'fusionmaps/maps/fusioncharts.indonesia';
import CoteDivoire from 'fusionmaps/maps/fusioncharts.cotedivoire';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Texas from 'fusionmaps/maps/fusioncharts.texas';
import California from 'fusionmaps/maps/fusioncharts.california';
import Acre from 'fusionmaps/maps/fusioncharts.acre';
import Amapa from 'fusionmaps/maps/fusioncharts.amapa';
import Amazonas from 'fusionmaps/maps/fusioncharts.amazonas';
import Maranhao from 'fusionmaps/maps/fusioncharts.maranhao';
import Matogrosso from 'fusionmaps/maps/fusioncharts.matogrosso';
import Para from 'fusionmaps/maps/fusioncharts.para';
import Rondonia from 'fusionmaps/maps/fusioncharts.rondonia';
import Roraima from 'fusionmaps/maps/fusioncharts.roraima';
// Tocantins Here!
import SpecialRegionofAceh from 'fusionmaps/maps/fusioncharts.specialregionofaceh';
import CentralKalimantan from 'fusionmaps/maps/fusioncharts.centralkalimantan';
import EastKalimantan from 'fusionmaps/maps/fusioncharts.eastkalimantan';
import NorthKalimantan from 'fusionmaps/maps/fusioncharts.northkalimantan';
// import WestKalimantan from 'fusionmaps/maps/fusioncharts.westkalimantan';
import ReactFC from 'react-fusioncharts';

// import WorldCountries from '../maps/worldwithcountries';
import WorldCountries from 'fusionmaps/maps/fusioncharts.worldwithcountries';

FusionCharts.options.creditLabel = false;
ReactFC.fcRoot(
  FusionCharts,
  Maps,
  Acre,
  Amapa,
  Amazonas,
  Maranhao,
  Matogrosso,
  Para,
  Rondonia,
  Roraima,
  Texas,
  California,
  SpecialRegionofAceh,
  CentralKalimantan,
  EastKalimantan,
  NorthKalimantan,
  // WestKalimantan,
  USA,
  Brazil,
  Mexico,
  Colombia,
  Ecuador,
  Peru,
  // Spain,
  Nigeria,
  Indonesia,
  CoteDivoire,
  WorldCountries,
  FusionTheme,
);

const dataSource = {
  chart: {
    // caption: 'GCF Task Force National Influence',
    // subcaption: 'By Number of GCF Task Force States/Provinces',
    numbersuffix: '',
    // includevalueinlabels: '1',
    // labelsepchar: ': ',
    showentitytooltip: '1',
    showentityhovereffect: '1',
    entityToolText:
      "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>States & Provinces: <b>$value</b></div>",
    entityFillHoverColor: '#FFF9C4',
    theme: 'fusion',
    nullentitycolor: '#C3D2DA',
    // entityfillhovercolor: '#FFF9C4',
    showLegend: false,
    // chartLeftMargin: 40,
    chartRightMargin: -150,
  },
  colorrange: {
    minvalue: '0',
    code: '#8AB458',
    gradient: '1',
    color: [
      {
        minvalue: '1',
        maxvalue: '5',
        color: '#8AB458',
      },
      {
        minvalue: '6',
        maxvalue: '9',
        color: '#426539',
        // color: '#3E522D'
      },
    ],
  },
  entityDef: [
    {
      internalId: '16',
      newId: 'Mexico',
    },
    {
      internalId: '23',
      newId: 'USA',
    },
    {
      internalId: '27',
      newId: 'Brazil',
    },
    {
      internalId: '29',
      newId: 'Colombia',
    },
    {
      internalId: '30',
      newId: 'Ecuador',
    },
    {
      internalId: '35',
      newId: 'Peru',
    },
    {
      internalId: '50',
      newId: 'CoteDivoire',
    },
    {
      internalId: '73',
      newId: 'Nigeria',
    },
    {
      internalId: '105',
      newId: 'Indonesia',
    },
    // {
    //   internalId: '166',
    //   newId: 'Spain',
    // },
  ],
  data: [
    {
      id: 'Mexico',
      value: '7',
      link: 'newchart-json-mexico',
    },
    {
      id: 'USA',
      value: '5',
      link: 'newchart-json-us',
    },
    {
      id: 'Brazil',
      value: '9',
      link: 'newchart-json-brazil',
    },
    {
      id: 'Colombia',
      value: '1',
      link: 'newchart-json-colombia',
    },
    {
      id: 'Ecuador',
      value: '1',
      link: 'newchart-json-ecuador',
    },
    {
      id: 'Peru',
      value: '7',
      link: 'newchart-json-peru',
    },
    {
      id: 'CoteDivoire',
      value: '2',
      link: 'newchart-json-cotedivoire',
    },
    {
      id: 'Nigeria',
      value: '1',
      link: 'newchart-json-nigeria',
    },
    {
      id: 'Indonesia',
      value: '7',
      link: 'newchart-json-indonesia',
    },
  ],

  linkeddata: [
    {
      id: 'us',
      linkedchart: {
        chart: {
          caption: 'Annual Sales by State',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '1',
              maxvalue: '5',
              color: '#8AB458',
            },
            {
              minvalue: '6',
              maxvalue: '9',
              color: '#426539',
              // color: '#3E522D'
            },
          ],
        },

        data: [
          {
            id: 'tx',
            value: '5',
            link: 'newchart-json-texas',
            showLabel: '1',
          },
          {
            id: 'ca',
            value: '5',
            link: 'newchart-json-california',
            showLabel: '1',
          },
        ],
        linkeddata: [
          {
            id: 'texas',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'california',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
        ],
      },
    },
    {
      id: 'brazil',
      linkedchart: {
        chart: {
          caption: 'Brazil Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '1',
              maxvalue: '5',
              color: '#8AB458',
            },
            {
              minvalue: '6',
              maxvalue: '9',
              color: '#426539',
              // color: '#3E522D'
            },
          ],
        },

        data: [
          {
            id: '001',
            value: '5',
            link: 'newchart-json-acre',
            showLabel: '1',
          },
          {
            id: '003',
            value: '5',
            link: 'newchart-json-amapa',
            showLabel: '1',
          },
          {
            id: '004',
            value: '5',
            link: 'newchart-json-amazonas',
            showLabel: '1',
          },
          {
            id: '010',
            value: '5',
            link: 'newchart-json-maranhao',
            showLabel: '1',
          },
          {
            id: '011',
            value: '5',
            link: 'newchart-json-matogrosso',
            showLabel: '1',
          },
          {
            id: '014',
            value: '5',
            link: 'newchart-json-para',
            showLabel: '1',
          },
          {
            id: '022',
            value: '5',
            link: 'newchart-json-rondonia',
            showLabel: '1',
          },
          {
            id: '023',
            value: '5',
            link: 'newchart-json-roraima',
            showLabel: '1',
          },
        ],
        linkeddata: [
          {
            id: 'acre',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'amapa',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'amazonas',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'maranhao',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'matogrosso',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'para',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'rondonia',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'roraima',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          // TODO: Tocantins here!
        ],
      },
    },
    {
      id: 'indonesia',
      linkedchart: {
        chart: {
          caption: 'Indonesia Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; text-align:center; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          // showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '0',
              maxvalue: '50000',
              color: '#8AB458',
            },
            {
              minvalue: '50000',
              maxvalue: '90000',
              color: '#7a9450',
              // color: '#3E522D'
            },
            {
              minvalue: '90000',
              maxvalue: '250000',
              color: '#426539',
              // color: '#3E522D'
            },
          ],
        },

        data: [
          {
            id: '01',
            value: '31600',
            link: 'newchart-json-specialregionofaceh',
            showLabel: '1',
          },
          {
            id: '13',
            value: '80200',
            link: 'newchart-json-centralkalimantan',
            showLabel: '1',
          },
          {
            id: '14',
            value: '62200',
            link: 'newchart-json-eastkalimantan',
            showLabel: '1',
          },
          {
            id: '42',
            value: '58900',
            link: 'newchart-json-northkalimantan',
            showLabel: '1',
          },
          {
            id: '11',
            value: '61500',
            // link: 'newchart-json-westkalimantan',
            showLabel: '1',
          },
          {
            id: '36',
            value: '249284',
            // link: 'newchart-json-specialregionofpapua',
            showLabel: '1',
          },
          {
            id: '39',
            value: '90500',
            // link: 'newchart-json-specialregionofwestpapua',
            showLabel: '1',
          },
        ],
        linkeddata: [
          {
            id: 'specialregionofaceh',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'centralkalimantan',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'eastkalimantan',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          {
            id: 'northkalimantan',
            linkedchart: {
              chart: {
                theme: 'fusion',
              },
            },
          },
          // {
          //   id: 'westkalimantan',
          //   linkedchart: {
          //     chart: {
          //       theme: 'fusion',
          //     },
          //   },
          // },
          // {
          //   id: 'specialregionofpapua',
          //   linkedchart: {
          //     chart: {
          //       theme: 'fusion',
          //     },
          //   },
          // },
          // {
          //   id: 'specialregionofwestpapua',
          //   linkedchart: {
          //     chart: {
          //       theme: 'fusion',
          //     },
          //   },
          // },
        ],
      },
    },
    {
      id: 'mexico',
      linkedchart: {
        chart: {
          caption: 'Mexico Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '1',
              maxvalue: '5',
              color: '#8AB458',
            },
            {
              minvalue: '6',
              maxvalue: '9',
              color: '#426539',
              // color: '#3E522D'
            },
          ],
        },

        data: [
          {
            id: '004',
            value: '5',
            // link: 'newchart-json-campeche',
            showLabel: '1',
          },
          {
            id: '005',
            value: '5',
            // link: 'newchart-json-chiapas',
            showLabel: '1',
          },
          {
            id: '013',
            value: '5',
            // link: 'newchart-json-jalisco',
            showLabel: '1',
          },
          {
            id: '019',
            value: '5',
            // link: 'newchart-json-oaxaca',
            showLabel: '1',
          },
          {
            id: '022',
            value: '5',
            // link: 'newchart-json-quintanaroo',
            showLabel: '1',
          },
          {
            id: '026',
            value: '5',
            // link: 'newchart-json-tobasco',
            showLabel: '1',
          },
          {
            id: '030',
            value: '5',
            // link: 'newchart-json-yucatan',
            showLabel: '1',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'peru',
      linkedchart: {
        chart: {
          caption: 'Peru Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '1',
              maxvalue: '5',
              color: '#8AB458',
            },
            {
              minvalue: '6',
              maxvalue: '9',
              color: '#426539',
              // color: '#3E522D'
            },
          ],
        },

        data: [
          {
            id: '01',
            value: '5',
            // link: 'newchart-json-amazonas',
            showLabel: '1',
          },
          {
            id: '10',
            value: '5',
            // link: 'newchart-json-huanuco',
            showLabel: '1',
          },
          {
            id: '016',
            value: '5',
            // link: 'newchart-json-loreto',
            showLabel: '1',
          },
          {
            id: '17',
            value: '5',
            // link: 'newchart-json-madrededios',
            showLabel: '1',
          },
          {
            id: '20',
            value: '5',
            // link: 'newchart-json-Piura',
            showLabel: '1',
          },
          {
            id: '22',
            value: '5',
            // link: 'newchart-json-sanmartin',
            showLabel: '1',
          },
          {
            id: '25',
            value: '5',
            // link: 'newchart-json-ucayali',
            showLabel: '1',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'colombia',
      linkedchart: {
        chart: {
          caption: 'Colombia Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '1',
              maxvalue: '5',
              color: '#8AB458',
            },
            {
              minvalue: '6',
              maxvalue: '9',
              color: '#426539',
              // color: '#3E522D'
            },
          ],
        },

        data: [
          {
            id: '08',
            value: '5',
            // link: 'newchart-json-caqueta',
            showLabel: '1',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'ecuador',
      linkedchart: {
        chart: {
          caption: 'Ecuador Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '1',
              maxvalue: '5',
              color: '#8AB458',
            },
            {
              minvalue: '6',
              maxvalue: '9',
              color: '#426539',
              // color: '#3E522D'
            },
          ],
        },

        data: [
          {
            id: '18',
            value: '5',
            // link: 'newchart-json-pastaza',
            showLabel: '1',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'cotedivoire',
      linkedchart: {
        chart: {
          caption: 'Ivory Coast Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '1',
              maxvalue: '5',
              color: '#8AB458',
            },
            {
              minvalue: '6',
              maxvalue: '9',
              color: '#426539',
              // color: '#3E522D'
            },
          ],
        },

        data: [
          {
            id: 'CI.LC',
            value: '5',
            // link: 'newchart-json-belier',
            showLabel: '1',
          },
          {
            id: 'CI.MV',
            value: '5',
            // link: 'newchart-json-cavally',
            showLabel: '1',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
    {
      id: 'nigeria',
      linkedchart: {
        chart: {
          caption: 'Nigeria Caption',
          subcaption: 'Last year',
          entityFillHoverColor: '#cccccc',
          entityToolText: "<div style='font-size:14px; text-align:center; padding: 2px 4px 2px 4px; color:black;'>$lName</div><div style='font-size:12px; color:black;'>Total Forest Area: <b>$value km<sup>2</sup></b></div>",
          // numberScaleValue: '1,1000,1000',
          // numberScaleUnit: 'K,M,B',
          numberSuffix: ' km²',
          showLabels: '0',
          theme: 'fusion',
        },
        colorrange: {
          minvalue: '0',
          code: '#8AB458',
          gradient: '1',
          color: [
            {
              minvalue: '1',
              maxvalue: '5',
              color: '#8AB458',
            },
            {
              minvalue: '6',
              maxvalue: '9',
              color: '#426539',
              // color: '#3E522D'
            },
          ],
        },

        data: [
          {
            id: 'NG.CR',
            value: '5',
            // link: 'newchart-json-crossriver',
            showLabel: '1',
          },
        ],
        // linkeddata: [
        // ],
      },
    },
  ],
};

const chartConfigs = {
  type: 'worldwithcountries',
  width: '100%',
  height: '600',
  dataFormat: 'json',
  dataSource,
  events: {
    entityClick(eventObj) {
      const outerMapTypes = ['usa', 'cotedivoire', 'peru', 'ecuador', 'colombia', 'mexico', 'indonesia', 'nigeria', 'brazil'];
      const mapType = eventObj.data.id.toLowerCase();
      const childType = eventObj.data.label.replace(/\s+/g, '').toLowerCase();

      if (outerMapTypes.includes(mapType)) {
        console.log(mapType);
        eventObj.sender.configureLink([
          { type: mapType },
          { type: childType },
        ]);
      } else {
        alert('Now trigger a redirect with React Router!');
      }
    },
  },
};

const WorldMap = () => (
  <ReactFC {...chartConfigs} />
);

export default WorldMap;
