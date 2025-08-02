import cn from 'classnames';
import { useRouter } from 'next/router';
import { KeyboardEvent, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import style from './Search.module.css';
import { SearchProps } from './Search.props';
import GlassIcon from './glass.svg';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};
	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Enter') {
			goToSearch();
		}
	};

	return (
		<div className={cn(className, style.search)} {...props}>
			<Input
				placeholder='Поиск...'
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
				className={style.input}
			/>
			<Button
				appearance='primary'
				onClick={goToSearch}
				className={style.button}
			>
				{<GlassIcon />}
			</Button>
		</div>
	);
};
