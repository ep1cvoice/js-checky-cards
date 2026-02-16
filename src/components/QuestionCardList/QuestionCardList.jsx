import QuestionCard from '../QuestionCard';
import styles from './QuestionCardList.module.css';

const QuestionCardList = ({ cards }) => {
	return (
		<div className={styles.cardList}>
			{cards.map((card, index) => {
				return <QuestionCard card={card} key={index} />;
			})}
		</div>
	);
};

export default QuestionCardList;
