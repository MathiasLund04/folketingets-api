## Folketingets-api
Denne opgave er en lille api der lokalt indeholder en liste over aktive ministre. Man kan se aktive ministre, tilføje en ny, redigere i den eksisterende liste samt fjerne en minister.

## Opstart
For at hente listen over ministre, skal man oprette en MongoDB database med databasenavnet ’folketinget’ og collection-navnet ’ ministers’ , derefter køres ’folketingsData’ under ’data’.
Serveren startes ved at køre programmet fra app.js, hvor det bliver kørt lokal på ens egen computer med porten 3000.

## Endpoints
Her ses en liste over tilgængelige endpoints til dette system
| Endpoint        | Funktion           | 
| ------------- |:-------------:| 
|GET http://localhost:3000/api/ | Hent alle ministre |
|POST http://localhost:3000/api/ | Tilføj ny minister      | 
|GET http://localhost:3000/api/:id | Hent en specifik minister |
|PUT http://localhost:3000/api/:id | Opdater en nuværende minister |
|DELETE http://localhost:3000/api/:id| Fjern en nuværende minister |

## MongoDB og Mongoose
For at kunne gemme på dataen, bruges der MongoDB som database til at gemme disse ministre. Vi opretter forbindelse til databasen i app.js og snakker med databasen gennem ’ministreController’ og modellen ’minister’. 
I modellen oprettes der et schema for hvordan json skal se ud i databasen. 
Controlleren bruger derfra modellen til at kunne hente og ændre på dataen, gennem de forskellige funktioner controlleren indeholder.

## RESTful API
Grundet mangel på ekstern api til ministre i DK, fungerer dette system kun lokalt og leder ikke efter aktive partier/partimedlemmer med en anden api.

## Test
Der er blevet testet i Postman med alle de forskellige endpoints. Postman kan ses under ’Tests/Postman’

