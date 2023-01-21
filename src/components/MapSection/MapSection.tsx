import Map from '@/components/Map';

import * as S from './MapSection.styled';

const MapSection = () => {
	const onLoad = () => {
		console.log('load :D');
	};

	return (
		<S.Wrapper>
			<Map onLoad={onLoad} />
		</S.Wrapper>
	);
};

export default MapSection;
