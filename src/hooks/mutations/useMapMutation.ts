import { useCallback } from 'react';
import useSWR, { mutate } from 'swr';

import { INITIAL_CENTER, INITIAL_ZOOM, SWR_KEY } from '@/constants';
import type { Coordinates, NaverMap } from '@/types';

const useMap = () => {
	const { data: map } = useSWR(SWR_KEY.MAP);

	const initializeMap = useCallback((map: NaverMap) => {
		mutate(SWR_KEY.MAP, map);
	}, []);

	const resetMapOptions = useCallback(() => {
		map.morph(new naver.maps.LatLng(...INITIAL_CENTER), INITIAL_ZOOM);
	}, [map]);

	const getMapOptions = useCallback(() => {
		const mapCenter = map.getCenter();
		const center: Coordinates = [mapCenter.lat(), mapCenter.lng()];
		const zoom = map.getZoom();

		return { center, zoom };
	}, [map]);

	return {
		initializeMap,
		resetMapOptions,
		getMapOptions
	};
};
export default useMap;
