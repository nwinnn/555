import { ChatArea } from './components/chat-area/ChatArea';
import { ChatMessages } from './components/chat-messages/ChatMessages';
import { ContentWrapper, Wrapper } from './styles';

export const Chat = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <ChatMessages />
        <ChatArea />
      </ContentWrapper>
    </Wrapper>
  );
};
