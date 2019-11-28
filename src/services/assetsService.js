export const createAssetIcons = data => {
  return data;
};

export const checkAssetIcon = (
  filters,
  mapData,
  iconData,
  variableName,
  value,
  isChecked
) => {
  let iconAssets = [...iconData];
  let mapAreas = [...mapData];
  const filterItems = filters.reduce((arr, filter) => {
    return arr.concat(filter.items);
  }, []);
  // filterItems has the next strucutre: [ { checked: true, value: critical, etc }, { checked: false, value: warning, etc }, etc ]
  // each icon has the next attributes: { state: (critical|warning|normal), name: (deposito|bomba|etc), selected: true, etc }
  iconAssets = iconAssets.map(item => {
    const stateSelected = filterItems.some(
      filter => filter.value === item.state && filter.checked
    );
    const nameSelected = filterItems.some(
      filter => filter.value === item.assetName && filter.checked
    );
    if (item[variableName] === value) {
      if (variableName === "state") {
        item.selected = isChecked && nameSelected;
      } else if (variableName === "assetName") {
        item.selected = isChecked && stateSelected;
      }
    }
    return item;
  });
  if (variableName === "state") {
    mapAreas = mapAreas.map(item => {
        if (item.properties[variableName] === value) {
          item.properties.selected = isChecked;
        }
      return item;
    });
  }
  return { iconAssets, mapAreas };
};

export const calculateNumberOfAssetsWithAlerts = data => {
  let assets = [...data];
  assets.filter(item => item.selected && item.state === "critical");
  return assets.length;
};
