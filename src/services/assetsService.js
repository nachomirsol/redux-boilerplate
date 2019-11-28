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