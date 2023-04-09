import { UserDocument } from "../routers/database/UserModal/User";

declare global {
  namespace Express {
    interface User extends UserDocument {}
  }
}
