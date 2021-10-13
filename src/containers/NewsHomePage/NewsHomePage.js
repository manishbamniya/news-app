import React, { useEffect } from 'react'
import { getNewsAtHomepageAction } from '../../store/News/NewsActions'
import { getNewsHomepageState } from '../../store/News/NewsSelectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { makeStyles, Grid } from '@material-ui/core'
import Loader from '../../components/Loader'
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center"
    },
    container: {
        margin: theme.spacing(2),
        "& a":{
            textDecoration:"none",
            color:"inherit"
        },
        "& h3": {
            margin: theme.spacing(1, 0)
        },
        "& p": {
            textAlign: "center"
        },
        "& img": {
            width: "350px",
            height: "300px",
            borderRadius:"10px",
          
        }
    },
}))

const NewsHomePage = (props) => {
    const { newsList, getNewsList } = props
    const classes = useStyles()
    useEffect(() => {
        getNewsList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(newsList);

    return (
        <Grid className={classes.root} container xs={12} >
            {Object.keys(newsList).length > 0 &&
                <>
                    {newsList.isLoading && <Grid item xs={12}><Loader color="secondary" size={60} /></Grid>}
                    {newsList.articles && !newsList.isLoading &&
                        newsList.articles.map((article) => (
                            <Grid item xs={3} className={classes.container} key={article.url}>
                                <a href={article.url} target="_blank" rel="noreferrer">
                                    <img src={article.urlToImage} alt="img" />
                                    <h3>{article.description}</h3>
                                </a>
                            </Grid>

                        ))
                    }
                </>
            }
        </Grid>
    )
}

// export default NewsHomePage

const mapStateToProps = createStructuredSelector({
    newsList: getNewsHomepageState()
})

const mapDispathToProps = (dispatch) => {
    return {
        getNewsList: (data) => dispatch(getNewsAtHomepageAction(data))
    }
}

export default connect(mapStateToProps, mapDispathToProps)(NewsHomePage)