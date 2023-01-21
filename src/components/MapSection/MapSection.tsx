import { Map, Markers } from '@/components';
import { useCurrentStoreMutation, useMapMutation } from '@/hooks';
import type { NaverMap } from '@/types';

import * as S from './MapSection.styled';

const MapSection = () => {
	const { initializeMap } = useMapMutation();
	const { clearCurrentStore } = useCurrentStoreMutation();

	const onLoadMap = (map: NaverMap) => {
		initializeMap(map);
		naver.maps.Event.addListener(map, 'click', clearCurrentStore);
	};

	return (
		<S.Wrapper>
			<Map onLoad={onLoadMap} />
			<Markers />
		</S.Wrapper>
	);
};

export default MapSection;
