const deepTrim = values => {
  Object.keys(values).map(
    k =>
      (values[k] =
        typeof values[k] !== 'undefined' &&
        typeof values[k] === 'string' &&
        values[k] !== null
          ? values[k].trim()
          : typeof values[k] !== 'undefined' &&
            typeof values[k] === 'object' &&
            values[k] !== null
          ? deepTrim(values[k])
          : values[k]),
  );
  return values;
};
// please test before use too lazy too push test cases
export default deepTrim;
