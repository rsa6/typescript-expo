import * as React from 'react';

export interface AppContextInterface {
  data: string;
  age: number;
}

const ctxt: any = React.createContext<AppContextInterface | null>(null);
// export const AppContextProvider = ctxt.Provider;
// export const AppContextConsumer = ctxt.Consumer;
export const AppContext = ctxt;
