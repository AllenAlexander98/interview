import React from "react";

const AppContext = React.createContext({
  ASCFullName: true,
  ASCUsername: true,
  onSetASCFullName: () => {},
  onSetASCUsername: () => {},
  onResetSort: () => {},
  sortFullName: () => {},
  sortUsername: () => {},
  paginationHandler: () => {},
});

export default AppContext;
