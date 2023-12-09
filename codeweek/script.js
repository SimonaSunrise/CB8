// Ho importato le funzioni che creano dinamicamnte gli elementi e la funzione per recuperare la fetch

import {
  genEl,
  genBtnEl,
  genCardEl,
  genMainCardContainer,
  genDoneDate,
  genUndoneDate,
} from "./asset/components.js";

import { getFetch } from "./asset/fetch.js";

// Ho dato un valore all'endpoint con la fetch della consegna e assegnato ai dati una costante

const data = await getFetch("https://jsonplaceholder.typicode.com/todos");

// Ho mappato i dati ricevuti dalla fetch inserendo una chiave e un valore randomico

data.map((date) => (date.priority = Math.round(Math.random() * 5)));

// Ho assegnato le funzioni con i rispettivi argomenti a delle costanti

const contenitoreAlta = genMainCardContainer("Appuntamenti ad alta priorità");
const contenitoreMedia = genMainCardContainer("Appuntamenti importanti");
const contenitoreBassa = genMainCardContainer("Appuntamenti a bassa priorità");
const contenitoreDone = genMainCardContainer("Appuntamenti completati");

// Ho assegnato una costante ai vari dati mappati secondo una scala di priorità (>= 4, 2 o 3, < 2 )

const hightPriorityData = data.filter((date) => date.priority >= 4);
const mediumPriorityData = data.filter(
  (date) => date.priority == 3 || date.priority == 2
);
const lowPriorityData = data.filter((date) => date.priority < 2);

// e ho constestualmente: appeso le card di dati al suo contenitore e mappato i dati di ogni array differenziando, in base allo status "completed", il terzo argomento.

hightPriorityData.map((date) => {
  if (date.completed === true) {
    return contenitoreAlta.append(genCardEl(date.id, date.title, "led-on"));
  } else {
    return contenitoreAlta.append(genCardEl(date.id, date.title, "led-off"));
  }
});

mediumPriorityData.map((date) => {
  if (date.completed === true) {
    return contenitoreMedia.append(genCardEl(date.id, date.title, "led-on"));
  } else {
    return contenitoreMedia.append(genCardEl(date.id, date.title, "led-off"));
  }
});
lowPriorityData.map((date) => {
  if (date.completed === true) {
    return contenitoreBassa.append(genCardEl(date.id, date.title, "led-on"));
  } else {
    return contenitoreBassa.append(genCardEl(date.id, date.title, "led-off"));
  }
});

// ho creato una sezione contenente gli elementi da renderizzare
const mainSection = genEl("div");

// ho creato il bottone done/undone che al primo click renderizza gli appuntamenti già completati e al secondo quelli non completati e ne ho aggiunto un altro che li renderizza tutti secondo ordine di priorità come in principio
const btnDone = genBtnEl("Done/Undone");
const btnAll = genBtnEl("See all");

// ho appeso il tutto

mainSection.append(contenitoreAlta, contenitoreMedia, contenitoreBassa);
document.body.append(btnDone, btnAll, mainSection);

// ho creato due costanti con i relativi dai completati o meno e aggiunto un contatore

const undoneData = data.filter((data) => data.completed === false);
const doneData = data.filter((data) => data.completed === true);
let clickTimes = 0;

// non sono riuscita a far funzionare il contatore piu' volte

btnDone.addEventListener("click", () => {
  clickTimes++;

  mainSection.style.display = "none";

  if (clickTimes === 1) {
    doneData.forEach((data) => {
      if (data.completed === true) {
        contenitoreDone.append(genCardEl(data.id, data.title, "led-on"));
      }
    });
  } else {
    undoneData.forEach((data) => {
      if (data.completed === false) {
        contenitoreDone.append(genCardEl(data.id, data.title, "led-off"));
      }
    });
  }
  document.body.append(contenitoreDone);
});

btnAll.addEventListener("click", () => {
  mainSection.style.display = "block";
});
