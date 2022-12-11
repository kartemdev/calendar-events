import { AuthActionCreators } from "./auth/action-creators";
import { EventActionCreators } from "./event/action-creators";
import { ModalActionCreators } from "./modal/action-creators";


export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCreators,
  ...ModalActionCreators,
}
