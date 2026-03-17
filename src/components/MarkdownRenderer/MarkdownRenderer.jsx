import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ content }) => {
	if (!content || typeof content !== 'string') return null;

	return (
		<ReactMarkdown>
			{content}
		</ReactMarkdown>
	);
};

export default MarkdownRenderer;