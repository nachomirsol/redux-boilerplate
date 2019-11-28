export const createAssetIcons = (data) => {
    return data;
}

export const checkAssetIcon = (data, variableName, value, isChecked) => {
    let assets = [...data];
    assets = assets.map((item) => {
        if (item[variableName] === value) {
            item.selected = isChecked;
        }
        return item;
    })
    return assets;
}