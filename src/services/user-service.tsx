import create from "./http-service";

export interface User {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default create("/users");
