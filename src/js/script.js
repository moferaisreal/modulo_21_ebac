// =============================================================================
// TIMELINE FUNCTIONALITY
// =============================================================================

// Timeline data with additional detailed information

class TimelineSystem {
  constructor() {
    this.timelineData = {
      hobbit: {
        title: "O Hobbit",
        description:
          "A aventura de Bilbo Bolseiro com treze anões para recuperar o Reino Solitário (Erebor) do dragão Smaug. Esta jornada desperta Bilbo para o mundo além do Condado e resulta na descoberta do Um Anel, estabelecendo os eventos que culminarão na Guerra do Anel.",
        events: [
          "Bilbo encontra o Um Anel na caverna de Gollum",
          "Morte de Smaug pelas mãos de Bard",
          "Thorin recupera e morre defendendo Erebor",
          "Retorno de Bilbo ao Condado com riquezas e histórias",
        ],
        figures: [
          "Bilbo Bolseiro",
          "Gandalf, O Cinzento",
          "Thorin Escudo-de-Carvalho",
          "Smaug",
          "Bard, o Arqueiro",
          "Legolas",
          "Thranduil",
          "Azog e Bolg",
        ],
        locations: [
          "Bolsão",
          "Erebor ",
          "Esgaroth",
          "Dale",
          "Mirkwood",
          "Cavernas Goblin",
          "Carrock",
        ],
        period: "2941-2942 Terceira Era",
        duration: "Aproximadamente 13 meses",
        significance:
          "Marca o retorno dos anões a Erebor, estabelece alianças entre povos livres, e mais importante, coloca o Um Anel nas mãos de Bilbo, preparando o cenário para os eventos do Senhor dos Anéis.",
        influence:
          "A aventura do Hobbit desperta o mundo para a crescente ameaça de Sauron, força a saída de Sauron de Dol Guldur (temporariamente), e mais crucialmente, coloca o Um Anel nas mãos de alguém com força moral para resistir à sua corrupção por décadas. A restauração de Erebor fortalece o Norte contra futuras ameaças e estabelece Dale como reino aliado. Os eventos também reforçam as alianças entre Elfos, Anões e Homens que serão essenciais na Guerra do Anel.",
        detailedInfo: {
          keyMoments: [
            {
              title: "A Jornada até Erebor (2941 T.E.):",
              content:
                "A aventura começa quando Gandalf recruta Bilbo para acompanhar os treze anões liderados por Thorin Escudo de Carvalho em uma expedição rumo à Montanha Solitária. A partida acontece de forma secreta, durante uma festa no Condado, e logo o grupo se depara com seus primeiros desafios.",
            },
            {
              title: "Primeiros Perigos",
              content:
                "Eles encontram três trolls chamados Tom, Bert e William, que quase os devoram, mas são derrotados pela astúcia de Gandalf. Pouco depois, descobrem espadas élficas perdidas, sendo Orcrist entregue a Thorin e Glamdring a Gandalf, antes de seguirem até Rivendell, onde Elrond revela segredos escondidos em mapas e runas lunares, essenciais para sua missão.",
            },
            {
              title: "Montanhas Nebulosas e o Um Anel",
              content:
                "A viagem continua com a travessia das Montanhas Nebulosas, onde uma tempestade terrível os surpreende. Nas cavernas, a comitiva é capturada por goblins e, durante a fuga, Bilbo acaba se perdendo. Nas profundezas, encontra a estranha criatura Gollum, com quem trava um jogo de adivinhas que resulta na descoberta do Um Anel. Usando o anel e sua astúcia, Bilbo consegue escapar e se reunir novamente ao grupo, que logo enfrenta um ataque de lobos e goblins. Nesse momento, são salvos pelas Águias lideradas por Gwaihir, que os transportam em segurança para longe do perigo.",
            },
            {
              title: "Aliados Inesperados e a Floresta das Trevass",
              content:
                "Logo depois, encontram Beorn, o misterioso mudapele, que lhes oferece abrigo e provisões para a longa jornada. Seguindo viagem, entram na sombria Floresta das Trevas, apesar dos conselhos de Gandalf, que parte para investigar o Necromante em Dol Guldur. Perdidos na floresta encantada, os viajantes enfrentam ilusões e fome, até caírem vítimas de um ataque de aranhas gigantes. É nesse momento que Bilbo, usando pela primeira vez sua espada Ferroada, salva a si mesmo e seus companheiros. Logo após, todos são capturados pelos elfos silvanos de Thranduil e levados como prisioneiros. Graças ao Um Anel, Bilbo permanece invisível e consegue planejar um ousado resgate, levando o grupo a escapar escondido em barris que descem pelo rio até Esgaroth, a Cidade do Lago, onde são recebidos como heróis, e Thorin é saudado como o “Rei sob a Montanha”.",
            },
            {
              title: "A Desolação de Smaug",
              content:
                "Do Lago, a comitiva segue para a Montanha Solitária, chegando no Dia de Durin, quando descobrem a porta secreta graças à chave e ao mapa herdados por Thorin. Bilbo é enviado sozinho para explorar a imensa caverna e se depara com o dragão Smaug. Em uma conversa repleta de enigmas e provocações, o hobbit descobre o ponto fraco na armadura do monstro: uma falha em seu peito. Furioso, Smaug parte para destruir a Cidade do Lago, mas Bard, o arqueiro, guiado por um tordo, consegue abatê-lo com uma flecha negra. Com a queda do dragão, os anões reocupam Erebor e encontram a cobiçada Pedra do Arco.",
            },
            {
              title: "O Conselho Branco e Sauron",
              content:
                "Enquanto isso, Gandalf descobre em Dol Guldur que o Necromante é, na verdade, Sauron, mas acaba capturado e aprisionado. O Conselho Branco, formado por Saruman, Elrond e Galadriel, ataca a fortaleza para conter a ameaça, e Galadriel liberta Gandalf, forçando Sauron a fugir para Mordor. Radagast leva então a mensagem sobre o perigo crescente aos elfos, confirmando que a sombra do Senhor do Escuro começava a se espalhar.",
            },
            {
              title: "A Batalha dos Cinco Exércitos",
              content:
                "Em Erebor, a situação se complica quando Thorin, dominado pela obsessão pela Pedra do Arco, rompe com seus aliados. Homens e elfos exigem compensações pelos danos de Smaug e cercam a montanha, mas Bilbo, em um gesto de coragem e diplomacia, entrega secretamente a Pedra do Arco a Bard. Ainda assim, o confronto parece inevitável até a chegada dos anões de Dain Pé-de-Ferro, das Colinas de Ferro. Nesse momento, os exércitos de orcs de Gundabad, liderados por Azog e Bolg, marcham contra todos, forçando homens, elfos e anões a unirem forças. A batalha que se segue se espalha por Vale, Ravenhill e Erebor, resultando na morte de Fili, Kili, Bolg e também de Azog. Thorin enfrenta Azog em duelo, mas acaba mortalmente ferido, reconciliando-se com Bilbo antes de morrer. Apesar da vitória dos povos livres, o preço é altíssimo, e a lembrança do sacrifício marca todos os sobreviventes.",
            },
            {
              title: "O Retorno ao Condado (2942 T.E.)",
              content:
                "Com a guerra encerrada, Bilbo renuncia à sua parte do tesouro, levando consigo apenas uma cota de ouro, prata e uma camisa de mithril. Ao lado de Gandalf, inicia a viagem de volta, passando por Rivendell para descansar antes de retornar ao Condado. Depois de um ano e meio fora, Bilbo finalmente chega ao Bolsão, apenas para descobrir que havia sido declarado morto e que suas posses estavam sendo leiloadas. Embora recupere sua casa, sua reputação é afetada, e passa a ser visto como um hobbit estranho. Ainda assim, ele encontra paz ao escrever suas memórias, marcando o início de sua vida como o contador de histórias que um dia ousou sair do Condado e viveu uma das maiores aventuras da Terceira Era.",
            },
          ],
        },
      },

      "paz-vigilante": {
        title: "Os Anos de Paz Vigilante e Suspeitas Crescentes",
        description:
          "Período de 77 anos entre o retorno de Bilbo e o início da Guerra do Anel, marcado pela aparente paz, mas com Sauron construindo secretamente seu poder em Mordor e Gandalf investigando a verdadeira natureza do anel de Bilbo.",
        events: [
          "Sauron retorna a Mordor e reconstrói Barad-dûr",
          'Gollum deixa as Montanhas Nebulosas em busca do "ladrão"',
          "Gandalf suspeita da verdadeira natureza do anel de Bilbo",
          "Saruman corrompe-se e alinha-se secretamente com Sauron",
          "Nascimento e juventude de Aragorn",
          "Ataques crescentes de orcs e criaturas sombrias",
        ],
        figures: [
          "Gandalf",
          "Saruman",
          "Sauron",
          "Gollum",
          "Aragorn",
          "Denethor",
          "Bilbo",
        ],
        locations: [
          "Mordor",
          "Isengard",
          "Condado",
          "Gondor",
          "Rohan",
          "Moria",
        ],
        period: "2942-3018 Terceira Era",
        duration: "76 anos",
        significance:
          "Período de preparação onde as forças do bem e do mal se organizam para o conflito final. Gandalf descobre a verdadeira ameaça enquanto Sauron reconstrói metodicamente seu poder.",
        influence:
          "Este período estabelece todas as peças para o conflito final. A descoberta da verdadeira natureza do Um Anel por Gandalf força uma crise que não pode mais ser adiada. A corrupção de Saruman divide os Istari, enquanto a preparação militar de Sauron ameaça destruir todos os povos livres. O período demonstra como o mal trabalha tanto através de força bruta quanto de sedução sutil.",
        detailedInfo: {
          keyMoments: [
            {
              title: "Reconstrução de Sauron (2951–3000 T.E.)",
              content:
                "Após revelar-se abertamente em Mordor no ano de 2951 da Terceira Era, Sauron inicia a reconstrução de Barad-dûr usando o poder remanescente do Um Anel, que ainda o mantinha ligado ao mundo físico. Ele convoca os nove Nazgûl, que passam a servi-lo diretamente como seus mais fiéis tenentes, e dá início à formação de vastos exércitos compostos por orcs, trolls, orientais e homens do sul corrompidos. Nas forjas de Mordor, lança-se à produção em grande escala de armas e armaduras, preparando a Terra Negra para a guerra que se aproximava. Para fortalecer ainda mais sua posição, estabelece alianças estratégicas com os Haradrim e os Orientais, garantindo contingentes humanos em seus exércitos. Ao mesmo tempo, começa a corromper Saruman através do palantír de Orthanc, infiltrando sua influência no coração do Conselho Branco e minando a resistência das forças livres.",
            },
            {
              title: "Investigações de Gandalf (2951–3001 T.E.)",
              content:
                "Nesse mesmo período, Gandalf, inquieto com o comportamento de Bilbo desde sua aventura na Montanha Solitária, passa a suspeitar da verdadeira natureza do anel que o hobbit encontrara. Ele realiza visitas frequentes ao Condado, observando Bilbo em busca de sinais da influência do artefato, e conduz longas pesquisas em Minas Tirith, onde examina os registros antigos sobre a Guerra da Última Aliança. Nas consultas com Elrond, procura compreender melhor o poder dos Anéis de Poder, e inicia tentativas de localizar Gollum para interrogá-lo. Em 3017, descobre os pergaminhos de Isildur, que relatavam como o herdeiro de Elendil havia cortado o Anel da mão de Sauron. Um ano depois, em 3018, confirma definitivamente suas suspeitas ao lançar o Anel de Bilbo — agora em posse de Frodo — no fogo da lareira de Bolsão, revelando as letras incandescentes da inscrição em língua negra.",
            },
            {
              title: "A Busca de Gollum (2944–3017 T.E.)",
              content:
                "Enquanto isso, Gollum, consumido pela perda de seu “Precioso”, deixa as Montanhas Nebulosas ainda em 2944 em busca de “Bolseiro”. Ele vagueia pela Floresta das Trevas e por regiões inóspitas até ser capturado pelos orcs de Mordor. Sob tortura, acaba revelando as palavras “Bolseiro” e “Condado”, fornecendo a Sauron a pista que precisava para localizar o paradeiro do Um Anel. Após ser libertado, parte do plano do Senhor do Escuro, Gollum continua a vagar, perseguido tanto pelos servos de Mordor quanto por Aragorn e Gandalf, que compreendiam sua importância. Em 3017, Aragorn consegue capturá-lo nas Terras Brunas e o leva até Thranduil, no Reino da Floresta das Trevas, onde Gandalf o interroga em busca de respostas.",
            },
            {
              title: "A Corrupção de Saruman (2953–3018 T.E.)",
              content:
                "Paralelamente, Saruman começa a utilizar o palantír de Orthanc em segredo. No início, acredita poder controlar ou mesmo substituir Sauron, mas ao longo dos anos torna-se gradualmente enredado pela vontade do Inimigo. Estabelece contato direto através da pedra vidente e começa a organizar um exército próprio, criando os uruk-hai, uma nova raça de orcs mais fortes e resistentes à luz do sol. Para alimentar suas forjas, devasta sistematicamente a floresta de Fangorn, transformando Isengard em uma fortaleza-industrial de guerra. Com o tempo, trai o Conselho Branco, manipulando seus membros e escondendo suas verdadeiras intenções. Sua traição chega ao auge em julho de 3018, quando prende Gandalf no topo da torre de Orthanc, buscando impedir que o mago branco atrapalhasse seus planos.",
            },
            {
              title: "O Crescimento de Aragorn (2931–3018 T.E.)",
              content:
                "Em paralelo aos avanços da sombra, nascia em 2931 Aragorn, filho de Arathorn II, herdeiro de Isildur. Dois anos depois, com a morte precoce do pai, foi levado para Rivendell, onde Elrond o criou em segredo, revelando-lhe sua linhagem apenas quando completou vinte anos. Em 2951, Aragorn assumiu seu nome e destino, encontrando pouco depois Arwen Undómiel em Lothlórien, por quem se apaixonou. Durante décadas, serviu como Montanhês, protegendo secretamente as fronteiras do Condado e desenvolvendo suas habilidades como rastreador e guerreiro. Atuou anonimamente em Rohan e Gondor sob nomes falsos, ganhando experiência e respeito, embora sua verdadeira identidade permanecesse oculta para a maioria. Sua vida errante preparava o terreno para o papel que desempenharia como líder dos Dúnedain e futuro rei.",
            },
            {
              title: "Preparativos em Gondor (2984–3018 T.E.)",
              content:
                "No sul, Gondor enfrentava seus próprios desafios. Em 2984, com a morte do Regente Ecthelion II, Denethor assumiu o governo do reino. Ele já nutria desconfiança em relação a Gandalf e, buscando poder, começou a usar secretamente o palantír de Minas Tirith, o que gradualmente o levou a ser enredado pela vontade de Sauron. Nesse período, nasceram seus filhos, Boromir (2978) e Faramir (2983), ambos criados sob o peso da responsabilidade e do declínio do reino. Denethor reforçou as defesas de Osgiliath, reconstruiu fortalezas ao longo do Anduin e manteve vigilância constante sobre as fronteiras. No entanto, sua crescente paranoia e desconfiança obscureciam seu julgamento. Quando sonhos proféticos começaram a atormentar Boromir e Faramir, o primogênito foi enviado em uma expedição desesperada até Rivendell em 3018, buscando respostas sobre o destino de Gondor e a possível salvação contra a escuridão que se erguia em Mordor.",
            },
          ],
        },
      },

      "senhor-dos-aneis": {
        title: "A Guerra do Anel e o Fim da Terceira Era",
        description:
          "O conflito final entre as forças livres da Terra-média e Sauron, o Senhor Sombrio. A jornada épica para destruir o Um Anel culmina na batalha decisiva entre luz e trevas, estabelecendo o início da Era dos Homens.",
        events: [
          "Partida de Frodo do Condado com o Um Anel",
          "Formação e quebra da Sociedade do Anel",
          "Guerra das Duas Torres - Helm e Isengard",
          "Cerco de Minas Tirith e Batalha do Pelennor",
          "Destruição do Um Anel no Monte da Perdição",
          "Coroação de Aragorn como Rei Elessar",
          "Partida dos Portadores do Anel",
        ],
        figures: [
          "Frodo Bolseiro",
          "Samwise Gamgi",
          "Gandalf",
          "Aragorn",
          "Legolas",
          "Gimli",
          "Boromir",
          "Merry e Pippin",
          "Gollum",
        ],
        locations: [
          "Condado",
          "Rivendell",
          "Moria",
          "Lothlórien",
          "Isengard",
          "Rohan",
          "Minas Tirith",
          "Mordor",
        ],
        period: "Setembro 3018 - Setembro 3021 Terceira Era",
        duration: "3 anos (com eventos principais em 13 meses)",
        significance:
          "Marca o fim definitivo da ameaça de Sauron, a destruição do último Grande Anel, e a transição do mundo mítico para o mundo dominado pelos Homens mortais.",
        influence:
          "A Guerra do Anel marca o fim definitivo da Terceira Era e início da dominação humana. A destruição do Um Anel quebra o poder dos Três Anéis Élficos, forçando a partida dos últimos Noldor. O sacrifício de Frodo demonstra que até o menor ser pode mudar o destino do mundo. A coroação de Aragorn restaura a linhagem real e unifica os reinos divididos. A partida pelos Portos Cinzentos simboliza o fim da era mágica e início do mundo histórico moderno.",
        detailedInfo: {
          keyMoments: [
            {
              title: "Fuga do Condado (3001 T.E.)",
              content:
                "A história ganha novo rumo na festa de aniversário de Bilbo, em 3001 da Terceira Era, quando ele desaparece diante de todos, usando o poder do Anel e deixando para trás seu velho lar no Condado. Gandalf, já desconfiado, ao testar o artefato no fogo, confirma que o anel de Frodo é de fato o Um Anel de Sauron. Diante da revelação, Frodo parte acompanhado de Sam, Merry e Pippin. No caminho, encontram Tom Bombadil e a Pequenina Dourada, seres enigmáticos imunes ao poder do Anel, que os salvam tanto do Salgueiro Velho quanto dos Túmulos Assombrados, entregando-lhes espadas que mais tarde seriam cruciais contra o Rei-Bruxo. A jornada logo se torna perigosa: os Nazgûl atacam no Topo do Vento, ferindo Frodo com uma lâmina morgul. Graças ao auxílio de Glorfindel — substituído por Arwen nas versões cinematográficas — ele chega a Rivendell, onde é curado por Elrond",
            },
            {
              title: "O Conselho de Elrond e a Sociedade do Anel",
              content:
                "Em Rivendell, o Conselho reúne representantes de vários povos. A história do Um Anel é revelada por completo e, após acalorados debates, decide-se que o único caminho é destruí-lo no Monte da Perdição. Forma-se então a Sociedade do Anel: Frodo, Sam, Merry, Pippin, Aragorn, Boromir, Legolas, Gimli e Gandalf, que partem após meses de preparação. A tentativa de cruzar o Passo Vermelho falha, forçando-os a entrar em Moria. Nas minas, descobrem a tumba de Balin e o registro de sua queda, enfrentando orcs e trolls na Câmara de Mazarbul. O destino da Sociedade muda na Ponte de Khazad-dûm, onde Gandalf enfrenta o Balrog e cai no abismo, sacrificando-se para que os outros escapem.",
            },
            {
              title: "Lothlórien e a Ruptura da Sociedade",
              content:
                "A perda do mago pesa sobre todos. Em Lothlórien, Galadriel os recebe, testando Frodo e Sam diante do Espelho e resistindo à tentação do Anel. Ela lhes concede presentes valiosos: luz de Eärendil para Frodo, A joia Elessar para Aragorn, arco Galadhrim para Legolas, para Gimli três fios de cabelo, a corda éfilca para Sam — mantos de camuflagem, pão lembas e barcos — antes de seguirem pelo Anduin. Porém, em Amon Hen, Boromir, corrompido pela tentação, tenta tomar o Anel de Frodo, mas redime-se defendendo Merry e Pippin dos Uruk-hai, caindo mortalmente ferido. A Sociedade se desfaz: Frodo e Sam partem sozinhos rumo a Mordor, enquanto Aragorn, Legolas e Gimli juram resgatar os hobbits capturados.",
            },
            {
              title: "As Duas Torres ( fevereiro e março 3019 T.E.)",
              content:
                "Nas profundezas de Zirakzigil, Gandalf trava a luta final contra o Balrog, que dura dias e noites entre fogo e gelo. Ao vencer o inimigo, ele “morre” em sua forma anterior e retorna como Gandalf, o Branco, enviado de volta pelos Valar para completar sua missão. Reencontra Aragorn, Legolas e Gimli em Fangorn, onde os três descobrem que Merry e Pippin haviam sido acolhidos por Barbárvore. Na Floresta, os Ents se reúnem em sua câmara ancestral e, após longa deliberação, decidem marchar contra Isengard. A Última Marcha destrói as muralhas de Saruman e inunda Orthanc com as águas do rio Isen, aprisionando o mago em sua torre. Enquanto isso, Aragorn, Legolas e Gimli seguem para Rohan, onde Théoden é libertado da manipulação de Gríma Língua-de-Cobra. Gandalf lidera-os ao Abismo de Helm, fortaleza onde os rohirrim enfrentam a mais poderosa força enviada por Saruman. A batalha dura toda a noite, marcada pela coragem de homens, elfos (na versão cinematográfica) e anões, até que ao amanhecer Gandalf retorna com Erkenbrand e os homens de Oeste-march, virando o jogo contra o inimigo. No leste, Frodo e Sam encontram Gollum nas Emyn Muil. Sam desconfia, mas Frodo o toma como guia, e juntos atravessam os Pântanos dos Mortos, onde jazem espectros de antigas guerras. Diante do Portão Negro, Gollum os convence a buscar outro caminho. Atravessam Ithilien, onde encontram Faramir, irmão de Boromir. Ao contrário de seu irmão, Faramir resiste à tentação do Anel e liberta os hobbits. Ele ainda lhes revela a honra de Boromir e os auxilia a seguir viagem. Porém, Gollum maquina sua traição. Ele os leva a Cirith Ungol, passagem guardada por Laracna, a monstruosa aranha que habita os túneis sombrios. Frodo é envenenado por sua picada e capturado por orcs, enquanto Sam, acreditando o mestre morto, toma para si o Anel, vivendo brevemente o peso de seu poder. Mas, movido por lealdade, resgata Frodo e devolve-lhe o fardo, reafirmando sua devoção.",
            },
            {
              title: "O Retorno do Rei (março a setembro 3019 T.E.)",
              content:
                "Com Andúril reforjada a partir dos fragmentos de Narsil, Aragorn abraça seu destino de rei. Junto de Legolas e Gimli, percorre os Caminhos dos Mortos, convocando os espectros amaldiçoados para cumprir seu antigo juramento. Essa força fantasmagórica derrota os corsários de Umbar em Pelargir, garantindo a frota que levaria reforços vitais a Gondor. Enquanto isso, Minas Tirith prepara-se para o cerco. Denethor, consumido pelo desespero após olhar no palantír e acreditar que tudo estava perdido, cai em loucura e planeja queimar-se junto de seu filho Faramir. Beregond, guarda da Cidadela, rompe ordens para salvar o capitão, protegendo-o até que Gandalf intervenha, impedindo a tragédia. a Batalha dos Campos do Pelennor, Sauron lança toda sua fúria. O Rei-Bruxo, à frente de sua hoste, abate Théoden, mas Éowyn, disfarçada de guerreiro, enfrenta-o com a ajuda de Merry, empunhando uma das lâminas vindas dos Túmulos Assombrados — armas forjadas contra o Reino de Angmar. Assim se cumpre a profecia de que nenhum homem o poderia matar, e o inimigo é destruído. Aragorn chega ao campo de batalha trazendo as forças conquistadas no sul, incluindo os espectros libertos após cumprirem sua promessa. A vitória é assegurada, mas ao preço de grandes perdas. O príncipe Imrahil de Dol Amroth, de sangue élfico, tem papel decisivo: lidera cavalaria em apoio a Gondor, reconhece a vida em Faramir quando todos o julgavam morto e defende a cidade em momentos críticos. Com Mordor ainda em pé, os líderes decidem distrair Sauron para dar a Frodo uma chance. Reúnem exércitos livres e marcham ao Portão Negro. Ali, a Boca de Sauron surge como emissário, exibindo a cota de malha de Frodo e o manto de elfo, tentando abalar sua esperança. Aragorn, contudo, o desafia e o expulsa. A batalha que se segue é desesperada, e no clímax Aragorn conclama os guerreiros com o grito: “Por Frodo!”, avançando contra um inimigo esmagador. Enquanto isso, Frodo e Sam, exaustos e famintos, atravessam Mordor disfarçados de orcs. No Monte da Perdição, Frodo sucumbe ao poder do Anel, reivindicando-o para si. Mas Gollum, em seu último ato, o ataca, mordendo-lhe o dedo e tomando o Anel. Em sua exaltação, cai com ele no fogo, destruindo o artefato e todo o poder de Sauron. Mordor desmorona, as torres ruem e os Nazgûl perecem em chamas. As Águias resgatam Frodo e Sam da morte certa.",
            },
            {
              title: "A Restauração e o Fim da Terceira Era",
              content:
                "Aragorn é coroado Rei Elessar, unindo Arnor e Gondor. Em sua coroação, homenageia os hobbits como príncipes do Reino Reunificado. O Condado, porém, não escapa da sombra da guerra: os quatro hobbits retornam e encontram-no dominado por Saruman, agora conhecido como Sharkey. Ele subjuga os camponeses, impondo leis cruéis. Na Batalha de Bywater, a resistência dos hobbits se ergue e triunfa, encerrando o último resquício da tirania. Saruman é assassinado por Gríma, que logo é morto pelos próprios hobbits, fechando o ciclo de sua corrupção. Sam restaura o Condado com a bênção de Galadriel, utilizando a terra de Lothlórien e a semente da Árvore de Mallorn. Sob seu cuidado, a região floresce ainda mais do que antes. Por fim, chega a hora do adeus. Frodo, marcado pela dor incurável da ferida de Laracna e pelo fardo do Anel, não encontra paz no Condado. Nos Portos Cinzentos, parte junto de Bilbo, Gandalf, Elrond e Galadriel rumo às Terras Imortais, encerrando a Terceira Era e abrindo espaço para a Quarta, a Era dos Homens.",
            },
          ],
        },
      },
    };
    this.currentEra = "hobbit";
    this.modal = null;
    this.init();
  }

  init() {
    this.setupTimeline();
    this.setupDetailsButton();
    this.createModal();
    this.loadInitialContent();
  }

  setupTimeline() {
    const buttons = document.querySelectorAll(".timeline__navbar-button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const era = button.dataset.era;
        this.updateTimeline(era, button);
      });
    });
  }

  updateTimeline(era, button) {
    const data = this.timelineData[era];
    if (!data) return;

    this.currentEra = era;

    // Update active button
    document.querySelectorAll(".timeline__navbar-button").forEach((btn) => {
      btn.classList.remove("timeline__navbar-button--active");
    });
    button.classList.add("timeline__navbar-button--active");

    // Get container
    const container = document.getElementById("timeline-description");
    container.style.opacity = "0";

    setTimeout(() => {
      // Update main content
      const title = container.querySelector(".timeline__description-title");
      const text = container.querySelector(".timeline__description-text");

      if (title) title.textContent = data.title;
      if (text) text.textContent = data.description;

      // Update lists
      const lists = container.querySelector(".timeline__description-lists");
      if (lists) {
        lists.innerHTML = `
        <div class="timeline__description-info">
          <div class="timeline__description-info-item">
            <strong>Período:</strong> ${data.period}
          </div>
          <div class="timeline__description-info-item">
            <strong>Duração:</strong> ${data.duration}
          </div>
          <div class="timeline__description-info-item">
            <strong>Significado:</strong> ${data.significance}
          </div>
          <div class="timeline__description-info-item">
            <strong>Influência:</strong> ${data.influence}
          </div>
        </div>
          <div class="timeline__description-section">
            <h4>Eventos Principais</h4>
            <ul class="timeline__description-list">
              ${data.events.map((e) => `<li>${e}</li>`).join("")}
            </ul>
          </div>
          <div class="timeline__description-section">
            <h4>Figuras Importantes</h4>
            <ul class="timeline__description-list">
              ${data.figures.map((f) => `<li>${f}</li>`).join("")}
            </ul>
          </div>
          <div class="timeline__description-section">
            <h4>Locais</h4>
            <ul class="timeline__description-list">
              ${data.locations.map((l) => `<li>${l}</li>`).join("")}
            </ul>
          </div>
        `;
      }

      container.style.opacity = "1";
    }, 300);
  }

  setupDetailsButton() {
    const btn = document.querySelector(".timeline__details-btn");
    if (btn) {
      btn.textContent = "Ver Momentos-Chave";
      btn.addEventListener("click", () => this.openModal());
    }
  }

  createModal() {
    const modalHTML = `
      <div id="timeline-modal" class="timeline-modal">
        <div class="timeline-modal__overlay"></div>
        <div class="timeline-modal__container">
          <button class="timeline-modal__close">&times;</button>
          <h2 class="timeline-modal__title"></h2>
          <div class="timeline-modal__content">
            <nav class="timeline-modal__nav">
              <!-- Navbar items will be added here -->
            </nav>
            <main class="timeline-modal__main">
              <h3 class="timeline-modal__main-title"></h3>
              <p class="timeline-modal__main-text"></p>
            </main>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);
    this.modal = document.getElementById("timeline-modal");

    this.addModalStyles();
    this.setupModalEvents();
  }

  addModalStyles() {
    const styles = `
      <style>
        .timeline__description-info {
          margin-top: 20px;
          padding: 15px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 8px;
          border: 1px solid #d4af37;
        }
        
        .timeline__description-info-item {
          margin: 10px 0;
          color: #8b4513;
          line-height: 1.6;
        }
        
        .timeline__description-info-item strong {
          color: #722f37;
          margin-right: 8px;
        }

        .timeline-modal {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
          align-items: center;
          justify-content: center;
        }

        .timeline-modal--active {
          display: flex;
        }

        .timeline-modal__overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
        }

        .timeline-modal__container {
          position: relative;
          width: 90%;
          max-width: 1200px;
          height: 80vh;
          background: #f5f5dc;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .timeline-modal__close {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 40px;
          height: 40px;
          background: #d4af37;
          border: none;
          border-radius: 50%;
          color: #2d5016;
          font-size: 24px;
          cursor: pointer;
          z-index: 10;
        }

        .timeline-modal__title {
          padding: 20px 30px;
          background: #2d5016;
          color: #d4af37;
          margin: 0;
          font-family: "MedievalSharp", cursive;
          font-size: 24px;
        }

        .timeline-modal__content {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .timeline-modal__nav {
          width: 250px;
          background: #e8e8d0;
          border-right: 2px solid #d4af37;
          overflow-y: auto;
          padding: 20px 0;
        }

        .timeline-modal__nav-item {
          display: block;
          width: 100%;
          padding: 15px 20px;
          background: none;
          border: none;
          text-align: left;
          color: #8b4513;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 14px;
        }

        .timeline-modal__nav-item:hover {
          background: rgba(212, 175, 55, 0.2);
        }

        .timeline-modal__nav-item--active {
          background: #d4af37;
          color: #2d5016;
          font-weight: bold;
        }

        .timeline-modal__main {
          flex: 1;
          padding: 30px;
          overflow-y: auto;
        }

        .timeline-modal__main-title {
          color: #722f37;
          font-family: "MedievalSharp", cursive;
          font-size: 22px;
          margin-bottom: 20px;
        }

        .timeline-modal__main-text {
          color: #8b4513;
          line-height: 1.8;
          font-size: 16px;
        }
      </style>
    `;

    document.head.insertAdjacentHTML("beforeend", styles);
  }

  setupModalEvents() {
    const closeBtn = this.modal.querySelector(".timeline-modal__close");
    const overlay = this.modal.querySelector(".timeline-modal__overlay");

    closeBtn.addEventListener("click", () => this.closeModal());
    overlay.addEventListener("click", () => this.closeModal());

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.modal.classList.contains("timeline-modal--active")
      ) {
        this.closeModal();
      }
    });
  }

  openModal() {
    const data = this.timelineData[this.currentEra];
    if (!data || !data.detailedInfo) return;

    // Update modal title
    this.modal.querySelector(
      ".timeline-modal__title"
    ).textContent = `Momentos-Chave: ${data.title}`;

    // Create navigation items
    const nav = this.modal.querySelector(".timeline-modal__nav");
    nav.innerHTML = data.detailedInfo.keyMoments
      .map(
        (moment, index) =>
          `<button class="timeline-modal__nav-item ${
            index === 0 ? "timeline-modal__nav-item--active" : ""
          }" 
               data-index="${index}">${moment.title}</button>`
      )
      .join("");

    // Set initial content
    const main = this.modal.querySelector(".timeline-modal__main");
    const firstMoment = data.detailedInfo.keyMoments[0];
    main.querySelector(".timeline-modal__main-title").textContent =
      firstMoment.title;
    main.querySelector(".timeline-modal__main-text").textContent =
      firstMoment.content;

    // Setup nav click handlers
    nav.querySelectorAll(".timeline-modal__nav-item").forEach((item) => {
      item.addEventListener("click", () => {
        const index = parseInt(item.dataset.index);
        const moment = data.detailedInfo.keyMoments[index];

        // Update active state
        nav
          .querySelectorAll(".timeline-modal__nav-item")
          .forEach((i) =>
            i.classList.remove("timeline-modal__nav-item--active")
          );
        item.classList.add("timeline-modal__nav-item--active");

        // Update content
        main.querySelector(".timeline-modal__main-title").textContent =
          moment.title;
        main.querySelector(".timeline-modal__main-text").textContent =
          moment.content;
      });
    });

    // Show modal
    this.modal.classList.add("timeline-modal--active");
  }

  closeModal() {
    this.modal.classList.remove("timeline-modal--active");
  }

  loadInitialContent() {
    const activeBtn = document.querySelector(
      ".timeline__navbar-button--active"
    );
    if (activeBtn) {
      const era = activeBtn.dataset.era;
      this.updateTimeline(era, activeBtn);
    }
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  new TimelineSystem();

  // Keep existing header controller
  if (typeof HeaderController !== "undefined") {
    new HeaderController();
  }
});

// =============================================================================
// HEADER DYNAMIC BEHAVIOR
// =============================================================================

class HeaderController {
  constructor() {
    this.header = document.querySelector(".header");
    this.heroSection = document.querySelector(".hero");
    this.observer = null;

    this.init();
  }

  init() {
    if (!this.header || !this.heroSection) {
      console.warn("Header or Hero section not found");
      return;
    }

    // Start with header hidden (assuming page loads at top)
    this.header.classList.add("header--transparent");

    // Create intersection observer
    this.createObserver();
  }

  createObserver() {
    const options = {
      root: null,
      // Adjust this to control when header appears
      // Negative value means header appears before hero fully exits
      rootMargin: "-100px 0px 0px 0px",
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hero is visible - hide entire header
          this.header.classList.add("header--transparent");
          this.header.classList.remove("header--visible");
        } else {
          // Hero is not visible - show entire header
          this.header.classList.remove("header--transparent");
          this.header.classList.add("header--visible");
        }
      });
    }, options);

    this.observer.observe(this.heroSection);
  }

  destroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

// =============================================================================
// SMOOTH SCROLLING NAVIGATION
// =============================================================================

function initializeSmoothScroll() {
  const navLinks = document.querySelectorAll('.header__links a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerHeight = document.querySelector(".header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Export for potential use in other scripts (if using modules)
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    HeaderController,
    timelineData,
    initializeTimeline,
    initializeSmoothScroll,
  };
}

// =============================================================================
// ACCORDION DAS ARMAS
// =============================================================================

document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".armas__header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const item = this.closest(".armas__item");
      const isActive = item.classList.contains("armas__item--active");

      // Fecha todos os items
      document.querySelectorAll(".armas__item").forEach((i) => {
        i.classList.remove("armas__item--active");
        i.querySelector(".armas__header").setAttribute(
          "aria-expanded",
          "false"
        );
      });

      // Abre o item clicado se não estava ativo
      if (!isActive) {
        item.classList.add("armas__item--active");
        this.setAttribute("aria-expanded", "true");
      }
    });

    // Suporte para navegação por teclado
    header.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        this.click();
      }
    });
  });
});

// =============================================================================
// TEAM MEMBERS MODAL
// =============================================================================

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add("modal--active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove("modal--active");
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal(this.id);
    }
  });
});

// Close modal with Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal--active").forEach((modal) => {
      closeModal(modal.id);
    });
  }
});

// =============================================================================
// BTT BUTTON
// =============================================================================

const backToTop = document.getElementById("backToTop");
const section = document.getElementById("armas");

window.addEventListener("scroll", () => {
  if (!section) return;

  const sectionBottom = section.offsetTop + section.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;

  // Show when scrolled beyond section
  if (scrollPosition > sectionBottom + 50) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }

  // Hide only when reaching the very bottom of the page
  if (window.scrollY + window.innerHeight >= pageHeight - 5) {
    backToTop.classList.remove("show");
  }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// =============================================================================
// FOOTER BEHAVIOR
// =============================================================================

const toggle = document.getElementById("lang-toggle");
const dropdown = document.getElementById("lang-dropdown");

toggle.addEventListener("click", () => {
  dropdown.classList.toggle("footer__dropdown--active");
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("footer__dropdown--active");
  }
});

// =============================================================================
// INITIALIZATION
// =============================================================================

// Initialize all functionality when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize timeline functionality

  // Initialize header dynamic behavior
  window.headerController = new HeaderController();

  // Initialize smooth scroll navigation
  initializeSmoothScroll();

  console.log("Lord of the Rings site initialized successfully!");
});
