import axios from "axios";

export default class Api {
  static doRequest() {
    return axios
      .get(
        "https://gist.githubusercontent.com/Serjobas/442edf3d1a1cf638b78fded7465e2a45/raw/0ebc003c7ec311bcfd83682f14d0a010bd669db3/x5.json"
      )
      .then(({ data }) => {
        return data;
      })
      .catch(({ error }) => {
        return error;
      });
  }
}
