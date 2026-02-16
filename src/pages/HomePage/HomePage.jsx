import { useState, useEffect } from 'react';
import { API_URL } from '../../constants';
import QuestionCardList from '../../components/QuestionCardList';
import Button from '../../components/Button';
import styles from './HomePage.module.css';

const HomePage = () => {
	const [questions, setQuestions] = useState([]);

	const getQuestions = async () => {
		try {
			const response = await fetch(`${API_URL}/react`);
			const data = await response.json();

			setQuestions(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getQuestions();
	}, []);

	return (
		<>
			<QuestionCardList cards = {questions}/>
		</>
	);
};

export default HomePage;
