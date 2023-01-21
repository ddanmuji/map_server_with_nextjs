export const ROUTER_PATH = {
	HOME: '/',
	FEEDBACK: '/feedback'
} as const;
export type RouterPath = (typeof ROUTER_PATH)[keyof typeof ROUTER_PATH];
