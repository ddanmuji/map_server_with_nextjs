import copy from 'copy-to-clipboard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';

import { AppHeader } from '@/components';
import { ROUTER_PATH } from '@/constants';
import { useMapMutation } from '@/hooks';
import { boxStyled, spacingStyled } from '@/styles/shared/util.styles';

const HomeHeader = () => {
	const { getMapOptions, resetMapOptions } = useMapMutation();

	const router = useRouter();
	const onClickShareUrl = useCallback(() => {
		const mapOptions = getMapOptions();
		const query = `/?zoom=${mapOptions.zoom}&lat=${mapOptions.center[0]}&lng=${mapOptions.center[1]}`;

		router.replace(query);
		copy(location.origin + query);
	}, [router, getMapOptions]);

	return (
		<AppHeader
			onClickLogo={resetMapOptions}
			rightElement={[
				<button key="copy" css={boxStyled} onClick={onClickShareUrl}>
					<AiOutlineShareAlt size={20} />
				</button>,
				<div key="spacing" css={spacingStyled()} />,
				<Link key="link" href={ROUTER_PATH.FEEDBACK} css={boxStyled}>
					<VscFeedback size={20} />
				</Link>
			]}
		/>
	);
};

export default HomeHeader;
