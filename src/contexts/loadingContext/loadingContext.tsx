import { createContext, useState } from "react";
import { ILoadingContext } from "./type";
import { ChildrenProvider } from "../../types/type";

export const LoadingContext = createContext<ILoadingContext>({} as ILoadingContext);

export const LoadingProvider = ({ children }: ChildrenProvider) => {

  const [ toggleLoading, setToggleLoading ] = useState<boolean>(true);

  return(
    <LoadingContext.Provider value={{ toggleLoading, setToggleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
