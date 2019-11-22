import React from 'react';
/**Libraries */
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import PropTypes from 'prop-types';
/**Config Helper */
import { pieChartLegendStyle, barChartLegendStyle, areaChartLegendStyle, responsiveChartStyle } from './config';
/**Styles */
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
        legend: type === 'pie' ? pieChartLegendStyle : (type === 'bar' ? barChartLegendStyle : areaChartLegendStyle),
        series: data,

        responsive: responsiveChartStyle
    };

    return (
        <div className="chart chart__content">
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