import { useCallback } from 'react';
import { mutate } from 'swr';

import { SWR_KEY } from '@/constants';
import type { Store } from '@/types';

const useStoresMutation = () => {
	const initializeStores = useCallback((stores: Store[]) => {
		mutate(SWR_KEY.STORE, stores);
	}, []);

	return { initializeStores };
};

export default useStoresMutation;
