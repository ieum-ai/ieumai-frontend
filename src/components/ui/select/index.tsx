import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, forwardRef, useId } from 'react';

import { StatMinusIcon } from '@ieum/components/icons';

import * as styles from './styles.css';

export type SelectOption = { value: string; label: string };

type SelectProps = ComponentPropsWithoutRef<'select'> & {
  label?: string;
  options: SelectOption[];
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ id: _id, label, options, required, disabled, ...props }, ref) => {
    const reactId: string = useId();
    const id: string = _id ?? `ieum-${reactId}`;

    return (
      <div className={clsx(styles.root, disabled && styles.disabled)}>
        <select
          id={id}
          ref={ref}
          className={styles.select}
          required={required}
          disabled={disabled}
          {...props}
        >
          <option value="" disabled hidden />
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label className={styles.label} htmlFor={id}>
          {label}
          {required && <span className="required">*</span>}
        </label>
        <StatMinusIcon className={styles.icon} />
      </div>
    );
  },
);

Select.displayName = 'Select';
