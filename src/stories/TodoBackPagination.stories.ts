import { Meta, StoryObj } from '@storybook/react';
import  TodoBackPagination  from '../components/TodoBackPagination';
import TodoPaginationProps from '../interface/TodoPaginationProps';

const meta: Meta<typeof TodoBackPagination> = {
  component: TodoBackPagination,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<typeof TodoBackPagination> = {
  args: {
    exclusiveStartKey: "test"
  } as TodoPaginationProps,
};

export const Disabled: StoryObj<typeof TodoBackPagination> = {
  args: {
    exclusiveStartKey: ""
  } as TodoPaginationProps
};