import {useQuery} from '@tanstack/react-query';
import * as api from '../apis';

export const useProfileDetails = () => {
  return useQuery({
    queryKey: ['profileDetails'],
    queryFn: () => api.profileDetails(),
    staleTime: 300000,
    cacheTime: 900000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};
