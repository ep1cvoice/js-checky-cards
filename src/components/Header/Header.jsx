import styles from './Header.module.css';
import Button from '../Button';
import ReactLogo from '../../assets/react.svg';

const Header = () => {
	return (
		<header className={styles.header}>
			<p className={styles.logo}>
				<img src={ReactLogo} alt="React logo" />
				<span>React Checky Cards</span>
			</p>

			<div className={styles.headerButtons}>
				<Button isDisabled={true}>+ Add </Button>
				<Button>Log In</Button>
			</div>
		</header>
	);
};

export default Header;
