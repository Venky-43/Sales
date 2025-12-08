import Sale from "../models/Sales.js";

export const buildQuery = (params) => {
  const query = {};

  if (params.region && params.region !== "All") {
    query.customerRegion = params.region;
  }

  if (params.gender && params.gender !== "All") {
    query.gender = params.gender;
  }

  if (params.payment && params.payment !== "All") {
    query.paymentMethod = params.payment;
  }

  if (params.category && params.category !== "All") {
    query.productCategory = params.category;
  }

  if (params.status && params.status !== "All") {
    query.orderStatus = params.status;
  }

  if (params.search && params.search.trim() !== "") {
    query.$text = { $search: params.search };
  }

  return query;
};

export const getSalesWithFilters = async (params) => {
  const { page = 1, limit = 20, sortBy, order } = params;

  const query = buildQuery(params);

  const sort = {};
  if (sortBy) sort[sortBy] = order === "desc" ? -1 : 1;

  const data = await Sale.find(query)
    .sort(sort)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  const total = await Sale.countDocuments(query);

  return {
    total,
    page: Number(page),
    pages: Math.ceil(total / limit),
    sales: data,
  };
};
