import useSWR from 'swr';

import { Marker } from '@/components';
import { SWR_KEY } from '@/constants';
import { useCurrentStoreMutation } from '@/hooks';
import type { NaverMap, Store } from '@/types';
import { generateStoreMarkerIcon } from '@/utils';

const Markers = () => {
	const { data: currentStores } = useSWR<Store>(SWR_KEY.CURRENT_STORE);
	const { data: stores } = useSWR<Store[]>(SWR_KEY.STORE);
	const { data: map } = useSWR<NaverMap>(SWR_KEY.MAP);

	const { clearCurrentStore, setCurrentStore } = useCurrentStoreMutation();
	const onClickMarker = (store: Store) => () => {
		setCurrentStore(store);
	};

	return map && stores ? (
		<>
			{stores.map(store => {
				return (
					<Marker
						key={store.nid}
						map={map}
						coordinates={store.coordinates}
						icon={generateStoreMarkerIcon(store.season, false)}
						onClick={onClickMarker(store)}
					/>
				);
			})}
			{currentStores && (
				<Marker
					key={currentStores.nid}
					map={map}
					coordinates={currentStores.coordinates}
					icon={generateStoreMarkerIcon(currentStores.season, true)}
					onClick={clearCurrentStore}
				/>
			)}
		</>
	) : null;
};

export default Markers;
