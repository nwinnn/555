import { useMemo } from 'react';
import { ChatUsernameInitials, ChatUsernameText, ChatUsernameWrapper } from './styles';
import { IChatUsernameProps } from './types';

export const ChatUsername = ({
  username,
  wrapperleft,
  wrapperposition,
  wrappertop,
}: IChatUsernameProps) => {
  const initials = useMemo(() => {
    const [name, surname] = username.split(' ');

    return name[0] + (surname?.[0] || '');
  }, [username]);

  return (
    <ChatUsernameWrapper
      wrapperleft={wrapperleft}
      wrapperposition={wrapperposition}
      wrappertop={wrappertop}
    >
      <ChatUsernameInitials>
        {initials}
        <ChatUsernameText>{username}</ChatUsernameText>
      </ChatUsernameInitials>
    </ChatUsernameWrapper>
  );
};
