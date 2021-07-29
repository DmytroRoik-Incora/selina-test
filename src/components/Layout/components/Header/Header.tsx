import React, { useMemo } from 'react';
import { LogoIcon } from '../../../../assets/icons';
import { useLocations } from '../../../../hooks/useLocations';
import { NestedMenu } from '../../../shared/NestedMenu';

import { Link, useHistory } from 'react-router-dom';
import css from './Header.module.scss';

export const Header = () => {
  const { data: locations = [] } = useLocations();
  const history = useHistory();

  const moduleGroups = useMemo(() => {
    const countries = Array.from(new Set(locations.map(el => el.location.value)));
    const result = countries.map(el => ({ key: el, modules: [] as any[] }));

    locations.forEach(el => {
      const targetInd = result.findIndex(e => e.key === el.location.value);
      result[targetInd].modules.push({
        key: el.id,
        label: el.name
      });
    });
    return result.filter(el => el.modules.length);
  }, [locations]);

  return (
    <header className={css.header}>
      <Link to='/'>
        <LogoIcon height='30' />
      </Link>
      <div className={css.dropdown}>
        <NestedMenu
          title='Locations'
          moduleGroups={moduleGroups}
          onItemClick={key => history.push(`/location/${key}`)}
        />
      </div>
    </header>
  );
};
