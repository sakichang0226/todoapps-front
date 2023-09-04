import { Meta, StoryObj } from '@storybook/react';
import TodoDeleteDialog from '../components/TodoDeleteDialog';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { openDeleteDialog } from '../redux/actions/modal';
import { useAppDispatch } from '../redux/hooks';

const meta: Meta<typeof TodoDeleteDialog> = {
  component: TodoDeleteDialog,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )]
}
export default meta;

const Component = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={()=> dispatch(openDeleteDialog("test"))}>Open</button>
      <TodoDeleteDialog />
    </>
  )
};

export const Default: StoryObj<typeof TodoDeleteDialog> = {
  render: Component,
};