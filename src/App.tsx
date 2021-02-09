import React, { useState } from "react";
import "./App.css";
import {
  Box,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  Fab,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import { userInfo } from "./components/AppProvider";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import AddItemForm from "./components/AddItemForm";
import Items from "./components/Items";
import ItemDetailed from "./components/ItemDetailed";
import { useReactiveVar } from "@apollo/client";

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    minHeight: "90vh",
    height: "100%",
    backgroundColor: "#252528",
    width: "calc(100% - 40px)",
    padding: `${30}px ${20}px`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: `${30}px 0`,
    },
    margin: "auto",
    textAlign: "center",
  },
  media: {
    height: 200,
  },
  bottomNav: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
    backgroundColor: "#38302e",
    "& span": {
      color: "#fff",
    },
  },
  landingImage: {
    width: "50%",
    height: "90vh",
    backgroundImage: "url(camera.jpg)",
    backgroundSize: "cover",
  },
}));

const App = () => {
  const { user, isAuthenticated } = useReactiveVar(userInfo);
  const [addItemFormOpen, setAddItemFormOpen] = useState(false);
  const navigate = useNavigate();
  const bottomNavConfig = {
    addItem: () => setAddItemFormOpen(true),
    allItems: () => navigate("/"),
  };

  const handleBottomNav = (
    event: React.ChangeEvent<{}>,
    newValue: keyof typeof bottomNavConfig
  ) => {
    bottomNavConfig[newValue]();
  };
  const classes = useStyles();

  return (
    <Box className={classes.app}>
      <Hidden xsDown>
        <nav>
          <Link to="/">
            <Box p={2} display="flex" alignItems="center">
              <Typography variant="h6">Treasury</Typography>
              <HomeIcon />
            </Box>
          </Link>
        </nav>
      </Hidden>
      <Box>
        <Routes>
          <Route path="/">
            <Box>
              <Box height="100vh">
                {isAuthenticated ? (
                  <Box>
                    <div>
                      <img src={user?.picture} alt={user?.name} />
                    </div>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                    <LogoutButton />
                  </Box>
                ) : (
                  <Box display="flex" flexWrap="wrap">
                    <Box
                      boxSizing="border-box"
                      minWidth="500px"
                      width="50%"
                      padding="100px"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <Box paddingBottom="50px">
                        <Typography variant="h1">Treasury</Typography>
                      </Box>
                      <Box paddingBottom="50px">
                        <Typography variant="h2" align="left">
                          Keep track of your collections in one convenient
                          place.
                        </Typography>
                      </Box>
                      <Box width="250px" marginLeft="auto" marginRight="auto">
                        <LoginButton />
                      </Box>
                    </Box>
                    <Hidden mdDown>
                      <Box className={classes.landingImage} />
                    </Hidden>
                  </Box>
                )}
              </Box>
              <Box paddingTop={8}>
                <Items />
              </Box>
            </Box>
            <Route path=":id" element={<ItemDetailed />} />
            <Route path="login" element={<LoginButton />} />
            <Route path="logout" element={<LogoutButton />} />
          </Route>
        </Routes>
        {isAuthenticated && (
          <>
            <Hidden xsDown>
              <Box position="fixed" bottom={50} right={40}>
                <Fab
                  onClick={() => setAddItemFormOpen(true)}
                  color="primary"
                  aria-label="add"
                >
                  <AddIcon />
                </Fab>
              </Box>
            </Hidden>
            <Hidden smUp>
              <BottomNavigation
                className={classes.bottomNav}
                onChange={handleBottomNav}
                showLabels
              >
                <BottomNavigationAction
                  value="addItem"
                  label="Add Item"
                  icon={<AddIcon />}
                />
                <BottomNavigationAction
                  value="allItems"
                  label="All Items"
                  icon={<AppsIcon />}
                />
              </BottomNavigation>
            </Hidden>
            <AddItemForm
              open={addItemFormOpen}
              onClose={() => setAddItemFormOpen(false)}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default App;
