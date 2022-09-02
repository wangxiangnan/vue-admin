import { http } from "../utils/http";

// 获取验证码
export const getVerify = () => {
  return http.get("/captcha");
};

// 登录
export const getLogin = (data: object) => {
  return http.post("/login", { data });
};

// 刷新token
export const refreshToken = (data: object) => {
  return http.post("/refreshToken", { data });
};

// export const searchVague = (data: object) => {
//   return http.request("post", "/searchVague", { data });
// };
