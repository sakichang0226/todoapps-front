import  TodoCardProps  from '../../interface/TodoCardProps';

export interface ModalInfo {
  isOpen: boolean;
  todo?:  TodoCardProps;
}

export interface DeleteDialogInfo {
  isOpen: boolean;
  key: string;
}

