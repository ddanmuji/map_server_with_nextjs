import useSWR from 'swr';

import { Marker } from '@/components';
import { SWR_KEY } from '@/constants';
import type { NaverMap, Store } from '@/types';
import { generateStoreMarkerIcon } from '@/utils';

const Markers = () => {
	const { data: map } = useSWR<NaverMap>(SWR_KEY.MAP);
	const { data: stores } = useSWR<Store[]>(SWR_KEY.STORE);

	return map && stores ? (
		<>
			{stores.map(store => {
				return (
					<Marker
						key={store.nid}
						map={map}
						coordinates={store.coordinates}
						icon={generateStoreMarkerIcon(store.season)}
						onClick={() => console.log('### TEST :D')}
					/>
				);
			})}
		</>
	) : null;
};

export default Markers;
