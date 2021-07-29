import React from 'react';
import css from './NestedMenu.module.scss';

interface ModuleProps {
  name: string;
  onItemClick(): void;
}

export const Module = ({ name, onItemClick }: ModuleProps) => {
  return (
    <div className={css.singleModule} onClick={onItemClick}>
      {name}
    </div>
  );
};
