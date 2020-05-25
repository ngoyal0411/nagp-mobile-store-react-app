import React from "react";
import { Dropdown, Icon } from "semantic-ui-react";

const LogoutDropdown = ({ username, logout }) => {
  return (
    <div>
      {" "}
      <span>
        <Icon name="user" />
      </span>{" "}
      <Dropdown text={username} pointing className="link item">
        <Dropdown.Menu>
          <Dropdown.Item color="red" text="Logout" onClick={logout} />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default LogoutDropdown;
