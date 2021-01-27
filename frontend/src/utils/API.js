// utils/API.js

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  responseType: "json"
});


const API_BASE_ADDRESS = 'http://localhost:3000/api/v1';
export default class Api {   
  static getUsers() {       
    const uri = API_BASE_ADDRESS + "/users";
    return fetch(uri, {           
      method: 'GET'       
    });   
  }
}