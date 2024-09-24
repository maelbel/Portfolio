export async function getMonitors() {

    try {

        const response = await fetch('/api/uptimerobot');
        const data = await response.json();

        // Vérifie si la requête a réussi
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }

        return data;

    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
    }

    return null;
}