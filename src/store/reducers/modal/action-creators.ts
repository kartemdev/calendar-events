import { ModalActionEnum, SetModalVisibleAction } from "./types";

export const ModalActionCreators = {
  setModalVisible: (payload: boolean): SetModalVisibleAction => ({type: ModalActionEnum.SET_MODAL_VISIBLE, payload})
}
