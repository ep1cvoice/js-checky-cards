import { useState, useEffect, useMemo } from 'react';
import { API_URL } from '../../constants';

import QuestionCardList from '../../components/QuestionCardList';
import { Loader } from '../../components/Loader';
import { useFetch } from '../../hooks/useFetch';
import SearchInput from '../../components/SearchInput';

import styles from './HomePage.module.css';

const HomePage = () => {
	const [questions, setQuestions] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [sortSelectValue, setSortSelectValue] = useState('');

	const [getQuestions, isLoading, error] = useFetch(async (url) => {
		const response = await fetch(`${API_URL}/${url}`);
		const data = await response.json();

		setQuestions(data);
		return data;
	});

	const cards = useMemo(() => {
		return (questions || []).filter((d) => d.question.toLowerCase().includes(searchValue.trim().toLowerCase()));
	}, [questions, searchValue]);

	useEffect(() => {
		getQuestions('react');
	}, []);

	useEffect(() => {
		getQuestions(`react${sortSelectValue}`);
	}, [sortSelectValue]);

	const onSearchChangehandler = (e) => {
		setSearchValue(e.target.value);
	};

	const onSortSelectChangeHandler = (e) => {
		setSortSelectValue(e.target.value);
	};

	return (
		<>
			<div className={styles.controlsContainer}>
				<SearchInput value={searchValue} onChange={onSearchChangehandler} />

				<div className={styles.selectGroup}>
					<select value='s' onChange={onSortSelectChangeHandler} className={styles.select}>
						<option value=''>technology</option>
						<option value=''>Vanilla JS</option>
						<option value=''>React</option>
						<option value=''>Angular</option>
						<option value=''>Vue</option>
						<option value=''>Node.js</option>
						<option value=''>Next.js</option>
					</select>
					<select value={sortSelectValue} onChange={onSortSelectChangeHandler} className={styles.select}>
						<option value=''>sort by</option>
						<option value='?_sort=level'>LVL asc</option>
						<option value='?_sort=-level'>LVL desc</option>
						<option value='?_sort=completed'>completed asc</option>
						<option value='?_sort=-completed'>completed desc</option>
					</select>
				</div>
			</div>

			{isLoading && <Loader />}
			{error && <p>{error}</p>}
			{cards.length === 0 && (
				<div className={styles.noCardsWrapper}>
					<div className={styles.noCards}>
						<div className={styles.icon}>🔍</div>
						<h3>No results found</h3>
						<p>Try adjusting your search phrase.</p>
					</div>
				</div>
			)}

			<QuestionCardList cards={cards} />
		</>
	);
};

export default HomePage;
