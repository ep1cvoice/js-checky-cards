import { useState } from 'react';
import Button from '../Button';
import ReactLogo from '../../assets/react.svg';
import JSLogo from '../../assets/javascript-logo.svg';
import AngularLogo from '../../assets/angular-logo.svg';
import VueLogo from '../../assets/vue-logo.png';
import NodeLogo from '../../assets/nodejs-icon.svg';
import styles from './Header.module.css';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<header className={styles.header}>
				<div className={styles.burger} onClick={toggleMenu}>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<p className={styles.logo}>
					<img className={styles.headerIcon} src={JSLogo} alt='JS logo' />
					<img className={styles.headerIcon} src={ReactLogo} alt='React logo' />
					<img
						className={styles.headerIcon}
						src={AngularLogo}
						alt='Angular logo'
					/>
					<img className={styles.headerIcon} src={VueLogo} alt='Vue logo' />
					<img className={styles.headerIcon} src={NodeLogo} alt='NodeJS logo' />
					<span>JavaScript Checky Cards</span>
				</p>

				<div className={styles.headerButtons}>
					<Button isDisabled={true}>+ Add </Button>
					<Button>Log In</Button>
				</div>
			</header>

			{isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}

			<div className={`${styles.sideMenu} ${isOpen ? styles.open : ''}`}>
				<h3>Technologies</h3>

				<div className={styles.menuItem}>
					<img src={JSLogo} alt='JS' />
					<span>JavaScript</span>
				</div>

				<div className={styles.menuItem}>
					<img src={ReactLogo} alt='React' />
					<span>React</span>
				</div>

				<div className={styles.menuItem}>
					<img src={AngularLogo} alt='Angular' />
					<span>Angular</span>
				</div>

				<div className={styles.menuItem}>
					<img src={VueLogo} alt='Vue' />
					<span>Vue</span>
				</div>

				<div className={styles.menuItem}>
					<img src={NodeLogo} alt='Node' />
					<span>NodeJS</span>
				</div>
			</div>
		</>
	);
};

export default Header;
