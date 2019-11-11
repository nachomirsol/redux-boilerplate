export const pieChartLegendStyle = {
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
        fontSize: '1.25em'
    },
    title: {
        style: {
            color: '#C0C0C0'
        }
    }
}

export const barChartLegendStyle = {
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
    title: {
        style: {
            color: '#C0C0C0'
        }
    }
}

export const areaChartLegendStyle = {
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
    title: {
        style: {
            color: '#C0C0C0'
        }
    }
}

export const responsiveChartStyle = {
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