export const formatTableHeaders = (data) => {
  if (data) {
    const firstValue = data[0];
    console.log(firstValue);
    const tableHeaders = Object.keys(firstValue);
    return tableHeaders;
  }
  return null;
};

export const formatTableValues = (data) => {
  if (data) {
    const tableDataValues = Object.values(data);
    return tableDataValues;
  }
  return null;
};
