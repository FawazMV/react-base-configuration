import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Pages/Layouts/ErrorPage'
import Screen from './Pages/Layouts/Screen';

const Applayout = () => {
  return (
    <>
      <Screen>
        <Outlet />
      </Screen>
    </>
  )
};



const App = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
]);

export default App;
