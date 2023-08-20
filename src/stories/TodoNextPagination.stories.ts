import { Meta, StoryObj } from '@storybook/react';
import  TodoNextPagination  from '../components/TodoNextPagination';
import TodoPaginationProps from '../interface/TodoPaginationProps';

const meta: Meta<typeof TodoNextPagination> = {
  component: TodoNextPagination,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<typeof TodoNextPagination> = {
  args: {
    exclusiveStartKey: "test"
  } as TodoPaginationProps,
};

export const Disabled: StoryObj<typeof TodoNextPagination> = {
  args: {
    exclusiveStartKey: ""
  } as TodoPaginationProps
};