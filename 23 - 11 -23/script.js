const genEl = (type, text) => {
  const newEl = document.createElement(type);
  newEl.textContent = text;
  return newEl;
};
const mainContent = document.querySelector(".main-content");

const genNavEl = (
  logoUrl,
  textA,
  textB,
  textC,
  textD,
  textE,
  textBtnA,
  textBtnB,
  urlBtnA,
  urlBtnB,
  addClass
) => {
  const navwrapperEl = genEl("nav");
  const navLogoEl = genEl("img");
  const navEl = genEl("ul");
  const navHomeEl = genEl("li", textA);
  const navAboutEl = genEl("li", textB);
  const navShopEl = genEl("li", textC);
  const navPagesEl = genEl("li", textD);
  const navContactEl = genEl("li", textE);
  const sideNavEl = genEl("div");
  const btnSignUpEl = genEl("button", textBtnA);
  const btnOrderEl = genEl("button", textBtnB);

  navwrapperEl.className = `nav ${addClass || ""}`;
  navLogoEl.className = "logo";
  navLogoEl.src = logoUrl;
  navLogoEl.alt = "logo";
  navEl.className = "nav-el";
  navEl.className = "nav-el-none";
  sideNavEl.className = "side";
  btnSignUpEl.className = "btn-signup-nav";
  btnOrderEl.className = "btn-order-nav";
  btnSignUpEl.addEventListener("click", function () {
    const url = urlBtnA;
    window.location.href = url;
  });
  btnSignUpEl.addEventListener("click", function () {
    const url = urlBtnB;
    window.location.href = url;
  });

  mainContent.appendChild(navwrapperEl);
  navwrapperEl.append(navLogoEl, navEl, sideNavEl);
  navEl.append(navHomeEl, navAboutEl, navShopEl, navPagesEl, navContactEl);
  sideNavEl.append(btnSignUpEl, btnOrderEl);

  return navwrapperEl;
};
const newUl = (textA, textB, textC, textD, textE) => {
  const genUlEl = genEl("ul");
  const navHomeEl = genEl("li", textA);
  const navAboutEl = genEl("li", textB);
  const navShopEl = genEl("li", textC);
  const navPagesEl = genEl("li", textD);
  const navContactEl = genEl("li", textE);

  genUlEl.className = "mobile";
  mainContent.appendChild(genUlEl);
  genUlEl.append(navHomeEl, navAboutEl, navShopEl, navPagesEl, navContactEl);
};

const genHeroEl = (titleText, paraText, btnText, btnUrl, imgSrc, addClass) => {
  const heroEl = genEl("div");
  const heroDivEl = genEl("div");
  const heroTitleEl = genEl("h1", titleText);
  const heroTextEl = genEl("p", paraText);
  const heroBtnEl = genEl("button", btnText);
  heroBtnEl.addEventListener("click", function () {
    const url = btnUrl;
    window.location.href = url;
  });
  const heroImgEl = genEl("img");

  heroEl.className = `hero-div ${addClass || ""}`;
  heroDivEl.className = "hero-tex-div";
  heroImgEl.src = imgSrc;
  heroImgEl.alt = "immagine a scopo dimostrativo";
  heroImgEl.className = "hero-img";
  heroBtnEl.className = "btn-hero";

  mainContent.appendChild(heroEl);
  heroEl.append(heroDivEl, heroImgEl);
  heroDivEl.append(heroTitleEl, heroTextEl, heroBtnEl);

  return heroEl;
};

const genCardEl = (imgSrc, cardTitle, cardText) => {
  const cardEl = genEl("div");
  const cardImgEl = genEl("img");
  const cardTitleEl = genEl("h5", cardTitle);
  const cardTextEl = genEl("p", cardText);

  cardEl.className = "single-card";
  cardImgEl.className = "card-img";
  cardImgEl.src = imgSrc;

  cardEl.append(cardImgEl, cardTitleEl, cardTextEl);

  return cardEl;
};

const genSectionEl = (
  textSection,
  paraSectionText,
  urlImgCardA,
  titleCardA,
  textCardA,
  urlImgCardB,
  titleCardB,
  textCardB,
  urlImgCardC,
  titleCardC,
  textCardC,
  addClass
) => {
  const sectionEl = genEl("section");
  const sectionDivEl = genEl("div");
  const sectionTitleEl = genEl("h2", textSection);
  const sectionTextEl = genEl("p", paraSectionText);
  const sectionCardDivEl = genEl("div");

  sectionEl.className = `section-card`;
  sectionDivEl.className = "sectioncard-text-div";
  sectionCardDivEl.className = `card-div ${addClass || ""}`;

  mainContent.appendChild(sectionEl);
  sectionEl.append(sectionDivEl, sectionCardDivEl);
  sectionDivEl.append(sectionTitleEl, sectionTextEl);

  const cardA = genCardEl(urlImgCardA, titleCardA, textCardA);
  const cardB = genCardEl(urlImgCardB, titleCardB, textCardB);
  const cardC = genCardEl(urlImgCardC, titleCardC, textCardC);

  sectionCardDivEl.append(cardA, cardB, cardC);

  return sectionEl;
};

const genBannerEl = () => {
  const bannerDivEl = genEl("div");
  const titleBannerEl = genEl("h4", "BIMBI FELICI, LONTANO DA TE");

  bannerDivEl.className = "banner";
  bannerDivEl.appendChild(titleBannerEl);
  mainContent.appendChild(bannerDivEl);
  return bannerDivEl;
};

const genContactUs = (titleDiv, textDiv) => {
  const contactDivEl = genEl("div");
  const textDivEl = genEl("div");
  const titleDivEl = genEl("h2", titleDiv);
  const paraDivEl = genEl("p", textDiv);
  const inputDivEl = genEl("div");

  contactDivEl.className = "contact-div";
  textDivEl.className = "text-div";
  inputDivEl.className = "input-div";

  mainContent.appendChild(contactDivEl);
  contactDivEl.append(textDivEl, inputDivEl);
  textDivEl.append(titleDivEl, paraDivEl);

  return contactDivEl;
};

genNavEl(
  "./asset/Fanschool - Copia.png",
  "Chi Siamo",
  "Shop",
  "Blog",
  "Dicono di noi",
  "Contatti",
  "Accedi",
  "Iscriviti",
  "https://www.google.com/",
  "https://www.google.com/"
);

newUl("Chi Siamo", "Shop", "Blog", "Dicono di noi", "Contatti");

genHeroEl(
  "NON HAI TEMPO NEMMENO PER GRATTARTI LA TESTA?",
  "Clicca il pulsante se anche tu vuoi trovare una soluzione",
  "GET STARTED",
  "https://www.google.com/",
  "./asset/bimbechepiangono.jpg"
);
genSectionEl(
  "MANDALI A FANSCHOOL!",
  "La scuola perfetta per i tuoi bambini",
  "./asset/icons8-avanti-veloce-100.png",
  "Iscrizione Veloce",
  "Con la nostra iscrizione Online, mandare a fanschool tuo figlio sarà velocissimo. Ti garantiamo un insierimento veloce, basta iscriversi e pagare l'intera retta annuale con bonifico istantaneo.",
  "./asset/icons8-riproduci-100.png",
  "Let's START",
  "Inizia a riprodurre il suono della tua libertà! Lo senti? Il calore dei raggi del sole sulla pelle e il rumore del mare, che non assomiglia per niente ad un pianto o all'enunciazione di varie richieste, saranno la tua unica compagnia sotto l'ombrellone.",
  "./asset/icons8-stop-100.png",
  "STOP alle rinunce",
  "Adesso niente potrà farti rinunciare all'aperitivo del venerdì, alla dormita prolungata la domenica mattina e a tutte quelle cose che non ricordi nemmeno più. "
);
genHeroEl(
  "ABBIAMO 20 SEDI FANSCHOOL IN TUTTA ITALIA",
  "Clicca il cuore per iscriverti alla newsletter, ti informeremo ogni volta che espanderemo il verbo",
  "ISCRIVITI SUBITO",
  "https://www.google.com/",
  "./asset/bimbIchepiangono.jpg",
  "mirrow"
);
genBannerEl();
genHeroEl(
  "FANSCHOOL HA UN SERVIZIO CATERING DI PRIMISSIMA QUALITA",
  "La scuola perfetta per i tuoi bambini esiste. Siamo aperti h24 tutti i giorni della settimana, non ci sono prenotazioni e puoi smollarci i tuoi figli quando vuoi.",
  "Vai al menù di oggi",
  "https://www.google.com/",
  "./asset/cuorerosso.png",
  "third-hero"
);
genSectionEl(
  "IL NOSTRO BLOG",
  "Qui troverai specifici articoli in merito ai nostri servizi",
  "https://picsum.photos/350/336?random=1",
  "OPEN H24",
  "Le nostre sedi sono operative h24 7/7 per garantire la massima fruibilità della libertà garantita dalla sottoscrizione del contratto.",
  "https://picsum.photos/350/336?random=2",
  "MENSA TOP QUALITY",
  "Le nostre sedi sono operative h24 7/7 per garantire la massima fruibilità della libertà garantita dalla sottoscrizione del contratto.",
  "https://picsum.photos/350/336?random=3",
  "SCUOLA BUS",
  "Le nostre sedi sono operative h24 7/7 per garantire la massima fruibilità della libertà garantita dalla sottoscrizione del contratto.",
  "blog-card-div"
);
genContactUs(
  "Che aspetti? Mettiamoci in contatto!",
  "Compila il form qui accanto per ricevere maggiori informazioni. Un nostro incaricato ti telefonerà entro pochi minuti e potrai decidere della tua futura libertà."
);
