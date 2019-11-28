export const createAssetIcons = (data) => {
    return data;
}

export const checkAssetIcon = (data, name) => {
    let assets = [...data];
    assets = assets.map((item) => {
        if (item.assetName === name) {
            item.selected = !item.selected
        }
        return item;
    })
    return assets;
}

export const calculateNumberOfAssetsWithAlerts = (data) => {
    let assets = [...data];
    assets.filter(item => item.selected && item.state === "critical")
    return assets.length;
}