---
icon: fas fa-brands fa-wpforms
title: Filtrez roboţii înscrişi în formulare
categories: [formulare]
tags: [formulare,forms,roboti,inwork,novideo]
---

## <i class='fas fa-brands fa-wpforms'></i> Cum filtrez roboţii dintre cei care au completat un formular?

### Metoda uşoară pentru tine - Captcha
Incluzi în formular un câmp de tipul Captcha. Nu l-am folosit până acum.

### Metoda uşoară pentru abonat - prin campanie

1. creezi un formular de campanie
1. adaugi un camp de tip text şi-l legi la câmpul personalizat "Capcana"
1. adaugi clasa mautic-hidden la acest câmp (pentru a nu fi vizibil - astfel persoanele nu-l vor putea completa)
1. creezi o campanie cu condiţia Câmpurile contactului; alegi "Capcana" *nu este* gol? Daca nu este gol, adaugi eticheta Robot.

[//]: # (Comming soon video)

{% include embed/youtube.html id='LMlCN6_vUvs' %}
📺 [Vezi Video](https://www.youtube.com/watch?v=LMlCN6_vUvs)

