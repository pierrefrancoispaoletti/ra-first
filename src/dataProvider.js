/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:5000/api/products";
const httpClient = fetchUtils.fetchJson;

export default {
  getList: async (resource) => {
    const url = `${apiUrl}/${resource}`;

    return await axios.get(url).then(({ headers, data }) => ({
      data: data.data,
      total: parseInt(headers["x-total-count"], 10),
    }));
  },

  //   getOne: async (resource, params) =>
  //     await httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
  //       data: json,
  //     })),

  //   getMany: async (resource, params) => {
  //     const query = {
  //       filter: JSON.stringify({ id: params.ids }),
  //     };
  //     const url = `${apiUrl}/${resource}?${stringify(query)}`;
  //     return await httpClient(url).then(({ json }) => ({ data: json }));
  //   },

  //   getManyReference: async (resource, params) => {
  //     const { page, perPage } = params.pagination;
  //     const { field, order } = params.sort;
  //     const query = {
  //       sort: JSON.stringify([field, order]),
  //       range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
  //       filter: JSON.stringify({
  //         ...params.filter,
  //         [params.target]: params.id,
  //       }),
  //     };
  //     const url = `${apiUrl}/${resource}?${stringify(query)}`;

  //     return await httpClient(url).then(({ headers, json }) => ({
  //       data: json,
  //       total: parseInt(headers.get("content-range").split("/").pop(), 10),
  //     }));
  //   },

  //   update: async (resource, params) =>
  //     await httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //       method: "PUT",
  //       body: JSON.stringify(params.data),
  //     }).then(({ json }) => ({ data: json })),

  //   updateMany: async (resource, params) => {
  //     const query = {
  //       filter: JSON.stringify({ id: params.ids }),
  //     };
  //     return await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //       method: "PUT",
  //       body: JSON.stringify(params.data),
  //     }).then(({ json }) => ({ data: json }));
  //   },

  //   create: async (resource, params) =>
  //     await httpClient(`${apiUrl}/${resource}`, {
  //       method: "POST",
  //       body: JSON.stringify(params.data),
  //     }).then(({ json }) => ({
  //       data: { ...params.data, id: json.id },
  //     })),

  //   delete: async (resource, params) =>
  //     await httpClient(`${apiUrl}/${resource}/${params.id}`, {
  //       method: "DELETE",
  //     }).then(({ json }) => ({ data: json })),

  //   deleteMany: async (resource, params) => {
  //     const query = {
  //       filter: JSON.stringify({ id: params.ids }),
  //     };
  //     return await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
  //       method: "DELETE",
  //     }).then(({ json }) => ({ data: json }));
  //   },
};
