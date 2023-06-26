import { Chat } from './container/chat/Chat';
import { ChatState } from './container/chat/context';

const App = () => {
  return (
    <ChatState>
      <Chat />
    </ChatState>
  );
};

export default App;
