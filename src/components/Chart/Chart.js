import React, { useState } from 'react';

import Highcharts from 'highcharts/highstock';
import PropTypes from 'prop-types';
import HighchartsReact from 'highcharts-react-official';
import { pieChartLegend, barChartLegend, areaChartLegend } from './chartLegend';
import './chart.scss';

const Chart = ({ type, title, subtitle, xAxis, yAxis, data }) => {

    const options = {
        chart: {
            type: `${type}`,
            backgroundColor: 'transparent',
            height: '50%'
        },
        rangeSelector: {
            enabled: false
        },
        title: {
            text: `${title}`
        },
        subtitle: {
            text: `${subtitle}`
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
                }
            }
        },
        legend: type === 'pie' ? pieChartLegend : (type === 'bar' ? barChartLegend : areaChartLegend),
        series: data,

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
                            }
                        }
                    }
                },
            }]
        }
    };

    return (
        <div className="charty">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
            />
        </div>
    )
};

Chart.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    xAxis: PropTypes.object,
    yAxis: PropTypes.object,
    data: PropTypes.array
};

export default Chart;