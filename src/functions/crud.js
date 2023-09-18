import axios from "axios";

export const apiControl = {
  get: async function (url,id) {
    return axios.get(url,id).then(function (response) {
      return response;
    });
  },
  post: async function (url, data) {
    return axios.post(url, data).then(function (response) {
      console.log('se ha creado correctamente')
      return response;
    });
  },
  patch: async function (url, data) { 
    return axios.patch(url, data).then(function (response) {
      console.log('se ha actualizado correctamente')
      return response;
    });
  },
  delete: async function (url,id) {  
    return axios.delete(url, id).then(function (response) {
      console.log('se ha eliminado correctamente')
      return response;
    });
  }
};

