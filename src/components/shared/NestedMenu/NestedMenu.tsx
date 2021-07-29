import React, { useState } from 'react';
import { ModuleGroup } from './ModuleGroup';
import { NestedModuleGroup } from './types';
import css from './NestedMenu.module.scss';

interface NestedMenuProps {
  title: string;
  moduleGroups: NestedModuleGroup[];
  onItemClick(key: string): void;
}

export const NestedMenu = ({ moduleGroups, title, onItemClick }: NestedMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHidden = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div className={css.analytics} onMouseEnter={toggleHidden} onMouseLeave={toggleHidden}>
      <div className={css.topButton}>{title}</div>
      <div className={`${css.analyticsDropDown} ${isVisible ? `${css.visible}` : ''}`}>
        {moduleGroups.map(group => (
          <ModuleGroup
            key={group.key}
            label={group.key}
            modules={group.modules}
            onItemClick={key => {
              onItemClick(key);
              setIsVisible(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};
