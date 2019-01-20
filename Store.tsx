import * as React from 'react';

export interface AppContextInterface {
  data: string;
  age: number;
  testFunction: any;
}

const ctxt: any = React.createContext<AppContextInterface | null>(null);
// export const AppContextProvider = ctxt.Provider;
// export const AppContextConsumer = ctxt.Consumer;
export const AppContext = ctxt;
