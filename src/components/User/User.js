import React from "react";

function User({ fullname, username, thumbnail }) {
  return (
    <>
      <tr>
        <td>{fullname}</td>
        <td>{username}</td>
        <td>
          <img src={thumbnail} />
        </td>
      </tr>
    </>
  );
}

export default User;
