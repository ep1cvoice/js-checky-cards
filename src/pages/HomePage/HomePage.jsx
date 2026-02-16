import { useState, useEffect } from 'react';
import { API_URL } from '../../constants';
import QuestionCard from '../../components/QuestionCard';
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
			{questions.map((card, index) => {
				return <QuestionCard card={card} key={index} />;
			})}
		</>
	);
};

export default HomePage;
