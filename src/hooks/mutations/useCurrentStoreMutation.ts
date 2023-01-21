import { useCallback } from 'react';
import { mutate } from 'swr';

import { SWR_KEY } from '@/constants';
import type { Store } from '@/types';

const useCurrentStoreMutation = () => {
	const setCurrentStore = useCallback((store: Store) => mutate(SWR_KEY.CURRENT_STORE, store), []);
	const clearCurrentStore = useCallback(() => mutate(SWR_KEY.CURRENT_STORE, null), []);

	return { setCurrentStore, clearCurrentStore };
};
export default useCurrentStoreMutation;
