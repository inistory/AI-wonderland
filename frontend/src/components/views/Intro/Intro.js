// 2. 토끼 이미지 보여줄 때, 배열 중에 아무거나 선택해서 보여주도록 해야 함
// 3. Let's play some music

import { useState } from 'react';
import IntroBasic from './IntroBasic';
import IntroRabbitTalk from './IntroRabbitTalk';
import IntroUserTalk from './IntroUserTalk';
import IntroTimeTalk from './IntroTimeTalk';

export default function Intro() {
  const [interactionCase, setInteractionCase] = useState('basic');

  if (interactionCase === 'basic') {
    return (
      <IntroBasic
        handleInteraction={(interaction) => {
          setInteractionCase(interaction);
        }}
      />
    );
  } else if (interactionCase === 'rabbitTalkOn') {
    return (
      <IntroRabbitTalk
        handleInteraction={(interaction) => {
          setInteractionCase(interaction);
        }}
      />
    );
  } else if (interactionCase === 'userTalkOn') {
    return (
      <IntroUserTalk
        handleInteraction={(interaction) => {
          setInteractionCase(interaction);
        }}
      />
    );
  } else if (interactionCase === 'timeTalkOn') {
    return <IntroTimeTalk />;
  }
}
