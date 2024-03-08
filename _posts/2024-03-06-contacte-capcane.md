---
icon: fas fa-user
title: Capcane la gestionarea contactelor
categories: [contacte]
tags: [contacte,contacts,capcane,inwork,novideo]
---

### <i class='fas fa-user'></i> Capcana: Contacte cu aceeaşi adresă de email!

Se aplică atunci când: *adăugăm manual un contact*.

Contactele adăugate prin formulare nu se vor duplica. Manual însă putem să creăm mai multe contacte cu aceeaşi adresă de email. Mautic ne va atenţiona de acest lucru, dar ne va lăsa totuşi să creăm contactul.

> Evită să adaugi încă un contact cu o adresă de email care există deja în baza de date! Pot apare probleme la actualizarea Segmentelor cu anumite filtre.
{: .prompt-tip }

Ce s-a întâmplat în cazul meu concret, în care erau 2 contacte cu aceeaşi adresă de email:
* funcţia de actualizare a segmentelor pentru segmentul cu un anumit filtru a intrat într-o execuţie infinită
* asta a însemnat că alte acţiuni nu se mai executau (procesarea campaniilor, trimiterea emailurilor...)
Rezolvare: am şters unul din contacte şi funcţia s-a executat cu succes. Nu a fost nevoie să fac altceva.

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)

### <i class='fas fa-user'></i> Cum descopăr dacă sunt deja contacte cu aceeaşi adresă de email?
Folosind mysql:

```sql
SELECT email, COUNT(email) 
FROM leads 
WHERE email IS NOT NULL AND email != '' 
GROUP BY email 
HAVING COUNT(email) > 1;
```

[Mautic 5 vine cu o comandă rapidă pentru deduplicare](https://forum.mautic.org/t/how-did-happened-duplicate-contact/24575/30)
