import Button from '../Button';

import JSLogo from '../../assets/javascript-logo.svg';
import ReactLogo from '../../assets/react.svg';
import AngularLogo from '../../assets/angular-logo.svg';
import VueLogo from '../../assets/vue-logo.png';
import NodeLogo from '../../assets/nodejs-icon.svg';

import styles from './QuestionCard.module.css';

const QuestionCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.cardLabels}>
				<div className={styles.leftSide}>
					<div>Level: 1</div>
					<div>Not Completed</div>
				</div>

				<img src={ReactLogo} alt='React Logo' />
			</div>

			<h5 className={styles.cardTitle}>Do czego służy React?</h5>

			<div className={styles.cardAnswers}>
				<span>Short Answer:</span>
				<p className={styles.cardParagraph}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
					non?
				</p>
			</div>

			<Button onClick={() => {}}> View </Button>
		</div>
	);
};

export default QuestionCard;
