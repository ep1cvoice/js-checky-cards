import { useNavigate } from 'react-router-dom';
import { useId, useState } from 'react';

import Button from '../../components/Button';
import Badge from '../../components/Badge';

import JSLogo from '../../assets/javascript-logo.svg';
import ReactLogo from '../../assets/react.svg';
import AngularLogo from '../../assets/angular-logo.svg';
import VueLogo from '../../assets/vue-logo.png';
import NodeLogo from '../../assets/nodejs-icon.svg';

import { Pencil, ArrowLeft } from "lucide-react";
import styles from './QuestionPage.module.css';

const QuestionPage = () => {
	const card = {
		id: '1',
		category: 'react',
		question: 'Czym jest React?',
		answer: 'React to JS biblioteka do tworzenia interfejsów użytkownika.',
		description:
			'React to biblioteka JavaScript opracowana przez Facebook, która jest używana do budowania interfejsów użytkownika w oparciu o podejście komponentowe. React pozwala tworzyć interfejsy użytkownika z oddzielnych części nazywanych komponentami.',
		resources: ['https://react.dev', 'https://react.dev/reference/react'],
		level: 1,
		completed: true,
		editDate: '03.02.2025, 19:49',
	};

	const navigate = useNavigate();

	const checkboxId = useId();
	const [isChecked, setIsChecked] = useState(false);

	const onCheckBoxChangeHandler = () => {};

	const categoryIcons = {
		react: ReactLogo,
		javascript: JSLogo,
		angular: AngularLogo,
		vue: VueLogo,
		node: NodeLogo,
	};

	const levelMap = {
		1: 'primary',
		2: 'warning',
		3: 'alert',
		4: 'danger',
	};

	const levelOption = levelMap[Number(card.level)] || 'primary';

	const completedOption = card.completed ? 'success' : 'primary';

	return (
		<div className={styles.container}>
			<div className={styles.cardLabels}>
				<div className={styles.leftSide}>
					<Badge option={levelOption}>
						<div>Level: {card.level}</div>
					</Badge>
					<Badge option={completedOption}>
						<div>{card.completed ? 'Completed' : 'Not Completed'}</div>
					</Badge>

					{card?.editDate && <p className={styles.editDateInfo}>last edited: {card.editDate}</p>}
				</div>

				<img src={categoryIcons[card.category]} alt={`${card.category}`} />
			</div>

			<h5 className={styles.cardTitle}>{card.question}</h5>
			<p className={styles.cardDescription}>{card.description}</p>

			<div className={styles.cardAnswers}>
				<span>Short Answer:</span>
				<p className={styles.cardParagraph}>{card.answer}</p>
			</div>

			<ul className={styles.cardLinks}>
				Links:
				{card.resources.map((link, index) => {
					return (
						<li key={index}>
							<a href={link.trim()} target='_blank' rel='noreferrer'>
								{link.trim()}
							</a>
						</li>
					);
				})}
			</ul>

			<label htmlFor={checkboxId} className={styles.checkboxWrapper}>
				<input
					type='checkbox'
					id={checkboxId}
					className={styles.checkbox}
					checked={isChecked}
					onChange={onCheckBoxChangeHandler}
					disabled={false}
				/>
				<span>mark question as completed</span>
			</label>

			<div className={styles.buttonsContainer}>
				<Button onClick={() => navigate(`/`)}> <ArrowLeft size={18} /> Go Back </Button>
				<Button onClick={() => navigate(`/`)}><Pencil size={18} /> Edit Card </Button>
			</div>
		</div>
	);
};

export default QuestionPage;
