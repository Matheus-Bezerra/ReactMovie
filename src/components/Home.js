import React, { useState, useEffect } from 'react';

import useHomeFetch from '../hooks/useHomeFetch';

import HeroImage from './HeroImage/HeroImage';
import Grid from './Grid/Grid';
import Thumb from './Thumb/Thumb';
import Button from './Button/Button';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import NoImage from '../images/no_image.jpg';
import Spinner from './Spinner/Spinner';
import SearchBar from './SearchBar/SearchBar';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();
  const [random, setRandom] = useState(undefined);

  useEffect(() => {
    const quantities = state.results.length - 1;
    const number = Math.floor(Math.random() * quantities);
    setRandom(number);
  }, [state]);

  if (error) return <div>come back again later ....</div>;

  return (
    <div className="theme" style={{ background: '#2D333B;' }}>
      {!searchTerm && state.results[random] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[random].backdrop_path}`}
          title={state.results[random].original_title}
          text={state.results[random].overview}
        />
      ) : null}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </div>
  );
};

export default Home;
