'use client';

import { useChat } from '@ai-sdk/react';
import { Box, Container, Stack, Text, TextInput } from '@mantine/core';
import type { ReactElement } from 'react';

const Page = (): ReactElement => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/v1/chat/google-genai',
  });
  return (
    <Container size="md" py="xl">
      <Stack>
        {messages.map((message) => (
          <Box key={message.id} style={{ whiteSpace: 'pre-wrap' }}>
            <Text component="span" fw={500}>
              {message.role === 'user' ? 'User: ' : 'AI: '}
            </Text>
            {message.parts.map((part, i) => {
              switch (part.type) {
                case 'text':
                  return (
                    <Text component="span" key={`${message.id}-${i}`}>
                      {part.text}
                    </Text>
                  );
                // case 'tool-invocation':
                //   return (
                //     <pre key={`${message.id}-${i}`}>
                //       {JSON.stringify(part.toolInvocation, null, 2)}
                //     </pre>
                //   );
              }
            })}
          </Box>
        ))}
      </Stack>

      <form onSubmit={handleSubmit}>
        <TextInput
          style={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: 'var(--mantine-spacing-xl)',
            width: '100%',
            maxWidth: 'var(--mantine-breakpoint-md)',
          }}
          placeholder="Say something..."
          value={input}
          onChange={handleInputChange}
          radius="md"
          p="xs"
          withAsterisk={false}
        />
      </form>
    </Container>
  );
};

export default Page;
