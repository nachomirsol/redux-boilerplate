export const createMapAreas = (data) => {
    return data;
}

export const selectMapArea = (data, id) => {
    const cloneData = [...data];

    const itemFounded = cloneData.find(item => item.properties.id === id);
    itemFounded.selected = !itemFounded.selected;

    return cloneData;
};