import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLocations } from '../../../../hooks/useLocations';
import css from './Footer.module.scss';

const getRandomNumber = (min: number, max: number) => {
  return Math.trunc(Math.random() * max + min);
};

export const Footer = () => {
  const { data: locations } = useLocations();

  const randomLocations = useMemo(() => {
    if (!locations) return [];
    const random = [
      getRandomNumber(0, locations.length),
      getRandomNumber(0, locations.length),
      getRandomNumber(0, locations.length)
    ];
    return random.map(el => locations[el]);
  }, [locations]);

  return (
    <footer className={css.footer}>
      {randomLocations.map(el => (
        <Link className={css.footerLink} to={`/location/${el.id}`} key={el.id}>
          <span>{el.name}</span>
        </Link>
      ))}
    </footer>
  );
};
