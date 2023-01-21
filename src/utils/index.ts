import { NUMBER_OF_MARKER, SCALED_MARKER_HEIGHT, SCALED_MARKER_WIDTH } from '@/constants';
import type { ImageIcon } from '@/types';

export const generateStoreMarkerIcon = (markerIndex: number, isSelected: boolean): ImageIcon => ({
	url: isSelected ? '/images/markers-selected.png' : '/images/markers.png',
	size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
	origin: new naver.maps.Point(SCALED_MARKER_WIDTH * markerIndex, 0),
	scaledSize: new naver.maps.Size(SCALED_MARKER_WIDTH * NUMBER_OF_MARKER, SCALED_MARKER_HEIGHT)
});
