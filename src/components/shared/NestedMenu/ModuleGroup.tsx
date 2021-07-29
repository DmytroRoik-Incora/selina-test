import React, { useState } from 'react';
import { Module } from './Module';
import { NestedModuleGroup } from './types';
import css from './NestedMenu.module.scss';

interface ModuleGroupProps {
  modules: NestedModuleGroup["modules"];
  label: string;
  onItemClick(key: string): void;
}

export const ModuleGroup = ({ modules, label, onItemClick }: ModuleGroupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHidden = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div className={css.moduleGroup} onMouseEnter={toggleHidden} onMouseLeave={toggleHidden}>
      {label}
      {isVisible && (
        <div className={`${css.modulesSet} ${isVisible ? `${css.visible}` : ''}`}>
          {modules.map(module => (
            <Module
              key={module.key}
              name={module.label}
              onItemClick={() => {
                onItemClick(module.key);
                setIsVisible(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
