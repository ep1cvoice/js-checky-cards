import { useId } from 'react';
import { Search } from 'lucide-react';
import styles from './SearchInput.module.css';

const SearchInput = ({ value, onChange }) => {
	const inputId = useId();

	return (
		<div className={styles.inputContainer}>
			<label htmlFor={inputId}>
				<Search className={styles.icon} />
			</label>
			<input
				className={styles.input}
				type='text'
				id={inputId}
				placeholder='Search for...'
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

export default SearchInput;
