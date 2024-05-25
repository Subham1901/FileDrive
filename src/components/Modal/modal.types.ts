interface ModalType {
  modalTitle: string;
  children: JSX.Element;
  showModal: boolean;
  closeModal: () => void;
}
