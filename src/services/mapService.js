import { searchHierarchyItem } from './hierachyService';

export const createMapAreas = (data) => {
  return data.features;
}

export const selectMapArea = (data, id) => {
  const cloneData = [...data];

  const itemFounded = cloneData.find(item => item.properties.id === id);
  itemFounded.selected = !itemFounded.selected;

  return cloneData;
};

export const setSelectedAreas = (data, hierarchy) => {
  let mapAreas = [...data];
  mapAreas = mapAreas.filter(item => {
    const element = searchHierarchyItem(hierarchy, item.properties.dmaId);
    if (element && element.checked) {
      return element;
    }
    return null;
  });
  return mapAreas;
};

export const setSelectedIcons = (data, hierarchy) => {
  const iconAssets = [...data];
  return iconAssets.filter(item => {
    const element = searchHierarchyItem(hierarchy, item.dmaId);
    if (element && element.checked && item.selected) {
      return element;
    }
    return null;
  });
};


export const setSelectedFilters = (data, solution, name, checked) => {
  let filters = [...data];
  filters = filters.map((filter) => {
    if (filter.name === solution) {
      filter.items.map((item) => {
        if (item.name === name) {
          item.checked = checked;
        }
        return item;
      })
    }
    return filter;
  });
  return filters;
};