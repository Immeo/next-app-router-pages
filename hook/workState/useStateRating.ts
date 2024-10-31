import { useState } from 'react';

export const useStateRating = (initialValue: number) => {
	const [rating, setRating] = useState(initialValue);

	return { rating, setRating };
};
