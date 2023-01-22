import styled from '@emotion/styled';
import Script from 'next/script';
import { FC, useEffect, useRef } from 'react';

import { INITIAL_CENTER, INITIAL_ZOOM } from '@/constants';
import { HEADER_HEIGHT, SECTION_PADDING_TOP } from '@/styles/shared/constants';
import { fullSizingStyled } from '@/styles/shared/util.styles';
import type { Coordinates, NaverMap } from '@/types';

interface MapProps {
	initialCenter?: Coordinates;
	initialZoom?: number;
	mapId?: string;
	onLoad?: (map: NaverMap) => void;
}

const Map: FC<MapProps> = ({
	initialCenter = INITIAL_CENTER,
	initialZoom = INITIAL_ZOOM,
	mapId = 'map',
	onLoad
}) => {
	const mapRef = useRef<NaverMap | null>(null);

	const initializeMap = () => {
		const mapOptions = {
			center: new window.naver.maps.LatLng(...initialCenter),
			zoom: initialZoom,
			minZoom: 9,
			scaleControl: false,
			mapDataControl: false,
			logoControlOptions: {
				position: naver.maps.Position.BOTTOM_LEFT
			}
		};

		const map = new window.naver.maps.Map(mapId, mapOptions);
		mapRef.current = map;

		if (onLoad) onLoad(map);
	};

	useEffect(() => {
		return () => mapRef.current?.destroy();
	}, []);

	return (
		<>
			<Script
				strategy="afterInteractive"
				type="text/javascript"
				src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
				onReady={initializeMap}
			/>
			<MapBox id={mapId} />
		</>
	);
};

export default Map;

const MapBox = styled.div`
	${fullSizingStyled}

	& > div:nth-of-type(2) {
		bottom: calc(${HEADER_HEIGHT} + ${SECTION_PADDING_TOP}) !important;
	}
`;
