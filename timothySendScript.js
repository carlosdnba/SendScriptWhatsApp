async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
¹ Paulo, apóstolo de Jesus Cristo, pela vontade de Deus, e o irmão Timóteo,
² Aos santos e irmãos fiéis em Cristo, que estão em Colossos: Graça a vós, e paz da parte de Deus nosso Pai e do Senhor Jesus Cristo.
³ Graças damos a Deus, Pai de nosso Senhor Jesus Cristo, orando sempre por vós,
⁴ Porquanto ouvimos da vossa fé em Cristo Jesus, e do amor que tendes para com todos os santos;
⁵ Por causa da esperança que vos está reservada nos céus, da qual já antes ouvistes pela palavra da verdade do evangelho,
⁶ Que já chegou a vós, como também está em todo o mundo; e já vai frutificando, como também entre vós, desde o dia em que ouvistes e conhecestes a graça de Deus em verdade;
⁷ Como aprendestes de Epafras, nosso amado conservo, que para vós é um fiel ministro de Cristo,
⁸ O qual nos declarou também o vosso amor no Espírito.
⁹ Por esta razão, nós também, desde o dia em que o ouvimos, não cessamos de orar por vós, e de pedir que sejais cheios do conhecimento da sua vontade, em toda a sabedoria e inteligência espiritual;
¹⁰ Para que possais andar dignamente diante do Senhor, agradando-lhe em tudo, frutificando em toda a boa obra, e crescendo no conhecimento de Deus;
¹¹ Corroborados em toda a fortaleza, segundo a força da sua glória, em toda a paciência, e longanimidade com gozo;
¹² Dando graças ao Pai que nos fez idôneos para participar da herança dos santos na luz;
¹³ O qual nos tirou da potestade das trevas, e nos transportou para o reino do Filho do seu amor;
¹⁴ Em quem temos a redenção pelo seu sangue, a saber, a remissão dos pecados;
¹⁵ O qual é imagem do Deus invisível, o primogênito de toda a criação;
¹⁶ Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis, sejam tronos, sejam dominações, sejam principados, sejam potestades. Tudo foi criado por ele e para ele.
¹⁷ E ele é antes de todas as coisas, e todas as coisas subsistem por ele.
¹⁸ E ele é a cabeça do corpo, da igreja; é o princípio e o primogênito dentre os mortos, para que em tudo tenha a preeminência.
¹⁹ Porque foi do agrado do Pai que toda a plenitude nele habitasse,
²⁰ E que, havendo por ele feito a paz pelo sangue da sua cruz, por meio dele reconciliasse consigo mesmo todas as coisas, tanto as que estão na terra, como as que estão nos céus.
²¹ A vós também, que noutro tempo éreis estranhos, e inimigos no entendimento pelas vossas obras más, agora contudo vos reconciliou
²² No corpo da sua carne, pela morte, para perante ele vos apresentar santos, e irrepreensíveis, e inculpáveis,
²³ Se, na verdade, permanecerdes fundados e firmes na fé, e não vos moverdes da esperança do evangelho que tendes ouvido, o qual foi pregado a toda criatura que há debaixo do céu, e do qual eu, Paulo, estou feito ministro.
²⁴ Regozijo-me agora no que padeço por vós, e na minha carne cumpro o resto das aflições de Cristo, pelo seu corpo, que é a igreja;
²⁵ Da qual eu estou feito ministro segundo a dispensação de Deus, que me foi concedida para convosco, para cumprir a palavra de Deus;
²⁶ O mistério que esteve oculto desde todos os séculos, e em todas as gerações, e que agora foi manifesto aos seus santos;
²⁷ Aos quais Deus quis fazer conhecer quais são as riquezas da glória deste mistério entre os gentios, que é Cristo em vós, esperança da glória;
²⁸ A quem anunciamos, admoestando a todo o homem, e ensinando a todo o homem em toda a sabedoria; para que apresentemos todo o homem perfeito em Jesus Cristo;
²⁹ E para isto também trabalho, combatendo segundo a sua eficácia, que opera em mim poderosamente. 
¹ Porque quero que saibais quão grande combate tenho por vós, e pelos que estão em Laodicéia, e por quantos não viram o meu rosto em carne;
² Para que os seus corações sejam consolados, e estejam unidos em amor, e enriquecidos da plenitude da inteligência, para conhecimento do mistério de Deus e Pai, e de Cristo,
³ Em quem estão escondidos todos os tesouros da sabedoria e da ciência.
⁴ E digo isto, para que ninguém vos engane com palavras persuasivas.
⁵ Porque, ainda que esteja ausente quanto ao corpo, contudo, em espírito estou convosco, regozijando-me e vendo a vossa ordem e a firmeza da vossa fé em Cristo.
⁶ Como, pois, recebestes o Senhor Jesus Cristo, assim também andai nele,
⁷ Arraigados e sobreedificados nele, e confirmados na fé, assim como fostes ensinados, nela abundando em ação de graças.
⁸ Tende cuidado, para que ninguém vos faça presa sua, por meio de filosofias e vãs sutilezas, segundo a tradição dos homens, segundo os rudimentos do mundo, e não segundo Cristo;
⁹ Porque nele habita corporalmente toda a plenitude da divindade;
¹⁰ E estais perfeitos nele, que é a cabeça de todo o principado e potestade;
¹¹ No qual também estais circuncidados com a circuncisão não feita por mão no despojo do corpo dos pecados da carne, pela circuncisão de Cristo;
¹² Sepultados com ele no batismo, nele também ressuscitastes pela fé no poder de Deus, que o ressuscitou dentre os mortos.
¹³ E, quando vós estáveis mortos nos pecados, e na incircuncisão da vossa carne, vos vivificou juntamente com ele, perdoando-vos todas as ofensas,
¹⁴ Havendo riscado a cédula que era contra nós nas suas ordenanças, a qual de alguma maneira nos era contrária, e a tirou do meio de nós, cravando-a na cruz.
¹⁵ E, despojando os principados e potestades, os expôs publicamente e deles triunfou em si mesmo.
¹⁶ Portanto, ninguém vos julgue pelo comer, ou pelo beber, ou por causa dos dias de festa, ou da lua nova, ou dos sábados,
¹⁷ Que são sombras das coisas futuras, mas o corpo é de Cristo.
¹⁸ Ninguém vos domine a seu bel-prazer com pretexto de humildade e culto dos anjos, envolvendo-se em coisas que não viu; estando debalde inchado na sua carnal compreensão,
¹⁹ E não ligado à cabeça, da qual todo o corpo, provido e organizado pelas juntas e ligaduras, vai crescendo em aumento de Deus.
²⁰ Se, pois, estais mortos com Cristo quanto aos rudimentos do mundo, por que vos carregam ainda de ordenanças, como se vivêsseis no mundo, tais como:
²¹ Não toques, não proves, não manuseies?
²² As quais coisas todas perecem pelo uso, segundo os preceitos e doutrinas dos homens;
²³ As quais têm, na verdade, alguma aparência de sabedoria, em devoção voluntária, humildade, e em disciplina do corpo, mas não são de valor algum senão para a satisfação da carne. 
¹ Portanto, se já ressuscitastes com Cristo, buscai as coisas que são de cima, onde Cristo está assentado à destra de Deus.
² Pensai nas coisas que são de cima, e não nas que são da terra;
³ Porque já estais mortos, e a vossa vida está escondida com Cristo em Deus.
⁴ Quando Cristo, que é a nossa vida, se manifestar, então também vós vos manifestareis com ele em glória.
⁵ Mortificai, pois, os vossos membros, que estão sobre a terra: a fornicação, a impureza, o afeição desordenada, a vil concupiscência, e a avareza, que é idolatria;
⁶ Pelas quais coisas vem a ira de Deus sobre os filhos da desobediência;
⁷ Nas quais, também, em outro tempo andastes, quando vivíeis nelas.
⁸ Mas agora, despojai-vos também de tudo: da ira, da cólera, da malícia, da maledicência, das palavras torpes da vossa boca.
⁹ Não mintais uns aos outros, pois que já vos despistes do velho homem com os seus feitos,
¹⁰ E vos vestistes do novo, que se renova para o conhecimento, segundo a imagem daquele que o criou;
¹¹ Onde não há grego, nem judeu, circuncisão, nem incircuncisão, bárbaro, cita, servo ou livre; mas Cristo é tudo, e em todos.
¹² Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade;
¹³ Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.
¹⁴ E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.
¹⁵ E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações; e sede agradecidos.
¹⁶ A palavra de Cristo habite em vós abundantemente, em toda a sabedoria, ensinando-vos e admoestando-vos uns aos outros, com salmos, hinos e cânticos espirituais, cantando ao Senhor com graça em vosso coração.
¹⁷ E, quanto fizerdes por palavras ou por obras, fazei tudo em nome do Senhor Jesus, dando por ele graças a Deus Pai.
¹⁸ Vós, mulheres, estai sujeitas a vossos próprios maridos, como convém no Senhor.
¹⁹ Vós, maridos, amai a vossas mulheres, e não vos irriteis contra elas.
²⁰ Vós, filhos, obedecei em tudo a vossos pais, porque isto é agradável ao Senhor.
²¹ Vós, pais, não irriteis a vossos filhos, para que não percam o ânimo.
²² Vós, servos, obedecei em tudo a vossos senhores segundo a carne, não servindo só na aparência, como para agradar aos homens, mas em simplicidade de coração, temendo a Deus.
²³ E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor, e não aos homens,
²⁴ Sabendo que recebereis do Senhor o galardão da herança, porque a Cristo, o Senhor, servis.
²⁵ Mas quem fizer agravo receberá o agravo que fizer; pois não há acepção de pessoas. 
¹ Vós, senhores, fazei o que for de justiça e eqüidade a vossos servos, sabendo que também tendes um Senhor nos céus.
² Perseverai em oração, velando nela com ação de graças;
³ Orando também juntamente por nós, para que Deus nos abra a porta da palavra, a fim de falarmos do mistério de Cristo, pelo qual estou também preso;
⁴ Para que o manifeste, como me convém falar.
⁵ Andai com sabedoria para com os que estão de fora, remindo o tempo.
⁶ A vossa palavra seja sempre agradável, temperada com sal, para que saibais como vos convém responder a cada um.
⁷ Tíquico, irmão amado e fiel ministro, e conservo no Senhor, vos fará saber o meu estado;
⁸ O qual vos enviei para o mesmo fim, para que saiba do vosso estado e console os vossos corações;
⁹ Juntamente com Onésimo, amado e fiel irmão, que é dos vossos; eles vos farão saber tudo o que por aqui se passa.
¹⁰ Aristarco, que está preso comigo, vos saúda, e Marcos, o sobrinho de Barnabé, acerca do qual já recebestes mandamentos; se ele for ter convosco, recebei-o;
¹¹ E Jesus, chamado Justo; os quais são da circuncisão; são estes unicamente os meus cooperadores no reino de Deus; e para mim têm sido consolação.
¹² Saúda-vos Epafras, que é dos vossos, servo de Cristo, combatendo sempre por vós em orações, para que vos conserveis firmes, perfeitos e consumados em toda a vontade de Deus.
¹³ Pois eu lhe dou testemunho de que tem grande zelo por vós, e pelos que estão em Laodicéia, e pelos que estão em Hierápolis.
¹⁴ Saúda-vos Lucas, o médico amado, e Demas.
¹⁵ Saudai aos irmãos que estão em Laodicéia e a Ninfa e à igreja que está em sua casa.
¹⁶ E, quando esta epístola tiver sido lida entre vós, fazei que também o seja na igreja dos laodicenses, e a que veio de Laodicéia lede-a vós também.
¹⁷ E dizei a Arquipo: Atenta para o ministério que recebeste no Senhor, para que o cumpras.
¹⁸ Saudação de minha mão, de Paulo. Lembrai-vos das minhas prisões. A graça seja convosco. Amém. 
¹ Paulo, e Silvano, e Timóteo, à igreja dos tessalonicenses em Deus, o Pai, e no Senhor Jesus Cristo: Graça e paz tenhais de Deus nosso Pai e do Senhor Jesus Cristo.
² Sempre damos graças a Deus por vós todos, fazendo menção de vós em nossas orações,
³ Lembrando-nos sem cessar da obra da vossa fé, do trabalho do amor, e da paciência da esperança em nosso Senhor Jesus Cristo, diante de nosso Deus e Pai,
⁴ Sabendo, amados irmãos, que a vossa eleição é de Deus;
⁵ Porque o nosso evangelho não foi a vós somente em palavras, mas também em poder, e no Espírito Santo, e em muita certeza, como bem sabeis quais fomos entre vós, por amor de vós.
⁶ E vós fostes feitos nossos imitadores, e do Senhor, recebendo a palavra em muita tribulação, com gozo do Espírito Santo.
⁷ De maneira que fostes exemplo para todos os fiéis na macedônia e Acaia.
⁸ Porque por vós soou a palavra do Senhor, não somente na macedônia e Acaia, mas também em todos os lugares a vossa fé para com Deus se espalhou, de tal maneira que já dela não temos necessidade de falar coisa alguma;
⁹ Porque eles mesmos anunciam de nós qual a entrada que tivemos para convosco, e como dos ídolos vos convertestes a Deus, para servir o Deus vivo e verdadeiro,
¹⁰ E esperar dos céus o seu Filho, a quem ressuscitou dentre os mortos, a saber, Jesus, que nos livra da ira futura. 
¹ Porque vós mesmos, irmãos, bem sabeis que a nossa entrada para convosco não foi vã;
² Mas, mesmo depois de termos antes padecido, e sido agravados em Filipos, como sabeis, tornamo-nos ousados em nosso Deus, para vos falar o evangelho de Deus com grande combate.
³ Porque a nossa exortação não foi com engano, nem com imundícia, nem com fraudulência;
⁴ Mas, como fomos aprovados de Deus para que o evangelho nos fosse confiado, assim falamos, não como para agradar aos homens, mas a Deus, que prova os nossos corações.
⁵ Porque, como bem sabeis, nunca usamos de palavras lisonjeiras, nem houve um pretexto de avareza; Deus é testemunha;
⁶ E não buscamos glória dos homens, nem de vós, nem de outros, ainda que podíamos, como apóstolos de Cristo, ser-vos pesados;
⁷ Antes fomos brandos entre vós, como a ama que cria seus filhos.
⁸ Assim nós, sendo-vos tão afeiçoados, de boa vontade quiséramos comunicar-vos, não somente o evangelho de Deus, mas ainda as nossas próprias almas; porquanto nos éreis muito queridos.
⁹ Porque bem vos lembrais, irmãos, do nosso trabalho e fadiga; pois, trabalhando noite e dia, para não sermos pesados a nenhum de vós, vos pregamos o evangelho de Deus.
¹⁰ Vós e Deus sois testemunhas de quão santa, e justa, e irrepreensivelmente nos houvemos para convosco, os que crestes.
¹¹ Assim como bem sabeis de que modo vos exortávamos e consolávamos e testemunhávamos, a cada um de vós, como o pai a seus filhos;
¹² Para que vos conduzísseis dignamente para com Deus, que vos chama para o seu reino e glória.
¹³ Por isso também damos, sem cessar, graças a Deus, pois, havendo recebido de nós a palavra da pregação de Deus, a recebestes, não como palavra de homens, mas (segundo é, na verdade), como palavra de Deus, a qual também opera em vós, os que crestes.
¹⁴ Porque vós, irmãos, haveis sido feitos imitadores das igrejas de Deus que na Judéia estão em Jesus Cristo; porquanto também padecestes de vossos próprios concidadãos o mesmo que os judeus lhes fizeram a eles,
¹⁵ Os quais também mataram o Senhor Jesus e os seus próprios profetas, e nos têm perseguido; e não agradam a Deus, e são contrários a todos os homens,
¹⁶ E nos impedem de pregar aos gentios as palavras da salvação, a fim de encherem sempre a medida de seus pecados; mas a ira de Deus caiu sobre eles até ao fim.
¹⁷ Nós, porém, irmãos, sendo privados de vós por um momento de tempo, de vista, mas não do coração, tanto mais procuramos com grande desejo ver o vosso rosto;
¹⁸ Por isso bem quisemos uma e outra vez ir ter convosco, pelo menos eu, Paulo, mas Satanás no-lo impediu.
¹⁹ Porque, qual é a nossa esperança, ou gozo, ou coroa de glória? Porventura não o sois vós também diante de nosso Senhor Jesus Cristo em sua vinda?
²⁰ Na verdade vós sois a nossa glória e gozo. 
¹ Por isso, não podendo esperar mais, achamos por bem ficar sozinhos em Atenas;
² E enviamos Timóteo, nosso irmão, e ministro de Deus, e nosso cooperador no evangelho de Cristo, para vos confortar e vos exortar acerca da vossa fé;
³ Para que ninguém se comova por estas tribulações; porque vós mesmos sabeis que para isto fomos ordenados,
⁴ Pois, estando ainda convosco, vos predizíamos que havíamos de ser afligidos, como sucedeu, e vós o sabeis.
⁵ Portanto, não podendo eu também esperar mais, mandei-o saber da vossa fé, temendo que o tentador vos tentasse, e o nosso trabalho viesse a ser inútil.
⁶ Vindo, porém, agora Timóteo de vós para nós, e trazendo-nos boas novas da vossa fé e amor, e de como sempre tendes boa lembrança de nós, desejando muito ver-nos, como nós também a vós;
⁷ Por esta razão, irmãos, ficamos consolados acerca de vós, em toda a nossa aflição e necessidade, pela vossa fé,
⁸ Porque agora vivemos, se estais firmes no Senhor.
⁹ Porque, que ação de graças poderemos dar a Deus por vós, por todo o gozo com que nos regozijamos por vossa causa diante do nosso Deus,
¹⁰ Orando abundantemente dia e noite, para que possamos ver o vosso rosto, e supramos o que falta à vossa fé?
¹¹ Ora, o mesmo nosso Deus e Pai, e nosso Senhor Jesus Cristo, encaminhem a nossa viagem para vós.
¹² E o Senhor vos aumente, e faça crescer em amor uns para com os outros, e para com todos, como também o fazemos para convosco;
¹³ Para confirmar os vossos corações, para que sejais irrepreensíveis em santidade diante de nosso Deus e Pai, na vinda de nosso Senhor Jesus Cristo com todos os seus santos. 
¹ Finalmente, irmãos, vos rogamos e exortamos no Senhor Jesus, que assim como recebestes de nós, de que maneira convém andar e agradar a Deus, assim andai, para que possais progredir cada vez mais.
² Porque vós bem sabeis que mandamentos vos temos dado pelo Senhor Jesus.
³ Porque esta é a vontade de Deus, a vossa santificação; que vos abstenhais da fornicação;
⁴ Que cada um de vós saiba possuir o seu vaso em santificação e honra;
⁵ Não na paixão da concupiscência, como os gentios, que não conhecem a Deus.
⁶ Ninguém oprima ou engane a seu irmão em negócio algum, porque o Senhor é vingador de todas estas coisas, como também antes vo-lo dissemos e testificamos.
⁷ Porque não nos chamou Deus para a imundícia, mas para a santificação.
⁸ Portanto, quem despreza isto não despreza ao homem, mas sim a Deus, que nos deu também o seu Espírito Santo.
⁹ Quanto, porém, ao amor fraternal, não necessitais de que vos escreva, visto que vós mesmos estais instruídos por Deus que vos ameis uns aos outros;
¹⁰ Porque também já assim o fazeis para com todos os irmãos que estão por toda a macedônia. Exortamo-vos, porém, a que ainda nisto aumenteis cada vez mais.
¹¹ E procureis viver quietos, e tratar dos vossos próprios negócios, e trabalhar com vossas próprias mãos, como já vo-lo temos mandado;
¹² Para que andeis honestamente para com os que estão de fora, e não necessiteis de coisa alguma.
¹³ Não quero, porém, irmãos, que sejais ignorantes acerca dos que já dormem, para que não vos entristeçais, como os demais, que não têm esperança.
¹⁴ Porque, se cremos que Jesus morreu e ressuscitou, assim também aos que em Jesus dormem, Deus os tornará a trazer com ele.
¹⁵ Dizemo-vos, pois, isto, pela palavra do Senhor: que nós, os que ficarmos vivos para a vinda do Senhor, não precederemos os que dormem.
¹⁶ Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus; e os que morreram em Cristo ressuscitarão primeiro.
¹⁷ Depois nós, os que ficarmos vivos, seremos arrebatados juntamente com eles nas nuvens, a encontrar o Senhor nos ares, e assim estaremos sempre com o Senhor.
¹⁸ Portanto, consolai-vos uns aos outros com estas palavras. 
¹ Mas, irmãos, acerca dos tempos e das estações, não necessitais de que se vos escreva;
² Porque vós mesmos sabeis muito bem que o dia do Senhor virá como o ladrão de noite;
³ Pois que, quando disserem: Há paz e segurança, então lhes sobrevirá repentina destruição, como as dores de parto àquela que está grávida, e de modo nenhum escaparão.
⁴ Mas vós, irmãos, já não estais em trevas, para que aquele dia vos surpreenda como um ladrão;
⁵ Porque todos vós sois filhos da luz e filhos do dia; nós não somos da noite nem das trevas.
⁶ Não durmamos, pois, como os demais, mas vigiemos, e sejamos sóbrios;
⁷ Porque os que dormem, dormem de noite, e os que se embebedam, embebedam-se de noite.
⁸ Mas nós, que somos do dia, sejamos sóbrios, vestindo-nos da couraça da fé e do amor, e tendo por capacete a esperança da salvação;
⁹ Porque Deus não nos destinou para a ira, mas para a aquisição da salvação, por nosso Senhor Jesus Cristo,
¹⁰ Que morreu por nós, para que, quer vigiemos, quer durmamos, vivamos juntamente com ele.
¹¹ Por isso exortai-vos uns aos outros, e edificai-vos uns aos outros, como também o fazeis.
¹² E rogamo-vos, irmãos, que reconheçais os que trabalham entre vós e que presidem sobre vós no Senhor, e vos admoestam;
¹³ E que os tenhais em grande estima e amor, por causa da sua obra. Tende paz entre vós.
¹⁴ Rogamo-vos, também, irmãos, que admoesteis os desordeiros, consoleis os de pouco ânimo, sustenteis os fracos, e sejais pacientes para com todos.
¹⁵ Vede que ninguém dê a outrem mal por mal, mas segui sempre o bem, tanto uns para com os outros, como para com todos.
¹⁶ Regozijai-vos sempre.
¹⁷ Orai sem cessar.
¹⁸ Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.
¹⁹ Não extingais o Espírito.
²⁰ Não desprezeis as profecias.
²¹ Examinai tudo. Retende o bem.
²² Abstende-vos de toda a aparência do mal.
²³ E o mesmo Deus de paz vos santifique em tudo; e todo o vosso espírito, e alma, e corpo, sejam plenamente conservados irrepreensíveis para a vinda de nosso Senhor Jesus Cristo.
²⁴ Fiel é o que vos chama, o qual também o fará.
²⁵ Irmãos, orai por nós.
²⁶ Saudai a todos os irmãos com ósculo santo.
²⁷ Pelo Senhor vos conjuro que esta epístola seja lida a todos os santos irmãos.
²⁸ A graça de nosso Senhor Jesus Cristo seja convosco. Amém. 
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
