const API_URL = "http://localhost:8800";

export const createCard = async (newQuestion) => {
	const response = await fetch(`${API_URL}/checkycards`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(newQuestion),
	});

	if (!response.ok) {
		throw new Error("Failed to create card");
	}

	return response.json();
};