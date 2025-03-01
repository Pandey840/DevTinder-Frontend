import {useQuery} from '@tanstack/react-query';
import axiosInstance from './skillsInstance';

const fetchSkills = async () => {
  const response = await axiosInstance.get('');
  return response.data;
};

export const useSkills = () => {
  return useQuery({
    queryKey: ['fetchSkills'],
    queryFn: fetchSkills,
    staleTime: 3600000,
    cacheTime: 10800000,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
};

