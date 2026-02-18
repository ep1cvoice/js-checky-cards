import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import ReactLogo from '../../assets/react.svg';
import JSLogo from '../../assets/javascript-logo.svg';
import AngularLogo from '../../assets/angular-logo.svg';
import VueLogo from '../../assets/vue-logo.png';
import NodeJSLogo from '../../assets/nodejs-icon.svg';
import NextJSLogo from '../../assets/nextjs-icon.svg';
import TagLogo from '../../assets/html-tag.svg?react';

import styles from './Header.module.css';

const Header = () => {

	const navigate = useNavigate();

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

				<div className={styles.techIcons}>
					<img className={styles.headerIcon} src={JSLogo} alt='JS logo' />
					<img className={styles.headerIcon} src={ReactLogo} alt='React logo' />
					<img
						className={styles.headerIcon}
						src={AngularLogo}
						alt='Angular logo'
					/>
					<img className={styles.headerIcon} src={VueLogo} alt='Vue logo' />
					<img className={styles.headerIcon} src={NodeJSLogo} alt='Node.js logo' />
					<img className={styles.headerIcon} src={NextJSLogo} alt='Next.js logo' />
				</div>

				<div className={styles.rightSide}>
					<div className={styles.brand} onClick={()=> navigate("/")}>
						<TagLogo className={`${styles.headerIcon} ${styles.tagIcon}`} />
						<span>JS Checky Cards</span>
					</div>

					<div className={styles.headerButtons}>
						<Button onClick = {() => navigate("/addquestion")} isDisabled={false}>+ Add </Button>
						<Button>Log In</Button>
					</div>
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
					<img src={NodeJSLogo} alt='Node.js' />
					<span>Node.js</span>
				</div>
				<div className={styles.menuItem}>
					<img src={NextJSLogo} alt='Next.js' />
					<span>Next.js</span>
				</div>

				<Button isDisabled={false}>+ Add </Button>
				<Button>Log In</Button>
			</div>
		</>
	);
};

export default Header;
