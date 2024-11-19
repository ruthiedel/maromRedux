'use client';

import { decrement, increment } from '@/store/store';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Display.module.css'; 



export default function Display() {
  const count = useSelector((state:any) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.count}>Count: {count}</p>
      <button className={styles.button} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button className={styles.button} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
