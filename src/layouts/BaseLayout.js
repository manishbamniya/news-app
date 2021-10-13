import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    root:{
        margin:theme.spacing(2),
    }
}))

function BaseLayout(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.children}
        </div>
    )
}

export default BaseLayout
