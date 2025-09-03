import { Htag } from '../components';
import { withLayout } from '../layout/Layout';

function Error500() {
	return <Htag tag={'h1'}>Ошибка 500, ошибка сервера</Htag>;
}
export default withLayout(Error500);
