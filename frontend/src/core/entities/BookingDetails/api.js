import axios from "axios";

export const bookBusApi = async (payload) => {
  const BOOK_BUS_URL = `${process.env.REACT_APP_HOST_NAME}/booking`;
  return await axios
    .post(BOOK_BUS_URL, payload)
    .then((res) => {
      return {
        data: res.data,
        hasError: false,
      };
    })
    .catch((err) => {
      return {
        data: {},
        hasError: true,
      };
    });
};
