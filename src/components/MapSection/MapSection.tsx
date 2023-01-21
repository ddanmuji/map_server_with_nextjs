import { Map, Markers } from '@/components';
import { useMapMutation } from '@/hooks';
import type { NaverMap } from '@/types';

import * as S from './MapSection.styled';

const MapSection = () => {
	const { initializeMap } = useMapMutation();
	const onLoadMap = (map: NaverMap) => {
		initializeMap(map);
	};

	return (
		<S.Wrapper>
			<Map onLoad={onLoadMap} />
			<Markers />
		</S.Wrapper>
	);
};

export default MapSection;
