import * as React from 'react';
import styles from './style.module.scss';
import appStore from '../../AppStore';

const ResultScene: React.FC = () => {
  return (
    <div className={styles['container']}>
      <div style={{ height: 200 }} />
      <div className={styles['title']}>战绩!!!!</div>
      <hr style={{ width: 800 }} />
      <table>
        <tbody>
          <tr>
            <th>第几轮</th>
            <th>计算式</th>
            <th>结果</th>
          </tr>
          {appStore.history.map((it, i) => (
            <tr key={i}>
              <td>{it.round}</td>
              <td style={{ width: 200 }}>
                {it.x1} x {it.x2} = {it.result}{' '}
              </td>
              <td>{it.x2 * it.x2 === it.result ? '√' : 'x'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ height: 80 }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => {
            appStore.reset();
            appStore.setStatus('ready');
          }}
        >
          再次挑战
        </button>
      </div>
    </div>
  );
};

export default ResultScene;
