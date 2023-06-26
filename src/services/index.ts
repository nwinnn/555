import axios from 'axios';
import { MESSAGES_LINK } from '../constants';
import { IGetMessagesResponse } from './types';

export const getMessages = async () => {
  try {
    const messages = await axios.get<IGetMessagesResponse>(MESSAGES_LINK);
    return messages.data.comments;
  } catch (e) {
    console.log(e);
  }
};
