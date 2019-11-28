export const createAssetIcons = (data) => {
    return data;
}

export const checkAssetIcon = (mapData, iconData, variableName, value, isChecked) => {
    console.log(mapData);
    let iconAssets = [...iconData];
    let mapAreas = [...mapData]
    iconAssets = iconAssets.map((item) => {
        if (item[variableName] === value) {
            item.selected = isChecked;
        }
        return item;
    })
    if (variableName === 'state') {
        mapAreas = mapAreas.map((item) => {
            if (item.properties[variableName] === value) {
                item.properties.selected = isChecked;
            }
            return item;
        })
    }
    return { iconAssets, mapAreas };
}