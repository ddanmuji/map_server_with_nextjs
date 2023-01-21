import { useEffect } from 'react';

import { MarkerType } from '@/types';

const useMarker = ({ coordinates, icon, map, onClick }: MarkerType) => {
	useEffect(() => {
		let marker: naver.maps.Marker | null = null;

		if (map) {
			marker = new naver.maps.Marker({
				map,
				position: new naver.maps.LatLng(...coordinates),
				icon
			});
		}

		if (onClick) {
			naver.maps.Event.addListener(marker, 'click', onClick);
		}

		return () => {
			marker?.setMap(null);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [map]);
};

export default useMarker;
