import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getNews from '../redux/actions/actionCreators';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';
// import NewsCard from '../../components/NewsCard/NewsCard';
// import getNewsList from '../../redux/actions/action';
// import Loading from '../../components/Loading/Loading';
// import HeaderBar from '../../components/HeaderBar/HeaderBar';

function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  const {
    content,
    error,
    fetching,
  } = useSelector((state) => state.posts);
  if (fetching) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {' '}
          <strong>{error}</strong>
        </Alert>
      </Stack>
    );
  }
  return (
    <>
      <HeaderBar />
      {content.map((post) => (
        <NewsCard post={post} key={post.id} />
      ))}
    </>
  );
}
export default MainPage;
