import type { NextApiRequest, NextApiResponse } from 'next';

import type { Store } from '@/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse<Store[]>) {
	const stores = (await import('../../../public/stores.json')).default as Store[];
	return res.status(200).json(stores);
}
