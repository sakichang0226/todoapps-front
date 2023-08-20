import { Meta, StoryObj } from '@storybook/react';
import  TodoCard  from '../components/TodoCard';
import  TodoCardList  from '../components/TodoCard';

const meta: Meta<typeof TodoCardList> = {
  component: TodoCard,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<typeof TodoCardList> = {
  args: {
    id: "1eggh",
    title: "Getting Started",
    created_at: "4 Feb 2022",
    updated_at: "4 Feb 2022",
    content: "It is a long established fact that a reader will be distracted\
      by the readable content of a page when looking at its layout."
  }
};

export const LongContent: StoryObj<typeof TodoCard> = {
  args: {
    id: "1eggh",
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