import type { Preview } from "@storybook/react";
import '../src/app/globals.css';

const preview: Preview = {
  parameters: {
    options: {
      method: 'alphabetical',
      storySort: {
        order: ['Introduction', 'Best Practices', 'Zod', '*'],
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
