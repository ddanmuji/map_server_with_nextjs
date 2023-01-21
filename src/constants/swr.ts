export const SWR_KEY = {
	STORE: '/stores',
	MAP: '/map'
} as const;
export type SwrKey = (typeof SWR_KEY)[keyof typeof SWR_KEY];
