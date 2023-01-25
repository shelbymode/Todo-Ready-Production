import { connect } from "./../../../database/connection";
import { _AuthService } from "~~/backend/Auth/services/auth.service";
import { _UserService } from "~~/backend/User/services/user.service";
import { UserDBRepository } from "~~/backend/User/data/UserDBRepository";

/* 
╔═════════════════════════════════════════════════════════════════════════╗
║ Common                                                                  ║
╚═════════════════════════════════════════════════════════════════════════╝
*/
const connector = connect();
const userPrisma = connector.user;

/* 
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║ User-specific                                                           ║
  ╚═════════════════════════════════════════════════════════════════════════╝
 */
const userDBRepository = new UserDBRepository(userPrisma);
const UserService = new _UserService(userDBRepository);

/* 
  ╔═════════════════════════════════════════════════════════════════════════╗
  ║ Auth-specific                                                           ║
  ╚═════════════════════════════════════════════════════════════════════════╝
 */
const AuthService = new _AuthService(UserService);

export { UserService, AuthService };
