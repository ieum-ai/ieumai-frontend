import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef, useId } from 'react';

import * as styles from './styles.css';

type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
  label?: string;
  labelAlign?: keyof typeof styles.labelAlignVariants;
};

export const Checkbox = forwardRef<ComponentRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  ({ id: _id, className, label, labelAlign = 'start', ...props }, ref) => {
    const reactId: string = useId();
    const id: string = _id ?? `ieum-${reactId}`;

    return (
      <div className={clsx(styles.root, styles.labelAlignVariants[labelAlign])}>
        <CheckboxPrimitive.Root
          id={id}
          ref={ref}
          className={clsx(className, styles.checkbox)}
          {...props}
        />
        {label && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export const CheckboxRoot = CheckboxPrimitive.Root;

export const CheckboxIndicator = forwardRef<
  ComponentRef<typeof CheckboxPrimitive.Indicator>,
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Indicator ref={ref} className={clsx(styles.indicator, className)} {...props} />
));
CheckboxIndicator.displayName = CheckboxPrimitive.Indicator.displayName;
