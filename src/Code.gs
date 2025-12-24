// AQUEST ÉS EL FITXER "Code.gs"
const SPREADSHEET_ID = '1sWr1kLoOOMNnt6WQY-MivJj4xAv8I_p4TXV1Dm_q5o8';


function doGet(e) {
  return HtmlService.createTemplateFromFile('index')
      .evaluate()
      .setTitle('Estudi sobre percepció visual')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function saveData(data) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheets()[0];
    
    // 1. DEFINIM L'ORDRE EXACTE DE LES COLUMNES (LLISTA MESTRA)
    const HEADERS = [
      'timestamp',            // Data i hora
      'id_participant',
      'grup_experimental',    // A1, B1, A2, B2
      
      // --- SECCIÓ 2: DEMOGRÀFIQUES ---
      's2_edat',
      's2_sexe',
      's2_estudis',
      's2_ideologia',
      
      // --- SECCIÓ 2: PRE-TEST (OPINIÓ INICIAL) ---
      's2_likert_educacio1',
      's2_likert_educacio2',
      's2_likert_immi1',
      's2_likert_immi2',
      
      // --- SECCIÓ 4: POST-TEST ---
      's4_comprensio',         // Pregunta factual
      's4_percep_claredat',    // Claredat visual
      's4_percep_confianca',   // Confiança (NOVA)
      's4_percep_paraules',    // 3 paraules
      's4_post_item1',         // Opinió final 1
      's4_post_item2',         // Opinió final 2
      
      // --- SECCIÓ 5: MEMÒRIA ---
      's5_record_tema',
      's5_record_visual'
    ];

    // 2. Si el full està buit, creem la capçalera
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    // 3. MAPEGEM LES DADES REBUDES A L'ORDRE DE LES COLUMNES
    // Això evita que es barregin si l'ordre de l'objecte canvia
    const newRow = HEADERS.map(header => {
      if (header === 'timestamp') {
        return new Date(); // Afegim la data automàticament
      }
      // Retornem la dada o un text buit si no existeix
      return data[header] || ''; 
    });
    
    // 4. GUARDEM LA FILA ORDENADA
    sheet.appendRow(newRow);
    
    return "Èxit";
    
  } catch (e) {
    Logger.log(e);
    return "Error: " + e.message;
  }
}
