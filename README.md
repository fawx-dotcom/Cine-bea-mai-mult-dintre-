# Cine bea mai mult dintre?

Aplicație MVP pentru votarea prietenilor care "beau mai mult".

## Funcționalități

1.  **Votare**: Alege dintre două persoane.
2.  **Scoruri**: Punctajele se actualizează în timp real.
3.  **Leaderboard**: Vezi top 10 "însetați".
4.  **Adăugare Candidați**: Adaugă prieteni noi în joc.
5.  **Joc**: Runde de câte 5 voturi, urmate de un sumar.

## Rulare

1.  Instalează dependențele:
    ```bash
    npm install
    ```

2.  Pornește serverul de dezvoltare:
    ```bash
    npm run dev
    ```

3.  Deschide [http://localhost:5173](http://localhost:5173) în browser.

## Notă Tehnică

Pentru acest MVP, datele sunt stocate în `localStorage` (în browserul tău). Pentru a face aplicația cu adevărat globală (partajată între toți utilizatorii), trebuie conectat un backend precum Firebase.

Structura codului (`src/services/CandidateService.js`) este pregătită pentru a fi ușor adaptată la un API extern.
