import { Meta, StoryObj } from '@storybook/react';
import  TodoMenuButton  from '../components/TodoMenuButton';
import TodoMenuProps from '../interface/TodoMenuProps';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const meta: Meta<typeof TodoMenuButton> = {
  component: TodoMenuButton,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )]
};
export default meta;


export const Default: StoryObj<typeof TodoMenuButton> = {
  args: {
    isLogin: false,
    userName: "testUser"
  } as TodoMenuProps,
};

export const Login: StoryObj<typeof TodoMenuButton> = {
  args: {
    isLogin: true,
    userName: "testUser"
  } as TodoMenuProps,
};