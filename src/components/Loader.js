import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles( (theme) => ({
    root:{
        display:"flex",
        justifyContent:"center",
        marginTop:"25%"
    }
}))

function Loader(props) {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <CircularProgress size={props.size} color={props.color} />
        </div>
    )
}

export default Loader
