import {useQuery} from '@tanstack/react-query';
import {profileDetails} from '../apis';

const useProfileDetails = () => {
  return useQuery({
    queryKey: ['profileDetails'],
    queryFn: () => profileDetails(),
    staleTime: 300000,
    cacheTime: 900000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

export {useProfileDetails};
