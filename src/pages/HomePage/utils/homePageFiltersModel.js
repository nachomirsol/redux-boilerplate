export const filterModel = [
    {
        title: "app.components.Filterpanel.Solution.Title",
        name: "solutions",
        items: [
            {
                name: "app.components.Widget.Header.Title.Infraestructures",
                variableName: "assetName",
                value: "deposito",
                checked: true,
            },
            {
                name: "app.components.Widget.Header.Title.Leaks",
                variableName: "assetName",
                value: "bomba",
                checked: true,
            },
            {
                name: "app.components.Widget.Header.Title.SmartMetering",
                variableName: "assetName",
                value: "deposito",
                checked: true,
            },
        ]
    },
    {
        title: "app.components.Filterpanel.AlertLevel.Title",
        name: "alarms",
        items: [
            {
                value: "critical",
                name: "app.components.Filterpanel.AlertLevel.Critical",
                variableName: "state",
                checked: true,
            },
            {
                value: "warning",
                name: "app.components.Filterpanel.AlertLevel.Warning",
                variableName: "state",
                checked: true,
            },
            {
                value: "normal",
                name: "app.components.Filterpanel.AlertLevel.Normal",
                variableName: "state",
                checked: true,
            },
        ]
    },
]