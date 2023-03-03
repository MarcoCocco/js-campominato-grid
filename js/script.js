/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 
*/

// Collego gli elementi del DOM
let startButtonEl = document.getElementById('start-button');
let gridEl = document.getElementById('grid');
let difficultEl = document.getElementById('difficult');

// Aggiungo una variabile sentinella che indica se la griglia sia già stata generata, e la inizializzo su false
let gridGen = false;

// Evento che gestisce la difficoltà, al click resetta i parametri nascondendo la griglia e svuotando il suo contenuto, aggiornando la variabile sentinella in false, qualora ci fosse una griglia attiva
difficultEl.addEventListener('click', function () {
    gridEl.style.display = 'none';
    gridEl.innerHTML = '';
    gridGen = false;
});

// Evento che gestisce il pulsante start
startButtonEl.addEventListener('click', function () {

    // Dopo l'avvio viene mostrato il contenitore della griglia
    gridEl.style.display = 'flex';

    // A seconda del livello selezionato, il numero di quadrati della griglia cambia, richiamando dentro un ciclo for la funzione che crea un quadrato, inserendolo dentro il contenitore della griglia
    if (difficultEl.value === '1') {

        if (!gridGen) {

            for (let i = 1; i <= 100; i++) {

                let squareEl = createSquare('', 10, 10);

                gridEl.append(squareEl);
                squareEl.addEventListener('click', function () {

                    // Evento che gestisce il clic sulla casella, mostrando in console il rispettivo numero
                    squareEl.classList.toggle('active');
                    console.log(i);

                });
            }

            // Aggiorna la variabile sentinella, mostrando che la griglia è stata creata
            gridGen = true;
        }

    } else if (difficultEl.value === '2') {

        if (!gridGen) {

            for (let i = 1; i <= 81; i++) {

                let squareEl = createSquare('', 9, 10);

                gridEl.append(squareEl);
                squareEl.addEventListener('click', function () {

                    squareEl.classList.toggle('active');
                    console.log(i);

                });
            }

            gridGen = true;

        }

    } else if (difficultEl.value === '3') {

        if (!gridGen) {

            for (let i = 1; i <= 49; i++) {

                let squareEl = createSquare('', 7, 10);

                gridEl.append(squareEl);
                squareEl.addEventListener('click', function () {

                    squareEl.classList.toggle('active');
                    console.log(i);

                });
            }

            gridGen = true;

        }

    }




});

// La funzione mi permette di creare un quadrato dalla grandezza variabile in base al numero di colonne utilizzate nella griglia e il gap dato
function createSquare(squareNum, colNum, gap) {

    let square = document.createElement('div');

    square.style.width = `calc(100% / ${colNum} - ${gap}px)`;
    square.style.height = `calc(100% / ${colNum} - ${gap}px)`;
    square.style.textAlign = 'center';
    square.classList.add('square');
    square.textContent = squareNum;

    return square;
}



