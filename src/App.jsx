import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import "./css/App.css";
import "./css/mantineBase.css";
import { store } from './state/store';
import Home from './views/pages/home';
import CategoryList from './views/pages/category_list';
import TaskList from './views/pages/task_list';
import Login from './views/pages/login';
import Register from "./views/pages/register";

function App() {
  return (
    <>
      <Provider store={store}>
        <MantineProvider
          theme={{
            components: {
              Modal: {
                styles: {
                  header: {
                    background: 'transparent',
                  },
                  close: {
                    color: 'black',
                    transitionDuration: '0.5s',
                    '&:hover': {
                      color: 'black',
                      backgroundColor: 'transparent',
                      transform: 'scale(1.5, 1.5)',
                      transitionDuration: '0.5s',
                    },
                  },
                  content: {
                    background: 'rgba( 255, 255, 255, 0.45 )',
                    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                    backdropFilter: 'blur( 1px )',
                    webkitBackdropFilter: 'blur( 1px )',
                    border: '1px solid rgba( 255, 255, 255, 0.18 )',
                  },
                },
              },
            },
          }}
        >
          <BrowserRouter>
            <div className="flex items-center bg-gradient-to-br from-[#C6FFDD] via-[#FBD786] to-[#f7797d] h-screen">
              <div className="m-auto max-h-screen min-w-[420px] max-w-4xl p-6 glass-white rounded-lg">
                <Routes>
                  <Route path="/task/index" element={<Home />} />
                  <Route path="/" element={<CategoryList />} />
                  <Route path="/category/:categoryId/task" element={<TaskList />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </MantineProvider>
      </Provider>
    </>
  );
}

export default App;