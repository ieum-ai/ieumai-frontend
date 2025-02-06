import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { forwardRef, ComponentPropsWithoutRef, ReactElement } from 'react';

import * as styles from './styles.css';

type CardProps = ComponentPropsWithoutRef<'div'> & {
  asChild?: boolean;
  className?: string;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ asChild, className, children, ...props }, ref): ReactElement => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp ref={ref} className={clsx(className, styles.root)} {...props}>
        {children}
      </Comp>
    );
  },
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ asChild, className, children, ...props }, ref): ReactElement => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp ref={ref} className={clsx(className, styles.header)} {...props}>
        {children}
      </Comp>
    );
  },
);

CardHeader.displayName = 'CardHeader';

export const CardBody = forwardRef<HTMLDivElement, CardProps>(
  ({ asChild, className, children, ...props }, ref): ReactElement => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp ref={ref} className={clsx(className, styles.body)} {...props}>
        {children}
      </Comp>
    );
  },
);
CardBody.displayName = 'CardBody';
