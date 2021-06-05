import { RavenContext } from "../../shared/RavenContext";
import { UserRepository } from "./UserRepository";

const storeContext = RavenContext.getContext();
const userRepository = new UserRepository(storeContext);

export {userRepository};