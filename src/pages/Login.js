import React from 'react'
import TextInput from '../components/sub_comps/TextInput'
import PTSBtn from '../components/sub_comps/PTSBtn'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}>
                <div>
                    <div style={{ marginBottom: '2rem' }}>
                        <TextInput name="Email" />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <TextInput name="Password" />
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <PTSBtn label="Log In" route="/home" />
                    </div>
                    <Typography style={{ fontSize: '1.8rem', textAlign: 'center' }}>
                        Don't have an account
                        <Link to="/signup">
                            <span style={{ marginLeft: '0.5rem', fontWeight: 'bold', color: '#6372ff' }}>
                                Sign Up
                            </span>
                        </Link>
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Login
