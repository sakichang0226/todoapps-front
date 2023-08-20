import { Meta, StoryObj } from '@storybook/react';
import  TodoCard  from '../components/TodoCard';

const meta: Meta<typeof TodoCard> = {
  component: TodoCard,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<typeof TodoCard> = {
  args: {
    title: "Getting Started",
    created_at: "4 Feb 2022",
    updated_at: "4 Feb 2022",
    content: "It is a long established fact that a reader will be distracted\
      by the readable content of a page when looking at its layout."
  }
};

export const LongContent: StoryObj<typeof TodoCard> = {
  args: {
    title: "Getting Started",
    created_at: "4 Feb 2022",
    updated_at: "4 Feb 2022",
    content: "It is a long established fact that a reader will be distracted\
      by the readable content of a page when looking at its layout.\
      by the readable content of a page when looking at its layout.\
      by the readable content of a page when looking at its layout.\
      "
  }
};