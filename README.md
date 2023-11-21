# Array Carousel

1. Creo un array contenente i nomi delle immagini e lo salvo in una variabile chiamata `imagesArray`.

2. Creo un for che iteri fino che l'index è < di `imagesArray.length`.

3. Creo un elemento chiamato `element` in cui salvo i `div` creati. Gli aggiungo la classe `item`. Aggiungo con un `innerHTML` le immagini con le varie path delle immagini tramite interpolazione. Appendo l'elemento al DOM tramite una variabile che selezioni l'elemento nell'HTML `items`.

4. Al click dell'utente sulle frecce (di classe prev e next) controllo il valore del `counter`, in base a questo scelgo se aggiungere o rimuovere la classe `active`.

5. Nell'eventListener di prev e next se non si verificano le condizioni di base per entrare nell'if inserisco un else che ci indica che stiamo andando oltre l'ultima immagine per il next o prima della prima immagine nel prev. In tal caso rimuovo la classe `active` resetto il `counter` a 0 per il next e alla lunghezza della NodesList per il prev e aaggiungo la classe active al nuovo valore (di indice `counter`).

6. Nel primo for creo dei `div` che salvo nella variabile `thumbnail` gli inserisco le immagini tramite il metodo `innerHTML` e li appendo al `thumbnailsContainer` e poi all'items che si aggancia al rispettivo `div` già presente nel DOM. Nel prev e nel nex insieme all'aggiunta e alla rimozione della classe active, aggiungo o rimuovo la classe overlay in maniera opportuna, in modo da mostrare l'overlay in tutte le thumnails tranne che in quella attualmente attiva.

7. Creo un ciclo for lungo quanto la lunghezza della Nodes List e inserisco un EventListener che al click cicli per tutta la lunghezza dell'array andando a scorrere la Nodes List contenente le thumbnails. Se trova un source uguale tramite la property `.src` rimuovo la classe active e quella overlay imposto il `counter` = a c (l'indice del mio attuale for) e aggiungo la classe active al nuovo elemento e rimuovo l'overlay.
