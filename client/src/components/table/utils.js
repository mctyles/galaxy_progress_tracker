const _parseTableHeaders = (headers) => {
  const parsedHeaders = [];

  for (const header of headers) {
    const headerCopy = header.split("");
    let upperCaseChar = null;

    for (let i = 0; i < headerCopy.length; i++) {
      const char = header[i];
      if (char) {
        upperCaseChar = char.toUpperCase();
      }
      if (char === upperCaseChar) {
        headerCopy.splice(i, 0, " ");
      }
    }
    const parsedHeader = headerCopy.join("").toUpperCase();

    parsedHeaders.push(parsedHeader);
  }

  return parsedHeaders;
};

export const formatTableHeaders = (data) => {
  if (data) {
    const firstValue = data[0];
    const tableHeaders = Object.keys(firstValue);
    const parsedTableHeaders = _parseTableHeaders(tableHeaders);
    return parsedTableHeaders;
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
