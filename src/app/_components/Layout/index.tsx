import { PropsWithChildren } from 'react';

import Header from './Header';
import * as styles from './styles.css';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.main} data-animate={true}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
