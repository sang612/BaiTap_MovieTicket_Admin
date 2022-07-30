import Axios from "axios";
import { CYBERSOFT_TOKEN, DOMAIN, TOKEN } from "../util/settings/config";

export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      headers: {
        TokenCybersoft:
          CYBERSOFT_TOKEN,
        Authorization: "Bearer " + TOKEN,
      },
      method: "PUT",
      data: model,
      //   headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      headers: {
        TokenCybersoft:
          CYBERSOFT_TOKEN,
        Authorization: "Bearer " + TOKEN,
      },
      data: model,

      //   headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        TokenCybersoft:
          CYBERSOFT_TOKEN,
        Authorization: "Bearer " + TOKEN,
      },
      //   headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        TokenCybersoft:
          CYBERSOFT_TOKEN,
        Authorization: "Bearer " + TOKEN,
      },
      // headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
