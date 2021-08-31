import React from 'react'
import {
    TextField, Typography
} from '@material-ui/core'

function TextInput({name, }) {
    return (
        <div>
            <Typography style={{ fontSize: '2rem', marginBottom: '2rem' }}>{name}</Typography>
            <TextField
                style={{width: '30rem'}}
                label={name}
                variant="outlined"
            />
        </div>
    )
}

export default TextInput
