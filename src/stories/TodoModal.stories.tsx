import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TodoModal  from '../components/TodoModal';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { open } from '../redux/actions/modal';
import { useAppDispatch } from '../redux/hooks';
import { Button } from '@mui/material';

const meta: Meta<typeof TodoModal> = {
  component: TodoModal,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )]
};
export default meta;

const todo = {
    id: "4agb",
    title: "Getting Started",
    created_at: "4 Feb 2022",
    updated_at: "4 Feb 2022",
    content: "It is a long established fact that a reader will be distracted\
    by the readable content of a page when looking at its layout."
}
const Component = () => {
    const dispatch = useAppDispatch();
    return (
      <>
        <Button sx={{mx: 1 }} onClick={()=> dispatch(open())}>New Create</Button>
        <Button sx={{mx: 1 }} onClick={()=> dispatch(open(todo))}>Update</Button>
        <TodoModal />
      </>
    )
}

export const Default: StoryObj<typeof TodoModal> = {
  render: Component
};