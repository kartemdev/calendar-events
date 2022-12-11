export interface ModalState {
  modalVisible: boolean;
}

export enum ModalActionEnum {
  SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE',
}

export interface SetModalVisibleAction {
  type: ModalActionEnum.SET_MODAL_VISIBLE,
  payload: boolean;
}

export type ModalAction = SetModalVisibleAction;
