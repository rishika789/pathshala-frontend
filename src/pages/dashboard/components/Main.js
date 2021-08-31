import { Card, Typography, Grid } from '@material-ui/core'
import React from 'react'
import PTSCard from '../../../components/sub_comps/PTSCard'
import { Link, useRouteMatch } from 'react-router-dom'

const data = [
    {
        class_code: "xfv5gt6",
        name: 'name1',
        teacherName: 'name2',
        grade: 'name3'
    },
    {
        class_code: "xfv5gt6",
        name: 'name1',
        teacherName: 'name2',
        grade: 'name3'
    },
    {
        class_code: "xfv5gt6",
        name: 'name1',
        teacherName: 'name2',
        grade: 'name3'
    },
    {
        class_code: "xfv5gt6",
        name: 'name1',
        teacherName: 'name2',
        grade: 'name3'
    },
]
const drawerWidth = 200

function Main() {

    let { path,url } = useRouteMatch();

    return (
        <div style={{ display: 'flex', flexDirection: 'row', width: `calc(100vw - ${drawerWidth}px)`, marginTop: '10rem', overflow: 'hidden' }}>
            <Grid style={{ display: 'flex', flexDirection: 'row', padding: 10 }} container>
                {
                    data.map((item, index) => (
                        <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }} lg={3} item>
                            <Link
                                style={{ textDecoration: 'none' }}
                                to={`/home/class/${item.class_code}`}
                            >
                                <PTSCard key={index} name={item.name} teacherName={item.teacherName} grade={item.grade} /></Link>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default Main
