import * as React from 'react';
import styles from './style.module.scss';
import appStore from '../../AppStore';
import Card from './Card';
import { observer } from 'mobx-react-lite';

const FocusScene: React.FC = () => {
  return (
    <div className={styles['container']}>
      <div style={{ height: 150 }} />
      <h1 className={styles['title']}>第{' ' + appStore.round + ' '}题</h1>
      <div style={{ height: 40 }} />
      <Card />
      <div style={{ height: 40 }} />
      <button className={styles['button']} onClick={appStore.toggle}>
        下一题
      </button>
    </div>
  );
};

export default observer(FocusScene);
