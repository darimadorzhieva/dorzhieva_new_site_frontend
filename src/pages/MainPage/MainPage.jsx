import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

import getNews from '../../redux/actions/actionCreators';

import NewsCard from '../../components/NewsCard/NewsCard';

import './MainPage.css';

function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const {
    news,
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
    <div className="card">
      {news.map((item) => (
        <NewsCard data={item} key={item.id} />
      ))}
    </div>
  );
}
export default MainPage;
