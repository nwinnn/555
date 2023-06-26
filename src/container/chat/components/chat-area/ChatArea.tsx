import { useContext, useEffect, useState } from 'react';
import { Button } from '../../../../components/button/Button';
import { IMessage } from '../../../../services/types';
import { ChatContext } from '../../context';
import { ChatAreaBox, ChatAreaWrapper } from './styles';
import uniqid from 'uniqid';
import { NO_SEND_TEXT_KEY } from '../../../../constants';

export const ChatArea = () => {
  const [body, setBody] = useState(localStorage.getItem(NO_SEND_TEXT_KEY) || '');
  const { addMessage } = useContext(ChatContext);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
    localStorage.setItem(NO_SEND_TEXT_KEY, e.target.value);
  };

  const handleAddMessage = () => {
    const message: IMessage = {
      id: uniqid(),
      body,
      postId: uniqid(),
      user: {
        id: 'me-user',
        username: 'Rostyslav Trukhym',
      },
    };

    addMessage(message);
    setBody('');
    localStorage.removeItem(NO_SEND_TEXT_KEY);
  };

  return (
    <ChatAreaWrapper>
      <ChatAreaBox onChange={handleInput} value={body} placeholder="Message" />
      <Button
        disabled={!body}
        onClick={handleAddMessage}
        text="Send"
        position="absolute"
        bottom="-15px"
        right="-20px"
      />
    </ChatAreaWrapper>
  );
};
