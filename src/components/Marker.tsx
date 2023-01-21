import { FC, useEffect } from 'react';

import type { MarkerType } from '@/types';

const Marker: FC<MarkerType> = ({ map, coordinates, icon, onClick }) => {
	useEffect(() => {
		let marker: naver.maps.Marker | null = null;

		if (map) {
			marker = new naver.maps.Marker({
				map,
				position: new naver.maps.LatLng(...coordinates),
				icon
			});
		}

		if (onClick) naver.maps.Event.addListener(marker, 'click', onClick);

		return () => marker?.setMap(null);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map]);

	return null;
};

export default Marker;
