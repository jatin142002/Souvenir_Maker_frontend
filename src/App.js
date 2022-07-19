import React, {useEffect} from 'react'
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './redux/actions/posts.js';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';
import useStyles from './styles.js';

function App() {

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src="https://media.istockphoto.com/photos/taj-mahal-agra-india-picture-id486262617?k=20&m=486262617&s=612x612&w=0&h=BhX4anRjtQfCTQZfZf_6LeeK8qZ1H6BkPFa9Ud9pK7M=" alt="memories" height="100" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12}  sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12}  sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App