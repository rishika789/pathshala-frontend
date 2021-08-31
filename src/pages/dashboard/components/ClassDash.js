import React from 'react'
import { useParams } from 'react-router'

function ClassDash() {

    const {grade} = useParams();

    return (
        <div>
            <h1>Hello {grade}</h1>
        </div>
    )
}

export default ClassDash
