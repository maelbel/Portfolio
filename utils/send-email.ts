import { FormData } from '@/components/contact';

export async function sendEmail(formData: FormData) {

  try {

    const response = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    // Vérifie si la requête a réussi
    if (!response.ok) {
      return { type: 'error', msg: `Erreur: ${response.status}`};
    }

    const data = await response.json();

    if(data.error) {
      return { type: 'error', msg: `Erreur ${data.status}: ${data.error}`};
    }

    return { type: 'success', msg: data.message};

  } catch (error) {
    return { type: 'error', msg: `Erreur lors de la récupération des données: ${error}`};
  }
  
}