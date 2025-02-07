import { Children, cloneElement, FC, isValidElement, ReactElement, ReactNode } from 'react';

type ChildProps = {
  children: ReactNode;
  [key: string]: unknown;
};

const Child: FC<ChildProps> = ({ children, ...props }): ReactElement | null => {
  const child: ReactNode = Children.only(children);

  return isValidElement(child) ? cloneElement(child, props) : null;
};

export default Child;
