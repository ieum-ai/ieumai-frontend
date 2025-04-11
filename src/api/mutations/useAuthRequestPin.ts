import { useMutation } from '@tanstack/react-query';

import { fetcher } from '../fetcher';

type Request = {
  email: string;
};

const postAuthRequestPin = ({ email }: Request) =>
  fetcher.post<void>('/api/auth/request-pin', { email });

export const useAuthRequestPin = () => useMutation({ mutationFn: postAuthRequestPin });
