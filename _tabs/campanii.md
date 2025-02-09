---
icon: fas fa-clock
categorie: [campanii]
order: 7
---

## <i class='fas fa-clock'></i> Campanii / Automatizări
Specific la Mautic este: campaniile care au deja contacte în ele nu pot fi modificate.

De fapt ele pot fi modificate, dar este foarte recomandat să nu o faci, sau să te limitezi doar la unele puţine schimbări.

### Cum creez o campanie ce trimite o serie de 5 emailuri?
Presupunem că ai:
* 5 emailuri pe care le poţi deja trimite ca o serie de emailuri
  * sunt deja create în Mautic
* un formular (sau mai multe) prin care oamenii se pot înscrie să primească emailurile
* un segment în care vei adăuga contactele cât timp primesc emailurile (numit spre ex SerieEmailuri)

Dacă ai cele de sus, atunci în acest moment poţi crea campania:
1. Ca sursă alegi formularul (sau formularele)
1. Poţi înlătura roboţii şi cei cu adrese de email invalide
1. Verifică dacă este deja înscris să primească seria de emailuri
   * asta este o condiţie: _Verifică segmentul_ şi alege segmentul în care ar trebui să fie contactele care primesc seria de emailuri
   * dacă primeşte deja seria de emailuri, atunci îi poţi trimite un email cu "Eşti deja înscris" şi atât. **Nu-l scoţi din campanie** deoarece el este în campanie deja şi dorim să rămână.
1. Îl adaugi în segmentul corespunzător. Alternativ îi adaugi şi o etichetă (spre ex SerieEmailuri).
1. Adaugi acţiunile de trimitere a emailurilor.
1. La final adaugi o acţiune de modificare a segmentelor şi scoţi contactul din segment.
1. Înlătură contactul explicit din campanie, deoarece el a fost adăugat în campanie de formular.

Şi poţi publica campania, ca oamenii să se înscrie şi să primească emailurile.

### Cum extind seria de emailuri cu alte emailuri?
Campania originală care trimite seria de emailuri rămâne neschimbată! **Este important!**

Creezi un segment nou (numit spre ex SerieEmailuri02) şi o campanie nouă:
1. Ca sursă alegi segmentul nou creat
1. Adaugi acţiunile de trimitere a emailurilor noi.
1. La final adaugi o acţiune de modificare a segmentelor şi scoţi contactul din segment.
1. Important: nu înlătura contactul explicit din campanie, deoarece el a fost adăugat în campanie de segment şi la pasul anterior îl scoatem din segment => implicit va fi scos şi din campanie.

Poţi publica campania şi o poţi testa.

Încă un pas este necesar!

În campania care trimite primele emailuri, este nevoie să modificăm penultima acţiune care scoate contactul din segment. Aici va fi nevoie să-i spunem să-l şi adauge la segmentul nou.

### Cum trimit următoarele emailuri din serie la cei care au parcurs prima serie de emailuri?
Aici este nevoie ca prim pas să identificăm contactele "care au parcurs prima serie de emailuri". Dacă ai adăugat o etichetă acestor contacte, atunci îi putem identifica astfel:
1. creez un segment folosind acest filtru
1. are eticheta "SerieEmailuri" (sau numele care l-ai dat tu etichetei)
1. nu este in segmentul "SerieEmailuri" (este nevoie ca aceste contacte să nu fie încă în prima serie de emailuri ci să fi terminat deja seria)

Aştepţi să se populeze segmentul.

Apoi pe aceştia îi adaugi în segmentul SerieEmailuri02.
* dacă sunt sub 100 de contacte: vezi aici
* dacă sunt peste 100 de contacte, vezi aici

Imediat ce s-a terminat operaţia, poţi şterge segmentul cu filtru.

### Cum modific o campanie în care sunt deja contacte?
Acţiunile în sine ale unei campanii le poţi modifica, adică:
* poţi specifica alt email să fie trimis
* poţi spune ca un email să fie trimis la altă oră
* poţi specifica altă etichetă să fie adăugată sau înlăturată
* poţi specifica ca contactul să fie adăugat la alt segment
* poţi schimba linkul din condiţia care verifică vizitarea unui link

Ceea ce să **NU** faci este:
* să nu adaugi acţiuni în plus, nici condiţii, nici decizii
* să nu ştergi acţiuni, nici condiţii, nici decizii
* nici traseul printre ele, adică ordinea de executare

#### Dar cum poate fi "modificată" o campanie în care sunt deja contacte?

##### Dacă sursa campaniei este un formular (sau mai multe)
1. Faci o clonă a campaniei originale - poţi adăuga un "-2" la nume.
1. Modifici campania "-2" aşa cum doreşti, dar **înainte de a o salva**:
   1. nu publica campania
   1. neaparat este nevoie **să modifici sursa** campaniei să fie un formular nefolosit
   1. acum poţi publica campania
   1. şi o poţi testa
1. Preferabil: alegi un moment în care nu se înscriu persoane
1. Modifici sursa campaniei originale să fie un formular nefolosit => salvezi campania
1. Imediat modifici sursa campaniei "-2" pentru ca să fie formularele care erau folosite pentru campania originală

Gata:
* pentru contactele care sunt deja în campania originală, se vor executa toate acţiunile din campania respectivă
* contactele noi vor intra în campania nouă şi vor fi executate noile acţiuni

##### Dacă sursa campaniei este un segment (sau mai multe)
Tot în ideea de mai sus este nevoie de gândit, doar că va fi nevoie să clonăm şi segmentul.

### Capcană: Acţiunea "Înlatură din campania aceasta"

Se aplica atunci cand: campania sursei este un segment cu filtru.

Urmarile pot fi nasoale: se mareste baza de date fara limita. Rezolvarea cea mai simpla si rapida este: sa reinstalezi o copie de rezerva din ziua in care Mautic functiona normal.

**Suntem in aceasta situatie cand:**
1. avem un segment cu filtru - deci segmentul va aduna contacte ca urmare a unui filtru definit in segment
2. avem o campanie care are ca sursa segmentul - deci pentru fiecare contact care este in segment, va porni si campania
3. in campanie avem actiunea "inlatura din campania aceasta" - DAR contactul fiind inca in segment, contactul va fi adaugat imediat din nou in campanie

La 2 si 3 este o bucla infinita: contactul este adaugat in campanie, apoi este inlaturat si de la capat.

Daca intre 2 si 3 nu este nici o perioada de asteptare, atunci actiunile acestea se vor produce la fiecare minut.

> Faptul că se execută nu este în sine greşit, ci faptul că toate aceste acţiuni se salvează în istoricul contactului şi al campaniei. În acest fel mărimea bazei de date creşte. Cu cât sunt mai multe contacte în segment, cu atât mai repete creşte mărimea bazei de date.
{: .prompt-tip }

**Ce s-a intamplat in cazul meu concret**
* conform unui filtru intrau contactele intr-un segment
* in campanie aveam cateva conditii si actiuni
* logica conditiilor avea un bug, astfel ca a fost un moment in care prima conditie era falsa si a doua era falsa si duceau la actiunea inlatura din campanie
* si imediat ce contactul intra in campanie, cele 2 conditii erau din nou false, astfel ca era din nou inlaturat din campanie
* si contactul fiind inca in segment, era adaugat din nou la campanie
* si pana la actiunea "inlatura din campanie" erau 2 conditii si vreo 5 alte actiuni
* si in segment erau cam 300 de contacte
* numarul de evenimente pentru fiecare contact: cel putin 9 (adica: adauga in campanie, cele 2 conditii + cele 8 actiuni, apoi inlatura din campanie)
* numarul de evenimente inregistrate pe minut pentru cele 300 de contacte: 9 x 300 = 2.700 evenimente / minut = 162K evenimente pe ora = 3.8M evenimente pe zi
* am observat acest lucru dupa ca. 36 de ore, deci ca. 5.8M evenimente in total adaugate in baza de date
* serverul era ocupat foarte mult cu optimizarea bazei de date. Si folosea cele 2 CPU ale serverului. Nu mai puteam executa nimic din Mautic.
* rezolvarea a fost: am restabilit o copie de rezerva care avea inca marimea normala, insemnand ca pe la inceputul caderii serverului. Am oprit campania si am modificat-o pentru a evita situatia. Si a fost ok.

Inca de adaugat: Cum descoperi daca ai deja contacte cu aceeasi adresa de email?

### Capcană: Acţiunea "Înlatură din segment"

Se aplica atunci cand: segmentul are filtru.

### Capcană: Modific paşii campaniei în care sunt contacte
Urmarea este: contactele se blochează în campanie, în funcţie de pasul la care se află şi ce anume modificăm în campanie.

### Capcană: Las paşi neconectaţi în campanie
Toţi paşii neconectaţi vor fi executaţi imediat ce contactul intră în campanie.




