import { Meta, StoryObj } from '@storybook/react';
import TodoLoading  from '../components/TodoLoading';

const meta: Meta<typeof TodoLoading> = {
  component: TodoLoading,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<typeof TodoLoading> = {
};