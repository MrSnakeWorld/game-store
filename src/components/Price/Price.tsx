import React from 'react';
import {Flex, Heading} from '@chakra-ui/react';

interface IPriceProps {
	price: number;
	discount?: number;
	variant: 'full' | 'small';
}

const Price = ({price, discount, variant}: IPriceProps) => {
	const bigSize = variant === 'full' ? 'lg' : 'md';
	const smallSize = variant === 'full' ? 'md' : 'sm';

	return (
		<Flex>
			{discount && (
				<Heading size={bigSize}>{Math.floor(price / 100 * (100 - discount))}</Heading>
			)}
			<Heading ml={1} size={discount ? smallSize : bigSize} as={discount ? 'del' : 'p'}>
				{price}
			</Heading>
		</Flex>
	);
};

export default Price;