---
title: Mautic - Cum să ... ?
date: 
categories: [Cum să?]
tags: [indicii,cum] #tags should always be lowercase
---
## Cum sa?

### Cum sa leg o pagina de o lista?

1. Creezi un formular; vezi aici: Cum creezi un formular legat de o lista?
2. Introduci codul formularului pe pagina; vezi aici: Cum adaugi formularul pe pagina?
3. Poate sunt interesante si:
* Cum modific aspectul formularului?
* Cum sa primesti un email cand cineva completeaza un formular?
* Cum sa trimiti un email la contact dupa ce a completat un formular?

### Cum sa inactivezi contactele dezabonate automat?

Contactele dezabonate de la email raman in campaniile in care sunt si actiunile se executa normal, doar ca emailurile nu vor fi trimise.
Acest lucru se intampla deoarece Mautic poate trimite mesaje nu doar pe email ci si prin sms si alte canale.

Daca doresti ca contactele dezabonate de la email sa fie automat scoase din toate automatizarile, atunci:

=> creezi un segment cu filtru; vezi aici cum: Cum creezi un segment cu toate contactele dezabonate?
=> creezi o campanie cu sursa segmentul de mai sus
=> adaugi 2 actiuni. Prima: scoate din segment si alege doar segmentele statice! Nu alege segmentele cu filtre! Vezi si: Capcana: Actiunea "Inlatura din segment"
=> a doua actiune: inlatura din campanie si alege doar campaniile care nu au ca sursa segmente! Vezi si: Capcana: Actiunea "Inlatura din campania aceasta"

Atunci cand adaugi alte segmente sau campanii, nu uita sa actualizezi actiunile acestei campanii.