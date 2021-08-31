import { Typography } from '@material-ui/core'
import React from 'react'
import { Link } from "react-router-dom"
import PTSBtn from '../components/sub_comps/PTSBtn'
import TextInput from '../components/sub_comps/TextInput'

function SignUp() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <div>
                <div style={{ marginBottom: '2rem' }}>
                    <TextInput name="Name" />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <TextInput name="Contact" />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <TextInput name="Email" />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <TextInput name="Password" />
                </div>
                <div style={{ marginBottom: '2rem' }}>
                    <PTSBtn label="Sign Up" route="/home"/>
                </div>
                <Typography style={{ fontSize: '1.8rem', textAlign: 'center' }}>
                    Already have an account
                    <Link to="/login">
                        <span style={{ marginLeft: '0.5rem', fontWeight: 'bold', color: '#6372ff' }}>
                            Log In
                        </span>
                    </Link>
                </Typography>
            </div>
        </div>
    )
}

export default SignUp
