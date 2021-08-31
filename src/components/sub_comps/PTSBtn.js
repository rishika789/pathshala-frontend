import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function PTSBtn({ label, route }) {
    return (
        <div>
            <Link to={route}>
                <Typography style={{
                    width: '13rem',
                    backgroundColor: '#6372ff',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '3.8rem',
                    borderRadius: 10,
                    fontSize: '1.5rem',
                    boxShadow: "7px 7px 19px -8px rgba(0,0,0,0.48)",
                    cursor: 'pointer'
                }}>
                    {label}
                </Typography>
            </Link>
        </div>
    )
}

export default PTSBtn
