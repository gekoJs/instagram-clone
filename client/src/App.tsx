import { useEffect, useState } from "react";
import { Home, LoadingPage, Login, MainLayout, Signup } from "./layouts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IS_LOGGED } from "./utils/localStorageKeys";

type loggedType = {
  isLogged?: boolean;
};

const App = () => {
  const [componentMount, setComponentMount] = useState(false);
  const [logged, setLogged] = useState<loggedType>(
    JSON.parse(window.localStorage.getItem(IS_LOGGED) || "{}")
  );

  useEffect(() => {
    setComponentMount(true);
    setLogged(JSON.parse(window.localStorage.getItem(IS_LOGGED) || "{}"));
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: !logged.isLogged ? (
        <Login />
      ) : (
        <MainLayout children={<Home />} />
      ),
    },
    { path: "/signup", element: <Signup /> },
  ]);

  const queryClient = new QueryClient();

  if (!componentMount) {
    return <LoadingPage />;
  }
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </div>
  );
};

export default App;
