import { clsx } from 'clsx';
import { forwardRef, ComponentPropsWithoutRef, useId } from 'react';

import { METADATA } from '@ieum/constants/metadata';

import * as styles from './styles.css';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id: _id, label, placeholder, required, disabled, ...props }, ref) => {
    const reactId: string = useId();
    const id: string = _id ?? `${METADATA.reactIdPrefix}-${reactId}`;

    return (
      <div className={clsx(styles.root, disabled && styles.disabled)}>
        <input
          id={id}
          className={styles.input}
          ref={ref}
          required={required}
          disabled={disabled}
          {...props}
        />
        <label className={styles.label} htmlFor={id}>
          {label ?? placeholder}
          {required && <span className="required">*</span>}
        </label>
      </div>
    );
  },
);

Input.displayName = 'Input';
