import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TodoHeader  from '../components/TodoHeader';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const meta: Meta<typeof TodoHeader> = {
  component: TodoHeader,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )]
};
export default meta;

export const Default: StoryObj<typeof TodoHeader> = {
  args: {
    menuProps: {
      isLogin: true,
      userName: "StoryBook"
    }
  }
};

export const NotLogin: StoryObj<typeof TodoHeader> = {
  args: {
    menuProps: {
      isLogin: false,
      userName: ""
    }
  }
};