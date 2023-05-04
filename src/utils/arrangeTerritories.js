const arrangeTerritories = (flatData, parent = null) => {
  const result = flatData.filter(territory => territory.parent === parent);

  return result.map(territory => {
    const children = arrangeTerritories(flatData, territory.id);
    
    if (children.length > 0) {
      territory.children = children;
    }

    return territory;
  });
};

export default arrangeTerritories;
