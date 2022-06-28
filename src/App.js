import "./App.css";
import React, { useState, useEffect } from "react";
import UserTable from "./components/UserTable/UserTable";
import PageNavigation from "./components/PageNavigation/PageNavigation";
import AppContext from "./context/AppContext";

function App() {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [ASCFullName, setASCFullName] = useState(true);
  const [ASCUsername, setASCUsername] = useState(true);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${pageNumber}&results=10`)
      .then((res) => res.json())
      .then((data) => {
        const transformedUsers = data.results.map((user, index) => {
          return {
            id: index,
            fullname:
              user.name.title + " " + user.name.first + " " + user.name.last,
            username: user.login.username,
            thumbnail: user.picture.thumbnail,
          };
        });
        setUsers(transformedUsers);
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);

  const paginationHandler = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  const sortFullName = (ASC) => {
    setUsers(
      [...users].sort((a, b) =>
        ASC
          ? a.fullname.localeCompare(b.fullname)
          : b.fullname.localeCompare(a.fullname)
      )
    );
  };

  const sortUsername = (ASC) => {
    setUsers(
      [...users].sort((a, b) =>
        ASC
          ? a.username.localeCompare(b.username)
          : b.username.localeCompare(a.username)
      )
    );
  };

  const onSetASCFullName = () => {
    setASCFullName(!ASCFullName);
  };

  const onSetASCUserName = () => {
    setASCUsername(!ASCUsername);
  };

  const onResetSort = () => {
    setASCFullName(true);
    setASCUsername(true);
  };

  return (
    <AppContext.Provider
      value={{
        ASCFullName: ASCFullName,
        ASCUsername: ASCUsername,
        onSetASCFullName: onSetASCFullName,
        onSetASCUsername: onSetASCUserName,
        onResetSort: onResetSort,
        sortFullName: sortFullName,
        sortUsername: sortUsername,
        paginationHandler: paginationHandler,
      }}
    >
      <div className="App">
        <div className="container">
          <div className="row">
            <UserTable users={users} />
            <PageNavigation />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
