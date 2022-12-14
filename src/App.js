import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='mx-auto max-w-[1300px]' >
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
