import QuestionCard from '../../components/QuestionCard';

import styles from './HomePage.module.css';

const cards = [
	{
		id: '1',
		question: 'Что такое React?',
		answer: 'React — это библиотека для создания пользовательских интерфейсов.',
		description:
			'React — это JavaScript-библиотека, разработанная Facebook, которая используется для построения UI с компонентным подходом. React позволяет вам создавать пользовательские интерфейсы из отдельных частей, называемых компонентами.',
		resources: ['https://react.dev', 'https://react.dev/reference/react'],
		level: 1,
		completed: true,
		editDate: '03.02.2025, 19:49',
	},
	{
		id: '2',
		question: 'Czym jest JSX?',
		answer: 'JSX to rozszerzenie składni JavaScript dla Reacta.',
		description:
			'JSX pozwala pisać kod podobny do HTML w JavaScript, który następnie jest transpilowany do wywołań `React.createElement`. Ułatwia to tworzenie i wizualne przedstawienie struktury komponentów.',
		resources: ['https://react.dev/learn/writing-markup-with-jsx'],
		level: 2,
		completed: false,
		editDate: '03.02.2025, 20:25',
	},
	{
		id: '3',
		question: 'Jaka jest główna zasada działania Reacta?',
		answer: 'React wykorzystuje Virtual DOM do optymalizacji renderowania.',
		description:
			'React opiera się na koncepcji Virtual DOM — jest to reprezentacja rzeczywistego DOM w pamięci. Gdy stan komponentu się zmienia, React porównuje Virtual DOM z jego poprzednim stanem i aktualizuje na stronie tylko zmienione elementy.',
		resources: ['https://react.dev/learn/render-and-commit'],
		level: 2,
		completed: false,
		editDate: '03.02.2025, 19:01',
	},
];

const HomePage = () => {
	return (
		<>
			{cards.map((card, index) => {
				return <QuestionCard card={card} key={card.id} />;
			})}
		</>
	);
};

export default HomePage;
