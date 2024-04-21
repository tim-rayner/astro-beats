// src/apis/productAPI.js

import { api } from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const AuthApi = {
  // calculate: async function (url, cancel = false) {
  //   //URL encode the url
  //   const encodedUrl = encodeURIComponent(url);
  //   const apiKey = process.env.REACT_APP_WEBSITECARBON_API_KEY;
  //   const response = await api
  //     .request({
  //       url: `https://api.websitecarbon.com/site?url=${encodedUrl}`,
  //       method: "POST",
  //       data: { url },
  //       signal: cancel
  //         ? cancelApiObject[this.calculate.name].handleRequestCancellation()
  //             .signal
  //         : undefined,
  //     })
  //     .catch((error) => {
  //       console.error("error", error);
  //       return error;
  //     });
  //   //returning the calculation returned by the API
  //   return response.data;
  // },
};
// export const ProductAPI = {

//     get: async function (id, cancel = false) {
//     const response = await api.request({
//       url: `/products/:id`,
//       method: "GET",
//       // retrieving the signal value by using the property name
//       signal: cancel
//         ? cancelApiObject[this.get.name].handleRequestCancellation().signal
//         : undefined,
//     });

//     // returning the product returned by the API
//     return response.data.product;
//   },
//   getAll: async function (cancel = false) {
//     const response = await api.request({
//       url: "/products/",
//       method: "GET",
//       signal: cancel
//         ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal
//         : undefined,
//     });

//     return response.data.products;
//   },
//   search: async function (name, cancel = false) {
//     const response = await api.request({
//       url: "/products/search",
//       method: "GET",
//       params: {
//         name: name,
//       },
//       signal: cancel
//         ? cancelApiObject[this.search.name].handleRequestCancellation().signal
//         : undefined,
//     });

//     return response.data.products;
//   },
//   create: async function (product, cancel = false) {
//     await api.request({
//       url: `/products`,
//       method: "POST",
//       data: product,
//       signal: cancel
//         ? cancelApiObject[this.create.name].handleRequestCancellation().signal
//         : undefined,
//     });
//   },
// };

// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(AuthApi);
