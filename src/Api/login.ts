import { account } from "../Helpers/axios";
export const LoginRequest = async () => {
  const { data } = await account.get("userprofile");

  return data;
};
