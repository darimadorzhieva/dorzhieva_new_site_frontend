import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import getNews from '../../redux/actions/actionCreators';
import NewsCard from '../../components/NewsCard/NewsCard';

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const {
    content,
    error,
    fetching,
  } = useSelector((state) => state.news);

  if (fetching) {
    return (
      <CircularProgress />
    );
  }

  if (error) {
    return (
      <Alert severity="error">
        {error.message}
      </Alert>
    );
  }

  return (
    <div>
      {content.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
}
export default MainPage;
