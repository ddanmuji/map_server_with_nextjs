import styled from '@emotion/styled';
import Image from 'next/image';
import { FC } from 'react';
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5';

import Naver from '@/assets/images/naver.png';
import type { Store } from '@/types';

interface DetailDescriptionProps {
	store?: Store;
}

const DetailDescription: FC<DetailDescriptionProps> = ({ store }) => {
	return store ? (
		<>
			<DescriptionWrapper>
				<Title>설명</Title>
				<Description>{store.description}</Description>
			</DescriptionWrapper>
			<Divider />
			<BasicInfo>
				<Title>기본 정보</Title>
				<div className="address">
					<IoLocationOutline size={20} />
					<span>{store.address || '정보가 없습니다.'}</span>
				</div>
				<div className="phone">
					<IoCallOutline size={20} />
					<span>{store.phone || '정보가 없습니다.'}</span>
				</div>
				<div className="naverUrl">
					<Image src={Naver} width={20} height={20} alt="" />
					<Anchor
						href={`https://pcmap.place.naver.com/restaurant/${store.nid}/home`}
						target="_blank"
						rel="noreferrer noopener"
					>
						<span>네이버 상세 정보</span>
					</Anchor>
				</div>
			</BasicInfo>
			<Divider />
			<MenuWrapper>
				<Title>메뉴</Title>
				<MenuList>
					{store.menus?.map(menu => (
						<Menu key={menu.name}>
							<Name>{menu.name}</Name>
							<Price>{menu.price}</Price>
						</Menu>
					))}
				</MenuList>
			</MenuWrapper>
		</>
	) : null;
};

export default DetailDescription;

const Title = styled.h2`
	font-size: 1.125rem;
	font-weight: 600;
	margin: 8px 0;
`;

const Description = styled.p`
	margin: 4px 0;
`;

const DescriptionWrapper = styled.div``;

const Divider = styled.hr`
	border-bottom: none;
	border-top: 1px solid #eef0f3;
	margin: 16px 0;
`;

const BasicInfo = styled.div`
	div {
		display: flex;
		align-items: center;
		margin-bottom: 8px;

		span {
			margin-left: 4px;
			font-size: 1rem;
		}

		a {
			color: #64c0a9;
		}
	}
`;

const Anchor = styled.a``;

const MenuWrapper = styled.div``;

const MenuList = styled.ul``;

const Menu = styled.li`
	display: flex;
	justify-content: space-between;
	margin-top: 16px;
`;

const Name = styled.span`
	max-width: 70%;
	word-break: keep-all;
`;

const Price = styled.span``;
