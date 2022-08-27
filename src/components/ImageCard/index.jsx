import React from 'react';
import cns from 'classnames';
import cls from './ImageCard.module.scss';

const ImageCard = ({ src }) => {
  return (
    <div
      className={cns(cls.container, 'm-1')}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
};

export default React.memo(ImageCard);
