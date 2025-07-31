import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageConponent = ({
	page,
	products,
	firstCategory
}: TopPageComponentProps) => {
	return <>{products && products.length}</>;
};
