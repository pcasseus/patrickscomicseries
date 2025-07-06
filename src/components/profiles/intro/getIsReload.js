export const getIsReload = () => {
  return performance.getEntriesByType("navigation")[0]?.type === "reload";
};
