import { useCallback } from 'react';
import { mutate } from 'swr';

import { SWR_KEY } from '@/constants';
import type { NaverMap } from '@/types';

const useMap = () => {
	const initializeMap = useCallback((map: NaverMap) => {
		mutate(SWR_KEY.MAP, map);
	}, []);

	return { initializeMap };
};
export default useMap;
