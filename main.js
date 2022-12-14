function createMenuItem(menuText, pageName) {
    
    let menuItem;
    let menuItemLink;

    menuItem = document.createElement("li");
    menuItemLink =  document.createElement("a");
    menuItemLink.appendChild(document.createTextNode(menuText));
    menuItemLink.setAttribute("href","javascript: void(0);");
    
    menuItemLink.addEventListener("click", function() {
        let pages = document.querySelectorAll(".page");
        let page;
        let bkpAttribute; 

        for (var i=0; i<pages.length; i++) {
            bkpAttribute = pages[i].getAttribute("class");
            
            if(bkpAttribute.indexOf("hide") == -1)
                pages[i].setAttribute("class",bkpAttribute + " hide");
        }

        page = document.querySelector(".page." + pageName);
        bkpAttribute = page.getAttribute("class").replace(" hide","");
        page.setAttribute("class",bkpAttribute);
    });
    
    menuItem.appendChild(menuItemLink);

    menuItem.addEventListener("click", function() {
        menuItemLink.click();
    });

    return menuItem;
}

function createAdviceArea() {
    let container;
    let label;
    let content;


    container = document.createElement("div");
    container.setAttribute("class","advice");

    label = document.createElement("label");
    label.appendChild(document.createTextNode("Conselho do dia:"));
    container.appendChild(label);

    content = document.createElement("span");
    container.appendChild(content);

    return container;
}

function createThemeSwitcher() {
    
    let container;
    let selector;
    let option;
    let label;

    container = document.createElement("div");
    container.setAttribute("class","theme-switcher");

    label = document.createElement("label");
    label.setAttribute("for","theme-selector");
    label.appendChild(document.createTextNode("Tema:"));
    container.appendChild(label);

    selector = document.createElement("select");
    selector.setAttribute("class","theme-selector");
    
    option = document.createElement("option");
    option.setAttribute("value","light");
    option.appendChild(document.createTextNode("Light"));
    selector.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value","dark");
    option.appendChild(document.createTextNode("Dark"));
    selector.appendChild(option);

    selector.addEventListener("change",function(e) {
        switch(this.value) {
            case "light":
                document.body.setAttribute("class","light-theme");
                break;
            case "dark":
                document.body.setAttribute("class","dark-theme");
                break;
        }
    });

    container.appendChild(selector);

    return container;
}

function createMenu() {
    let menu;
    let menuItem;

    menu = document.createElement("ul");
    menu.setAttribute("class","menu");

    menuItem = createMenuItem("Drama","drama");
    menu.appendChild(menuItem);

    menuItem = createMenuItem("Infantil","infantil");
    menu.appendChild(menuItem);

    menuItem = createMenuItem("A????o","acao");
    menu.appendChild(menuItem);

    menu.appendChild(createAdviceArea());
    menu.appendChild(createThemeSwitcher());

    return menu;
}

function createPage(pageName, show) {
    let container;
    let classAttr;

    classAttr = "page " + pageName;
    if(show !== true)
        classAttr += " hide";


    container = document.createElement("div");
    container.setAttribute("class", classAttr);    

    return container;
}

function createSubPage(subPageName, pageTitle, pageImage, trailerUrl, pageText) {

    let container;
    let imageContent;
    let image;
    let textContent;
    let textContainer;
    let trailerButton;

    container = document.createElement("div");
    container.setAttribute("class","subpage " + subPageName);

    imageContent = document.createElement("div");
    imageContent.setAttribute("class", "image");

    image = document.createElement("img");
    image.setAttribute("src", pageImage);
    imageContent.appendChild(image);
    container.appendChild(imageContent);

    textContent = document.createElement("div");
    textContent.setAttribute("class", "text text-content");
    title = document.createElement("h1");
    title.appendChild(document.createTextNode(pageTitle));
    textContent.appendChild(title);

    textContainer = document.createElement("div");
    textContainer.innerHTML = pageText;
    textContent.appendChild(textContainer);

    trailerButton = document.createElement("a");
    trailerButton.setAttribute("href",trailerUrl);
    trailerButton.setAttribute("class","trailer-button");
    trailerButton.setAttribute("target","__blank");
    trailerButton.appendChild(document.createTextNode("Trailer"));
    
    textContent.appendChild(trailerButton);
    container.appendChild(textContent);

    return container;
}

function createSubPgRelatos() {

    let container;
    let subPageName = "relatos";
    let pageTitle = "Relatos Selvagens";
    let pageImage = "Relatos_salvajes.jpg";
    let trailerUrl = "https://www.youtube.com/watch?v=dZWhQMx1SO4";
    let pageText = "<p>Diante de uma realidade crua e imprevis??vel, os personagens deste filme caminham sobre a linha t??nue que separa a civiliza????o da barb??rie. Uma trai????o amorosa, o retorno do passado, uma trag??dia ou mesmo a viol??ncia de um pequeno detalhe cotidiano s??o capazes de empurrar estes personagens para um lugar fora de controle.</p>";
        pageText += "<p>Relatos selvagens ?? uma antologia composta por seis hist??rias independentes ligadas por seu assunto. Originalmente, cada um era uma hist??ria curta, mas quando Szifron colocou juntos em um ??nico volume, advertiu que eles estavam ligados por um conjunto de quest??es que lhes deu unidade e coes??o.</p>";
        pageText += "<p>Depois de um m??s em que o Festival do Rio exibiu o drama Dente por Dente (2014), uma das mais impactantes vis??es sobre a vingan??a desde Lady Vingan??a (2005), agora ?? a vez de nos depararmos com Relatos Selvagens. O sucesso argentino produzido por Pedro Almod??var foi escolhido para abrir a 38?? edi????o da Mostra Internacional de Cinema de S??o Paulo. Diferentemente da aposta nas camadas narrativas e no percurso pelas profundezas do psicol??gico, propostas dos diretores sul-coreanos, o trabalho de Dami??n Szifr??n dialoga desde o primeiro momento com o grande p??blico.</p>"
    container = createSubPage(subPageName, pageTitle, pageImage, trailerUrl, pageText);

    return container;
}

function createSubPgBrilho() {

    let container;
    let subPageName = "brilho";
    let pageTitle = "Brilho Eterno de uma Mente sem Lembran??as";
    let pageImage = "brilho.jpg";
    let trailerUrl = "https://www.youtube.com/watch?v=n1mIgijfCcg";
    let pageText = "<p>um filme estadunidense de 2004, do g??nero com??dia dram??tica, romance e fic????o cient??fica, dirigido por Michel Gondry e com roteiro escrito por Charlie Kaufman. ?? protagonizado por Jim Carrey e Kate Winslet. O filme utiliza elementos de fic????o cient??fica, suspense psicol??gico, e uma narrativa n??o linear para explorar a natureza da mem??ria e do amor rom??ntico. </p>";
        pageText += "<p>E se n??s pud??ssemos simplesmente apagar da mem??ria aqueles que mais amamos? A ideia apavora, mas pode ser tentadora em momentos de maior sofrimento ou saudade. Essa ?? a premissa de Brilho Eterno de uma Mente sem Lembran??as, um dos filmes de amor mais aclamados da d??cada de 2000.</p>";
        pageText += "<p>Lan??ado em 2004, o longa-metragem de romance e fic????o cientifica dirigido por Michel Gondry j?? virou um cl??ssico de amor dos tempos modernos. Confira a nossa an??lise aprofundada do filme e se emocione tamb??m.</p>"
    container = createSubPage(subPageName, pageTitle, pageImage, trailerUrl, pageText);

    return container;
}

function createSubPgNemo() {
    let container;
    let subPageName   = "nemo";
    let pageTitle  = "Procurando Nemo";
    let pageImage  = "Finding_Nemo.jpg";
    let trailerUrl = "https://www.youtube.com/watch?v=lJhvtAt_1Nk";
    let pageText   = "<p>Procurando Nemo ?? um filme estadunidense de 2003, do g??nero aventura, produzido pela Pixar Animation Studios e lan??ado pela Walt Disney Pictures. Dirigido e coescrito por Andrew Stanton com co-dire????o de Lee Unkrich, o roteiro foi escrito por Bob Peterson, David Reynolds e Stanton a partir de uma hist??ria do mesmo. O filme ?? estrelado pelas vozes de Albert Brooks, Ellen DeGeneres, Alexander Gould e Willem Dafoe. Conta a hist??ria de um peixe-palha??o superprotetor chamado Marlin, que, junto com uma cirurgi??-patela chamada Dory, procura por seu filho desaparecido, Nemo.</p>";
       pageText   += "<p>Lan??ado em 30 de maio de 2003, Finding Nemo ganhou o Oscar de Melhor Filme de Anima????o, o primeiro filme da Pixar a faz??-lo. Tamb??m foi indicado em mais tr??s categorias, incluindo Melhor Roteiro Original. Al??m disso, tornou-se o filme de anima????o de maior bilheteria na ??poca de seu lan??amento, e foi o segundo filme de maior bilheteria de 2003, obtendo um total de 871 milh??es de d??lares em todo o mundo ao final do seu primeiro lan??amento teatral.</p>";    
       
       container = createSubPage(subPageName, pageTitle, pageImage, trailerUrl, pageText);


    return container;
}

function createSubPgDivertidamente() {
    let container;
    let subPageName   = "divertidamente";
    let pageTitle  = "DivertidaMente";
    let pageImage  = "divertidamente.jpg";
    let trailerUrl = "https://www.youtube.com/watch?v=lJhvtAt_1Nk";
    let pageText   = "<p>Divertida Mente (tamb??m conhecido nos Estados Unidos como Inside Out e em Portugal Divertida-Mente) ?? um filme americano de 2015 em 3D animado por computador com??dia-drama da Disney/Pixar, que foi lan??ado em 18 de junho de 2015 no Brasil e 19 de junho de 2015 nos Estados Unidos. ?? filme de anima????o 15 de longa-metragem da Pixar, De acordo com a tradi????o da Pixar, um curta-metragem chamado Lava acompanha o filme. </p>";
       pageText   += "<p>Crescer pode ser uma verdadeira aventura e com Riley n??o ?? diferente! Quando seu pai arruma um novo emprego em S??o Francisco, a menina ?? for??ada a sair de sua vida no meio-oeste americano para acompanhar sua fam??lia. Assim como qualquer ser humano, Riley ?? guiada pelas emo????es: Alegria , Medo , Raiva, Nojinho e Tristeza. As emo????es vivem no centro de controle dentro da mente da menina e a ajudam com conselhos em sua vida cotidiana. Conforme a garota e suas emo????es tentam se adaptar ?? nova vida, come??a uma agita????o no centro de controle. Apesar de Alegria, a principal e mais importante emo????o de Riley, tente se manter positiva, as emo????es entram em conflito sobre qual melhor jeito de viver em uma nova cidade, casa e escola. Durante todo esse processo o controle de Riley ir?? ficar incompleto. </p>";    

       container = createSubPage(subPageName, pageTitle, pageImage, trailerUrl, pageText);


    return container;
}

function createSubPgBastardos() {
    let container;
    let subPageName   = "bastardos";
    let pageTitle  = "Bastardos Ingl??rios";
    let pageImage  = "Inglourious_basterds.jpg";
    let trailerUrl = "https://www.youtube.com/watch?v=w1O5LThfp7w";
    let pageText   = "<p>Em 1941, o Coronel da SS Hans Landa (Christoph Waltz) chega a uma fazenda de leite na Fran??a ocupada pelos nazis com o intuito de interrogar Perrier LaPadite (Denis M??nochet) sobre rumores de que ele estaria a esconder uma fam??lia judaica chamada Dreyfus. Landa faz com que o fazendeiro confesse que ele os esconde debaixo da casa. Landa ordena que os soldados da SS entrem na resid??ncia e disparem sobre o assoalho do ch??o. A fam??lia ?? toda morta, com exce????o da adolescente Shosanna (M??lanie Laurent), que Landa deixa escapar.</p>";
        pageText  += "<p>Na primavera de 1944, o Primeiro-tenente Aldo Raine (Brad Pitt) ?? incumbido da tarefa de selecionar uma equipe de oito soldados judeu-americanos para uma miss??o atr??s das linhas inimigas, que consiste em aterrorizar os soldados alem??es. Ele informa os seus soldados de que cada um lhe deve 100 escalpos de nazis. Eles n??o fazem prisioneiros e acabam por ser conhecidos como os 'Bastardos'. O ??nico sobrevivente de um dos ataques dos Bastardos, um soldado de nome Butz, ?? chamado para um encontro com Adolf Hitler. Butz conta ao F??hrer que ele e a sua companhia foram atacados, e que o seu sargento foi espancado at?? a morte com um taco de Basebol pelo Sargento Donny Donowitz (Eli Roth), conhecido pelos alem??es como 'O Urso Judeu'. Butz revela-lhe que Raine cravou uma su??stica na sua testa com uma faca.</p>"; 

       container = createSubPage(subPageName, pageTitle, pageImage, trailerUrl, pageText);

    return container;
}

function createSubPg007() {
    let container;
    let subPageName   = "novodia";
    let pageTitle  = "007 - Um Novo Dia Para Morrer";
    let pageImage  = "007.jpg";
    let trailerUrl = "https://www.youtube.com/watch?v=GTznf1x4khc";
    let pageText   = "<p>Ao investigar o com??rcio ilegal de armas na zona desmilitarizada entre as Coreias do Norte e do Sul, que s??o trocadas por diamantes contrabandeados da ??frica. O contrabando de diamantes foi arquitetado pelo Coronel Moon que com a ajuda de seu capanga Zao e de um agente traidor do MI6 (que no final, se descobre que era a Miranda Frost, que era infiltrada e mudou de lado, traindo 007 e os demais. Foi ela quem revelou o disfarce de 007 como comprador de diamentes).</p>";
        pageText  += "<p>Ap??s ser desmascarado, Bond trava uma batalha envolvendo o coronel norte-coreano Moon e ambos caem de uma cachoeira. Moon simula sua morte. Bond acaba sendo preso e torturado pelo governo norte coreano. Anos depois (ap??s muitas torturas), o governo brit??nico consegue libertar Bond, que descobre a exist??ncia de um traidor dentro da MI-6. Bond ter?? como parceira neste filme a agente americana Jinx, interpretada por (Halle Berry) que atua como espi?? local, fingindo ser uma turista em Cuba para saber sobre Zao.</p>"; 
        
       container = createSubPage(subPageName, pageTitle, pageImage, trailerUrl, pageText);

    return container;
}

function createTopButton() {
    let button;

    button = document.createElement("img");
    button.setAttribute("src","btn-top.png");
    button.setAttribute("class","btn-top");
    button.setAttribute("alt","Voltar ao topo");
    button.setAttribute("title","Voltar ao topo");
    button.addEventListener("click",function() {
        window.scrollTo(0, 0);
    });


    return button;
}

function obterConselhoAPI() {
    fetch('https://api.adviceslip.com/advice')
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson)
        document.querySelector(".advice span").appendChild(document.createTextNode(myJson.slip.advice));
    });
}

function createPgDrama() {
    let page = createPage("drama", true);
    
    page.appendChild(createSubPgRelatos());
    page.appendChild(createSubPgBrilho());
    
    return page;
}

function createPgInfantil() {
    let page = createPage("infantil");
    
    page.appendChild(createSubPgNemo());    
    page.appendChild(createSubPgDivertidamente());
    
    return page;
}

function createPgAcao() {
    let page = createPage("acao");
    
    page.appendChild(createSubPgBastardos());
    page.appendChild(createSubPg007());
    
    return page;
}

function createPaginas() {
    document.body.appendChild(createPgDrama());
    document.body.appendChild(createPgInfantil());
    document.body.appendChild(createPgAcao());
}

document.addEventListener("DOMContentLoaded", function() {
    
    document.body.appendChild(createMenu());
 
    obterConselhoAPI();
    createPaginas();

    document.body.appendChild(createTopButton());

});