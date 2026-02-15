import Button from '../Button';

import JSLogo from '../../assets/javascript-logo.svg';
import ReactLogo from '../../assets/react.svg';
import AngularLogo from '../../assets/angular-logo.svg';
import VueLogo from '../../assets/vue-logo.png';
import NodeLogo from '../../assets/nodejs-icon.svg';

import styles from './QuestionCard.module.css';
import { useNavigate } from 'react-router-dom';

const QuestionCard = ({ card }) => {
	const navigate = useNavigate();

	return (
		<div className={styles.card}>
			<div className={styles.cardLabels}>
				<div className={styles.leftSide}>
					<div>Level: {card.level}</div>
					<div>{card.completed ? 'Completed' : 'Not Completed'}</div>
				</div>

				<img src={ReactLogo} alt='React Logo' />
			</div>

			<h5 className={styles.cardTitle}>{card.question}</h5>

			<div className={styles.cardAnswers}>
				<span>Short Answer:</span>
				<p className={styles.cardParagraph}>{card.answer}</p>
			</div>

			<Button onClick={() => navigate(`/question/${card.id}`)}> View </Button>
		</div>
	);
};

export default QuestionCard;
