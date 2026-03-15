export const dateFormat = (date) => {
    return Intl.DateTimeFormat('en-EN', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
};