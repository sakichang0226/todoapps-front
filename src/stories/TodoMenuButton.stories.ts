import { Meta, StoryObj } from '@storybook/react';
import  TodoMenuButton  from '../components/TodoMenuButton';
import TodoMenuProps from '../interface/TodoMenuProps';

const meta: Meta<typeof TodoMenuButton> = {
  component: TodoMenuButton,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<typeof TodoMenuButton> = {
  args: {
    isLogin: false,
    userName: "testUser"
  } as TodoMenuProps,
};