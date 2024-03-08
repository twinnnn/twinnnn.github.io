---
icon: fas fa-brands fa-wpforms
title: Cum filtrez roboţii înscrişi prin formulare
categories: [formulare]
tags: [formulare,forms,roboti,captcha,inwork,novideo]
redirect_from: "/2024-03-08-formulare-captcha/"
---

## <i class='fas fa-brands fa-wpforms'></i> Cum filtrez roboţii înscrişi prin formulare?
Pentru ca să filtrez roboţii înscrişi prin formulare, putem folosi **Captcha** - o numim **metoda uşoară pentru tine**:

_Dezavantajul_ este: Captcha reprezintă o piedică în plus procesului de abonare şi este posibil ca unele persoane să nu termine procesul.

_Avantajul_ este: cu cât abonaţii depăşesc mai multe piedici la înscriere, cei care totuşi se înscriu vor fi tot mai dedicaţi.

> Vezi alternativa de filtrare a roboţilor, fără a pune o piedică în plus abonaţilor.
{: .prompt-tip }

Îţi recomand să foloseşti **metoda uşoară pentru abonat**:

_Dezavantajul_ este: nu poate fi implementată doar prin formular, ci este nevoie şi de o campanie. Totuşi cam mereu contactele intră intr-o campanie după completarea unui formular => aşa că n-ar fi niciun dezavantaj.

_Avantajul_ este: nu este nevoie ca persoanele să completeze ceva în plus faţă de informaţiile de care te foloseşti.

### Metoda uşoară pentru tine - Captcha
Includem în formular un câmp de tipul Captcha şi ar trebui să-şi facă singur treaba. Eu nu l-am folosit până acum, aşa că prea multe detalii nu pot oferi.

### Metoda uşoară pentru abonat - prin campanie

1. Creăm un nou formular de campanie (alege verde):

    ![1. Creăm un nou formular de campanie](/assets/img/2024-03-08-formular-adaug.png){: w='601' h='359' .shadow .rounded-10 }

2. Adăugăm un câmp de tip ```text``` cu următoarele valori:

    ![2a. Câmp de Text - Tabul General](/assets/img/2024-03-08-formular-capcana-1general.png){: w='601' h='467' .shadow .rounded-10 }

3. Legăm câmpul nou la câmpul personalizat "Capcana" din contact

    ![2b. Câmp de Text - Tabul Câmp Contact](/assets/img/2024-03-08-formular-capcana-2camp-contact.png){: w='602' h='271' .shadow .rounded-10 }

4. Facem să nu fie necesar de completat

    ![2c. Câmp de Text - Tabul Validare](/assets/img/2024-03-08-formular-capcana-3validare.png){: w='602' h='309' .shadow .rounded-10 }

5. Adaugă textul ```class="mauticform-field-hidden"``` la ```Atributele containerului câmpului``` din tabul ```Atribute``` (pentru a nu fi vizibil pe pagină - astfel persoanele reale nu-l vor putea completa, iar roboţii îl vor vedea şi-l vor completa).

    ![2d. Câmp de Text - Tabul Atribute](/assets/img/2024-03-08-formular-capcana-4atribute.png){: w='602' h='379' .shadow .rounded-10 }

6. Facem să nu fie completat automat

    ![2e. Câmp de Text - Tabul Comportament](/assets/img/2024-03-08-formular-capcana-5comportament.png){: w='602' h='310' .shadow .rounded-10 }

7. Creăm o campanie cu condiţia ```Câmpurile contactului```, alegem ```Capcana``` **nu este gol***? Daca nu este gol, adaugăm eticheta Robot, îl dezabonăm şi-l scoatem din campanie.

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)

