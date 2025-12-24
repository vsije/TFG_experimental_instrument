# TFG_experimental_instrument
Instrument Experimental per al TFG "Realitats construïdes". Aplicació web (GAS/JS) per a avaluar l'impacte del disseny de visualitzacions en l'opinió i memòria. Implementa un disseny factorial 2x2, arquitectura serverless i protocols de Privacy by Design per a garantir l'anonimat i la integritat científica.

# Realitats construïdes: anatomia del disseny de visualitzacions en l'era de la postveritat

Aquest repositori conté el codi font de l'**Instrument Experimental** desenvolupat per al Treball de Final de Grau (TFG) de Ciència de Dades (UOC).

## Descripció del Projecte
L'instrument és una aplicació web *ad-hoc* dissenyada per avaluar la interacció entre el disseny de visualitzacions de dades i els processos cognitius d'opinió i memòria. Mitjançant un disseny factorial 2x2, l'eina assigna aleatòriament els participants a diferents estímuls visuals per mesurar l'impacte de la manipulació gràfica en la percepció de la realitat.

## Stack Tecnològic
* **Backend:** Google Apps Script (V8 Engine) - Arquitectura *Serverless*.
* **Frontend:** HTML5, CSS3 (Flexbox/Grid) i JavaScript (ES6).
* **Base de Dades:** Google Sheets API per a la persistència de dades.
* **Optimització:** Codificació Base64 (Data URI) per a la injecció instantània d'estímuls visuals.

## Estructura del Repositori
* `/src`: Codi font original de l'aplicació.
  * `Code.gs`: Controlador del servidor i gestió de persistència.
  * `index.html`: Estructura de la interfície i disseny *responsive*.
  * `JavaScript.html`: Lògica d'aleatorització estocàstica i validacions.
  * `Imatges.html`: Repositori d'actius visuals en format text (Base64).
* `/assets`: Estímuls visuals (gràfics) utilitzats en les quatre branques experimentals.

## Privadesa i Ètica (Privacy by Design)
L'instrument ha estat programat seguint els principis del RGPD:
* **Anonimat tècnic:** No es recullen correus electrònics, IPs ni identificadors de sessió de Google.
* **Consentiment informat:** Bloqueig tècnic d'accés fins a l'acceptació de les condicions.
* **Dret al desistiment:** Arquitectura SPA que només envia dades en la confirmació final.

## Autoria
* **Autora:** Victòria Toribio Ruisoto
* **Tutor/a:** Xavier Florit
* **Institució:** Universitat Oberta de Catalunya (UOC)
* **Data:** Desembre 2025

---
*Aquest projecte s'ha realitzat amb finalitats exclusivament acadèmiques dins del marc del Grau de Ciència de Dades.*
