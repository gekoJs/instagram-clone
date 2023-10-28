import React, { createContext } from "react";
import { Nav } from "../../components";
import style from "./MainLayout.module.scss";
import NotAvailable from "../../components/NotAvailable/NotAvailable";
import useShowWarning from "../../Hooks/useShowWarning";

//-----------------------------------------------

type Props = {
  children: React.ReactNode;
};
type Context = {
  handleShowWarning: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;

  warningActive: boolean;
};

//-----------------------------------------------

export const CurrentWarningContext = createContext<Context | null>(null);

const MainLayout = ({ children }: Props) => {
  const { warningActive, positions, handleShowWarning } = useShowWarning();

  return (
    <div className={style.container}>
      <CurrentWarningContext.Provider
        value={{
          handleShowWarning,
          warningActive,
        }}
      >
        

        <Nav />
        {children}
        {warningActive && (
          <NotAvailable top={positions.top} left={positions.left} />
        )}
      </CurrentWarningContext.Provider>
    </div>
  );
};

export default MainLayout;
