import { ModalAction, ModalActionEnum, ModalState } from "./types";

const initialState: ModalState = {
  modalVisible: false
};

export default function modalReducer (state = initialState, action: ModalAction): ModalState {
  switch(action.type) {
    case ModalActionEnum.SET_MODAL_VISIBLE:
      return { modalVisible: action.payload };
    default:
      return state;
  };
}
