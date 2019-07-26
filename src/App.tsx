import React from 'react';
import styles from './App.module.scss';
import { observer } from 'mobx-react';
import appStore from './AppStore';
import ReadyScene from './scenes/ReadyScene';
import ResultScene from './scenes/ResultScene';
import FocusScene from './scenes/FocusScene';

const App: React.FC = () => {
  const status = appStore.status;
  console.log(status);
  return (
    <div className={styles['container']}>
      {status === 'ready' ? (
        <ReadyScene />
      ) : status === 'finished' ? (
        <ResultScene />
      ) : (
        <FocusScene />
      )}
    </div>
  );
};

export default observer(App);
