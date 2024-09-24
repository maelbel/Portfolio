export async function getMonitors() {

    try {

        const response = await fetch('https://api.uptimerobot.com/v2/getMonitors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({
                api_key: process.env.NEXT_PUBLIC_UPTIMEROBOT_API_KEY,
                format: 'json',
            }),
        });
        const data = await response.json();

        // Vérifie si la requête a réussi
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }

        console.log(data);

        return data;

    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }

    return null;
}