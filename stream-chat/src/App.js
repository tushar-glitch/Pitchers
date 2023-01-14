import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const chatClient = new StreamChat('dpszbb8wy8gw');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoicHVycGxlLXBvZXRyeS04In0.TgE55T0lZeXV1Q8FSOMWMbWeHLvQKYt2P6NTmWJ4bhY';

chatClient.connectUser(
  {
    id: 'purple-poetry-8',
    name: 'purple-poetry-8',
    image: 'https://getstream.io/random_png/?id=purple-poetry-8&name=purple-poetry-8',
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'custom_channel_id', {
  // add as many custom fields as you'd like
  image: 'https://www.drupal.org/files/project-images/react.png',
  name: 'Talk about React',
  members: ['purple-poetry-8'],
});

const App = () => (
  <Chat client={chatClient} theme='str-chat__theme-light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
);

export default App;
