import { ComponentStory, ComponentMeta } from '@storybook/react';
import App from '../components/App';

export default {
    title: 'EasyIntegration',
    component: App
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const WelcomeApp = Template.bind({});
WelcomeApp;