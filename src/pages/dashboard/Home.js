import { Typography } from '@material-ui/core'
import React from 'react'
import {
    AppBar,
    Toolbar,
    TextField,
    Drawer,
    makeStyles
} from '@material-ui/core'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Main from './components/Main';
import ClassDash from './components/ClassDash';

const drawerWidth = 200

const useStyles = makeStyles({
    drawer: {
        width: drawerWidth,
        height: '100vh'
    },
    appbar: {
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor: '#F4EEDF',
        height: 80,
        display: 'flex',
        justifyContent: 'center',

    },
    listItem: {
        textAlign: 'left',
        marginTop: 15,
        marginBottom: 15,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer'
    },
    root: {
        display: 'flex',
        height: 'auto',
        backgroundColor: '#F4EEDF'
    },
    mainContent: {
        marginTop: 80
    },
    contentNav: {
        display: 'flex',
        flex: 'row',
        width: `calc(100vw - ${drawerWidth}px)`,
        justifyContent: 'space-between',
        marginTop: 40
    },
    content: {
        marginLeft: 80,
        marginRight: 80,
        marginTop: 60,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10
    },
    contentMain: {
        display: 'flex',
        flexDirection: 'row',
        width: `calc(100vw - ${drawerWidth}px)`,
        justifyContent: 'space-evenly',
        overflowX: 'none'
    }
}
)

const drawerList = [
    {
        name: 'To Review'
    },
    {
        name: 'Class - 1'
    },
    {
        name: 'Class - 2'
    },
    {
        name: 'Class - 3'
    },
]

function Home() {

    let { path, url } = useRouteMatch();

    const classes = useStyles();
    return (
        <Router>
            <div className={classes.root}>
                <AppBar className={classes.appbar}>
                    <Toolbar>
                        <div style={{ flexGrow: 1 }}>
                            <TextField style={{ width: 250 }} placeholder="search" variant="outlined" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div>
                                <div style={{
                                    marginLeft: 30,
                                    display: 'flex',
                                    backgroundColor: '#fff',
                                    width: 'auto',
                                    alignItems: 'center',
                                    borderRadius: 5
                                }}
                                >
                                    <div style={{ marginLeft: 20, marginRight: 20 }}>
                                        <Typography style={{ color: "#000" }}>Name</Typography>
                                        <Typography style={{ color: '#000' }}>Org</Typography>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    anchor="left"
                    className={classes.drawer}
                    classes={{ paper: classes.drawer }}
                >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 100, marginTop: 40 }}>
                        <Typography>PathShala</Typography>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                        {drawerList.map(item => (
                            <Typography className={classes.listItem}><span style={{ marginLeft: 40 }}>{item.name}</span></Typography>
                        ))
                        }
                    </div>
                    <Typography style={{ marginLeft: 40, marginBottom: 30 }}>Settings</Typography>
                </Drawer>
                <div style={{ marginTop: '5rem' }}>
                    <Switch>
                        <Route path={`${path}/dashboard`}>
                            <Main />
                        </Route>
                        <Route path={`${path}/class/:grade`}>
                            <ClassDash />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default Home
