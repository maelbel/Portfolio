import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    if(request.method !== "GET") return NextResponse.json({ error: 'Method Not Allowed, use POST' }, { status: 500 });
    
    const apiKey = process.env.UPTIMEROBOT_API_KEY;
  
    if (!apiKey) {
        return NextResponse.json({ error: 'API Key is not defined' }, { status: 500 });
    }
  
    try {
        const response = await fetch('https://api.uptimerobot.com/v2/getMonitors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: apiKey,
                format: 'json',
            }),
        });
    
        // Vérifie si la réponse est OK (statut entre 200 et 299)
        if (!response.ok) {
            return NextResponse.json({ error: response.statusText }, { status: response.status });
        }

        // Tente de parser la réponse en JSON seulement si elle n'est pas vide
        const text = await response.text(); // Récupère la réponse en tant que texte
        if (text) {
            const data = JSON.parse(text); // Parse seulement si le texte n'est pas vide
            return NextResponse.json(data);
        } else {
            return NextResponse.json({ error: 'No content in response' }, { status: 204 });
        }

    } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
        return NextResponse.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 });
    }
  }