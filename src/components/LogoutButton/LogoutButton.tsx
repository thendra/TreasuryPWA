import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "@material-ui/core/Button";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    // <Button onClick={() => logout({ returnTo: "http://localhost:3000/" })}>
    //   Log Out
    // </Button>
    <Button
      onClick={() =>
        logout({ returnTo: "https://sharp-nobel-706ca3.netlify.app/" })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
