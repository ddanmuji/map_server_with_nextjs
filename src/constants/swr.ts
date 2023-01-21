export const SWR_KEY = {
	CURRENT_STORE: '/current-store',
	STORE: '/stores',
	MAP: '/map'
} as const;
export type SwrKey = (typeof SWR_KEY)[keyof typeof SWR_KEY];
