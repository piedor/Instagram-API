## All methods to implement instagram in your website (2019)

### Use instagram API (ufficial from instagram)

#### Pro

* Get Information user logged

* Get media logged user (max 20)

* Get media information (such as n. comments, likes, hashtags exc..)

* Get list of comments of each media

#### Con

* Can't search public content or users

* Can't get more than 20 media of logged user

* Can't get the media created after 2020

### Use instagram graph API (ufficial from facebook)

#### Pro

* You can do everything you could do with instagram api before December 11, 2018

#### Con

* You must have a instagram and facebook business account

* You must have a lot of permissions from facebook by submit your app many times for review

### Use instagram web API (are used in ufficial web site instagram)

#### Pro

* Get public media by hashtag and location id without login

* Get public users and who you follow

* All functions provided by the instagram website

#### Con

* to be defined

## Riepilogo settimane stage

### Settimana 1

Progetti modificati: demo_instagram_api.

Trovare soluzioni per interfacciare instagram con i siti web in particolare approfondire le instagram api.
Le instagram api permettono poche funzionalità infattono non permettono di ricercare contenuti pubblici ma soltanto di visualizzare informazioni e post del profilo loggato.

### Settimana 2

Progetti modificati: instagram_widget_d40.

Implementare un esempio per la demo di destinazione 4.0 in cui l'utente possa creare un widget di instagram, loggarsi e scegliere dalle foto del suo account quali far vedere all'interno di esso. Sono sufficienti le instagram api.
Inoltre gli url delle immagini e il token dovranno essere memorizzati nel local storage del browser.

### Settimana 3

Progetti modificati: instagram_widget_d40, demo_instagram_graph_api, demo_instagram_web_api.

Permettere all'utente nel widget di instagram di ricercare le foto per hashtag e di filtrarle per numero di commenti e like.
Creare un plugin in javascript che utilizzi le instagram web api, queste infatti consentono di visualizzare contenuti pubblici.
Implementare le instagram graph api.

