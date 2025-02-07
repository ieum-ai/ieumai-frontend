import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { clsx } from 'clsx';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

import * as styles from './styles.css';

export const Collapse = CollapsiblePrimitive.Root;

export const CollapseTrigger = CollapsiblePrimitive.Trigger;

export const CollapseContent = forwardRef<
  ComponentRef<typeof CollapsiblePrimitive.Content>,
  ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content ref={ref} className={clsx(className, styles.content)} {...props} />
));
CollapseContent.displayName = CollapsiblePrimitive.Content.displayName;
