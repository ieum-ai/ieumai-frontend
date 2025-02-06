'use client';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';

import { BrandLogo } from '@ieum/components/icons';

import * as styles from './styles.css';

const MENU = [
  { key: 'ABOUT', path: '/about', title: '프로젝트 소개' },
  { key: 'TEST', path: '/test', title: '음성 테스트' },
  { key: 'HOME', path: '/', title: <BrandLogo width={128} /> },
  { key: 'CONTRIBUTION', path: '/contribution', title: '음성기여' },
  { key: 'DATABASE', path: '/database', title: '데이터베이스' },
];

const Header: FC = (): ReactElement => {
  const _pathname: string = usePathname();
  const pathname: string = '/' + _pathname.split('/')[1];

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {MENU.map(({ key, path, title }) => (
          <li key={key} className={clsx(styles.item, pathname === path && styles.active)}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
