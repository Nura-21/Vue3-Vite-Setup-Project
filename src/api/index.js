import axios from "@/plugins";

class ApiClass {
  async axiosCall(config) {
    const { data } = await axios.request(config);
    return data;
  }
}

const api = new ApiClass();
export default api;