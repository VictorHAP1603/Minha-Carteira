import { createContext, useState, useContext } from "react";

interface IMobileMenuContext {
  isOpened: boolean;
  toggleMenuMobile: () => void;
}

const MobileMenuContext = createContext<IMobileMenuContext>(
  {} as IMobileMenuContext
);

export const MobileMenuProvider: React.FC = ({ children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function toggleMenuMobile() {
    setIsOpened(!isOpened);
  }

  return (
    <MobileMenuContext.Provider value={{ isOpened, toggleMenuMobile }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export function useMobileMenu(): IMobileMenuContext {
  const context = useContext(MobileMenuContext);

  return context;
}
