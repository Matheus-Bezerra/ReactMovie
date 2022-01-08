import React, { useState, useEffect } from 'react';

import useHomeFetch from '../hooks/useHomeFetch';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import NoImage from '../images/no_image.jpg';

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  return <div>Home Page</div>;
};

export default Home;
