// For browser-side fetching, we'll use a simple fetch API approach
export async function getSheetData(sheetId: string, range: string) {
  try {
    const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${API_KEY}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data.values;
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return null;
  }
}