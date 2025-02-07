'use client';
import { clsx } from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { BrandLogo, MenuIcon } from '@ieum/components/icons';
import { Collapse, CollapseContent, CollapseTrigger } from '@ieum/components/ui';

import * as styles from './styles.css';

const MENU = [
  { key: 'ABOUT', path: '/about', title: '프로젝트 소개' },
  { key: 'TEST', path: '/test', title: '음성 테스트' },
  { key: 'HOME', path: '/', title: <BrandLogo width={128} /> },
  { key: 'CONTRIBUTION', path: '/contribution', title: '음성기여' },
  { key: 'DATABASE', path: '/database', title: '데이터베이스' },
];

const Header = () => {
  const _pathname: string = usePathname();
  const pathname: string = '/' + _pathname.split('/')[1];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Collapse open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <header className={styles.root}>
        <nav className={clsx(styles.desktop, styles.inner)}>
          <ul className={styles.list}>
            {MENU.map(({ key, path, title }) => (
              <li key={key} className={clsx(styles.item, pathname === path && styles.active)}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={clsx(styles.mobile, styles.inner)}>
          <Link className={styles.branding} href="/">
            <BrandLogo width={72} />
          </Link>
          <CollapseTrigger>
            <MenuIcon size={24} />
          </CollapseTrigger>
        </div>
      </header>

      <CollapseContent className={styles.mobileMenuContainer}>
        <ul className={styles.mobileMenuList}>
          {MENU.map(({ key, path, title }) => {
            if (key === 'HOME') return null;
            return (
              <li key={key} className={clsx(styles.item, pathname === path && styles.active)}>
                <Link href={path} onClick={handleCloseMobileMenu}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </CollapseContent>
    </Collapse>
  );
};

export default Header;
