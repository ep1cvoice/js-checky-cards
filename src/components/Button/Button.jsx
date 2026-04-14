import styles from './Button.module.css';

const Button = ({ onClick, children, isActive, isDisabled, isNeutral, isLogged }) => {
	return (
		<button
			className={`${styles.button} ${isActive ? styles.active : ''} ${isNeutral ? styles.neutral : ''} ${isLogged ? styles.logged : ''}`}
			onClick={onClick}
			disabled={isDisabled}>
			{children}
		</button>
	);
};

export default Button;
