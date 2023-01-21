import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { Map, Markers } from '@/components';
import { INITIAL_CENTER, INITIAL_ZOOM } from '@/constants';
import { useCurrentStoreMutation, useMapMutation } from '@/hooks';
import type { Coordinates, NaverMap } from '@/types';

const MapSection = () => {
	const router = useRouter();

	const query = useMemo(() => new URLSearchParams(router.asPath.slice(1)), [router.asPath]);
	const initialZoom = useMemo(
		() => (query.get('zoom') ? Number(query.get('zoom')) : INITIAL_ZOOM),
		[query]
	);
	const initialCenter = useMemo<Coordinates>(
		() =>
			query.get('lat') && query.get('lng')
				? [Number(query.get('lat')), Number(query.get('lng'))]
				: INITIAL_CENTER,
		[query]
	);

	const { initializeMap } = useMapMutation();
	const { clearCurrentStore } = useCurrentStoreMutation();

	const onLoadMap = (map: NaverMap) => {
		initializeMap(map);
		naver.maps.Event.addListener(map, 'click', clearCurrentStore);
	};

	return (
		<>
			<Map onLoad={onLoadMap} initialZoom={initialZoom} initialCenter={initialCenter} />
			<Markers />
		</>
	);
};

export default MapSection;
