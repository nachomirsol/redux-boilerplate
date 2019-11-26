import StatusIndicator from '../../../components/StatusIndicator';
import OverallInfoWidgetContent from '../components/OverallInfoWidgetContent/OverallInfoWidgetContent';

const operationStateModel = [
    {
        title: 'app.components.Widget.Header.Title.Infraestructures',
        Component: StatusIndicator,
        hasProps: false,
        widgetProps: null,
    },
    {
        title: 'app.components.Widget.Header.Title.Operation',
        Component: OverallInfoWidgetContent,
        hasProps: true,
        widgetProps: {
            icons: [
                { name: "broadcast-tower", text: "Comunicación" },
                { name: "cog", text: "fugas" }
            ],
            minRange: "",
            maxRange: ""
        },
    },
    {
        title: 'app.components.Widget.Header.Title.WaterQuality',
        Component: OverallInfoWidgetContent,
        hasProps: true,
        widgetProps: {
            icons: [
                { name: "", text: "-" },
                { name: "", text: "-" }
            ],
            minRange: "0.45",
            maxRange: "0.96"
        },
    },
]

export default operationStateModel;