import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TodoHeader from './components/TodoHeader';
import TodoListPage from "./page/TodoListPage"

function App() {
  const userInfo = {
    "isLogin": true,
    "userName": "test"
  }
  
  return (
    <>
      <Provider store={store}>
        <TodoHeader 
          menuProps={userInfo}
        />
        <TodoListPage />
      </Provider>
    </>
  );
}

export default App;
