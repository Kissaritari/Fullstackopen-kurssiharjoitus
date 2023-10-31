Koko fullstack open 2. kappale, paitsi se sääjuttu ku en mä sitä saa toimimaan

tiedostoista
kansiossa "lipputehtävä\lippujuttu" on tehtynä se 2.18-2.19, 2.20 en tajunnut miten se api-key laitetaan

Puhelinluettelotehtävä

Tehtävissä sai tehdä aika paljon. Tiedoston poisto sekä databasesta että visuaalisesta sivusta oli yllättävän vaikeaa, mutta onnistui lopulta.

puhelinluettelosovellus koostuu perus app.jsx osasta, ja siihen liitetään komponentteina lisäys, lista, filtteröinti ja ilmoitus. Myös axios-osuudet ovat omana tiedostonaan.

app.jsx sisältää ainoastaan tarvittavat usestatet tiloille, ja useeffectin jolla haetaan alustavat henkilötiedot tietokannasta.  Myös tiedon poistamiseen käytettävä remove-metodi on tehty tähän suoraan, sillä se ei jostain syystä toiminut ollessaan eri tiedostossa. Viimeisenä app.jsx sisältää return-funktion, jossa luodaan koko sovellus eri palasista.

Komponenntti addperson sisältää kentät uuden henkilön lisäämiseen: nimen ja numeron. Näiden täytyttyä addperson-metodi tarkistaa onko käytetty numero jo tietokannassa. Jos ei, siirrytään tarkastelemaan nimeä. Jos myös nimi on uusi, yhteystieto lisätään tietokantaan. Jos nimi löytyy jo, kysytään käyttäjältä halutaanko tieto päivittää. Lopussa return-funktio palauttaa visuaalisen komponentin.

Filtteri-komponentti sisältää käytännössä vain filtteröintiin tarvitavan html-elementin, kuten myös notification sisältää ilmoitukseen tarvittavan elementin.

Lista.jsx komponentti luo listan henkilöistä, jotka sille annetaan.

Lipputehtävä 

Lippu/valtio tehtävälle jäi kovin vähän aikaa, koska se piti aloittaa kokonaan alusta, eikä vain jatkettu edellistä. Paljon piti siis katsoa mallia muilta internetistä. Vaikka mallia on katsottu, niin tärkeintä on silti ymmärtää käyttämäänsä koodia; suoraa lainattu ei välttämättä toimi, etenkään omassa ohjelmassa. 
Kuten mainittu, sää-api ei ehtinyt mukaan... : /

Backend

Backend valmistui viimeisenä. En ehtinyt ihan saada sitä toimimaan, vaikka periaatteessa kaikki osaset on jo paikoillaan.