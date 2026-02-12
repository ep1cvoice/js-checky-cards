import styles from './Button.module.css';

const Button = ({ onClick, children, isActive, isDisabled }) => {
	return (
		<button
			className={`${styles.button} ${isActive ? styles.primary : ''}`}
			onClick={onClick}
			disabled={isDisabled}>
			{children}
		</button>
	);
};

export default Button;
