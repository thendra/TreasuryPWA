import React, { useState } from "react";
import "./App.css";
import {
  Box,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
  Fab,
  Button,
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
    backgroundColor: "#252528",
    padding: `${0} ${20}px`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: 0,
    },
    margin: "auto",
    textAlign: "center",
  },
  navBar: {
    display: "flex",
    color: "#fff",
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
  '@media only screen and (max-height: 500px)': {
    bottomNav: {
      display: 'none',
    }
  },
  landingImage: {
    marginTop: "-10vh",
    marginRight: "-20px",
    width: "calc(50% + 20px)",
    [theme.breakpoints.down("md")]: {
      width: "50%",
      marginRight: 0,
    },
    height: "100vh",
    right: 0,
    top: 0,
    backgroundImage: "url(camera.jpg)",
    backgroundSize: "cover",
  },
}));

const App = () => {
  const { isAuthenticated, user } = useReactiveVar(userInfo);
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
        <nav className={classes.navBar}>
          <Link to="/">
            <Box p={2} display="flex" height="10vh" alignItems="center">
              <Typography variant="h6">Treasury</Typography>
              <HomeIcon />
            </Box>
          </Link>
          {isAuthenticated && (
            <Link to="items">
              <Box p={2} display="flex" height="10vh" alignItems="center">
                <Typography variant="h6">Items</Typography>
              </Box>
            </Link>
          )}
        </nav>
      </Hidden>
      <Routes>
        <Route path="/">
          <Box>
            <Box min-height="90vh">
              {isAuthenticated ? (
                <>
                  <Box
                    display="flex"
                    flexDirection="column"
                    p={3}
                    bgcolor="white"
                    maxWidth="250px"
                    margin="auto"
                  >
                    <div>
                      <img src={user?.picture} alt={user?.name} />
                    </div>
                    <h2>{user?.name}</h2>
                    <p>{user?.email}</p>
                    <LogoutButton />
                  </Box>
                  <Box py={3}>
                    <Link to="/items">
                      <Button color="primary" variant="contained">
                        View Your Items
                      </Button>
                    </Link>
                  </Box>
                </>
              ) : (
                <Box display="flex" flexWrap="wrap" height="100%">
                  <Box
                    flex="1"
                    padding={4}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box maxWidth="500px">
                      <Box paddingBottom="50px">
                        <Typography variant="h1" align="left">
                          Treasury
                        </Typography>
                      </Box>
                      <Box paddingBottom="50px">
                        <Typography variant="h2" align="left">
                          Keep track of your collections in one convenient
                          place.
                        </Typography>
                      </Box>
                      <Box display="flex">
                        <LoginButton />
                      </Box>
                    </Box>
                  </Box>
                  <Hidden smDown>
                    <Box className={classes.landingImage} />
                  </Hidden>
                </Box>
              )}
            </Box>
          </Box>
          <Route path="items" element={<Items />}></Route>
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
            <Box height='10vh' data-id='spacer'/>
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
                href="/items"
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
  );
};

export default App;
