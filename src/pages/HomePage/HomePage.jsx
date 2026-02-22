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

	const onSearchChangehandler = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<>
			<div className={styles.controlsContainer}>
				<SearchInput value={searchValue} onChange={onSearchChangehandler} />
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
