import { useContext, useEffect, useRef } from 'react';
import { ChatContext } from '../../context';
import { ChatMessage } from '../chat-message/ChatMessage';
import { LoaderWrapper, MessagesBottom, MessagesWrapper } from './styles';
import ClipLoader from 'react-spinners/ClipLoader';
import { themes } from '../../../../themes';

export const ChatMessages = () => {
  const { messages, isLoading } = useContext(ChatContext);

  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    lastMessageRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (isLoading) {
    return (
      <LoaderWrapper>
        <ClipLoader color={themes.colors.lemonCurry} loading={isLoading} size={150} />
      </LoaderWrapper>
    );
  }

  return (
    <MessagesWrapper>
      {messages.map(message => (
        <ChatMessage
          key={message.id}
          username={message.user.username}
          message={message.body}
          id={message.id}
        />
      ))}
      <MessagesBottom ref={lastMessageRef} />
    </MessagesWrapper>
  );
};
