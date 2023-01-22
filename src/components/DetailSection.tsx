import styled from '@emotion/styled';
import { useState } from 'react';
import useSWR from 'swr';

import { DetailContent, DetailHeader } from '@/components';
import { SWR_KEY } from '@/constants';
import { detailSectionStyled } from '@/styles/shared/util.styles';
import type { Store } from '@/types';

const DetailSection = () => {
	const { data: currentStore } = useSWR<Store>(SWR_KEY.CURRENT_STORE);

	const [expanded, setExpanded] = useState(false);
	const onToggleExpanded = () => setExpanded(prev => !prev);

	return (
		<Wrapper expanded={expanded} selected={Boolean(currentStore)}>
			<DetailHeader expanded={expanded} onClickArrow={onToggleExpanded} store={currentStore} />
			<DetailContent expanded={expanded} store={currentStore} />
		</Wrapper>
	);
};
export default DetailSection;

const Wrapper = styled.div<{ expanded?: boolean; selected?: boolean }>`
	${({ expanded, selected }) => detailSectionStyled(expanded, selected)}
`;
