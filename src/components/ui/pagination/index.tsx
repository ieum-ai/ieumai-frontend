import { clsx } from 'clsx';
import { ComponentProps } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@ieum/components/icons';

import * as styles from './styles.css';

type PaginationProps = ComponentProps<'div'> & {
  className?: string;
  total: number;
  current: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  className,
  total,
  current,
  perPage,
  onPageChange,
  ...props
}: PaginationProps) => {
  let startPage = current - Math.floor((perPage - 1) / 2);
  let endPage = current + Math.floor(perPage / 2);

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(perPage, total);
  }
  if (endPage > total) {
    endPage = total;
    startPage = Math.max(1, endPage - perPage + 1);
  }

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className={clsx(className, styles.root)} {...props}>
      {current !== 1 && (
        <button className={styles.arrow} onClick={() => onPageChange(current - 1)}>
          <ChevronLeftIcon />
        </button>
      )}

      {pageNumbers.map((page) => (
        <button
          className={clsx(styles.item, { [styles.active]: page === current })}
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === current}
        >
          {page}
        </button>
      ))}

      {current !== total && (
        <button className={styles.arrow} onClick={() => onPageChange(current + 1)}>
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
};
