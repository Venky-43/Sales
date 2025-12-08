export const buildQuery = (filters, page) => {
  return {
    page,
    search: filters.search,
    region: filters.region,
    gender: filters.gender,
    category: filters.category,
    payment: filters.payment,
    sortBy: filters.sortBy
  };
};
