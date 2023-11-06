import { useEffect, useState, createContext } from "react";
import { Home, LoadingPage, Login, MainLayout, Signup } from "./layouts";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IS_LOGGED } from "./utils/localStorageKeys";
import useShowWarning from "./Hooks/useShowWarning";
import NotAvailable from "./components/NotAvailable/NotAvailable";

//-----------------------------------------------

type loggedType = {
  isLogged?: boolean;
  userId?: string;
};

type Context = {
  handleShowWarning: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  warningActive: boolean;
};

//-----------------------------------------------

export const CurrentWarningContext = createContext<Context | null>(null);

const App = () => {
  const [componentMount, setComponentMount] = useState(false);
  const [logged, setLogged] = useState<loggedType>(
    JSON.parse(window.localStorage.getItem(IS_LOGGED) || "{}")
  );
  const { warningActive, positions, handleShowWarning } = useShowWarning();

  useEffect(() => {
    setComponentMount(true);
    setLogged(JSON.parse(window.localStorage.getItem(IS_LOGGED) || "{}"));
  }, []);

  const routes = createBrowserRouter([
    {
      path: "/",
      element:
        logged.isLogged && logged.userId ? (
          <MainLayout children={<Home />} />
        ) : (
          <Login />
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
        <CurrentWarningContext.Provider
          value={{
            handleShowWarning,
            warningActive,
          }}
        >
          <RouterProvider router={routes} />
          {warningActive && (
            <NotAvailable top={positions.top} left={positions.left} />
          )}
        </CurrentWarningContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
