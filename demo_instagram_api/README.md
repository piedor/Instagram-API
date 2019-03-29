# Instagram

Instagram è un social network che permette agli utenti di scattare foto, applicarvi filtri, e condividerle in Rete.

# Instagram Api

Le instagram api sono utilizzate dagli sviluppatori per far interagire la propria "applicazione" con il social network instagram.
Di solito vengono usate dalle applicazioni web e per smartphone grazie ai linguaggi di programmazione compatibili come Python, Ruby, PHP, JQuery e Javascript.

## Come usare le instagram api sui siti web

1. Lo sviluppatore deve registrarsi come API client al [sito ufficiale di instagram per sviluppatori](https://www.instagram.com/developer/clients/register/) andare su gestione clienti e inserire cosa richiesto tra qui cosa molto importante il **website url** e il **redirect url** dove io ho inserito **http://127.0.0.1:3000** (spiegherò dopo il perchè).

2. Il sito assegnerà all' API client un **client id** e un **client secret**.

3. L' applicazione per poter interagire con un account instagram deve essere in possesso di un **token**, per generarlo ci sono 4 fasi:

    1. Reindirizzare l'utente all' **Instagram's authorization URL** formato da: https://www.instagram.com/oauth/authorize/?client_id=[CLIENT-ID]redirect_uri=[REDIRECT-URI]&response_type=token, dove CLIENT-ID è l'id dell'API client e REDIRECT-URI (con la i finale) è il redirect url inserito nella registrazione del nuovo API client.

    2. L'utente accede.

    3. Instagram ritorna al redirect url.

    4. Nell'url è stato aggiunto #access_token=[token] dove token è la chiave per poter accedere all'account di instagram dell'utente.

4. In base alla funzionalità richieste bisogna far connettere l'applicazione ai siti elencati sotto sostituendo [TOKEN] con il proprio token, i quali risponderanno con i dati con un testo di tipo **json**:

* **https://api.instagram.com/v1/users/self?access_token=[TOKEN]**: permette di ricevere informazioni sull'account.

* **https://api.instagram.com/v1/users/self/media/recent?access_token=[TOKEN]&count=20**: permette di ricevere 20 post (max 20) più recenti assieme a diverse informazioni per ognuno.

* **https://api.instagram.com/v1/media/[media-id]/comments?access_token=[TOKEN]**: dove [media-id] è l'id di un post dell'utente e permette di ricevere una lista dei commenti più recenti di quel post.

## Funzionalità

1. Prelevare i dati dell'account loggato che sono: id, username, foto profilo, nome completo, descrizione tra qui: biografia, sito web, è un account business o no, e numero di followers, follows, media (foto e video).

2. Prelevare i post più recenti dall'account (max 20) è possibile scegliere la dimensione dell'immagine o del video tra thumbnail, low resolution e standard resolution.

3. Per ogni post è possibile prelevare diverse informazioni che sono: data di caricamento, didascalia, se l'utente ha messo like, numero di like, lista di hashtag (se ci sono), filtro usato, numero di commenti, tipo di post(video, immagine, carousel), posizione e lista utenti taggati.

4. Prelevare una lista di commenti recenti per ogni post.

## Codice

### Node js

Node js è stato utilizzato per eseguire un file js che crea e si mette in ascolto su un server con indirizzo http://127.0.0.1:3000 in locale che ad ogni richiesta invia al client il file index.html.

## Problemi

* A partire dall'11 dicembre 2018 è possibile svolgere solo le funzioni di base (elencate sopra) quindi è necessario utilizzare le instagram graph api(vedi demo_instagram_graph_api)

* Per poter generare il token, tramite l'applicazione, di diversi utenti che non siano solo quelli registrati alla sandbox di un API client è necessario rivisionare i permessi e rispondere a delle domande di utilizzo che verranno poi valutate da instagram.

## Soluzioni 

Per quanto riguarda il secondo problema esistono 2 soluzioni:

1. Fare quanto descritto sopra.

2. Utilizzare un sito che abbia i permessi e fargli accedere l'utente per poi prelevare il token.

## News

E' possibile semplificare l'applicazione utilizzando un plugin in javascript: [instafeed](http://instafeedjs.com/)


