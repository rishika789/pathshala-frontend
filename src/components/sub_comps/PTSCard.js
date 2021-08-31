import { Card, Typography, AppBar, Toolbar, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    container: {
        width: '20rem',
        height: '15rem'
    },
    nav: {
        backgroundColor: '#6372ff',
        boxShadow: 'none',

    }
})

function PTSCard({ name, grade, teacherName }) {

    const classes = useStyles()

    return (
        <div>
            <Card className={classes.container}>
                <AppBar className={classes.nav} position="static">
                    <Toolbar className={classes.nav} >
                        <div>
                            <Typography style={{ color: '#fff' }}>{name}</Typography>
                            <Typography style={{ fontSize: 10, color: '#fff' }}>{grade}</Typography>
                            <Typography style={{ color: '#fff', fontSize: 15, marginTop: 10, marginBottom: 10 }}>{teacherName}</Typography>
                        </div>
                    </Toolbar>
                </AppBar>
                <div>

                </div>
            </Card>
        </div>
    )
}

export default PTSCard
