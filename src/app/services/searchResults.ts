export const generateSearchSummary = (resultCount: number): string => {
  return resultCount === undefined
    ? ""
    : resultCount <= 0
    ? `No results match your search`
    : "";
};
