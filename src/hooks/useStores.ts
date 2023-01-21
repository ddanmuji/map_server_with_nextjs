import { useCallback } from 'react';
import { mutate } from 'swr';

import { STORE_KEY } from '@/constants';
import type { Store } from '@/types';

const useStores = () => {
	const initializeStores = useCallback((stores: Store[]) => {
		mutate(STORE_KEY, stores);
	}, []);

	return { initializeStores };
};

export default useStores;
