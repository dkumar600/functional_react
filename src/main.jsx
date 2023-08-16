import React from 'react';
import ReactDOM from 'react-dom/client';
import RenderCard from './Task_Day15/RenderCard';
//import App from './React-router-demo';
//import { BrowserRouter } from 'react-router-dom';
//import ProductList from './App.jsx'
// import Counter from './form2.jsx'
// import Homeview from './Homeview.Layout.jsx'
// import ProductInp from './array.layout.jsx'
//import ColorBank from './taskDay7.jsx';
import UseMemoU from './taskFasttrack1/UseMemoUsecase';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Route1 from './Task_Day15/RenderCard';
// import Main from './Task_Day15/HOC';
// import InputFieldR from './Task_interview/Input';
// import Parent from './assets/task24/Diytask/Parent';
// import HOC1 from './taskD25/HOC1';
import Home from './Task_interview/Home';
import Contact from './Task_interview/Contact';
import About from './Task_interview/About';
import MainC from './useMemo-useCallback/MComponent';
import FacebookMini from './InterviewTask/File';
import UseCallBackTest from './taskFasttrack1/UseCallBack';
import ErrorBoundary from './taskFasttrack1/ErrorBoundaries';
import { ThemeProvider,DataProvider } from './ContextAPI'
import { FormTask } from './taskFasttrack1/FormTask';
const router = createBrowserRouter([
{
  path:'/',
  element:<Home/>
},
{
  path:'/About',
  element:<About/>
},{
  path:'/Contact',
  element:<Contact/>
}
]);

/*
function MyApp() {

  return (
    <div>
      <h1>Welcome to my app</h1>
      <ProductList />
    </div>
  );
}

*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <BrowserRouter>
    <App/>
    </BrowserRouter> */}
    {/* <BrowserRouter>
     <Route1/>
    </BrowserRouter> */}
    {/* <Main/> */}
    <RouterProvider router={router}/>
    {/*<InputFieldR/><Parent/>*/}
    {/* <MainC/>
    <FacebookMini/>
    <UseMemoU/> */}
    <UseMemoU/>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
    <ThemeProvider>
      <DataProvider>
        <UseCallBackTest/>
        <FormTask/>
      </DataProvider>
    </ThemeProvider>
    </ErrorBoundary>
    
    </>
)
