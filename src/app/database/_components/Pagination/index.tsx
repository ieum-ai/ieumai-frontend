'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Pagination as BasePagination } from '@ieum/components/ui';

import * as styles from './styles.css';

type PaginationProps = {
  total: number;
  current: number;
  perPage: number;
};

const Pagination = ({ total, current, perPage }: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    const updatedParams = new URLSearchParams(searchParams.toString());
    updatedParams.set('p', String(page));
    router.push(`?${updatedParams.toString()}`);
  };

  return (
    <BasePagination
      className={styles.root}
      total={total}
      current={current}
      perPage={perPage}
      onPageChange={handlePageChange}
    />
  );
};

export default Pagination;
