import * as React from 'react';
import appStore from '../../AppStore';
import styles from './style.module.scss';

const ReadyScene: React.FC = () => {
  const [hovered, setHovered] = React.useState(false);

  const onEnter = () => setHovered(true);
  const onLeave = () => setHovered(false);

  return (
    <div className={styles['container']}>
      <div style={{ height: 300 }} />
      <h1 className={styles['title']}>心算训练营</h1>
      <button
        className={styles['button']}
        onClick={() => appStore.setStatus('playing')}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {hovered ? 'yes! 来吧!' : '我准备好了'}
      </button>
    </div>
  );
};

export default ReadyScene;
