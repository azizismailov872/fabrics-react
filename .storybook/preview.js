/** @type { import('@storybook/react').Preview } */
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import { themes } from '@storybook/theming';


const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS
    },
  },
};

export const globalTypes = {
    darkMode: true,
};

export default preview;
