import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

import * as styles from './styles.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  asChild?: boolean;
  className?: string;
  size?: keyof typeof styles.sizeVariants;
  colorScheme?: keyof typeof styles.colorVariants;
  fullWidth?: boolean;
  justify?: keyof typeof styles.justifyVariants;
  fontWeight?: keyof typeof styles.fontWeightVariants;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      className,
      children,
      size = 'md',
      colorScheme = 'primary',
      fullWidth = false,
      justify = 'center',
      fontWeight = 'medium',
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={clsx(
          styles.root,
          styles.sizeVariants[size],
          styles.colorVariants[colorScheme],
          styles.fullWidth[String(fullWidth) as 'true' | 'false'],
          styles.justifyVariants[justify],
          styles.fontWeightVariants[fontWeight],
          className,
        )}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);

Button.displayName = 'Button';
