import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "18bb1f891emsh763f7a23d10a2a2p180cf2jsnb8b516b714ba",
    },
  });
  return data;
};
