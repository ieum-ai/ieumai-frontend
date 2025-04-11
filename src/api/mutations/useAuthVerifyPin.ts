import { useMutation } from '@tanstack/react-query';

import { fetcher } from '../fetcher';

type Request = {
  email: string;
  pin: string;
};

const postAuthVerifyPin = ({ email }: Request) =>
  fetcher.post<void>('/api/auth/verify-pin', { email });

export const useAuthVerifyPin = () => useMutation({ mutationFn: postAuthVerifyPin });
