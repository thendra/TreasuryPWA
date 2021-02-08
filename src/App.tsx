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
    minHeight: "100vh",
    height: "100%",
    backgroundColor: "#ccdad1",
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
    <Box>
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
      <Box className={classes.app}>
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
                  <Box>
                    <Box
                      maxWidth="800px"
                      margin="auto"
                      paddingTop="100px"
                      paddingBottom="100px"
                    >
                      <Typography variant="h2">
                        Welcome to Treasury, please authenticate yourself to
                        view your collection
                      </Typography>
                    </Box>
                    <LoginButton />
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
