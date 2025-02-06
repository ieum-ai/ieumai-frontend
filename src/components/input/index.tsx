import { ComponentProps, ReactElement, forwardRef } from 'react';

import * as styles from './styles.css';

type InputProps = ComponentProps<'input'> & {
  label: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref): ReactElement => {
    return (
      <div className={styles.root}>
        <input className={styles.input} ref={ref} {...props} />
        <label className={styles.label}>{label}</label>
      </div>
    );
  },
);

Input.displayName = 'Input';
