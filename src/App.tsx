import { useEffect, useState } from "react";
import { Home, LoadingPage, Login, Signup } from "./layouts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {
  const [componentMount, setComponentMount] = useState(false);
  const loged = true;
  
  useEffect(() => {
    setComponentMount(true);
  }, []);

  const routes = createBrowserRouter([
    { path: "/", element: !loged ? <Login /> : <Home /> },
    { path: "/signup", element: <Signup /> },
  ]);

  if (!componentMount) {
    return <LoadingPage />;
  }

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
