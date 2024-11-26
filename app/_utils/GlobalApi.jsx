import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

const client = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategories = async () => {
  const { data } = await client.get("/categories?populate=*");
  return data;
};

const getDoctors = async () => {
  const { data } = await client.get("/doctors?populate=*");
  return data;
};

export default {
  getCategories,
  getDoctors,
};
