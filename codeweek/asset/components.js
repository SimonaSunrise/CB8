import { getFetch } from "./fetch.js";

const genEl = (type) => document.createElement(type);

const genBtnEl = (text) => {
  const btnContainerEl = genEl("div");
  const doneUndoneBtnEl = genEl("button");
  btnContainerEl.className = "done-undone";
  doneUndoneBtnEl.textContent = text;
  doneUndoneBtnEl.className = "done-btn";
  btnContainerEl.appendChild(doneUndoneBtnEl);
  return btnContainerEl;
};

const genCardEl = (id, title, led) => {
  const ContainerCardEl = genEl("div");

  const idContainerEl = genEl("div");
  const titleContainerEl = genEl("h3");
  const paraContainerEl = genEl("p");

  const statusContainerEl = genEl("div");
  const paraStatusContaierEl = genEl("p");
  const ledEl = genEl("div");

  ContainerCardEl.className = "date-card";
  idContainerEl.className = "id-cl";
  titleContainerEl.textContent = id;
  titleContainerEl.className = "id-num";
  paraContainerEl.textContent = title;
  paraContainerEl.className = "para-cl";

  statusContainerEl.className = "status";
  paraStatusContaierEl.textContent = "Status date:";
  paraStatusContaierEl.className = "p-status";
  ledEl.className = led;

  ContainerCardEl.append(idContainerEl, statusContainerEl);
  idContainerEl.append(titleContainerEl, paraContainerEl);
  statusContainerEl.append(paraStatusContaierEl, ledEl);

  return ContainerCardEl;
};

const genMainCardContainer = (priorityText) => {
  const mainCardContainerEl = genEl("div");
  const titleCardContainerEl = genEl("h2");

  mainCardContainerEl.className = "date-container";
  titleCardContainerEl.textContent = priorityText;

  mainCardContainerEl.append(titleCardContainerEl);
  return mainCardContainerEl;
};

const genDoneDate = async () => {
  const clients = await getFetch();
  const completedClients = clients.filter((client) => {
    return client.completed === true;
  });
  return completedClients;
};

const genUndoneDate = async () => {
  const clients = await getFetch();
  const uncompletedClients = clients.filter((client) => {
    return client.completed === false;
  });
  return uncompletedClients;
};

export {
  genEl,
  genBtnEl,
  genCardEl,
  genMainCardContainer,
  genDoneDate,
  genUndoneDate,
};
