import * as React from 'react';
import styles from './style.module.scss';
import appStore from '../../../AppStore';
import { observer } from 'mobx-react';
import thinking from './thing.png';

const Card: React.FC = () => {
  const [hidden, setHidden] = React.useState(false);

  React.useEffect(() => {
    appStore.toggle();
  }, []);

  const onChange = (e: any) => {
    const value = e.target.value;
    if (!isNaN(parseInt(value))) {
      appStore.resetResult(parseInt(value));
    }
  };

  React.useEffect(() => {
    const t1 = setTimeout(() => {
      setHidden(true);
    }, 3000);
    const t2 = setTimeout(() => {
      setHidden(false);
    }, 60 * 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [appStore.round]);

  const cancelHidden = () => {
    setHidden(false);
  };

  const placeholder = (
    <div className={styles['placeholder-wrapper']}>
      <img
        src={thinking}
        className={styles['placeholder']}
        onClick={cancelHidden}
      />
    </div>
  );

  const Carder = (
    <div className={styles['container']} style={{}}>
      {hidden ? (
        placeholder
      ) : (
        <>
          <h2 className={styles['formula']}>
            {appStore.formular.x1} x {appStore.formular.x2} = ?
          </h2>
          <input
            className={styles['input']}
            type="text"
            onChange={onChange}
            value={appStore.result}
          />
        </>
      )}
    </div>
  );

  return Carder;
};

export default observer(Card);
