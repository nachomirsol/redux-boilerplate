import StatusIndicator from "../../../components/StatusIndicator";
import OverallInfoWidgetContent from "../components/OverallInfoWidgetContent/OverallInfoWidgetContent";

const operationStateModel = [
  {
    title: "app.components.Widget.Header.Title.Infraestructures",
    Component: StatusIndicator,
    hasProps: false,
    widgetProps: null,
    name: "Infraestructures"
  },
  {
    title: "app.components.Widget.Header.Title.Leaks",
    Component: StatusIndicator,
    hasProps: false,
    widgetProps: null,
    name: "Leaks"
  },
  {
    title: "app.components.Widget.Header.Title.SmartMetering",
    Component: StatusIndicator,
    hasProps: false,
    widgetProps: null,
    name: "SmartMetering"
  },
  {
    title: "app.components.Widget.Header.Title.WorkOrders",
    Component: StatusIndicator,
    hasProps: false,
    widgetProps: null,
    name: "WorkOrders"
  },
  {
    title: "app.components.Widget.Header.Title.Billing",
    Component: StatusIndicator,
    hasProps: false,
    widgetProps: null,
    name: "Billing"
  },
  {
    title: "app.components.Widget.Header.Title.Operation",
    Component: StatusIndicator,
    hasProps: false,
    widgetProps: null,
    name: "Operation"
  },
  {
    title: "app.components.Widget.Header.Title.WaterQuality",
    Component: StatusIndicator,
    hasProps: false,
    widgetProps: null,
    name: "WaterQuality"
  },
  /*
  {
    title: "app.components.Widget.Header.Title.Operation",
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
    name: "Operation"
  },
  {
    title: "app.components.Widget.Header.Title.WaterQuality",
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
    name: "WaterQuality"
  }
  */
];

export default operationStateModel;
