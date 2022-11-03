import { useStore } from "@/store";

export default function (axios) {
  axios.interceptors.request.use(
    (request) => {
      const store = useStore();
      request.headers.Authorization = `Bearer ${store.accessToken}`;
      return request;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
