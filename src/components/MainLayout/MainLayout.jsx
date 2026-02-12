import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

const MainLayout = () => {
	const currentDate = new Date();
	let year = currentDate.getFullYear();

	return (
		<div className={styles.mainLayout}>
			<header className={styles.Header}>header</header>
			<div className={styles.mainWrapper}>
				<main className={styles.main}>
					<Outlet />
				</main>
				<footer className={styles.footer}>
					React Checky Cards {} <br /> {year}
				</footer>
			</div>
		</div>
	);
};

export default MainLayout;
