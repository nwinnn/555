import { createContext, useEffect, useState } from 'react';
import { getMessages } from '../../../services';
import { IMessage } from '../../../services/types';
import { IChatContext, IChatState } from './types';

const initialValues = {
  messages: [],
  addMessage: () => null,
  deleteMessage: () => null,
  isLoading: false,
};

export const ChatContext = createContext<IChatState>(initialValues);

export const ChatState = ({ children }: IChatContext) => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([]);

  const addMessage = (message: IMessage) => {
    setMessages([...messages, message]);
  };

  const deleteMessage = (id: string | number) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  useEffect(() => {
    try {
      (async () => {
        setIsLoading(true);
        const messages = await getMessages();
        messages && setMessages(messages);
        setIsLoading(false);
      })();
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  }, []);

  return (
    <ChatContext.Provider value={{ messages, addMessage, deleteMessage, isLoading }}>
      {children}
    </ChatContext.Provider>
  );
};
