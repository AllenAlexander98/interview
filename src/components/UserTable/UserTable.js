import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import User from "../User/User";

function UserTable({ users }) {
  const ctx = useContext(AppContext);

  return (
    <>
      <table id="example" className="table table-striped">
        <thead>
          <tr>
            <th
              onClick={() => {
                ctx.sortFullName(ctx.ASCFullName);
                ctx.onSetASCFullName();
              }}
            >
              Full Name
            </th>
            <th
              onClick={() => {
                ctx.sortUsername(ctx.ASCUsername);
                ctx.onSetASCUsername();
              }}
            >
              Username
            </th>
            <th>Thumbnail Icon</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User
              key={user.id}
              fullname={user.fullname}
              username={user.username}
              thumbnail={user.thumbnail}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserTable;
