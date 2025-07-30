import Magnifler from './icons/magnifler.svg';
import style from './Searching.module.css';

function Searching() {
	return (
		<form action='/' method='get' className={style.form}>
			<input
				type='search'
				name='searching'
				placeholder='Поиск...'
				className={style.input}
			/>
			<button type='submit' className={style.button}>
				{<Magnifler />}
			</button>
		</form>
	);
}

export default Searching;
