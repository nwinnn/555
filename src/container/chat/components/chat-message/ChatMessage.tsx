import { useContext } from 'react';
import { ChatContext } from '../../context';
import { ChatUsername } from '../chat-username/ChatUsername';
import { ChatMessageDeleteButton, ChatMessageTextWrapper, ChatMessageWrapper } from './styles';
import { IChatMessageProps } from './types';

export const ChatMessage = ({ username, message, id }: IChatMessageProps) => {
  const { deleteMessage } = useContext(ChatContext);

  const handleDeleteMessage = () => {
    deleteMessage(id);
  };

  return (
    <ChatMessageWrapper>
      <ChatUsername
        wrapperleft="-30px"
        wrappertop="-25px"
        wrapperposition="absolute"
        username={username}
      />
      <ChatMessageTextWrapper>{message}</ChatMessageTextWrapper>
      <ChatMessageDeleteButton onClick={handleDeleteMessage}>X</ChatMessageDeleteButton>
    </ChatMessageWrapper>
  );
};
