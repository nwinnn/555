import { IMessage } from '../../../services/types';

export interface IChatState {
  messages: IMessage[];
  addMessage: (message: IMessage) => void;
  deleteMessage: (id: number | string) => void;
  isLoading: boolean;
}

export interface IChatContext {
  children: React.ReactNode;
}
