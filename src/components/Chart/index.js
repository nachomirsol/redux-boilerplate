import React, { useState } from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './chart.scss';


const options = {

    chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        borderColor: '#335cad',
        borderWidth: 0,
        plotBorderColor: '#606063',
        height: '50%',
        width: null
    },

    rangeSelector: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            showInLegend: true
        },
        series: {
            dataLabels: {
                color: '#F0F0F3',
                style: {
                    fontSize: '1em',
                    fontWeight: '300',
                    textOutline: '0px'
                },
                enabled: true
            },
            marker: {
                lineColor: '#333'

            }
        },
        boxplot: {
            fillColor: '#000'
        },
        candlestick: {
            lineColor: 'transparent'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        backgroundColor: 'transparent',
        align: 'left',
        layout: 'vertical',
        verticalAlign: 'middle',
        textAlign: 'center',
        itemMarginBottom: 24,
        x: 0,
        y: 0,
        itemStyle: {
            color: '#E0E0E3',
            fontWeight: 300,
            fontSize: '1em'
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        },
        title: {
            style: {
                color: '#C0C0C0'
            }
        },
    },
    series: [{
        name: 'Gases',
        type: 'pie',
        borderColor: 'transparent',
        data: [
            {
                name: 'Oxygen',
                y: 15,
                color: '#E9C417',
                legendIndex: 1
            },
            {
                name: 'Argon',
                y: 15,
                color: '#18B549',
                legendIndex: 2
            },
            {
                name: 'Nitrogen',
                y: 70,
                color: '#E37272',
                legendIndex: 0
            }
        ],

    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 300
            },

            chartOptions: {
                chart: {
                    height: '100%'
                },
                legend: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false,
                            format: '<b>{point.name}</b>:         {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                }

            },

        }]
    }
};

const Chart = () => (

    <div className="charty">
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    </div>
);
export default Chart;