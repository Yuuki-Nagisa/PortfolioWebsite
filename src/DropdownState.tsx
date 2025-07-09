import { createContext, useContext, useState } from "react";
interface ContextType {
  isOpen: boolean;
  updateIsOpen: () => void;
}
const DropdownState = createContext<ContextType | null>(null);

const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const updateIsOpen = () => setIsOpen(!isOpen);

  return (
    <DropdownState.Provider value={{ isOpen, updateIsOpen }}>
      {children}
    </DropdownState.Provider>
  );
};

const useDropDownStatus = () => {
  const context = useContext(DropdownState);

  // Ensure context is not undefined (TypeScript will warn if we don't handle it)
  if (!context) {
    throw new Error("context must be used within a StateProvider");
  }
  return context;
};

export { ContextProvider, useDropDownStatus };
