export type NaverMap = naver.maps.Map;

/* map types */
type Lat = number;
type Lng = number;
export type Coordinates = [Lat, Lng];

export type MarkerType = {
	map: NaverMap;
	coordinates: Coordinates;
	icon: ImageIcon;
	onClick?: () => void;
};

export type ImageIcon = {
	url: string;
	size: naver.maps.Size;
	origin: naver.maps.Point;
	scaledSize?: naver.maps.Size;
};

/* store types */
export type Menu = {
	name: string;
	price: string;
};

export type Store = {
	nid: number;
	name: string;
	description: string;
	season: number;
	episode: number;
	coordinates: Coordinates;
	images: string[];
	characteristic: string;
	foodKind: string;
	address: string;
	phone: string;
	menus: Menu[];
};
