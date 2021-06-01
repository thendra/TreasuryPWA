import React from "react";
import Button from "@material-ui/core/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      size="large"
      variant="contained"
      color="primary"
      onClick={() =>
        loginWithRedirect({
          redirectUri: `${window.location.protocol}//${window.location.host}`,
        })
      }
    >
      Log In
    </Button>
  );
};

export default LoginButton;
