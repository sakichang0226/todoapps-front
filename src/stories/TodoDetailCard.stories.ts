import { Meta, StoryObj } from '@storybook/react';
import  TodoDetailCard  from '../components/TodoDetailCard';

const meta: Meta<typeof TodoDetailCard> = {
  component: TodoDetailCard,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<typeof TodoDetailCard> = {
};
