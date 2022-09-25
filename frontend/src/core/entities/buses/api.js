import axios from "axios";

export const fetchBusesApi = async ({ from, to, date }) => {
  const FETCH_BUSES_URL = `${process.env.REACT_APP_HOST_NAME}/buses?origin=${from}&destination=${to}&schedule_date=${date}`;
  return await axios
    .get(FETCH_BUSES_URL)
    .then((res) => {
      return {
        data: res.data,
        hasError: false,
      };
    })
    .catch((err) => {
      return {
        data: [],
        hasError: true,
      };
    });
};
