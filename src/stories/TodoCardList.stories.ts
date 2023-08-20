import { Meta, StoryObj } from '@storybook/react';
import TodoCard  from '../components/TodoCard';
import TodoCardList from '../components/TodoCardList';
import TodoCardProps from '../interface/TodoCardProps';

const meta: Meta<typeof TodoCardList> = {
  component: TodoCardList,
};
export default meta;
type Story = StoryObj<typeof meta>;

const todos = [
    {
      id: "1eggh",
      title: "Getting Started",
      created_at: "4 Feb 2022",
      updated_at: "4 Feb 2022",
      content: "It is a long established fact that a reader will be distracted\
        by the readable content of a page when looking at its layout."
    },
    {
      id: "2agb",
      title: "Getting Started",
      created_at: "4 Feb 2022",
      updated_at: "4 Feb 2022",
      content: "It is a long established fact that a reader will be distracted\
        by the readable content of a page when looking at its layout."
    },
    {
      id: "3agb",
      title: "Getting Started",
      created_at: "4 Feb 2022",
      updated_at: "4 Feb 2022",
      content: "It is a long established fact that a reader will be distracted\
        by the readable content of a page when looking at its layout."
    },
    {
      id: "4agb",
      title: "Getting Started",
      created_at: "4 Feb 2022",
      updated_at: "4 Feb 2022",
      content: "It is a long established fact that a reader will be distracted\
        by the readable content of a page when looking at its layout."
    }
  ]; 

export const Default: StoryObj<typeof TodoCardList> = {
  args: todos
};