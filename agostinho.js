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
LIVRO PRIMEIRO 
CAPÍTULO I
Louvor e Invocação
 És grande, Senhor e infinitamente digno de ser louvado; grande é teu poder, e
incomensurável tua sabedoria. E o homem, pequena parte de tua criação quer louvar-te, e
precisamente o homem que, revestido de sua mortalidade, traz em si o testemunho do pecado e a
prova de que resistes aos soberbos. Todavia, o homem, partícula de tua criação, deseja louvar-te.
Tu mesmo que incitas ao deleite no teu louvor, porque nos fizeste para ti, e nosso coração está
inquieto enquanto não encontrar em ti descanso.
 Concede, Senhor, que eu bem saiba se é mais importante invocar-te e louvar-te, ou se
devo antes conhecer-te, para depois te invocar. Mas alguém te invocará antes de te conhecer?
Porque, te ignorando, facilmente estará em perigo de invocar outrem. Porque, porventura, deves
antes ser invocado para depois ser conhecido? Mas como invocarão aquele em que não crêem?
Ou como haverão de crer que alguém lhos pregue?
 Com certeza, louvarão ao Senhor os que o buscam, porque os que o buscam o encontram
e os que o encontram hão de louvá-lo.
 Que eu, Senhor, te procure invocando-te, e te invoque crendo em ti, pois me pregaram teu
nome. invoca-te, Senhor, a fé que tu me deste, a fé que me inspiraste pela humanidade de teu
Filho e o ministério de teu pregador.
CAPÍTULO II
Deus está no homem, e este em Deus
 E como invocarei meu Deus, meu Deus e meu Senhor, se ao invocá-lo o faria certamente
dentro de mim? E que lugar há em mim para receber o meu Deus, por onde Deus desça a mim, o
Deus que fez o céu e a terra? Senhor, haverá em mim algum espaço que te possa conter? Acaso
te contêm o céu e a terra, que tu criaste, e dentro dos quais também criaste a mim? Será, talvez,
pelo fato de nada do que existe sem Ti, que todas as coisas te contêm? E, assim, se existo, que
motivo pode haver para Te pedir que venhas a mim, já que não existiria se em mim não
habitásseis?
 Ainda não estive no inferno, mas também ali estás presente, pois, se descer ao inferno, ali
estarás.
 Eu nada seria, meu Deus, nada seria em absoluto se não estivesses em mim; talvez seria
melhor dizer que eu não existiria de modo algum se não estivesse em ti, de quem, por quem e em
quem existem todas as coisas? Assim é, Senhor, assim é. Como, pois, posso chamar-te se já
estou em ti, ou de onde hás de vir a mim, ou a que parte do céu ou da terra me hei de recolher,
para que ali venha a mim o meu Deus, ele que disse: Eu encho o céu e a terra?
CAPÍTULO III
Onde está Deus?
 Porventura o céu e a terra te contêm, porque os enches? Ou será melhor dizer que os
enches, mas que ainda resta alguma parte de ti, já que eles não te podem conter? E onde
estenderás isso que sobra de ti, depois de cheios o céu e a terra? Mas será necessário que sejas
contido em algum lugar, tu que conténs todas as coisas, visto que as que enches as ocupas
contendo-as? Porque não são os vasos cheios de ti que te tornam estável, já que, quando se
quebrarem, tu não te derramarás; e quando te derramas sobre nós, isso não o fazes porque cais,
mas porque nos levantas, nem porque te dispersas, mas porque nos recolhes.
 No entanto, todas as coisas que enches, enche-as todas com todo o teu ser; ou talvez, por
não te poderem conter totalmente todas as coisas, contêm apenas parte de ti? E essa parte de ti
as contêm todas ao mesmo tempo, ou cada uma a sua, as maiores a maior parte, e as menores a 
menor parte? Mas haverá em ti partes maiores e partes menores? Acaso não estás todo em todas
as partes, sem que haja coisa alguma que te contenha totalmente?
CAPÍTULO IV
As perfeições de Deus
 Que és, portanto, ó meu Deus? Que és, repito, senão o Senhor Deus? Ó Deus sumo,
excelente, poderosíssimo, onipotentíssimo, misericordiosíssimo e justíssimo.
 Tao oculto e tão presente, formosíssimo e fortíssimo, estável e incompreensível; imutável,
mudando todas as coisas; nunca novo e nunca velho; renovador de todas as coisas, conduzindo à
ruína os soberbos sem que eles o saibam; sempre agindo e sempre repouso; sempre
sustentando, enchendo e protegendo; sempre criando, nutrindo e aperfeiçoando, sempre
buscando, ainda que nada te falte.
 Amas sem paixão; tens zelos, e estás tranqüilo; te arrependes, e não tens dor; te iras, e
continuas calmo; mudas de obra, mas não de resolução; recebes o que encontras, e nunca
perdeste nada; não és avaro, e exiges lucro. A ti oferecemos tudo, para que sejas nosso devedor;
porém, quem terá algo que não seja teu, pois, pagas dívidas que a ninguém deves, e perdoas
dívidas sem que nada percas com isso?
 E que é o que até aqui dissemos, meu Deus, minha vida, minha doçura santa, ou que
poderá alguém dizer quando fala de ti? Mas ai dos que nada dizem de ti, pois, embora seu muito
falar, não passam de mudos charlatães.
CAPÍTULO V
Súplica
 Quem me dera descansar em ti! Quem me dera que viesses a meu coração e que o
embriagasses, para que eu me esqueça de minhas maldades e me abrace contigo, meu único
bem! Que és para mim? Tem piedade de mim, para que eu possa falar. E que sou eu para ti, para
que me ordenes amar-te e, se não o fizer, irar-te contra mim, ameaçando-me com terríveis
castigos? Acaso é pequeno o castigo de não te amar? Ai de mim! Dize-me por tuas misericórdias,
meu Senhor e meu Deus, que és para mim? Dize a minha alma: Eu sou a tua salvação. Que eu
ouça e siga essa voz e te alcance. Não queiras esconder-me teu rosto. Morra eu para que possa
vê-lo para não morrer eternamente.
 Estreita é a casa de minha alma para que venhas até ela: que seja por ti dilatada. Está em
ruínas; restaura-a. Há nela nódoas que ofendem o teu olhar: confesso-o, pois eu o sei; porém,
quem haverá de purificá-la? A quem clamarei senão a ti? Livra-me, Senhor, dos pecados ocultos,
e perdoa a teu servo os alheios! Creio, e por isso falo. Tu o sabes, Senhor. Acaso não confessei
diante de ti meus delitos contra mim, ó meu Deus? E não me perdoaste a impiedade de meu
coração? Não quero contender em juízos contigo, que és a verdade, e não quero enganar-me a
mim mesmo, para que não se engane a si mesma minha iniqüidade. Não quero contender em
juízos contigo, porque, se dás atenção às iniqüidades, Senhor, quem, Senhor, subsistirá?
CAPÍTULO VI
Os primeiros anos
 Permita, porém, que eu fale em presença de tua misericórdia, a mim, terra e cinza; deixa
que eu fale, porque é à tua misericórdia que falo, e não ao homem, que de mim escarnece. Talvez
também tu te rias de mim, mas, voltado para mim, terás compaixão.
 E que pretendo dizer-te, Senhor, senão que ignoro de onde vim para aqui, para esta não
sei se posso chamar vida mortal ou morte vital? Não o sei. Mas receberam-me os consolos de
tuas misericórdias, conforme o que ouvi de meus pais carnais, de quem e em quem me formaste
no tempo, pois eu de mim nada recordo. Receberam-me os consolos do leite humano, do qual
nem minha mãe, nem minhas amas enchiam os seios; mas eras tu que, por meio delas, me davas 
aquele alimento da infância, de acordo com o seu desígnio, e segundo os tesouros dispostos por ti
até no mais íntimo das coisas.
 Também por tua causa é que eu não queria mais do que me davas; por tua causa é que
minhas amas queriam dar-me o que tu lhes davas, pois elas, movidas de sadio afeto, queriam darme aquilo que abundavam graças a ti, já que era um bem para elas ou delas receber aquele bem,
embora realmente não fosse delas, meros instrumentos, porque de ti procedem, com certeza,
todos os bens, ó Deus, e de ti, Deus meu, depende toda minha salvação.
 Tudo isto vim a saber mais tarde, quando me falaste por meio dos mesmos bens que me
concedias interior e exteriormente. Porque então as únicas coisas que fazia era sugar o leite,
aquietar-me com os afagos e chorar as dores de minha carne.
 Depois também comecei a rir, primeiro dormindo, depois acordado. Isto disseram de mim,
e o creio, porque o mesmo acontece com outros meninos, pois eu não tenho a menor lembrança
dessas coisas.
 Pouco a pouco comecei a me dar conta de onde estava, e a querer dar a conhecer meus
desejos a quem os podia satisfazer, embora realmente não o pudessem, porque meus desejos
estavam dentro, e eles fora; e por nenhum sentido podiam entrar em minha alma. assim, agitava
os braços e dava gritos e sinais semelhantes a meus desejos, os poucos que podia e como podia,
embora não fossem de fato sua expressão. Mas, se não era atendido, ou porque não me
entendessem, ou porque o que desejava me fosse prejudicial, eu me indignava com os adultos,
porque não me obedeciam, e sendo livres, por não quererem me servir; e deles me vingava
chorando. Assim são as crianças que pude observar; e que eu também fosse assim, mais me
ensinaram elas, sem o saber, do que os que me criaram, sabendo-o.
 Minha infância morreu há muito tempo, mas eu continuo vivo. Mas, dize-me, Senhor, tu
que sempre vives, e em quem nada falece – porque existias antes do começo dos séculos, e
antes de tudo o que há de anterior, e és Deus e Senhor de todas as coisas; e esse encontram em
ti as causas de tudo o que é instável, e em ti permanecem os princípios imutáveis de tudo o que
se transforma, e vivem as razões eternas de tudo o que é transitório – dize-me a mim, eu to
suplico, ó meu Deus, diz-me, misericordioso, a mim que sou miserável, dize-me: porventura a
minha infância sucedeu a outra idade minha, já morta? Será esta aquela que vivi no ventre de
minha mãe? Porque também desta me revelaram algumas coisas, e eu mesmo já vi mulheres
grávidas.
 E antes desse tempo, minha doçura e meu Deus, que era eu? Fui alguém, ou era parte de
alguma coisa? Dize-mo, porque não tenho quem me responda, nem meu pai, nem minha mãe,
nem a experiência dos outros, nem minha memória. Acaso te ris de mim, porque desejo saber
estas coisas, e me mandas que te louve e te confesse pelo que conheci de ti?
 Eu te confesso, Senhor dos céus e da terra, louvando-te por meus princípios e por minha
infância, de que não tenho memória, mas que, por tua graça, o homem pode conjectura de si
pelos outros, crendo em muitas coisas, ainda que confiado na autoridade de humildes mulheres.
Então eu já existia, já vivia de verdade; e, já no fim da infância procurava sinais com que pudesse
exprimir aos outros as coisas que sentia. Com efeito, de onde poderia vir semelhante criatura,
senão de ti, Senhor? Acaso alguém pode ser artífice de si mesmo? Porventura existirá algum
outro manancial por onde corra até nos o ser e a vida, diferente da que nos dais, Senhor, tu em
quem ser e vida não são coisas distintas, porque és o Sumo Ser e a Suprema Vida? Com efeito,
és sumo, e não te mudas, nem caminha para ti o dia de hoje, apesar de caminhar por ti, apesar de
estarem em ti com certeza todas estas coisas, que não teriam caminho por onde passar se não as
contivesses. E porque teus anos não fenecem, teus anos são um perpétuo hoje. Oh! Quantos dias
nossos e de nossos pais já passaram por este teu hoje, e dele receberam sua duração, e de
alguma maneira existiram, e quantos passarão ainda, e receberão seu modo, e seu ser? Mas tu
és sempre o mesmo, e todas as coisas de amanhã e do futuro, e todas as coisas de ontem e do
passado, nesse hoje as fazes, nesse hoje as fizeste.
 Que importa que alguém não entenda essas coisas? Que este alguém se ria, e diga: que é
isto? Que se ria assim, e que prefira encontrar-te sem indagação do que, indagando, não te
encontrar.
CAPÍTULO VII
Os pecados da primeira infância 
 Escuta-me, ó meu Deus! Ai dos pecados dos homens! E quem isto te diz é um homem, e
tu te compadeces dele porque o criaste, e não foste autor do pecado que nele existe.
 Quem me poderá lembrar o pecado da infância, já que ninguém está diante de ti limpo de
pecado, nem mesmo a criança cuja vida conta um só dia sobre a terra? Quem mo recordará?
Acaso alguma criança pequena de hoje, em quem vejo a imagem do que não recordo de mim? E
em que eu poderia pecar nesse tempo? Acaso por desejar o peito da nutriz, chorando? Se agora
eu suspirasse com a mesma avidez, não pelo seio materno, mas pelo alimento próprio da minha
idade, seria justamente escarnecido e censurado. Logo, era então digno de repreensão o meu
proceder; mas como não podia entender a censura, nem o costume nem a razão permitiam que
eu fosse repreendido. Prova está que, ao crescermos, extirpamos e afastamos de nós essa
sofreguidão; e jamais vi homem sensato que, para limpar uma coisa viciosa, prive-a do que tem
de bom.
 Acaso, mesmo para aquela idade, era bom pedir chorando o que não se me podia dar sem
dano, indignar-me acremente com as pessoas livres que não se submetiam, assim como as
pessoas respeitáveis, e até com meus próprios pais, e com muitos outros que, mais sensatos, não
davam atenção aos sinais de meus caprichos, enquanto eu me esforçava por agredi-los com
meus golpes, quanto podia, por não obedecerem às minhas ordens, que me teriam sido danosas?
Daqui se segue que o que é inocente nas crianças é a debilidade dos membros infantis, e não a
alma.
 Certa vez, vi e observei um menino invejoso. Ainda não falava, e já olhava pálido e com
rosto amargurado para o irmãozinho colaço. Quem não terá testemunhado isso? Dizem que as
mães e as amas tentam esconjurar este defeito com não sei que práticas. Mas se poderá
considerar inocência o não suportar que se partilhe a fonte do leite, que mana copiosa e
abundante, com quem está tão necessitado do mesmo socorro, e que sustenta a vida apenas com
esse alimento? Mas costuma-se tolerar indulgentemente essas faltas, não porque sejam
insignificantes, mas porque espera-se que desapareçam com os anos. Por isso, sendo tais coisas
perdoáveis em um menino, quando se acham em um adulto, mal as podemos suportar.
 Assim, pois, meu Senhor e meu Deus, tu que me deste a vida e corpo, o qual dotaste,
como vemos, de sentidos e proviste de membros, adornando-o de beleza e de instintos naturais,
com os quais pudesse defender sua integridade e conservação, tu me mandas que te louve por
esses dons e te confesse e cante teu nome altíssimo. Serias Deus onipotente e bom ainda que só
tivesses criado apenas estas coisas, que nenhum outro pode fazer senão tu, ó Unidade, origem
de todas as variedades, ó Beleza, que dás forma a todas as coisas, e com tua lei as ordenas!
 Tenho vergonha, Senhor, de ter de somar à vida terrena que vivo aquela idade que não
recordo ter vivido, na qual acredito pelo testemunho de outros, por vê-lo assim em outras crianças,
embora essa conjectura mereça toda a fé. As trevas em que está envolto meu esquecimento a
seu respeito assemelham-se à vida que vivi no ventre de minha mãe.
 Assim, se fui concebido em iniqüidade, e se em pecado me alimentou minha mãe, onde,
suplico-te, meu Deus, onde, Senhor, eu, teu servo, onde e quando fui inocente? Mas eis que
silencio sobre esse tempo. Para que ocupar-se dele, se dele já não conservo nenhuma
lembrança?
CAPÍTULO VIII
As primeiras palavras
 Acaso não foi caminhando da infância até aqui que cheguei à puerícia? Ou melhor, esta
veio a mim e suplantou à infância sem que esta fosse embora, pois, para onde poderia ir?
Contudo deixou de existir, porque eu já não era um bebezinho que não falava, mas um menino
que aprendia a falar. Disso me recordo; mas como aprendi a falar, só mais tarde é que vim a
perceber. Não mo ensinaram os mais velhos apresentando-me as palavras com certa ordem e
método, como logo depois fizeram com as letras; mas foi por mim mesmo, com o entendimento
que me deste, meu Deus, quando queria manifestar meus sentimentos com gemidos, gritinhos, e
vários movimentos do corpo, a fim de que atendessem meus desejos; e também ao ver que não
podia exteriorizar tudo o que queria, nem ser compreendido por todos aqueles a quem me dirigia.
Assim, pois, quando chamavam alguma coisa pelo nome, eu a retinha na memória e, ao se 
pronunciar de novo a tal palavra, moviam o corpo na direção do objeto, eu entendia e notava que
aquele objeto era o denominado com a palavra que pronunciavam, porque assim o chamavam
quando o desejavam mostrar.
 Que esta fosse sua intenção, era-me revelado pelos movimentos do corpo, que são como
uma linguagem universal, feita com a expressão rosto, a atitude dos membros e o tom da voz, que
indicam os afetos da alma para pedir, reter, rejeitar ou evitar alguma coisa. Deste modo, das
palavras usadas nas e colocadas em várias frases e ouvidas repetidas vezes, ia eu aos poucos
notando o significado e, domada a dificuldade de minha boca, comecei a dar a entender minhas
vontades por meio delas.
 Foi assim que comecei a comunicar meus desejos às pessoas entre as quais vivia, e entrei
a fazer parte do tempestuoso mundo da sociedade, dependendo da autoridade de meus pais e
obedecendo às pessoas mais velhas.
CAPÍTULO IX
Estudos e jogos
 Ó meu Deus, meu Deus! Que de misérias e enganos não experimentei então, quando se
me propunha, em criança, como norma de bem viver, obedecer os mestres que me instigavam a
brilhar neste mundo, e me ilustrar nas artes da língua, fiel instrumento para obter honras humanas
e satisfazer a cobiça! Mudaram-me à escola, para que aprendesse as letras, nas quais eu,
miserável, desconhecia o que havia de útil. Contudo, se era preguiçoso para aprendê-las, era
fustigado, num sistema louvado pelos mais velhos; muitos deles, que levavam esse gênero de
vida antes de nós, nos traçaram caminhos tão dolorosos pelos quais éramos obrigados a
caminhar, multiplicando assim o trabalho e a dor aos filhos de Adão.
 Mas, por sorte, encontrei homens que te invocavam, Senhor, e com eles aprendi a te
sentir, quanto possível, como a um Ser grande que podia escutar-nos e vir em nosso auxílio,
embora sem a percepção dos sentidos. Ainda menino, pois, comecei a invocar-te como refúgio e
amparo e, para te invocar, desatei os nós de minha língua; e, embora pequeno, te rogava já com
grande fervor para que não me açoitassem na escola. E quando não me escutavas, o que servia
para meu proveito os mestres, assim como meus próprios pais, que certamente não desejavam o
meu mal, riam-se daquele castigo, que então era para mim grave suplício.
 Porventura, Senhor, haverá alguma alma tão grande, unida a ti com tão ardente afeto, pois
isto também pode ser produzido pela estultice – repito, uma alma que alcance tal grandeza de
ânimo que despreze os cavaletes e garfos de ferro, e os demais instrumentos de martírio – para
fugir dos quais se te dirigem súplicas de todas as partes do mundo? Haverá uma alma que assim
os despreze – rindo-se dos que têm deles tanto horror – como se riam nossos pais dos tormentos
que éramos castigados por nossos mestres quando meninos? Porque, na verdade, não os
temíamos menos, nem te rogávamos com menor fervor para que nos livrasses deles.
 Contudo, pecávamos por negligencia escrevendo ou lendo, estudando menos do que nos
era exigido; e não era por falta de memória ou de inteligência, que para aquela idade, Senhor, me
deste de modo suficiente, senão porque eu gostava de brincar, embora os que nos castigavam
não fizessem outra coisa. Mas os jogos dos mais velhos chamavam-se negócios, enquanto que os
dos meninos eram por eles castigados, sem que ninguém se compadecesse de uns e de outros,
ou melhor, de ambos. Um juiz sensato poderia aprovar os castigos que eu, menino, recebia
porque jogava bola, e porque com este jogo atrasava o aprendizado das letras, com as quais,
adulto haveria de jogar menos inocentemente?
 Acaso fazia outra coisa naquele que me castigava? Se nalguma questiúncula era vencido
por algum colega seu, não era mais atormentado pela cólera e pela inveja do que eu, quando uma
partida de bola era vencido por meu companheiro?
CAPÍTULO X
Amor ao jogo 
 Contudo, Senhor meu, ordenador e criador da natureza, mas do pecado somente
ordenador, eu pecava; pecava desobedecendo as ordens de meus pais e mestres, uma vez que
podia no futuro fazer bom uso das letras que desejavam me ensinar, qualquer que fosse sua
intenção.
 E não era desobediente para me ocupar de coisas melhores, mas por amor ao jogo;
buscava nos combates orgulhosas vitórias; deleitava-me com histórias frívolas, com as quais
incentivava sempre mais minha curiosidade. Igualmente curiosos, meus olhos se abriam sempre
mais para os jogos e espetáculos dos adultos, jogos que dão tao grande dignidade a quem os
oferece, que quase todos desejam as mesmas dignidades para seus filhos. Contudo, gostam de
os castigar se com tais espetáculos fogem dos estudos, por meio dos quais desejam que eles
venham um dia a oferecer espetáculos semelhantes. Senhor, olha misericordiosamente para
essas coisas, e livra-nos delas a nós que já te invocamos; mas livra também aos que ainda não te
invocam, a fim de que te invoquem, e sejam igualmente libertados.
CAPÍTULO XI
O batismo diferido
 Ainda menino, ouvi falar da vida eterna, que nos está prometida pela humildade de Jesus,
nosso Senhor, que desceu até nossa soberba; e fui marcado com o sinal da cruz, sendo-me dado
saborear de seu sal logo que saí do ventre de minha mãe, que sempre esperou muito em ti.
 Tu viste, Senhor, que numa ocasião, ainda menino, atacou-me repentinamente um dor de
estômago que me abrasava, e que me aproximou da morte. Tu viste também, meu Deus, pois já
me tinhas sob tua guarda, com que fervor de espírito e com que fé pedi à piedade de minha mãe,
e da mãe de todos nós, tua Igreja, o batismo de teu Cristo, meu Deus e Senhor. Perturbou-se
minha mãe carnal, pois que me criava com mais amor em seu casto coração em tua fé para a vida
eterna e, solícita, já havia cuidado de que me iniciasse e purificasse com os sacramentos da
salvação, confessando-te, ó meu Senhor Jesus, em remissão de meus pecados, quando, de
repente, comecei a melhorar. Em vista disso, diferiu-se minha purificação, considerando que seria
impossível, se eu vivesse, que não me tornasse a manchar; pois a culpa dos pecados cometidos
depois do batismo é muito maior e mais perigosa.
 Nesta época eu já tinha fé verdadeira, juntamente com minha mãe e com todos da casa, à
exceção de meu pai, que, porém, não pôde vencer em mim a ascendência da piedade materna,
para que deixasse de acreditar em Cristo, tal como ele não acreditava; minha mãe, solícita,
cuidava de que tu, meu Deus, fosses mais pai para mim do que ele, e a ajudavas a triunfar do
marido, a quem servia melhor, porque nele te servia a ti e a tuas ordens.
 Mas, meu Deus, suplico-te que me mostres, se te apraz, por que motivo se diferiu então
meu batismo; se foi ou não para meu bem que me soltaram as rédeas do pecado. Por que razão
ainda hoje se diz de uns e de outros, como ouvimos em muitos lugares: “Deixe que faça o que
quiser, porque ainda não está batizado” – embora não digamos da saúde do corpo: “Deixe que
receba ainda mais feridas, porque ainda não está curado?”
 Quanto melhor teria sido para mim receber logo a saúde, e que meus cuidados e os dos
meus fossem empregados em conservar intacta debaixo da tua proteção a saúde da minha alma,
que me havias concedido! Melhor fora, certamente; porém, como minha mãe, sem dúvida, já
previa quantas e quão grandes ondas de tentações me ameaçariam depois da meninice, preferiu
expor-me a elas como terra grosseira que depois receberia forma, do que expor-me já como
imagem tua.
CAPÍTULO XII
Ódio ao estudo 
 Nesta minha infância, na qual eu tinha menos que temer por mim do que em minha
adolescência, eu não gostava dos estudos, e odiava que a eles me obrigassem. Contudo, era
coagido, e me faziam grande bem. Quem não procedia bem era eu, que não estudava a não ser
constrangido, pois ninguém faz bem o que faz contra a vontade, mesmo que seja bom o que faz.
 Tampouco os que obrigavam a estudar agiam corretamente; antes, todo o bem que eu
recebia vinha de ti, meu Deus, porque eles não tinham outro fim ao me obrigarem a estudar senão
saciar o apetite de abundante miséria e de gloria ignominiosa. Mas tu, Senhor, que tens contados
os cabelos de nossa cabeça, usavas do erro de todos os que me coagiam a estudar para minha
utilidade; e usavas da minha falta de vontade de estudar para meu castigo, de que certamente eu
já era digno, sendo ainda tão pequeno, e tao grande pecador.
 Assim, convertias em bem o mal que eles me faziam, e dos meus pecados, me davas justa
retribuição, porque é teu desígnio, e assim acontece, que toda alma desordenada seja castigo de
si mesma.
CAPÍTULO XIII
Gosto pelo latim
 Porque odiava eu as letras gregas, que me ensinavam quando eu era criança? Não o sei,
e nem agora o posso explicar. Em compensação, as letras latinas me apaixonavam, não as
ensinadas pelos professores primários, mas a que é explicada pelos chamados gramáticos,
porque aquelas primeiras, com as quais se aprende a ler, a escrever e a contar, não me foram
menos pesadas e insuportáveis que as gregas. Mas donde podia proceder essa aversão, senão
do pecado e da vaidade da vida, porque eu era carne e vento que caminha e não volta?
 Aquelas primeiras letras, pelas quais podia, como ainda faço, chegar e ler tudo o que há
escrito e a escrever tudo o que quero, eram melhores e mais úteis que aquelas outras nas quais
me obrigavam a decorar os erros de um tal Enéias, esquecido dos meus, e a chorar a morte de
Dido, que se suicidou por amor, enquanto isso, eu, miserabilíssimo, suportava a minha própria
morte com olhos enxutos, morrendo para ti, ó meu Deus, minha vida!
 Na verdade, que pode haver de mais miserável do que um infeliz que não se compadece
de si mesmo e que, chorando a morte de Dido por amor de Enéias, não chora sua própria morte
por falta de amor a ti, ó Deus, luz de meu coração, pão interior de minha alma, virtude fecundante
de meu pensamento? Não te amava; prevaricava longe de ti, e ouvia de todas as partes: “Muito
bem! Muito bem!” – porque a amizade deste mundo é adultério contra ti; e se aclamam a alguém
dizendo: “Muito bem! Muito bem!” – é para que este não se envergonhe de ser assim. Eu não
chorava estas faltas, chorava a morte de Dido “que se suicidou com a espada”, eu procurava as
últimas de tuas criaturas, abandonando-te a ti, como terra que eu era, atraída pela terra. Se então
me proibissem a leitura de tais coisas, me afligiriam por não ler aquilo que me comovia até a dor.
Não obstante, semelhante loucura é considerada como coisa mais nobre e proveitosa que as
letras pelas quais aprendemos a ler e a escrever.
 Mas agora, meu Deus, grite em minha alma tua verdade, e diga: Não é assim, não é
assim, antes, aquela primeira instrução é absolutamente superior; pois eu preferiria esquecer
todas as aventuras de Enéias, e outras histórias semelhantes, do que o saber ler e escrever. Sei
que nas escolas dos gramáticos pendem cortinas às portas; porém, servem menos para velar o
segredo que para encobrir o erro.
 Não gritem contra mim aqueles mestres a quem já não temo, enquanto confesso a ti os
desejos de minha alma, e aborreço dos meus maus caminhos, a fim de amar os teus. Não gritem
contra mim os comerciantes da gramática, pois, se eu os interrogar sobre se é verdade que
Enéias veio uma vez a Cartago, como afirma o poeta, os néscios responderão que não sabem, e
os sábios negarão o fato. Porém, se lhes perguntar como se escreve o nome de Enéias, todos os
que estudaram me responderão a mesma coisa, de acordo com a convenção com que os homens
fixaram o valor das letras do alfabeto.
 Do mesmo modo, se lhes perguntar o que seria mais prejudicial para a vida humana:
esquecer o ler e o escrever, ou todas as ficções dos poetas, quem não vê o que logo responderia
aquele que não estivesse de tudo esquecido de ti? Pequei, pois, em minha infância, ao preferir
vãos aos proveitosos, ou para dizer melhor, ao amar àqueles e ao odiar a estes; era para mim 
uma cantiga odiosa aquele “um e um, dois; dois e dois, quatro; enquanto considerava espetáculo
encantador a história do cavalo de madeira cheio de guerreiros e o incêndio de Tróia, “e até a
sombra de Creuza”.
CAPÍTULO XIV
Aversão ao grego
 Por que então aborrecia eu a literatura grega na qual se cantam tais coisas? Porque
também Homero é mui habilidoso em tecer essas historietas, dulcíssimo na sua frivolidade,
embora para mim, menino, fosse bem amargo. Creio que o mesmo ocorra com Virgilio para os
meninos gregos obrigados a estudá-lo, como a mim com relação a Homero. Era a dificuldade de
ter de aprender totalmente uma língua estranha que, como fel, aspergia de amargura todas as
doçuras das fábulas gregas.
 Eu ainda não conhecia nenhuma palavra daquela língua, e já me obrigavam com
veemência, com crueldades e terríveis castigos, a aprendê-la. Na verdade, eu, ainda criança,
também não conhecia nenhuma palavra de latim; contudo, com um pouco de atenção, o aprendi
entre o carinho das amas, os gracejos dos que se riam e as alegrias dos que brincavam, sem
medo algum nem tormento. Eu o aprendi, sem a pressão dos castigos, impelido unicamente por
meu coração desejoso de dar à luz seus sentimentos, e o único caminho para isso era aprender
algumas palavras, não dos que as ensinavam, mas do que falavam, em cujos ouvidos ia eu
depositando quanto sentia.
 Por aqui se evidencia claramente que, para instruir, tem mais eficácia e curiosidade livre do
que a necessidade inspirada pelo medo. Contudo, os excessos da curiosidade encontram nessa
violência um freio segundo tuas leis, ó Deus; que desde as palmatórias dos mestres até os
tormentos dos mártires sabem dosar suas salutares amarguras, que nos reconduzem a ti do seio
do pernicioso deleite que de ti nos apartara.

CAPÍTULO XV
Oração
 Ouvi, Senhor, minha oração, para que não desfaleça minha alma sob a tua lei, nem me
canse em confessar tuas misericórdias, com as quais me arrancaste de meus perversos
caminhos; que tua doçura sobrepuje todas as doçuras que segui, e assim te ame fortissimamente,
e abrace tua mão com toda minha alma, e me livres de toda a tentação até o fim dos meus dias.
Pois é, Senhor, meu rei e meu Deus, e a ti consagro quanto falo, escrevo, leio e conto, pois
quando aprendia aquelas futilidades, tu eras o que me davas a verdadeira disciplina, e já me
perdoaste os pecados de deleite cometidos naquelas vaidades. Muitas palavras úteis aprendi
nelas, é verdade; porém, estas também se podem aprender em estudos sérios, e este é o
caminho seguro pelo qual deveriam encaminhar as crianças.
CAPÍTULO XVI
O mal da mitologia
 Ai de ti, torrente dos hábitos humanos! Quem há que te resista? Quando te secarás? Até
quando irás arrastar os filhos de Eva a esse mar imenso e tenebroso, que apenas logram passar
os que embarcam sobre o lenho da cruz? Acaso não foi em ti que li a fábula de Júpiter que troveja
e adultera? É verdade que não podia fazer tais coisas ao mesmo tempo, mas assim se
representou para autorizar a imitação de um verdadeiro adultério com o encantamento de um
falso trovão. Contudo, qual é o professor de pênula capaz de ouvir com paciência a um homem
nascido do mesmo pó que clama e diz: “Homero imaginava essas ficções e atribuía aos deuses os
vícios humanos; porém, eu preferiria que atribuísse a nós as qualidades divinas”. Com mais
verdade se diria que Homero imaginou tudo isso, atribuindo qualidades divinas a homens 
corrompidos, para que os vícios não fossem considerados como tais, e para que todo aquele que
os cometesse parecesse que imitava a deuses celestes, e não a homens corrompidos.
 E contudo, ó torrente infernal, em ti se precipitam os filhos dos homens, com o dinheiro
gasto para aprender tais coisas. E consideram acontecimento importante representá-lo,
publicamente no Foro, à vista das leis que concedem aos mestres um prêmio, além de seus
salários particulares.
 E ferindo os rochedos de tuas margens, gritas dizendo: “Aqui se aprendem as palavras;
aqui se adquire a eloqüência, tao necessária para persuadir e explicar os pensamentos; não
poderíamos pois aprender as palavras: chuva de ouro, regaço, templo celeste, logro e outras
mais, escritas em determinada passagem, se Terêncio não nos apresentasse um jovem perdido
que se propõe a imitar a luxúria de Júpiter? Contemplava ele uma pintura mural “na qual se
representava o mesmo Júpiter no momento em que, segundo dizem, descia como chuva de ouro
sobre o regaço de Dânae, para lograr assim à pobre mulher”.
 E vede como se excitava à luxúria a vista de tão celestial mestre:
 - Mas que deus fez isto? – diz.
 - Nada menos que aquele que faz retumbar a abóbada do céu com enorme trovão!
 - E eu, homenzinho, não haveria de fazer o mesmo?
 - Fi-lo, sim, e com muito gosto.
 De modo algum se aprendem com semelhante torpeza aquelas palavras; antes, essas
palavras levam mais atrevidamente a cometer a mesma devassidão. Não incrimino as palavras,
que são como vasos seletos e preciosos, mas condeno o vinho do erro que mestres ébrios nos
davam a beber nelas e, se não o bebêssemos, éramos açoitados, sem que pudéssemos apelar
para juiz mais sóbrio.
 E, não obstante, meu Deus, cuja presença me protege desta lembrança, confesso que
aprendi estas coisas com gosto e que, miserável, nelas me comprazi, sendo por isso chamado
menino de grandes esperanças.
CAPÍTULO XVII
Êxitos escolares
 Permite-me, Senhor, que diga também algo de meu talento, dádiva tua, e dos desatinos
em que o empregava. Propunha-se-me como desafio – coisa mui preocupante para minha alma,
tanto pelo louvor ou descrédito, como por medo dos açoites – que repetisse as palavras de Juno,
irada e ressentida por não podem “afastar da Itália ao rei dos troianos”, embora jamais tenha
sabido que tivessem sido pronunciadas por Juno. Mas obrigavam-nos a errar seguindo os passos
das ficções poéticas, e a repetir em prosa o que o poeta havia dito em verso. Era mais elogiado
aquele que, conforme a dignidade da pessoa representada, soubesse pintar com mais vivacidade
e semelhança, e revestir com palavras mais apropriadas seus afetos de ira ou de dor.
 Mas qual o proveito disso – ó vida verdadeira, meu Deus – de que me servia ser aplaudido
por minha declamação mais que todos os meus coetâneos e condiscípulos? Não era tudo aquilo
fumo e vento? Acaso não havia outra coisa em que exercitar meu talento e minha língua? Teus
louvores, Senhor, teus louvores, consignados nas Escrituras, poderiam soerguer a frágil planta de
meu coração, e eu não teria sido arrebatado pela vaidade de vãs quimeras, presa imunda das
aves. Com efeito, há diversas maneiras de oferecer sacrifício aos anjos rebeldes.
CAPÍTULO XVIII
Leis gramaticais, lei de Deus
 Mas, por que admirar-se que eu me deixasse arrastar pelas vaidades e me afastar de ti,
meu Deus, se me propunham como exemplos para imitar a uns homens que se, ao contar alguma
boa ação, deslizassem nalgum barbarismo ou solecismo cobriam-me de críticas e, pelo contrário,
que eram elogiados por narrar suas torpezas com palavras castiças e apropriadas, de modo
eloqüente e elegante, e que os inchavam de vaidade? 
 Tu vês, Senhor, estas coisas, e te calas compassivo, paciente, cheio de misericórdia e
verdade. Mas te calarás para sempre? Arranca, pois, agora deste espantoso abismo a alma que
te busca sedenta de teus deleites, e que te diz de coração: Busquei, Senhor, teu rosto; teu rosto,
Senhor, buscarei ainda. Longe está de teu rosto quem anda ocupado com afetos tenebrosos,
porque não é com os pés carnais, nem cobrindo distâncias que nos aproximamos ou nos
afastamos de ti. Porventura aquele teu filho menor procurou cavalos, ou carros, ou naves, ou voou
com asas invisíveis, ou viajou a pé para alcançar aquela região longínqua onde dissipou o que
lhes havia dado, ó Pai, meigo ao lhe entregar a substância, e mais carinhoso ainda ao recebê-lo
andrajoso? Assim, pois, viver nas paixões da luxúria, é o mesmo que viver em paixões
tenebrosas, é viver longe de teu rosto.
 Olha, meu Senhor e meu Deus, é vê paciente, como costumas ver, de que modo diligente
os filhos dos homens observam as regras de ortografia recebidas dos primeiros mestres, e
desprezam as leis eternas de salvação perpétua recebidas de ti; de tal modo que, se alguns dos
que sabem ou ensinam as regras antigas dos sons pronunciasse a palavra homo, sem aspirar a
primeira letra, desagradaria mais aos homens do que se, contra teus preceitos, odiasse a outro
homem, sendo este homem.
 Como se o homem pudesse ter inimigo mais pernicioso que o ódio com que se irrita contra
si mesmo, ou como se pudesse causar a outrem maior dano, perseguindo-o, do que causa a seu
próprio coração odiando! Com certeza, não nos é mais íntima a ciência das letras do que a
consciência, que manda não fazer a outrem o que não queremos que não nos façam.
 Oh! Como és misericordioso, tu, que habitando silencioso nos céus, Deus grande e único,
espalhas com lei infatigável cegueiras vingadoras sobre as paixões ilícitas! Quando o homem,
aspirando à fama de eloqüente, ataca a seu inimigo com ódio feroz diante do juiz, rodeado de
grande multidão de homens, toma todo o cuidado para que, por um lapsus linguae, não se lhe
escape um inter ominibus, sem aspirar o h, sem cuidar que com o furor de seu ódio se tire um
homem de entre os homens.
CAPÍTULO XIX
Mau perdedor
 À beira de tal lodaçal jazia eu, pobre criança, sendo esta a arena em que me exercitava,
temendo mais cometer um barbarismo de linguagem do que cuidando de não invejar, se o
cometia, aqueles que o tinham evitado.
 Digo e confesso diante de ti, meu Deus, essas misérias, que me angariavam o louvor
daqueles cuja simpatia equivalia para mim a uma vida honesta, pois não via o abismo pois não via
o abismo de torpeza em que tudo isso me lançara, longe dos teus olhos. A teus olhos quem era
mais repelente do que eu? E eu até desagradava tais homens, enganando com infinidade de
mentiras a meus criados, mestres e pais por amor dos jogos, por gosto de ver espetáculos frívolos
e o desejo inquieto de os imitar.
 Também cometia furtos na despensa e na mesa de meus pais, ora impelido pela gula, ora
para ter de dar aos meninos para brincar com eles, folguedos que os deleitavam tanto quanto a
mim, e que eles me faziam pagar. No jogo, frequentemente, conseguia vitórias fraudulentas,
vencido pelo desejo de me sobressair. Contudo, nada havia que eu quisesse mais evitar e que eu
repreendesse mais atrozmente se o descobrisse em outros, que o mesmo eu fazia aos demais.
Se acaso eu era o prejudicado, e o acusado ficava furioso, eu não cedia. Será esta a inocência
infantil? Não, Senhor, não o é, eu to confesso, meu Deus. Porque essas mesmas coisas que se
fazem com os criados e mestres por causa de nozes, bolas e passarinhos, se avultam na
maioridade com os magistrados e reis por causa de dinheiro, palácios e servos, do mesmo modo
que à palmatória sucedem-se maiores castigos.
 Assim, quando tu, nosso rei, disseste: Delas é o reino do céus – quiseste sem dúvida
louvar na pequenez de sua estatura um símbolo de humildade.
CAPÍTULO XX 
Ação de graças
 Contudo, Senhor, graças te sejam dadas, excelso e ótimo criador e ordenador do universo,
nosso Deus, mesmo que te limitasses a me fazer apenas menino. Porque então, eu já existia,
vivia, sentia, cuidava da minha integridade, eco de tua profunda unidade, fonte de minha
existência.
 Guardava também, com o secreto instinto, a integridade dos meus outros sentidos, e
deleitava-me com a verdade nos pequenos pensamentos que formava sobre coisas pequenas.
Não queria ser enganado, tinha boa memória, e me ia instruindo com a conversação. Alegrava-me
com a amizade, fugia à dor, ao desprezo, à ignorância. E não seria isto, em tal criatura, digno de
admiração e de louvor? Pois todas essas coisas são dons do meu Deus, que eu não dei a mim
mesmo. E todos são bons, e tudo isso constitui o meu eu.
 O que me criou, portanto, é bom, e ele próprio é o meu bem; a ele louvo por todos estes
bens que integravam meu ser de criança. Eu pecava em buscar em mim próprio e nas demais
criaturas, e não nele, os deleites, grandezas e verdades; por isso caia logo em dores, confusões e
erros.
 Graças a ti, minha doçura, minha esperança e meu Deus, graças a ti por teus dons; que
eles fiquem em ti conservados. Assim me guardarás também a mim, e aumentarão e
aperfeiçoarão os dons que me deste, e eu estarei contigo, porque também me deste a existência.
LIVRO SEGUNDO 
CAPÍTULO I
A adolescência
 Quero recordar minhas torpezas passadas e as degradações carnais de minha alma, não
porque as ame, mas por te amar, ó meu Deus. É por amor de teu amor que o faço, percorrendo
com a memória amargurada, aqueles meus perversos caminhos, para que tu me sejas doce,
doçura sem engano, ditosa e eterna doçura. Resgata-me da dispersão em que me dissipei
quando, afastando-me de tua unidade, me desvaneci em muitas coisas.
 Tempo houve de minha adolescência em que ardi em desejos de me fartar dos prazeres
mais baixos, e ousei a bestialidade de vários e sombrios amores, e se murchou minha beleza, e
me transformei em podridão diante de teus olhos, para agradar a mim mesmo e desejar agradar
aos olhos dos homens.
CAPÍTULO II
As primeiras paixões
 E que me deleitava, senão amar e ser amada? Mas eu não era moderado, indo de alma
para alma de acordo com os sinais luminosos da amizade, pois, da lodosa concupiscência de
minha carne e do fervilhar da puberdade levantava-se como que uma névoa que obscurecia e
ofuscava meu coração, a ponto de não discernir a serena amizade da tenebrosa libido. Uma e
outra, confusamente, me abrasavam; arrastavam minha fraca idade pelo declive íngreme de meus
apetites, afogando-me em um mar de torpezas. Tua ira se acumulava sobre mim, e eu não o
sabia. Ensurdeci com o ruído da cadeia de minha mortalidade, e cada vez mais me afastava de ti,
e tu o consentias; e me agitava, e me dissipava, e me derramava e fervia em minha devassidão, e
tu te calavas – ó alegria que tão tarde encontrei! – tu te calavas então, e eu ia cada vez mais para
longe de ti, sempre atrás de estéreis sementes de dores, com vil soberba e inquieto cansaço.
 Oh! Se alguém refreasse aquela minha miséria, para que fizesse bom uso da fugaz beleza
das criaturas inferiores; limitasse suas delicias, a fim de que as vagas daquela minha idade
rompessem na praia do matrimonio, já que de outro modo não podia haver paz – contendo-se nos
limites da geração, como prescreve tua lei, Senhor, tu que crias o gérmen transmissor de nossa
vida mortal, e que com mão bondosa podes suavizar a agudeza dos espinhos, que mantiveste
fora do paraíso! Porque tua onipotência está perto de nós, mesmo quando vagueamos longe de ti.
 Pelo menos eu deveria atender com mais diligencia à voz de tuas nuvens: Também eles
sofrerão as tribulações da carne; mas eu quisera poupar-vos; e bom é ao homem não tocar em
mulher; o que está sem mulher pensa nas coisas de Deus, de como o há de agradar; mas o que
está ligado pelo matrimonio pensa nas coisas do mundo, e em como há de agradar à mulher.
Estas são as palavras que eu deveria ter ouvido mais atentamente; e, eunuco pelo amor ao reino
de Deus, teria suspirado mais feliz por teus abraços.
 Mas eu, miserável, tornei-me em torrente, seguindo o ímpeto de minha paixão, te
abandonei e transgredi a todos os teus preceitos, sem porém, escapar de teus castigos. E quem o
poderia dentre os mortais? Sempre estavas ao meu lado, irritando-se misericordiosamente
comigo, e aspergindo com amaríssimos desgostos todos os meus gozos ilícitos, para que eu
buscasse a alegria sem te ofender e, quando a achasse, de modo algum fosse fora de ti, Senhor.
Fora de ti, que impões a dor em mandamento, e feres para sarar, e nos tiras a vida para que não
morramos sem ti.
 Mas onde estava eu? Oh! Quão longe, exilado das delicias de tua casa naqueles meus
dezesseis anos de idade carnal, quando esta empunhou seu cetro sobre mim, e eu me rendi
totalmente a ela, à fúria da concupiscência que a degradação humana legítima, porém, ilícita, de
acordo com as tuas leis.
 Nem mesmo os meus cogitaram em me sustentar na queda, pelo casamento, ao ver-me
cair; cuidavam apenas que eu aprendesse a compor discursos magníficos e a persuadir com a
palavra.
CAPÍTULO III 
Cegueira do pai, cuidados da mãe
 Nesse mesmo ano tive de interromper meus estudos, quando voltei de Madaura, cidade
vizinha, onde fora estudar literatura e oratória, enquanto se faziam os preparativos necessários
para minha viagem mais longa a Cartago, levado mais pela ambição de meu pai que pelos seus
parcos bens, pois, era mui modesto cidadão de Tagaste.
 Mas, a quem conto eu estes fatos? Certamente, não a ti, meu Deus, mas em tua presença
conto estas coisas aos da minha estirpe, ao gênero humano, ainda que estas páginas chegassem
às mãos de poucos. E para que então? Para que eu, e quem me ler, pensemos na profundeza do
abismo de onde temos de clamar por ti? E que há de mais próximo a teus ouvidos que o coração
contrito e a vida que procede da fé?
 Quem então não cumulava a meu pai de louvores, pois excedendo até seus deveres
familiares, gastava com o filho o necessário para tão longa viagem por causa de seus estudos?
Porque muitos cidadãos, muito mais ricos do que ele, não mostravam para com os filhos igual
cuidado.
 Contudo, este mesmo pai não se importava de saber se eu crescia para ti, ou que fosse
casto, contanto que fosse deserto; mas antes eu era deserto, por carecer de teu cultivo, ó Deus,
único, verdadeiro e bom senhor de teu campo, o meu coração.
 Porém, no meu décimo-sexto ano foi necessária uma interrupção em meus estudos por
falta de recursos familiares e, livre da escola, passei a viver com meus pais. Avassalaram então
minha cabeça os espinhos de minhas paixões, sem que houvesse mãos que os arrancassem.
Pelo contrário, meu pai, certo dia, percebendo ao banho sinais de minha puberdade e vendo-me
revestido de inquieta adolescência, como se já se alegrasse pensando nos netos, foi contá-lo
alegre à minha mãe. Alegria esta gerada pela embriaguez com que este mundo esquece de ti, seu
criador, e em teu lugar ama tua criatura; embriaguez que nasce do vinho sutil de sua perversa e
mal inclinada vontade para as coisas baixas.
 Mas, nessa época, já tinhas começado a levantar, no coração de minha mãe, teu templo e
os alicerces de tua santa morada; meu pai não era mais que catecúmeno, recente ainda. Por isso
minha mãe perturbou-se com santo temor. Embora eu ainda não fosse batizado, temia que eu
seguisse as sendas tortuosas por onde andam os que te voltam as costas, e não o rosto.
 Ai de mim! Como me atrevo a dizer que te calavas quando me afastava de ti? Seria
verdade que então te calavas comigo? E de quem eram, senão tuas, aquelas palavras que pela
boca de minha mãe, tua serva fiel, sussurraste em meus ouvidos, embora nenhuma delas
penetrasse no meu coração, para que a cumprisse?
 Lembro bem que um dia me admoestou em segredo, com grande solicitude, que me
abstivesse da luxúria e, sobretudo, que não cometesse adultério com a mulher de ninguém.
Porém, esses conselhos pareciam-me próprios de mulheres, e eu me envergonharia de segui-los.
Mas, na realidade, eram teus, embora eu não o soubesse, e por isso julgava que te calavas, e que
era ela quem me falava; e eu te desprezava em tua serva, eu, seu filho, filho de tua serva e servo
teu, a ti que não cessavas de me falar pela sua boca.
 Mas eu não o sabia, e me precipitava com tanta cegueira, que me envergonhava entre os
companheiros de minha idade, de ser menos torpe do que eles. Os ouvia jactar-se de suas
maldades, e gloriar-se tanto mais quanto mais infames eram; assim eu gostava de fazer o mal,
não só pelo prazer, mas ainda por vaidade. O que há de mais digno de vitupério do que o vicio? E,
contudo, para não ser escarnecido, tornava-me mais viciado e, quando não houvesse cometido
pecado que me igualasse aos mais perdidos, fingia ter feito o que não cometera, para que não
parecesse mais abjeto quanto mais inocente, e tanto mais vil quanto mais casto.
 Eis com que companheiros andava eu pelas graças de Babilônia, revolvendo-me na lama,
como em cinamomo e ungüentos preciosos. E, para que todo esse lodo me pegasse bem firme,
subjugava-me o inimigo invisível, e me seduzia, por ser eu presa fácil da sedução.
 Nem então minha mãe carnal, que já fugira do meio da Babilônia, mas que em outras
coisas caminhava mais devagar, cuidou – como fizera ao aconselhar-me a castidade – de conter
com os laços do matrimonio aquilo de que seu marido lhe falara a meu respeito. Já percebera ela
que me era pestilencial, e que mais adiante me seria perigoso – já que essa paixão não podia ser
cortada pela raiz. Não pensou nisso, digo, por temer que o vínculo matrimonial frustrasse a
esperança que sobre mim acalentava; não a esperança da vida futura, que ela já tinha posto em ti, 
mas a esperança das letras que ambos, meu pai e minha mãe, desejavam ardentemente; meu
pai, porque não pensava quase nada de ti, mas apenas ambições vãs a meu respeito; minha mãe,
porque considerava que tais tradicionais estudos das letras não só não me seriam de estorvo,
sendo de não pouca ajuda para chegar a ti. Assim julgo eu, agora, enquanto me é possível pela
lembrança, o caráter de meus pais.
 Por isso, soltavam-me as rédeas para o jogo mais do que o permite uma moderada
severidade, deixando-me cair na dissolução de várias paixões; e de todas surgia uma obscuridade
que me toldava, ó meu Deus, a luz da tua verdade; e, por assim dizer, de meu corpo, brotava
minha iniqüidade.
CAPÍTULO IV
O furto das pêras
 É certo, Senhor, que tua lei pune o furto, lei tão arraigada no coração dos homens que nem
a própria iniqüidade pode apagar. Que ladrão há que suporte com paciência que o roubem? Nem
o rico tolera isto a quem o faz forçado pela indigência. Também eu quis roubar, e roubei não
forçado pela necessidade, mas por penúria, fastio de justiça e abundância de maldade, pois
roubei o que tinha em abundância, e muito melhor. Nem me atraía ao furto o gozo de seu
resultado, mas atraía-me o furto em si, o pecado.
 Nas imediações de nossa vinha, havia uma pereira carregada de frutos, que nem pelo
aspecto, nem pelo sabor tinham algo de tentador. Alta noite – pois até então ficaríamos jogando
nas eiras, de acordo com nosso mau costume – dirigimo-nos ao local, eu e alguns jovens
malvados, com o fim de sacudi-la e colher-lhe os frutos. E levamos grande quantidade deles, não
para saboreá-los, mas para jogá-los aos porcos, embora comêssemos alguns; nosso deleite era
fazer o que nos agradava justamente pelo fato de ser coisa proibida.
 Aí está meu coração, Senhor, meu coração que olhaste com misericórdia quando se
encontrava na profundeza do abismo. Que este meu coração te diga agora que era o que ali
buscava, para fazer o mal gratuitamente, não tendo minha maldade outra razão que a própria
maldade. Era hedionda, e eu a amei; amei minha morte, amei meu pecado; não o objeto que me
fazia cair, mas minha própria queda. Ó torpe minha alma, que saltando para fora do santo apoio,
te lançavas na morte, não buscando na ignomínia senão a própria ignomínia?
CAPÍTULO V
A causa do pecado
 Todos os corpos formosos, o ouro, a prata, e todos os demais têm, com efeito, seu aspecto
atraente. No contato carnal intervém grandemente a congruência das partes, e cada um dos
sentidos percebe nos corpos certa modalidade própria. Também a honra temporal e o poder de
mandar e dominar têm seu atrativo, de onde nasce o desejo de vingança.
 Todavia, para obtermos estas coisas, não é necessário abandonarmos a ti, nem nos
desviar de tua lei. Também a vida que aqui vivemos tem seus encantos, por certa beleza que lhe
é própria, e pela harmonia que tem com as demais belezas terrenas. Cara é, finalmente, a
amizade dos homens pela união que une muitas almas com o doce laço do amor.
 Por todos estes motivos, e outros semelhantes, pecamos quando, por propensão
imoderada para os bens ínfimos, são abandonados os melhores e mais altos, como tu, Senhor,
nosso Deus, tua verdade e tua lei.
 É verdade que também esses bens ínfimos têm seus deleites, porém, não como os de
Deus, criador de todas as coisas, porque nele se deleita o justo, e nele acham suas delicias os
retos de coração.
 Portanto, quando indagamos a causa de um crime, não descansamos até averiguar qual o
apetite dos bens chamados ínfimos, ou que temor de perdê-los foi capaz de provocá-lo. Sem
dúvida são belos e atraentes, embora, comparados com os bens superiores e beatíficos, sejam
abjetos e desprezíveis. Alguém comete um homicídio. Por que? Porque desejou a esposa do
morto, ou suas terras, ou porque quis roubar alguma coisa, ou então, ferido, ardeu em desejos de 
vingança. Por acaso cometeria o crime sem motivo, apenas pelo gosto de matar? Quem pode
acreditar em semelhante coisa?
 Mesmo de Catilina, homem sem entranhas e muito cruel, de quem se disse que era mau e
cruel sem razão, acrescenta o historiador um motivo: “Para que a ociosidade não embotasse suas
mãos e sentimento”.
 Todavia, se indagares porque agia assim, dir-te-ei que mediante o exercício de crimes,
depois de tomada a cidade, conseguisse honras, poderes e riquezas, libertando-se do medo das
leis e das dificuldades da vida, causados pela pobreza de seu patrimônio e a consciência de seus
crimes. Logo, nem o próprio Catilina amava seus crimes, mas aquilo por cujo motivo os cometia.
CAPÍTULO VI
O crime gratuito
 Que amei, então, em ti, ó meu furto, crime noturno dos meus dezesseis anos? Não eras
belo, já que eras furto. Mas, por acaso és algo para que eu fale contigo? Belas eram as pêras que
roubamos, por serem criaturas tuas, ó formosíssimo Criador de todas as coisas, bom Deus, Deus
sumo, meu bem e meu verdadeiro bem; belas eram aquelas pêras! Porém, não eram elas que
apeteciam minha alma depravada. Eu as tinha em abundância, e melhores. Colhi-as da árvore só
para roubar; tanto que, tão logo colhidas, joguei-as fora, saboreando nelas apenas a iniqüidade,
com que me regozijava. Se alguma delas entrou em minha boca, somente o crime é que lhe deu
sabor.
 E agora pergunto, meu Deus: que é que me deleitava no furto? Pois não encontro
nenhuma beleza nele. Já não falo da beleza que reside na justiça e na prudência, nem sequer da
que resplandece na inteligência do homem, na memória, nos sentidos ou na vida vegetativa; nem
da que brilha nos magníficos astros em suas órbitas, ou na terra e no mar, cheios de criaturas,
que nascem para sucederem umas às outras; nem sequer da defeituosa e sombria formosura dos
vícios enganadores.
 O orgulho imita a altura; mas só tu, Deus excelso, estás acima de todas as coisas. E a
ambição, que busca, senão honras e glorias, quanto tu és o único sobre todas as coisas e ser
honrado e glorificado eternamente? A crueldade dos tiranos quer ser temida; porém, quem há de
ser temido senão Deus, a cujo poder ninguém, porém, quem há de ser temido senão Deus, a cujo
poder ninguém, em tempo algum ou lugar, nem por nenhum meio pode subtrair-se e fugir? As
carícias da volúpia buscam ser correspondidas; porém, não há nada mais carinhoso que tua
caridade, nem que se ame de modo mais salutar que tua verdade, sobre todas as coisas formosa
e resplandecente. A curiosidade sugere amor à ciência, enquanto só tu conheces plenamente
todas as coisas. Até a própria ignorância e estultícia cobrem-se com o nome de simplicidade e
inocência; das quais não acham nada mais simples do que tu. E que pode haver mais inocente do
que tu, pois, até mesmo o castigo dos maus lhes vem de seus pecados? A indolência gosta do
descanso; porém, que repouso seguro pode haver fora do Senhor? O luxo gosta de ser chamado
de fartura; mas só tu és a plenitude e a abundância inesgotável de eterna suavidade. A
prodigalidade veste-se com a capa da liberalidade; porém, só tu, és verdadeiro e liberalíssimo
doador de todos os bens. A avareza quer possuir muitas coisas; porém, só tu as possui todas. A
inveja litiga acerca de excelências; porém, que há mais excelente do que tu? A ira busca a
vingança; e que vingança mais justa do que a tua? O temor aborrece as coisas repentinas e
insólitas, contrárias ao que se ama ou se deseja manter seguro; mas haverá para ti algo de novo e
repentino? Quem poderá separar de ti o que amas? E onde, senão em ti, se encontra inabalável
segurança? A tristeza definha com a perda das coisas com que a cobiça se deleita, e não quer
que se lhe tire nada, como nada pode ser tirado de ti.
 Assim peca a alma, quando se aparta e busca fora de ti o que não pode achar puro e
ilibado senão quando se volta novamente para ti. Perversamente te imitam todos os que se
afastam de ti e se levantam contra ti. Porém, mesmo imitando-te, mostram que és o criador de
toda criatura e que, portanto, não existe lugar onde alguém se possa afastar de ti de modo
absoluto.
 Que amei, então, naquele furto, e no que imitei, viciosa e imperfeitamente, a meu Senhor?
Acaso foi o gosto de agir pela fraude contra a tua lei, já que não o podia fazer por força, 
simulando, cativo, uma falsa liberdade ao fazer impunemente o que estava proibido, imagem
tenebrosa de tua onipotência?
 Eis aqui o servo que, fugindo do seu senhor, seguiu uma sombra. Ó podridão! Ó monstro
da vida e abismo da morte! Como pôde agradar-me o ilícito, e não por outro motivo, senão porque
era ilícito?
CAPÍTULO VII
Ação de graças
 Como agradecerei ao Senhor por poder recordar todas estas coisas sem que minha alma
sinta medo algum? Amar-te-ei, Senhor, e dar-te-ei graças, e confessarei teu nome, pois me
perdoaste tantas e tão nefandas ações. Devo à tua graça e misericórdia teres-me dissolvido os
pecados como gelo, como também todo o mal que não pratiquei. De fato, de que pecados não
seria capaz, eu que amei gratuitamente o erro?
 Confesso que todos já me foram perdoados; o mal cometido voluntariamente, e o que
deixei de fazer pela tua graça. Quem dentre os homens, conhecendo tua fraqueza, poderá atribuir
às próprias forças sua castidade e inocência para amar-te menos, como se tivesse menor
necessidade de tua misericórdia, com a qual perdoas os pecados aos que se convertem a ti?
 Aquele, pois, que, chamado por ti, seguiu tua voz e evitou todas estas coisas que lê de
mim, e que eu recordo e confesso, não se ria de mim por haver sido curado pelo mesmo médico
que o preservou de cair enfermo, ou melhor, de que adoecesse tanto. Antes, esse deve amar-te
tanto e ainda mais do que eu, porque o mesmo que me curou de tantas e tão graves
enfermidades, esse mesmo o livrou de cair no pecado.
CAPÍTULO VIII
O prazer da cumplicidade
 E que fruto colhi eu, miserável, daquelas ações que agora recordo com rubor? Sobretudo
daquele furto, em que amei o próprio furto, e nada mais? Nenhum, pois o furto, em si nada valia,
ficando eu mais miserável com ele. Todavia, é certo que eu sozinho não o teria praticado – a
julgar pela disposição de meu ânimo na ocasião; - não, de modo algum; eu sozinho não o faria.
Portanto, apreciei também na ocasião a companhia daqueles com quem o cometi. Logo, também
é certo que apreciei algo mais além do furto; embora não amasse de fato nada mais, pois também
essa cumplicidade era nada.
 Mas, que é esta, na verdade? E quem mo poderá ensinar, senão o que ilumina meu
coração e rasga minhas sombras? De onde vem à minha alma a idéia destas indagações, desta
discussão e considerações? Se eu então amasse as pêras que roubei, e quisesse apenas seu
desfrute, podia tê-las roubado sozinho, se isso bastasse. Poderia fazer a iniqüidade pela qual
chegaria meu deleite sem necessidade de excitar o prurido da minha cobiça com a conivência de
almas cúmplices.
 Porém, como não achava deleite algum nas pêras, colocava este no próprio pecado, que
consistia na companhia dos que pecavam comigo.
CAPÍTULO IX
O prazer do pecado
 E que sentimento era aquele de minha alma? certamente, assaz torpe e eu um desgraçado
por alimentá-lo. Mas, que era na realidade? E quem há que conheça os pecados? Era como um
riso, como que a fazer-nos cócegas no coração, provocado por ver que enganávamos aos que
não suspeitavam de nós tais coisas, e porque sabíamos que haviam de detestá-las.
 Porém, por que me deleitava o não perpetrar sozinho o roubo? Acaso alguém se ri
facilmente quando está só? Ninguém o faz, é verdade; porém, também é verdade que às vezes o
riso tenta e vence aos que estão sós, sem que ninguém os veja, quando se oferece aos sentidos 
ou à alma algo extraordinariamente ridículo. Porque a verdade é que eu sozinho nunca teria feito
aquilo; não, eu sozinho jamais faria aquilo. Tenho viva, diante de mim, meu Deus, a lembrança
daquele estado de alma, e repito que eu sozinho não teria cometido aquele furto, do qual não me
deleitava o objeto, mas a razão do roubo, o que, sozinho, não me teria agradado de modo algum,
nem eu o teria feito.
 Ó amizade inimiga! Sedução impenetrável da alma, vontade de fazer o mal por
passatempo e brinquedo, apetite do dano alheio sem proveito algum e sem desejo de vingança!
Só porque sentimos vergonha de não ser sem-vergonha quando ouvimos; “Vamos! Façamos!”.
CAPÍTULO X
Deus, o sumo bem
 Quem desatará este nó, tão enredado e emaranhado? Como é asqueroso! Não quero
voltar para ele os olhos, não quero vê-lo. Só a ti quero, justiça e inocência, tão bela e graciosa aos
olhos puros, e com insaciável saciedade. Só em ti se acha o descanso supremo e a vida
imperturbável. Quem entra em ti, entra no gozo do seu Senhor, e não temerá, e estará
perfeitamente bem no sumo bem. Eu me afastei de ti e andei errante, meu Deus, mui longe de teu
esteio em minha adolescência, e cheguei a ser para mim mesmo uma região de esterilidade. 
LIVRO TERCEIRO
CAPÍTULO I
O gosto do amor
 Cheguei a Cartago, e por toda parte fervilhava a sertã de amores impuros. Ainda não
amava, mas já gostava de amar; secretamente sedento, aborrecia a mim próprio por não me
sentir mais indigente de amor. Gostando do amor buscava o que amar, e odiava a segurança e os
meus caminhos sem perigos, porque tinha dentro de mim fonte de alimento interior, de ti mesmo,
ó meu Deus. Eu não sentia essa fonte como tal; antes, estava sem apetite algum dos manjares
incorruptíveis, não porque estivesse saciado deles, mas porque, quanto mais vazio, tanto mais
enfastiado me sentia.
 E por isso minha alma não estava bem e, ferida, voltava-se para fora de si, ávida de se
roçar miseravelmente às coisas sensíveis; se porém não tivessem alma, não seriam certamente
amadas.
 Amar e ser amado era para mim a coisa mais doce, sobretudo se podia gozar do corpo da
criatura amada. Deste modo manchava com torpe concupiscência a fonte da amizade, e
obscurecia seu candor com os vapores infernais da luxúria. E apesar de tão torpe e impuro,
desejava com afã e cheio de vaidade, passar por afável e cortês.
 Caí por fim no amor, em que desejava ser colhido. Porém, ó meu Deus, misericórdia
minha, quanto fel não misturaste àquela suavidade, e quão bom foste ao fazê-lo! Fui amado, e
cheguei secretamente aos laços do prazer, e me deixei alegremente enredar com trabalhosos
laços, para ser logo açoitado com as varas de ferro ardente do ciúme, das suspeitas, dos temores,
das iras e das contendas.
CAPÍTULO II
A paixão dos espetáculos
 Arrebatavam-me os espetáculos teatrais, cheios das imagens de minhas misérias e de
alimento para o fogo de minha paixão. Mas, por que quer o homem condoer-se ao contemplar
coisas tristes e trágicas, que de modo algum gostaria de suportar? Contudo, o espectador deseja
sofrer com elas, e até essa mesma dor é seu deleite. Que é isso, senão rematada loucura? De
fato, tanto mais se comove alguém com elas quanto menos livre se está de tais afetos, embora
chamemos de misérias os sofrimentos próprios, e de compaixão a comiseração do mal alheio.
 Porém, que compaixão pode haver em coisas fictícias e representadas? Nelas não se
incita o espectador a que socorra a alguém, senão que o mesmo é convidado apenas à angústia,
apreciando tanto mais o autor daquelas histórias quanto maior é o sentimento que elas nos
inspiram. De onde resulta que, se tais desgraças humanas – quer das histórias antigas, quer
sejam inventadas – são representadas de forma a não se excitarem sofrimento ao expectador,
este sai aborrecido e murmurando; se porém, pelo contrário, é levado à tristeza, fica atento e
chora satisfeito.
 Quer isso dizer que amamos as lágrimas e a dor? Sem dúvida que todo homem busca o
gozo; mas como não agrada a ninguém ser miserável, e sendo grato a todos ser misericordioso, e
como a piedade é inseparável da dor, não seria esta a causa verdadeira para que apreciemos
essas emoções dolorosas?
 Também isso provém da amizade. Mas para onde se dirige? Para onde vai? Por que se
atira à torrente da pez ardente, às vagas horrendas de negras leviandades em que a amizade se
transforma voluntariamente, afastada e privada de sua celestial serenidade que o homem
repudia?
 Deve-se, pois, repelir a compaixão? De modo algum. Convém, pois, que alguma vez se
amem as dores. Mas evita nisso a impureza, ó minha alma, sob proteção de Deus, do Deus de
nossos pais, louvado e exaltado por todos os séculos; cuidado com a impureza. Porque nem
agora me fecho a tal compaixão. Mas naquele tempo comprazia-me no teatro com os amantes,
quando eles se gozavam em suas torpezas – embora estas não passassem de encenações. E 
quando um deles se perdia, eu quase piedosamente me contristava, e sentia prazer numa e
noutra coisa.
 Hoje, porém, tenho mais compaixão do homem que se alegra em seus vícios, que do que
sofre pela perda de um prazer funesto ou pela perda de uma mísera felicidade. Esta misericórdia
é certamente mais verdadeira, mas nela a dor não encontra nenhum prazer. E embora seja certo
que se aprove quem por caridade se compadece do miserável, contudo, quem é fraternalmente
compassivo preferiria que não houvesse razões para se compadecer. Porque assim como não é
possível que exista uma benevolência malévola, tampouco o é que haja miseráveis para deles se
compadecer.
 Há, pois, dores que merecem compaixão, porém, nenhuma que mereça amor. Por isso tu,
Deus, que amas as almas muito mais elevadamente que nós, te compadeces delas de modo
muito mais puro, porque não sentes nenhuma dor. Mas quem será capaz de chegar a isso?
 Mas eu, desventurado, amava então a dor, e buscava motivos para senti-la. Naquelas
desgraças alheias, falsas e mímicas, agradava-me tanto mais a ação do ator, e me mantinha tanto
mais atento quanto mais copiosas lágrimas me fazia derramar.
 Mas, que admira que eu, infeliz ovelha transviada de teu rebanho, por não aceitar tua
proteção, estivesse atacado de ronha asquerosa? De aqui nasciam, sem dúvida, os desejos
daquelas emoções de dor que, todavia, não queria que fossem muito profundas em mim, porque
não desejava padecer coisas como as que via representadas. Comprazia-me que aquelas coisas,
ouvidas ou fingidas, me tocassem só superficialmente. Mas, como acontece aos que coçam a
ferida com as unhas, terminava por provocar em mim mesmo um tumor abrasador, podridão e pus
repelente.
 Tal era minha vida. Mas, seria isto vida, meu Deus?
CAPÍTULO III
O estudo da retórica e os demolidores
 Entretanto, tua misericórdia, fiel, de longe pairava sobre mim. Em quantas iniqüidades não
me corrompi, meu Deus, levado por sacrílega curiosidade que, separando-me de ti, conduzia-me
aos mais baixos, desleais e enganosos serviços aos demônios, a quem sacrificava minhas más
ações, sendo em todas flagelado com duro açoite por ti!
 Também ousei apetecer ardentemente e procurar meios para conseguir os frutos da morte
na celebração de teus mistérios, dentro dos muros de tua igreja. Por isso me açoitaste com duras
penas, que nada eram comparadas com minhas culpas, ó Deus, misericórdia infinita, e meu
refúgio contra os terríveis malfeitores, com os quais vaguei de cabeça erguida, afastando-me cada
vez mais de ti, preferindo meus caminhos aos teus, amando a liberdade fugitiva!
 Os estudos a que era entregue, que se denominavam honestos ou nobres, tinham por
objetivo as contendas do foro, nas quais deveria me distinguir com tanto maior louvor quanto mais
hábeis fossem as mentiras. Tal é a cegueira dos homens, que até de sua própria cegueira se
gloriam!
 Eu já conseguira, naquele tempo, ser o primeiro da escola de retórica, e por isso me
vangloriava soberbamente, e me inflava de orgulho. Contudo, tu sabes, Senhor, que eu era muito
mais sossegado que os demais, e totalmente alheio às turbulências dos eversores – ou
demolidores – nome sinistro e diabólico que eles consideravam distintivo de urbanidade, entre os
quais vivia com imprudente pudor por não pertencer a seu grupo. É verdade que andava com
eles, e que me deleitava, às vezes, com sua amizade, porém, sempre aborreci o que faziam,
como as troças e a insolência com que surpreendiam e ridicularizavam a timidez dos novatos,
sem outra finalidade senão rir de suas trapalhadas, fazendo disso alimento para suas malévolas
alegrias. Nada há mais parecido a estas ações que as dos demônios, pelo que nenhum nome lhes
cai melhor que o de eversores ou demolidores, por serem eles transformados e pervertidos
totalmente pelos espíritos malignos, que assim os burlam e enganam, sem que o saibam,
justamente no que eles gostam de ludibriar ou enganar os demais. 
CAPÍTULO IV
O Hortênsio de Cícero
 Entre essa gente estudava eu, em tão tenra idade, os livros da eloqüência, na qual
desejava sobressair com o fim condenável e vão de satisfazer à vaidade humana. Mas, seguindo
o programa usado no ensino desses estudos, cheguei a um livro de Cícero, cuja linguagem, mais
do que seu conteúdo, quase todos admiram. Esse livro contém uma exortação à filosofia, e se
chama Hortênsio. Esse livro mudou meus sentimentos, e transferiu para ti, Senhor, minhas
súplicas, e fez com que mudassem meus votos e desejos. Subitamente, tornou-se vil a meus
olhos toda vã esperança, e com incrível ardor de meu coração suspirava pela sabedoria imortal, e
comecei a me reerguer para voltar a ti. Não era para limar a linguagem – aperfeiçoamento que,
parece, eu compraria com o dinheiro de minha mãe, naquela idade de meus dezenove anos,
fazendo dois que morrera meu pai – não era, repito, para limar o estilo que eu me dedicava à
leitura daquele livro, nem era seu estilo o que a ela me incitava, mas o que ele dizia.
 Como ardia, meu Deus, como ardia meus desejos de voar para ti das coisas terrenas, sem
que eu soubesse o que obravas em mim! Porque em ti está a sabedoria, pela qual aquelas
páginas me apaixonavam. Não faltam os que nos iludam servindo-se da filosofia, colocando ou
encobrindo seus erros com nome tão grande, tão doce e honesto. Mas quase todos os que assim
fizeram em seu tempo e em épocas anteriores, são apontados e refutados nesse livro. Também
se encontra ali bem claro aquele salutar aviso de teu Espírito, dado por meio de teu servo bom e
piedoso (Paulo): Vede que ninguém vos engane com vãs filosofias e argúcias sedutoras, de
acordo com a tradição dos homens e os ensinamentos deste mundo, e não de acordo com Cristo,
porque é nele que habita corporalmente toda a plenitude da divindade.
 Mas então – tu bem o sabes, luz de meu coração – eu ainda não conhecia o pensamento
de teu Apóstolo. Só me deleitava naquelas palavras de exortação, o fato de me excitarem
fortemente, inflamando-me a amar, a buscar, a conquistar, a reter e a abraçar não a esta ou
àquela seita, senão à própria Sabedoria, onde quer que estivesse. Só uma coisa me arrefecia tão
grande ardor: não ver ali o nome de Cristo. Porque este nome, Senhor, este nome de meu
Salvador, teu filho, por tua misericórdia eu o bebera piedosamente com o leite materno, e o
conservava, no mais profundo do meu coração, em alto apreço; e assim, tudo quanto fosse escrito
sem este nome, por mais verídico, elegante e erudito que fosse, não me arrebatava totalmente.
CAPÍTULO V
A desilusão das escrituras
 Em vista disso, decidi dedicar-me ao estudo da Sagrada Escritura, para a conhecer. Vi ali
algo encoberto para os soberbos e obscuro para as crianças, mas humilde a princípio e sublime à
medida que se avança o velado de mistérios; e eu não estava disposto a poder entrar nela,
dobrando a cerviz à sua passagem. Contudo, ao fixar nela a atenção, não pensei o que agora
estou dizendo, mas simplesmente me pareceu indigna de ser comparada com a majestade dos
escritos de Cícero. Meu orgulho recusava sua simplicidade, e minha mente não lhe penetrava o
íntimo. Contudo, a agudeza desta visão haveria de crescer com os pequenos; mas eu de nenhum
modo queria ser criança e, enfatuado de soberba, considerava-me grande.
CAPÍTULO VI
A sedução do maniqueísmo
 Deste modo vim cair com uns homens que deliravam orgulhosos, demasiado carnais e
loquazes; em sua boca havia laços diabólicos e engodo pegajoso feito com as silabas de teu
nome, do nosso Senhor, Jesus Cristo, e do nosso Paráclito e Consolador, o Espírito Santo. Estes
nomes nunca saíam de seus lábios, porém, só no som e ruído da boca, pois de resto, seu coração
estava vazio de toda verdade. 
 Diziam: “Verdade! Verdade!” – e, incessantemente, falavam-me da verdade, que nunca
existiu neles; antes, diziam muitas falsidades, não apenas de ti, que és verdade por excelência,
mas também dos elementos deste mundo, criação tua. Sobre isso, mesmo quando os filósofos
diziam a verdade, tive de ultrapassá-los nos raciocínios por amor de ti, ó pai sumamente bom,
beleza de todas as belezas!
 Ó verdade, verdade! Quão intimamente suspiravam por ti as fibras da minha alma, quando
eles te faziam soar ao meu redor frequentemente e de muitos modos, embora apenas com as
palavras e em seus muitos e volumosos livros. Estes eram as bandejas nas quais, estando eu
faminto de ti, serviam-me em teu lugar o sol e a lua, formosas obras de tuas mãos, porém, obras
tuas, e não a ti, nem sequer das principais. De fato, tuas obras espirituais são superiores a estas
corporais, ainda que estas sejam brilhantes e celestes. Mas eu tinha sede e fome não daquelas
primeiras, mas de ti mesmo, ó verdade, na qual não há mudança nem obscuridade momentânea!
 E eles serviam-me nessas bandejas esplendidas ficções, de acordo com as quais teria sido
melhor amar a este sol, verdadeiro pelo menos aos olhos, em lugar daquelas falsidades que pelos
olhos do corpo enganavam o entendimento.
 Contudo, como as tomava por ti, alimentava-me delas, não certamente com avidez, porque
não tinham o teu gosto – pois não eras aqueles vãos fantasmas – nem me nutria com elas, antes
sentia-me cada vez mais debilitado. A comida que se toma em sonhos, não obstante ser muito
semelhante à do estado de vigília, não alimenta aos que dormem, porque estão dormindo. Aquilo,
porém, em nada era semelhantes a ti, como agora me certificou a verdade, pois que eram
fantasmas corpóreos ou falsos corpos; comparados com eles, são mais reais estes corpos –
celestes ou terrestres – que vemos com os olhos da carne assim como os vêem os animais e as
aves.
 Vemos estas coisas, e são mais reais do que as conjecturas sobre outros corpos
grandiosos, que, por sua vez, que, por sua vez, quando as imaginamos, são mais reais do que
quando por meio delas conjeturamos outras maiores e infinitas, que de modo algum existem. Com
tais quimeras me alimentava eu, então, e por isso não me saciava.
 Mas tu, meu amor, em quem desfaleço para me tornar forte, nem és estes corpos que
vemos, mesmo no céu; nem os outros que não vemos, porque és o Criador e os ocultaste, e não
os consideras como as obras primas de tua criação.
 Oh! Quão longe estavas daquelas minhas quimeras, fantasmas de corpos que jamais
existiram em comparação, são mais reais as imagens dos corpos existentes; e, mais reais ainda
essas imagens, esses mesmos corpos, os quais, todavia, não são tu! Mas também não és a alma
que dá vida aos corpos – mas é a vida das almas, a vida das vidas, que vives, imutável, por ti
mesma; a vida de minha alma.
 Mas onde estavas então para mim? e quão longe peregrinava eu, longe de ti, privado até
as bolotas com que eu alimentava os porcos! Quão melhores eram as fábulas dos gramáticos e
poetas que todos aqueles enganos! Porque os versos, a poesia e a fábula de Medeia soando pelo
ar são certamente mais úteis que os cinco elementos do mundo em seus mil disfarces, conforme
os cinco antros de trevas, que não existem, mas que matam a quem nele acredita. Porém, versos
e poesia eu os posso converter em iguaria para meu espírito e, quanto ao vôo de Medeia, se o
recitava bem, não lhe afirmava veracidade e, se me agradava ouvi-lo, não lhe dava crédito. Mas –
ai de mim! – eu acreditei naqueles erros dos maniqueístas.
 Ai de mim, por que degraus fui descendo até a profundidade do abismo, exaurido e
devorado pela falta de verdade quando te buscava! E tudo isso, meu Deus – a quem me confesso
porque te compadeceste de mim quando ainda não te conhecia – tudo por buscar-te, não com a
inteligência – com a qual quiseste que eu fosse superior aos animais – mas com os sentidos da
carne. E tu estavas dentro de mim, mais profundo do que o que em mim existe de mais íntimo, e
mais elevado do que o que em mim existe de mais alto.
 Assim encontrei aquela mulher insolente e sem prudência – enigma de Salomão – que,
sentada em uma cadeira à porta de sua casa, diz aos que passam: Comei à vontade dos pães
escondidos, e bebei da doçura da água roubada, a qual me seduziu por andar eu vagando fora de
mim, sob o império da vista carnal, ruminando em meu íntimo o que meus olhos haviam devorado. 
CAPÍTULO VII
Alguns erros dos maniqueus
 Não conhecia eu outra realidade – a verdadeira – e me sentia como que movido por um
aguilhão a aceitar a opinião daqueles insensatos impostores quando me perguntavam de onde
procedia o mal, se Deus estava limitado por forma corpórea, se tinha cabelos e unhas, e se
deviam ser considerados justos os que tinham várias mulheres simultaneamente, e os que
causavam a morte de outros ou sacrificavam animais.
 Eu, ignorando essas coisas, perturbava-me com essas perguntas. Afastando-me da
verdade, parecia-me encaminhar para ela, porque não sabia que o mal é apenas privação do
bem, até chegar ao seu limite, o próprio nada. E como poderia ter eu tal conhecimento, se com os
olhos não conseguia ver mais do que corpos, e com a alma não ia além de fantasmas?
 Tampouco sabia que Deus é espírito, que não tem membros dotados de comprimento ou
largura, nem quantidade material alguma, porque a quantidade ou matéria é sempre menor na
parte que no todo e, mesmo que fosse infinita, sempre seria menor em uma parte definida por um
espaço determinado do que em sua infinitude, não podendo estar toda inteira em todas as partes,
como o espírito, como Deus.
 Ignorava totalmente o princípio de nossa existência, que há em nós, e pelo qual a Escritura
nos chama de imagem e semelhança de Deus.
 Não conhecia tampouco a verdadeira justiça interior, que não julga pelo costume, mas pela
lei retíssima do Deus onipotente. Por ela se hão de formar os costumes dos países conforme os
mesmos países e tempos, e sendo a mesma em todas as partes e tempos, não varia de acordo
com as latitudes e as épocas; lei essa segundo a qual foram justos Abraão, Isaac, Jacó e Davi, e
todos os que são louvados pela boca de Deus. Os ignorantes, julgando as coisas de acordo com a
sabedoria humana, e medindo a conduta alheia pela própria, os julgam iníquos. É como se um
ignorante em armaduras, não sabendo o que é próprio de cada membro, quisesse cobrir a cabeça
com a couraça e os pés com o elmo, e se queixasse de que as peças não se lhe adaptem
convenientemente. Ou como se alguém se queixasse de que, em determinado dia considerado
feriado do meio-dia em diante, não lhe permitissem vender a mercadoria à tarde, como acontecera
pela manhã; ou porque vê que na mesma casa permite-se a um escravo qualquer tocar no que
não é permitido ao copeiro; ou porque não se permite fazer diante dos comensais o que se faz
atrás de uma estrebaria; ou, finalmente, se indignasse porque, sendo uma a casa e uma a família,
não se atribuíssem a todos as mesmas coisas.
 Tais são os que se indignam quando ouvem dizer que em outros tempos se permitiam aos
justos coisas que não se lhe permitem agora, e que Deus mandou àqueles uma coisa e a estes
outra, conforme os tempos, servindo uns e outros à mesma norma de santidade. E, contudo, é
bem visível que no mesmo homem, no mesmo dia e na mesma hora e na mesma casa, o que
convém a um membro não convém a outro; e aquilo que há pouco era licito, já não o é mais; e
que o que se concede em uma parte, é justamente proibido e castigado em outra.
 Diremos, por isso, que a justiça é vária e inconstante? O que acontece é que os tempos a
que ela preside não caminham no mesmo passo, porque são tempos. Mas os homens, cuja vida
terrestre é breve, por não saberem harmonizar as causas dos tempos idos, e das gentes que não
viram nem conheceram, com as que agora vêem e experimentam e, como também vêem
facilmente o que no mesmo corpo, na mesma hora e lugar convém a cada membro, a cada tempo,
a cada parte e a cada pessoa, escandalizam-se com as coisas daqueles tempos, enquanto
aceitam as de agora.
 Ignorava eu então estas coisas e não as refletia e, embora de todos os lados me ferissem
os olhos, eu não as via. Quando declamava algum poema, não me era lícito por um pé em
qualquer outra parte do verso, senão em uma espécie de metro uns e em outra outros, e em um
mesmo verso não podia meter em todas as partes o mesmo pé; e a própria arte da prosódia,
apesar de mandar coisas tão distintas, não era diversa em cada parte, senão uma só e coerente.
Contudo, não via como a justiça, à qual serviram aqueles varões bons e santos, pudesse conter
simultaneamente, de modo mais belo e sublime, preceitos tão diversos, sem variar em sua
essência, apesar de não mandar ou distribuir aos diferentes tempos todas as coisas
simultaneamente, mas a cada um as que lhe são próprias. E, cego, censurava àqueles piedosos 
patriarcas, que não só usavam do presente como Deus lhes mandava e inspirava, mas também
prediziam o futuro conforme Deus lhes revelava.
CAPÍTULO VIII
Moral e costume
 Acaso será em alguma parte e momento injusto amar a Deus de todo o coração, com toda
a alma e com todo o entendimento, e amar ao próximo como a nós mesmos? Por isso, todos os
pecados contra a natureza, como o foram os do sodomitas, hão de ser detestados e castigados
sempre e em toda a parte, pois, mesmo que todos os cometessem, não seriam menos réus de
crime diante da lei divina, que não fez os homens para usar tão torpemente de si; de fato viola-se
a união que deve existir com Deus quando a natureza, da qual ele é autor, se mancha com a
depravação das paixões.
 Com relação aos pecados que são contra os costumes humanos, também hão de ser
evitados de acordo com a diversidade dos costumes, a fim de que o pacto mútuo entre os povos e
nações, firmado pelo costume ou pela lei, não seja quebrado por nenhum capricho de cidadão ou
forasteiro, porque é indecorosa a parte que não se acomoda ao todo.
 Todavia, quando Deus ordena algo contra tais costumes ou pactos, sejam quais forem,
deve ser obedecido, embora o que mande nunca tenha sido feito; e se não foi cumprido, deve ser
restaurado, e se não estava estabelecido, deve-se estabelecer. Se é lícito a um rei mandar na
cidade que governa coisas que ninguém antes dele e nem ele próprio havia mandado, e se não é
contra o bem da sociedade obedecê-lo, antes o seria o não obedecê-lo – por ser pacto básico de
toda sociedade humana obedecer a seus reis – quanto mais deveria ser Deus obedecido sem
titubeios em tudo que mandar, como rei do universo? Porque, assim como entre os poderes
humanos o maior poder se antepõe ao menor, para que este lhe preste obediência, assim Deus
antepõe-se a todos.
 O mesmo se deve dizer dos crimes perpetrados com desejo de causar o mal, quer por
agressão, quer por injúria; e ambas as coisas, ou por desejo de vingança, como ocorre entre
inimigos, ou por alcançar algum bem sem trabalhar, como o ladrão que rouba ao viajante; ou para
evitar algum mal, como acontece com o que teme; ou por inveja, como quando um miserável quer
mal ao que é mais feliz, ou ao que conseguiu riquezas, temendo ser igualado ou que já lhe sejam
iguais; ou unicamente pelo prazer de ver o mal alheio, como acontece com o espectador dos
combates dos gladiadores, ou com o que se ri e zomba dos outros.
 Tais são os princípios ou fontes de iniqüidade, que nascem da paixão de mandar, de ver
ou de sentir, quer de uma só dessas paixões, ou de duas, ou de todas juntas. Razão por que se
vive do mal, ó Deus altíssimo e dulcíssimo, contra o saltério de dez cordas, teu decálogo.
 Mas, que pecado pode atingir a ti, que não és atingido pela corrupção? Ou que crimes
podem ser cometidos contra ti, a quem ninguém pode causar dano? O que vingas são os crimes
que os homens cometem contra si, porque, mesmo quando pecam contra ti, agem impiamente
contra suas próprias almas, e sua iniqüidade engana-se a si própria, quer corrompendo e
pervertendo sua natureza – feita e ordenada por ti – quer usando imoderadamente das coisas
permitidas, ou até desejando imoderadamente as não permitidas, pelo uso daquilo que é contra a
natureza.
 Pecam também os que com o pensamento e a palavra se revoltam contra ti, dando coices
contra o aguilhão; ou quando, uma vez quebrados os limites da sociedade humana, alegram-se
audaciosamente com as facções ou desuniões, de acordo com as suas simpatias ou antipatias. E
tudo isso o homem faz quando és abandonado, fonte da vida, único e verdadeiro criador e senhor
do universo, e com orgulho egoísta ama-se uma parte do todo como se fosse o todo.
 Essa a razão pela qual só se pode voltar para ti com piedade humilde, para assim nos
purificares nossos maus costumes; pela piedade te mostras propício com os pecados dos que te
confessam, e ouves os gemidos dos cativos, e nos livras dos grilhões que nós mesmo forjamos,
contanto que não ergamos contra ti os chifres de uma falsa liberdade, quer arrastados pela cobiça
de mais haveres, quer pelo temos de perder tudo, preferindo nosso próprio egoísmo a ti, Bem de
todos. 
CAPÍTULO IX
Pecados e imperfeições
 Mas, entre tantas maldades, crimes e iniqüidades, estão os pecados dos que progridem,
pecados que os homens de bom juízo vituperam, segundo a regra da perfeição, e louvam pela
esperança de frutos futuros, como o verde é promissor das colheitas.
 Há outras ações semelhantes a ações maldosas ou a delitos, e que não são pecados,
porque nem te ofendem a ti, Senhor, nosso Deus, nem tampouco à sociedade humana; como por
exemplo quando procuramos coisas convenientes para o uso da vida e às circunstâncias, sem
que se saiba se essa busca é cobiça, ou quando castigamos a alguém como desejo de que se
corrija, fazendo uso do poder ordinário, e não se sabe se o fazemos por vontade de mortificar.
 Por isso, muitas ações que parecem condenáveis aos homens, são aprovadas por teu
testemunho; e muitas, louvadas pelos homens, são condenadas por teu testemunho, porque
muitas vezes as aparências do ato diferem das intenções do seu autor, assim como circunstâncias
ocultas do tempo.
 Mas quando ordenas, algo insólito e imprevisto, mesmo que o tenhas proibido uma vez,
mesmo que escondas por algum as razões do teu mandamento, mesmo que seja contra as
convenções de alguns homens da sociedade, quem pode duvidar de que se há de obedecer,
sendo que só é justa a sociedade humana que te obedece? Felizes dos que sabem o que tu
ordenaste, porque os que te servem fazem tudo o que mandas, ou porque assim o exige o tempo
presente, ou para preparar o futuro.
CAPÍTULO X
Ridicularias dos maniqueus
 Desconhecendo eu essas verdades, ria-me de teus santos e profetas. Mas, que fazia eu
quando me ria deles, senão dar motivo para que te risses de mim? deixei-me cair
insensivelmente, aos poucos, em tais extravagâncias, a ponto de acreditar que o figo, quando
colhido, chora lágrimas de leite junto com a mãe figueira, e que se um “santo” da seita comesse o
tal figo, colhido não por seu delito, mas de outrem, misturando-o em suas entranhas, gemendo e
arrotando enquanto rezava, exalaria anjos e até mesmo partículas de Deus, partículas essas do
verdadeiro Deus que ficariam cativas para sempre naquele fruto se não fossem libertadas pelos
dentes e pelo estômago do “santo eleito”!
 Também acreditei, pobre de mim, que se devia ter mais misericórdia com os frutos da terra
que com os homens para os quais foram criados. Pois, se algum faminto, que não fosse
maniqueísta me pedisse de comer, parecia-me que atendê-lo era como merecer, por aquele
bocado, a pena de morte.
CAPÍTULO XI
O sonho de Mônica
 Mas estendeste tua mão do alto, e arrancaste minha alma deste abismo de trevas,
enquanto minha mãe, tua fiel serva, chorava-me diante de ti muito mais do que as outras mães
costumam chorar sobre o cadáver dos filhos, pois via a morte de minha alma com a fé e o espírito
que havia recebido de ti. E tu a escutaste, Senhor, tu a ouviste e não desprezaste suas lágrimas
que, brotando copiosas, regavam o solo debaixo de seus olhos por onde fazia sua oração; sim, tu
a escutaste, Senhor. Com efeito, donde podia vir aquele sonho, com que a consolaste, ao ponto
de me admitir em sua companhia e mesa, fato que havia me negado porque aborrecia e detestava
as blasfêmias do meu erro?
 Nesse sonho viu-se de pé sobre uma régua de madeira; e um jovem resplandecente,
alegre e risonho que vinha ao seu encontro, triste e amarga. Este lhe perguntou a causa de sua
tristeza e lágrimas diárias, não por curiosidade, como sói acontecer, mas para instruí-la; e
respondendo-lhe ela que chorava a minha perdição, mandou-lhe, para sua tranqüilidade, que 
prestasse atenção e visse por onde ela estava também estaria eu. Apenas olhou, viu-me junto de
si, de pé sobre a mesma régua.
 De onde veio este sonho, senão dos ouvidos que tinhas atentos a seu coração, ó Deus
bom e onipotente, que cuidas de cada um de nós como se não tivesses outro para cuidar, zelando
de todos como de cada um!
 E como explicar o que se segue? Contou-me minha mãe esta visão, e querendo-a eu
persuadir de que significava o contrário, e que não devia desesperar de ser algum dia o que eu
era, isto é, maniqueísta, ela, sem nenhuma hesitação, me respondeu: “Não; não me foi dito: onde
ele está ali estarás tu, mas onde tu estás ali estará ele também”.
 Confesso, Senhor, e muitas vezes disse que, pelo que me recordo, me abalou mais esta
tua resposta pela solicitude de minha mãe, imperturbável diante de explicação falsa e ardilosa, e
por ter visto o que se devia ver – e que eu certamente não veria sem que ela o dissesse – que o
mesmo sonho com o qual anunciaste a esta piedosa mulher com tanta antecedência, a fim de
consolá-la em sua aflição presente, uma alegria que só havia de se realizar muito tempo depois.
 Seguiram-se, efetivamente, quase nove anos, durante os quais continuei a me revolver
naquele abismo de lodo e trevas de erro, afundando-me tanto mais quanto mais esforços fazia
para me libertar. Entretanto, aquela piedosa viúva, casta e sóbria como as que tu amas, já um
pouco mais alegre com a esperança, porém, não menos solícita em suas lágrimas e gemidos, não
cessava de chorar por mim em tua presença em todas as horas de suas orações; e suas preces
eram aceitas a teus olhos, mas deixava-me ainda revolver-me e envolver-me naquela escuridão.
CAPÍTULO XII
Uma profecia
 Nessa mesma ocasião deste à minha mãe outra resposta, de que ainda me lembro – pois
passo em silencio muitas circunstâncias, pela pressa que tenho de chegar àquelas que te devo
confessar com mais urgência, ou porque não as recordo – deste-lhe outra resposta por meio de
um teu bispo, educado em tua Igreja e exercitado em tuas Escrituras. Como ela pedisse que se
dignasse falar comigo, para refutar meus erros e desenganar-me de minhas más doutrinas e
ensinar-me as boas – pois assim fazia com quantos julgava idôneos – ele negou-se com muita
prudência, como pude verificar depois; respondeu-lhe que eu estava incapacitado para receber
qualquer ensinamento, por estar enfatuado com a novidade da heresia maniqueísta, e por haver
criado embaraço a muitos ignorantes com algumas questões fáceis, como ela mesma lhe relatara.
“Deixe-o – disse – e unicamente ore por ele ao Senhor! Ele mesmo, lendo os livros dos hereges,
descobrirá o erro e reconhecerá sua grande impiedade”. – Ao mesmo tempo contou-lhe que,
quando criança, sua mãe, seduzida pelo erro, entregara-o aos maniqueus, chegando não só a ler,
mas a copiar quase todas as suas obras; e que ele mesmo, sem necessidade de que ninguém o
contestasse ou convencesse, chegara a perceber a falácia daquela doutrina, abandonando-a
enfim.
 Depois de assim falar, minha mãe não se aquietava, instando com maiores rogos e mais
copiosas lágrimas a que me visitasse, para discutir comigo sobre o tal assunto. O bispo, já com
certo enfado de sua insistência, lhe disse: “Vai-te em paz, mulher, e continua a viver assim, que
não é possível que pereça o filho de tantas lágrimas” – palavras que ela recebeu como vindas do
céu, segundo me recordava muitas vezes em seus colóquios comigo. 
LIVRO QUATRO
CAPÍTULO I
Dos dezenove aos vinte e oito anos
 Durante esse período de nove anos – dos dezenove até os vinte e oito anos – fui seduzido
e sedutor, enganado e enganador, conforme minhas muitas paixões; publicamente, com aquelas
doutrinas que se chamam liberais; ocultamente, com o falso nome de religião, mostrando-me aqui
soberbo, ali supersticioso, e em toda parte vaidoso. Ora perseguindo a aura da gloria popular até
os aplausos do teatro, os certames poéticos, os torneios de coroas de feno, as bagatelas de
espetáculos e a intemperança da luxúria; ora, desejando muito purificar-me dessas imundícies,
levando alimento aos chamados “eleitos” e “santos”, para que na oficina de seu estômago
fabricasse anjos e deuses que me libertassem. Tais coisas seguia eu e praticava com meus
amigos, iludidos comigo e por mim.
 Riam-se de mim os arrogantes, e os que ainda não foram prostrados e salutarmente
esmagados por ti, meu Deus; mas eu, pelo contrário, hei de confessar diante de ti minhas
torpezas para teu louvor. Permite-me, te suplico, e concede-me que me lembre fielmente dos
desvios passados de meu erro, e que eu te sacrifique uma vítima de louvor.
 De fato, sem ti, que sou eu para mim mesmo senão um guia que conduz ao abismo? Ou
que sou eu, quando tudo me corre bem, senão uma criança que suga o leite, e que se alimenta de
ti, alimento incorruptível? E que é o homem, seja ele quem for, se é homem?
 Riam-se de nós os fortes e poderosos, que nós, débeis e pobres, confessaremos teu santo
nome.
CAPÍTULO II
Professor de retórica
 Naqueles anos eu ensinava retórica e, movido pela cobiça, vendia a arte de vencer pela
loquacidade. Contudo, bem sabes, Senhor, que preferia ter bons discípulos, dos que se chamam
“bons”, aos quais ensinava sem rodeios a arte de enganar, não para que usassem dela contra a
vida de um inocente, mas para algum dia defender algum culpado. Mas, ó Deus, tu me viste de
longe vacilar sobre um caminho escorregadio, viste brilhar, entre espesso fumo, os fulgores da
boa fé que eu demonstrava ao ensinar àqueles amantes da vaidade, àqueles pesquisadores de
mentiras, eu, seu irmão e semelhante.
 Por essa mesma época tive em minha companhia uma mulher, não reconhecida pelo
chamado matrimônio legítimo, mas procurada pelo inquieto ardor de minha paixão imprudente;
mas era só uma, e eu lhe era fiel. E assim experimentei pessoalmente a distância que há entre o
amor conjugal contraído com o fim de ter filhos, e o amor lascivo, no qual a prole também nasce,
mas contra o desejo dos pais, embora, uma vez nascida, os obrigue a amá-la.
 Lembro-me também de que, querendo participar de um certame de poesia, um arúspide
mandou-me indagar que dádiva lhe daria para eu sair vencedor. Mas eu, que abominava aqueles
nefandos sortilégios, respondi-lhe que não consentiria que se matasse uma mosca para obter a
vitória, mesmo que o prêmio fosse uma coroa de ouro incorruptível; sabia eu que ele teria de
matar animais em seus sacrifícios, julgando com tais honras assegurar para mim os votos do
demônio.
 Mas, confesso, Deus de meu coração, que se repudiei tal crime, não o fiz por amor da tua
pureza. Pois ainda não sabia te amar, eu, que sabia conceder apenas esplendores corpóreos.
Não é pois verdade que a alma que suspira por semelhantes fábulas não se aniquila longe de ti, e
se apóia na falsidade, e se apascenta de vento? Mas eis que, não querendo que se oferecessem
sacrifícios aos demônios, eu mesmo me sacrificava a eles com aquela superstição. Com efeito,
que significa apascentar ventos, senão apascentar os espíritos diabólicos, isto é, tornarmo-nos,
por nossos erros, objeto de seu riso e escárnio? 
CAPÍTULO III
A atração da astrologia
 Por isso, não cessava de consultar os impostores chamados matemáticos, já que estes
não usavam em suas adivinhações de quase nenhum sacrifício, nem dirigiam preces a nenhum
espírito o que, consequentemente, é condenado e repelido com razão pela piedade cristã e
verdadeira. Porque o bom é confessar-te, Senhor, e dizer-te: Tem misericórdia de mim, e cura
minha alma, porque pecou contra ti, e não abusar da tua indulgência para pecar mais livremente,
mas ter sempre presente a sentença do Senhor: Eis-te curado: não peques mais, para que te não
suceda algo pior – Estas palavras, cujo efeito salutar os astrólogos querem destruir, dizendo: “O
impulso de pecar vem dos céus; foi Vênus, Saturno ou Marte que fizeram isto” – e tudo para que o
homem, que é carne, e sangue, e soberba podridão, se sinta sem culpa, e atribua esta ao criador
e ordenador do céu e das estrelas. E quem é este, senão tu, nosso Deus, suavidade e fonte de
justiça, que dás a cada um de acordo com suas obras, e não desprezas ao coração contrito e
humilhado?
 Havia então um varão muito sábio, peritíssimo na arte médica, na qual era celebre; sendo
procônsul, pôs com suas próprias mãos sobre minha cabeça insana a coroa da vitória do
concurso; foi como procônsul, e não como médico, porque daquela minha enfermidade só tu me
podias sarar, pois resistes aos soberbos e dás tua graça aos humildes.
 Contudo, deixaste acaso de cuidar de mim também por meio daquele ancião? Ou talvez
desistisse de curar minha alma? Tendo-me familiarizado muito com ele, passei a ser assistente
assíduo e freqüente de suas conversas, que eram agradáveis e graves, não pela elegância da
linguagem, mas pela vivacidade das sentenças. Assim que ficou sabendo, por conversa, que eu
me dedicava à leitura dos livros dos astrólogos, admoestou-me benigna e paternalmente a que os
deixasse, e a que não gastasse inutilmente nessas quimeras meus cuidados e trabalho, que
melhor empregaria em coisas úteis. Acrescentou que também ele havia cultivado aquela arte, a
ponto de querer adotá-la, em sua juventude, como profissão para ganhar a vida, pois, se havia
entendido Hipócrates, podia também entender aqueles livros; por fim, deixara aqueles estudos
pelos da medicina, por causa da sua falsidade, não querendo, como homem sério, ganhar o pão
enganando os outros. “Mas tu, disse-me ele – que tens para manter entre os homens tuas aulas
de retórica, segues essas mentiras não por necessidade, mas por mera curiosidade; mais um
motivo para que acredites no que te digo, pois cuidei de aprendê-la tão perfeitamente que quis
viver apenas de seu exercício”.
 Indaguei-lhe então por que muitas das coisas prognosticadas pela tal ciência se revelavam
verdadeiras, respondeu-me, como pôde, que a força do acaso está espalhada por toda a
natureza. “Se alguém – dizia ele – consultando as vezes as páginas de um poeta qualquer,
encontra um verso que, apesar do poeta pensar em coisas muito diversas quando o compôs,
adapta-se admiravelmente ao assunto que o preocupa; assim pois nada tem de estranho que a
alma humana, movida por instinto superior, inconsciente do que se passa no seu íntimo, diga, não
por arte, mas por sorte, algo que corresponda aos atos e gestos do consulente”.
 E isto, Senhor, me ensinou ele, ou melhor, me ensinaste por teu intermédio, e delineaste
em minha memória o que eu mesmo mais tarde devia procurar. Mas então, nem ele, nem meu
caríssimo Nebrídio, jovem muito bom e casto, que zombava de toda aquela arte divinatória,
puderam me convencer a abandoná-la, porque ainda impressionava-me mais a autoridade
daqueles autores. Não tinha eu encontrado ainda o argumento evidente que procurava, que me
demonstrasse sem ambigüidade que os presságios acertados dos astrólogos são obra da sorte ou
casualidade, e não da arte de observar os astros.
CAPÍTULO IV
A morte do amigo
 Por aqueles anos, quando comecei a ensinar em minha cidade natal, conheci um amigo, a
quem amei em demasia por ser meu companheiro de estudos, de minha idade, e por estarmos
ambos na flor da juventude. Juntos fomos criados quando crianças, juntos íamos à escola, juntos 
havíamos brincado. Mas nessa época não era amigo tão íntimo como o foi depois, embora
também não o fosse tanto quanto o exige a verdadeira amizade, uma vez que esta só existe entre
os que unes por meio da caridade, derramada em nossos corações pelo Espírito Santo que nos
foi dado.
 Contudo, aquela amizade, aquecida ao calor de estudos semelhantes era-me sumamente
grata. Consegui até afastá-lo da verdadeira fé, pouco profunda e arraigada em sua adolescência,
arrastando-o para as fábulas supersticiosas e prejudiciais, razão das lágrimas de minha mãe.
Esse homem já errava em espírito comigo, e minha alma não podia viver sem ele.
 Mas eis que, seguindo de perto no encalço de teus servos fugitivos, ó Deus das vinganças,
que és a um tempo fonte de misericórdia, e nos converte a ti por estranhos caminhos, eis que tu o
arrebataste desta vida, quando eu apenas havia gozado um ano de sua amizade, mais doce para
mim que todas as doçuras da minha vida.
 Quem poderá enumerar teus louvores, mesmo limitando-se ao que experimentou em si
mesmo? Que fizeste então, meu Deus! E quão impenetrável é o abismo de teus juízos! Lutando
meu amigo contra a febre, ficou por muito tempo sem sentidos, banhado no suor da morte; e,
como temessem por sua vida, batizaram-no sem que ele o soubesse, com o que não me importei,
convencido que estava de que seu espírito reteria melhor aquilo que eu lhe havia inculcado do
que o sinal que recebera sobre o corpo inconsciente.
 A realidade, contudo, foi muito outra. Melhorando, e estando fora de perigo, logo que lhe
pude falar – e o fiz logo que ele o pôde, e como dependíamos mutuamente um do outro eu não
me afastava do seu lado – tentei rir-me em sua presença do batismo, julgando que também ele
zombaria comigo de um batismo recebido sem conhecimento nem sentidos, mas ele já sabia que
o havia recebido. Olhando-me então com horror, como a um inimigo, admoestou-me com
admirável e repentina franqueza, dizendo-me que se queria continuar a ser seu amigo deixasse
de tais palavras. Admirado e perturbado, reprimi toda minha emoção, esperando que
convalescesse primeiro, para, recobradas as forças, estar disposto a discutir comigo o que
quisesse. Mas tu, Senhor, livraste-o de minha louca amizade, guardando-o em ti para o meu
consolo, pois, poucos dias depois, na minha ausência, voltaram-lhe as febres e morreu.
 Que dor fez anoitecer o meu coração! Tudo o que via era morte para mim. a pátria me era
um suplício, e a casa paterna tormento insuportável, e tudo o que o lembrava transformava-se
para mim em crudelíssimo martírio. Buscavam-no por toda parte meus olhos, e o mundo não mo
devolvia. Cheguei a odiar todas as coisas, porque nada o continha, e ninguém mais me podia
dizer como antes, quando chegava depois de alguma ausência: “Ali vem ele”. Transformara-me
mesmo num grande problema. Perguntava à minha alma porque andava triste, e se perturbava
tanto, e ela não sabia o que responder-me. E se eu lhe dizia: “Espera em Deus” – minha alma não
me obedecia, e com razão, porque para mim, era mais real e melhor o amigo querido que perdera,
que o fantasma em que mandava tivesse esperança. Só o pranto me era doce. Ocupava o lugar
de meu amigo nas delicias de meu coração.
CAPÍTULO V
O conforto das lágrimas
 E agora, Senhor, que essas coisas já passaram, agora que o tempo sarou minha ferida,
poderei ouvir de ti, que és a própria verdade, aproximando o ouvido de meu coração de tua boca,
o motivo por que o pranto é doce aos desgraçados? Acaso, mesmo presente em toda parte,
repeliste para longe de ti nossa miséria, permanecendo imutável em ti, enquanto deixas que nos
envolvamos em nossas provações? E, contudo, se nossos lamentos não chegarem a teus
ouvidos, não haverá para nós esperança alguma.
 Mas, por que motivo dos gemidos, do choro, dos suspiros e das queixas colhe-se como
fruto doce do amargor da vida? Esperamos que nos ouça? Virá daí a doçura? Isso acontece na
oração que leva em si o desejo de chegar a ti; porém, poder-se-á dizer o mesmo da dor da perda
ou do pranto que então me avassalavam?
 Eu não esperava ressuscitar meu amigo com minhas lágrimas, mas limitava-me a me
condoer e a chorar minha miséria, pois eu havia perdido minha alegria.
 Ou será que o pranto, que é amargo em si mesmo, se torna um deleite quando, pelo fastio,
aborrecemos os prazeres que antes nos eram gratos? 
CAPÍTULO VI
Inconsolável
 Mas para que falar dessas coisas, se agora não é tempo de investigar, mas de me
confessar a ti? Eu era miserável, como o é toda alma prisioneira do amor pelas coisas temporais;
se sente despedaçar quando as perde, sentindo então sua miséria, que a torna miserável antes
mesmo de as perder. Assim é como eu era então e, chorando muito amargamente, descansava
na amargura. E como era miserável! Contudo, mais que o amigo caríssimo, eu amava minha vida
miserável, porque embora desejasse mudá-la, não queria perdê-la como ao amigo, não sei se
gostaria de perdê-la por ele, como se conta de Orestes e Pílades – se não é ficção – que queriam
morrer um pelo outro, porque para eles viver separados era pior que a morte. Mas não sei que
novo sentimento nascera em mim, muito contrário a este: sentia pesado tédio de viver, e ao
mesmo tempo tinha medo de morrer. Creio que quanto mais amava o amigo tanto mais odiava e
temia a morte, como inimigo feroz que mo havia arrebatado; pensava que ela acabaria de repente
com todos os homens, como o fizera com ele. Este era meu estado de espírito, pelo que me
lembro.
 Meu Deus, eis aqui meu coração, ei seu conteúdo! Olha para o meu passado, porque sei,
esperança minha, que me purificas da impureza desses afetos, atraindo para ti meus olhos, e
libertando meus pés dos laços que me aprisionavam. Maravilhava-me de que sobrevivessem os
outros mortais a seus amados se nunca houvessem de morrer; e mais me maravilhava ainda de
que, morto ele, eu continuasse a viver, porque eu era outro ele. Bem disse um poeta quando
chamou ao amigo “metade da sua alma”. E eu senti que minha alma e a sua não eram mais que
uma em dois corpos, e por isso causava-me horror a vida, porque não queria viver pela metade; e
ao mesmo tempo tinha muito medo de morrer, para que não morresse de todo aquele a quem eu
tanto amara.

CAPÍTULO VII
De Tagaste para Cartago
 Ó loucura, que não sabe amar os homens humanamente! Ó homem insensato, que sofre
desmedidamente os reveses humanos! Assim era eu então, e assim agitava-me, suspirava,
chorava, perturbava-me, e não encontrava descanso nem conselho. Trazia a alma em farrapos e
ensangüentada, indócil ao meu governo, e eu não encontrava lugar onde a pudesse depor. Nem
os bosques amenos, nem os jogos e cantos, nem os lugares suavemente perfumados, nem os
banquetes suntuosos, nem os prazeres da alcova e do leito, nem, finalmente, os livros e os versos
podiam dar-lhe descanso. Tudo me causava horror, até a própria luz. Tudo o que não era o que
ele era, era-me insuportável e odioso, exceto gemer e chorar, pois, somente nisto achava algum
repouso. E se minha alma deixava de chorar, logo pesava sobre mim o grande fardo da desgraça.
 A ti, Senhor, deveria ser elevada, para ter cura. Eu o sabia, mas não o queria nem podia.
Tanto mais que, ao pensar em ti, não tinha em mente algo sólido e firme, mas um fantasma, o
meu erro. Se nele tentava descansar minha alma, logo deslizava como quem pisa em falso, e caía
de novo sobre mim. Eu era para mim mesmo uma infeliz morada, na qual era ruim e da qual não
podia sair. E para onde iria meu coração, fugindo de si mesmo? Para onde fugir de mim mesmo?
Para onde não me seguiria?
 Por isso fugi de minha pátria, porque meus olhos buscariam menos meu amigo onde não
estavam acostumados a vê-lo. E assim me fui de Tagaste para Cartago.
CAPÍTULO VIII
O consolo do tempo e da amizade
 O tempo não corre debalde, nem passa inutilmente sobre nossos sentidos; antes, causa na
alma efeitos maravilhosos. Assim vinha e passava, dias após dias, e passando deixava em mim
novas esperanças e novas recordações; pouco a pouco restituía-me a meus prazeres de outrora, 
a que ia cedendo minha dor. Substituíam-na não novas dores, mas sementes de novas dores.
Mas, por que me penetrara aquela dor tão profundamente, até o mais íntimo de meu ser, senão
porque derramei minha alma sobre a areia, amando a um mortal como se não o fora? O que mais
me confortava e alegrava eram sobretudo as consolações de outros amigos, com os quais
partilhava o amor para o que amava tem teu lugar, isto é, uma fábula enorme, uma longa mentira,
cujo contato impuro corrompia nossa mente, arrastada pelo prurido de ouvir aquilo que a
agradava; fábula esta que não morria para mim, ainda que morresse algum de meus amigos.
 Outros prazeres havia neles que cativavam mais fortemente minha alma, como conversar,
rir, agradar-nos mutuamente com amabilidade, ler juntos livros bem escritos, gracejar uns com os
outros e divertir-nos juntos; às vezes discutir, mas sem ódio, como quando discordamos de nós
mesmos para, com tais discórdias muito raras, temperar as muitas conformidades; ensinar ou
aprender reciprocamente muitas coisas, suspirar impacientes pelos ausentes e receber alegres os
recém-chegados. Estes sinais, e outros semelhantes, que procedem de corações que se amam, e
que se manifestam no rosto, na fala, nos olhos, e em mil outros gestos graciosos, inflamavam
nossas almas, como em uma centelha, fazendo de muitas uma só.
CAPÍTULO IX
O amigo de Deus
. É isto o que se ama nos amigos; e de tal modo se ama, que a consciência humana se julga
culpada se não ama ao que a ama, ou se não retribui amor com amor procurando na pessoa do
amigo apenas o sinal exterior de sua benevolência. Daqui o pranto do luto quando morre um
amigo, as trevas de dores, e as lágrimas que inundam o coração quando a doçura se transforma
em angústia, e a morte dos que morrem na morte dos que vivem.
 Bem-aventurado o que te ama, Senhor, e ama ao amigo em ti, e ao inimigo por amor a ti;
só não perde o amigo quem tem a todos por amigos naquele que nunca se perde. E quem é este,
senão nosso Deus, o Deus que fez o céu e a terra, e os enche, porque, enchendo-os, os criou?
Ninguém, Senhor, te perde senão o que te abandona. Mas, quem te deixa, para onde vai, ou para
onde foge, senão de ti benévolo para ti irado? Onde não achará tua lei para seu castigo? Porque
tua lei é a verdade, e a verdade és tu mesmo.
CAPÍTULO X
As mentiras da beleza
 Ó Deus das virtudes! Converte-nos e mostra-nos tua face, e seremos salvos! Porque, para
onde quer que se volte a alma humana, onde quer que se estabeleça fora de ti, sempre
encontrará dor, mesmo que sejam as belezas que estão fora de ti e fora de si mesma; e todavia,
estas nada seriam se não existissem em ti. Elas nascem e morrem; e, nascendo, começam a
existir, e crescem para alcançar a perfeição e, uma vez perfeitas, começam a envelhecer e
morrem. Embora nem tudo envelheça, tudo perece. Logo, quando os seres nascem e se esforçam
para existir, quanto mais depressa crescem para existir, tanto mais se apressam para deixar de
existir. Esta é a sua condição. Eis tudo o que lhes deste, porque são partes de coisas que não
existem simultaneamente mas, morrendo e sucedendo-se umas às outras, formam o conjunto de
que são partes.
 Assim forma-se também nosso discurso, por meio dos sinais sonoros; este nunca se
realizaria se uma palavra não se extinguisse, depois de pronunciadas suas sílabas, para dar lugar
à seguinte.
 Que minha alma te louve por tudo isto, ó Deus, criador de todas as coisas; mas não se
pegue a elas com o visco do amor dos sentidos, pois também elas caminham para o não-ser, e
dilaceram a alma com desejos pestilenciais, e ela quer existir e gosta de descansar nas coisas
que ama. Mas nelas não acha onde, porque as coisas não são estáveis. Elas são fugazes, e
quem poderá segui-las com os sentidos da carne? Ou quem as pode alcançar, mesmo estando
presentes? Lento é o sentido da carne, por ser da carne, mas essa é a sua condição. É suficiente
para o que foi criado, mas não o é para reter o curso das coisas, do princípio que lhes foi fixado, 
até o fim que lhes foi designado, porque em teu Verbo, que as criou, ouvem estas palavras:
“Daqui até ali”.
CAPÍTULO XI
A verdade de Deus
 Não seja vã, ó minha alma, nem ensurdeças o ouvido do coração com o tumulto de tua
vaidade. Ouve também : o próprio Verbo clama que voltes, porque só acharás repouso
imperturbável lá onde o amor não é abandonado, se ele não nos abandona antes. Eis que as
coisas passam para ceder lugar as outras, e para que assim se forme este universo inferior, de
todas as suas partes. “Mas, por acaso, afasto-me de um lugar para outro? – diz o Verbo de Deus
– Fixa nele tua morada, confia a ele tudo o que dele recebeste, alma minha, já cansada de tantos
enganos. Confia à Verdade quanto da Verdade recebeste, e nada perderás; antes, tua podridão
reflorescerá e serão curadas todas as tuas fraquezas, e serão retomadas e renovadas,
estreitamente unidas a ti, tuas partes inconscientes; e já não te arrastarão para a ladeira por onde
descem, mas permanecerão contigo para sempre onde está Deus, eterno e imutável.
 Por que, perversa, segues o apelo de tua carne? Seja esta, convertida a te seguir. Tudo o
que por ela sentes é parte, mas ignoras o todo de que é parte, ainda que te dê prazer. Mas, se os
sentidos de tua carne fossem idôneos para compreender o todo, e se, para teu castigo, não
tivessem sido justamente limitados a compreender apenas partes do universo, certamente
desejarias que passasse tudo o que presentemente existe, para melhor desfrutar do conjunto.
 O que falamos também ouves com os ouvidos da carne, e com certeza não queres que as
sílabas se detenham, mas que voem, para que outras lhes sucedam, e assim ouvires o conjunto.
O mesmo acontece com todas as coisas que compõem um todo, quando essas partes
constituintes não existem simultaneamente; há mais encanto no todo do que nas partes
percebidas separadamente. Mas melhor do que todas elas, é o que as fez, que é nosso Deus, que
não passa, porque nada vem depois dele.
CAPÍTULO XII
O amor em Deus
 Se te agradam os corpos, louva a Deus neles, e dirige teu amor para teu artífice, para não
o desagradar nas mesmas coisas que te agradam.
 Se te agradam as almas, ama-as em Deus, porque, embora mutáveis, se fixas nele, terão
estabilidade; de outro modo, passariam e pereceriam. Ama-as, pois, nele, e arrasta contigo até ele
quantas almas puderes, dizendo-lhes: “Amemo-lo”. Porque ele criou estas coisas, e não está
longe; ele não as fez para depois ir embora, mas dele procedem e nele estão. E ele está onde
aprecia a verdade: no mais íntimo do coração; mas o coração errante se afastou dele.
 Voltai, pecadores, ao coração, e ligai-vos àquele que é vosso criador. Firmai-vos nele, e
estareis firmes; descansai nele, e estareis descansados. Para onde ides por esses ásperos
caminhos? Para onde ides? O bem que amais, dele procede, mas só é bom e suave quando se
dirige a ele; porém, será justamente amargo se, abandonando a Deus, amardes injustamente o
que dele procede. Por que continuai por caminhos difíceis e trabalhosos? O descanso não está
onde o buscais. Buscais a vida feliz na região das trevas: não está lá. Como achar a vida bemaventurada onde nem sequer há vida?
 Ele, nossa vida real veio até nós; sofreu nossa morte, e a suplantou com a abundância de
sua vida; com voz de trovão clamou para que voltássemos a ele, para o lugar escondido de onde
veio até nós, passando primeiro pelo seio de uma virgem, onde se desposou com ele a natureza
humana, carne mortal, para não ficar sempre mortal.
 Dali, como o esposo que sai do tálamo, deu saltos como um gigante, para correr seu
caminho. E não se deteve; correu clamando com suas palavras, com suas obras, com sua própria
morte, com sua vida, com sua descida aos ínferos e com sua ascensão, clamando para que
voltássemos a ele. Se ele se afastou de nossa vista, foi para que entremos em nosso coração, e
ali o encontremos; se partiu, ainda está conosco. Não quis ficar por muito tempo entre nós, mas 
não nos abandonou. Retirou-se de onde nunca se afastou, pois o mundo foi criado por ele, e no
mundo estava, e ao mundo veio para salvar os pecadores. E a ele se confessa minha alma, a ele
que a cura e contra quem pecou.
 Filhos dos homens, até quando sereis duros de coração? Será possível que, depois de ter
a vida descido até vós, não queirais subir e viver? Mas para onde subis, quando vos ergueis e
abris vossa boca no céu? Descei para subir, para subir até Deus, já que caístes levantando-vos
contra Deus.
 Dize-lhes isto, minha alma, para que chorem neste vale de lágrimas, e assim os arrebates
contigo para Deus, pois, ao dizer estas palavras ardendo em chamas de caridade, é o espírito
divino que te inspira.
CAPÍTULO XIII
O problema do belo
 Então eu ignorava tais coisas – e por isso amava belezas terrenas. Caminhava para o
abismo, dizendo a meus amigos: “Será que amamos algo que não é belo? E que é o belo? E que
é a beleza? Que é que nos atrai e apega às coisas que amamos? Pois, com certeza, se nelas não
houvesse certa graça e formosura, não nos atrairiam.
 E eu observava e via que num mesmo corpo uma coisa era o todo, harmonioso e belo, e
outra o que lhe era conveniente, sal aptidão de se ajustar de maneira perfeita a alguma coisa
como, por exemplo, a parte do corpo em relação ao conjunto, o calçado em relação ao pé, e
outras similares. Esta consideração brotou em minha alma do íntimo de meu coração, e escrevi
alguns livros sobre o belo e o conveniente, creio que dois ou três – tu o sabes, Senhor – pois já
me esqueci, e não os tenho mais porque se me extraviaram não sei como.
CAPÍTULO XIV
Razões de uma dedicatória
 Mas, meu Senhor e meu Deus, qual o motivo de dedicar esses livros a Hiério, orador de
Roma? Não o conhecia, apreciando-o apenas pela fama de sua doutrina, que era grande, e por
alguns ditos seus, que ouvira, e que me agradaram. Mas dele gostava principalmente porque ele
agradava aos outros, que lhe tributavam grandes elogios, admirados de que um sírio, educado na
eloqüência grega, chegasse a orador admirável na latina, e grande conhecedor de todos os
assuntos, ligados à filosofia. Assim, ouve-se louvar a um homem, e, embora ausente, começa-se
a amá-lo. Entrará o amor no coração do que ouve pela boca do que louva? É certo que não, mas
o amor de um se inflama com amor do outro. Por isso se ama ao que é louvado; mas só quando
se está persuadido de que o louvor vem de coração sincero, ou quando o louvor é inspirado pelo
amor.
 Assim pois amava eu então aos homens, pelo juízo dos homens, e não pelo teu, meu
Deus, em quem ninguém se engana. Contudo, por que não o louvava como se louva a uma auriga
famoso ou a um caçador afamado pelas aclamações do povo, mas de modo mais distinto e mais
ponderado, tal como eu gostaria de ser louvado?
 Certamente, eu não gostaria de ser louvado e amado como os comediantes, embora eu
também os ame e louve; antes, preferiria mil vezes, permanecer desconhecido a ser louvado
dessa maneira, e mesmo ser odiado a ser amado assim. De que modo convivem em uma alma
gostos tão vários e diversos? Como é que amo em outro o que rejeitaria e afastaria para longe de
mim, sendo ambos homens? Aprecia-se um bom cavalo, sem que se queira ser um cavalo, se
isso fosse possível. Mas de um histrião não se pode dizer o mesmo, pois tem a mesma natureza
que nós. Logo, amo em um homem o que teria horror de ser, embora também eu seja homem?
Grande abismo é o homem, cujos cabelos tu, Senhor, tens contados; e não se perde um sem que
tu o saibas; e, contudo, mais fáceis de contar são seus cabelos que suas paixões e os
movimentos de seu coração.
 Mas aquele orador era do número dos que eu amava a ponto de desejar ser como ele;
mas eu andava errante por meu orgulho e era arrastado por toda espécie de vento, embora em 
segredo fosse governado por ti. E como sei, e como te confesso com tanta certeza que o amava
mais por amor dos que o louvavam do que pelos méritos que lhe valiam esses louvores?
 Se em vez de o louvarem aquelas mesmas pessoas o criticassem, e se me contassem
dele as mesmas coisas, mas com censura e desprezo, certamente não me entusiasmaria por ele;
não obstante, os fatos não seriam diferentes e nem o homem outro, mas unicamente os
sentimentos dos narradores.
 Eis onde jaz enferma a alma que ainda não se apoiou na firmeza da verdade. É levada e
trazida, atirada e rechaçada, segundo os sopros das línguas que ventam dos peitos dos que
opinam! E de tal modo a luz lhe é toldada, que não distingue a verdade, apesar de estar ela à
nossa vista.
 Para mim era importante que aquele homem conhecesse minhas palavras e meus
trabalhos. Se ele os aprovasse, me entusiasmaria ainda mais por ele; mas se os reprovasse, meu
coração fútil e vazio de tua firmeza, se lastimaria. Contudo, meu prazer era pensar e refletir no
problema do belo e do conveniente, assunto do livro que lhe dedicara, admirando-o na minha
imaginação, mesmo que ninguém mais o louvasse.
CAPÍTULO XV
Os primeiros livros
 Mas não atinava com a chave de tuas artes em tão grandes obras, ó Deus onipotente,
único criador de maravilhas. Vagava minha alma pelas formas corpóreas, e definia o belo como o
que agrada por si mesmo, e o conveniente como o que agrada por sua acomodação a outra coisa,
e apoiava essa distinção com exemplos tomados dos corpos.
 Daqui passei à natureza da alma, mas o falso conceito que tinha das coisas espirituais não
me permitia perceber a verdade. A própria força da verdade saltava-me aos olhos, mas logo eu
afastava da realidade incorpórea meu espírito inquiridor, voltando-me para as figuras, as cores e
as grandezas materiais. E como não podia ver nada semelhantes na alma, julgava que tampouco
seria possível ver minha alma.
 Mas, como eu amava a paz da virtude, e aborrecia a discórdia do vício, notava naquela
certa unidade e neste certa desunião; parecia-me que residisse nessa unidade a alma racional, a
essência da verdade e do sumo bem. Na desunião, via eu não sei que substância de vida
irracional e a natureza do sumo mal, que não era apenas substância, mas também verdadeira
vida. Todavia não procedia de ti, meu Deus, de quem procedem todas as coisas. E chamava
àquela unidade mônada, como alma sem sexo, e a esta multiplicidade díada, como a ira nos
crimes, a concupiscência nas paixões, sem saber o que dizia. Ignorava então, ainda não havia
aprendido que o mal não é substância alguma, nem que nosso espírito não é o bem soberano e
imutável.
 Assim como se cometem crimes quando o movimento do espírito é vicioso e se atira
insolente e turbulento, e se cometem infâmias quando o afeto da alma, fonte dos prazeres carnais,
é imoderado, assim os erros e falsas opiniões contaminam a vida se a alma racional está viciada,
como estava a minha então. Ignorava que ela deveria ser ilustrada por outra luz para participar da
verdade, por não ser da mesma essência da verdade, porque tu, Senhor, alumiarás minha
lâmpada; tu, meu Deus, iluminarás minhas trevas, e todos participamos de tua plenitude, porque
és a luz verdadeira que ilumina a todo homem que vem a este mundo, e porque em ti não há
mudança nem a momentânea obscuridade.
 Eu me esforçava para me aproximar de ti, mas tu me repelias para que experimentasse a
morte, pois resistes aos soberbos. E que maior soberba haveria que afirmar, com inaudita loucura,
que eu era da mesma natureza que tu? Porque, sendo eu mutável, e reconhecendo-me tal – pois,
se queria ser sábio, era para fazer-me de menos para mais perfeito – preferia, contudo, julgar
mutável a ti do que não ser o que tu és. Eis aqui por que era repelido, e por que resistias à minha
soberba cheia de vento.
 Eu não imaginava mais que formas corpóreas; carne, acusava a carne; espírito errante,
não conseguia voltar para ti, nem em mim, nem nos corpos; não eram sugeridas por tua verdade,
mas imaginadas por minha vaidade, de acordo com os corpos. E dizia aos pequeninos teus fiéis
concidadãos, dos quais eu, ignaro, ainda exilado, dizia-lhes eu, tagarela inepto: “Por que a alma,
criatura de Deus, se engana?” Mas não queria que dissessem: “E por que Deus se engana?” E 
defendia antes que tua substância imutável era obrigada a errar, para não confessar que a minha,
mutável, se desencaminhara espontaneamente, ou que era castigada pelo erro.
 Teria eu vinte e seis ou vinte e sete anos quando escrevi essas coisas, revolvendo dentro
de mim apenas imagens corporais, cujo ruído aturdia os ouvidos do meu coração. Buscava eu
aplicá-los – ó doce verdade – à tua melodia interior, quando meditava sobre o belo e o
conveniente. Meu desejo era estar diante de ti, e ouvir tua voz, e alegrar-me intensamente com a
voz do esposo, mas não o podia, porque o alarido do meu erro me arrebatava para fora e, sob o
peso de minha soberba, caía no abismo. Pois ainda não davas gozo e alegria a meus ouvidos,
nem exultavam meus ossos, porque ainda não haviam sido humilhados.
CAPÍTULO XVI
As dez categorias de Aristóteles
 E que lucro me trazia, tendo eu vinte anos de idade, mais ou menos, e chegando-me às
mãos a obra de Aristóteles, intitulada As Dez Categorias – que meu mestre, o retórico de Cartago,
e outros, considerados doutos, citavam com grande ênfase e ponderação, fazendo-me suspirar
por ela como por algo grandioso e divino – de que me servia ler essa obra e compreendê-la
sozinho? Falando com outros, que afirmavam ter conseguido entendê-la só por meio de mestres
eruditíssimos, que lha haviam explicado não apenas com palavras, mas também com figuras
pintadas na areia, nada me souberam dizer que eu já não tivesse entendido em minha leitura
particular.
 Parecia-me que essa obra falava com muita clareza das substâncias, como o homem, e
das coisas que nelas se encerram, como a forma do homem; a estatura, quantos pés mede; o
parentesco, de quem é irmão; onde se encontra, quando nasceu; se está de pé, sentado, calçado
ou armado; se faz alguma coisa ou se padece de alguma coisa, e, enfim, uma infinidade de
relações que se contêm nestes nove gêneros, dos quais citei alguns exemplos, ou no próprio
gênero da substância, que são também inumeráveis os que encerra.
 De que me aproveitava tudo isso, se até me prejudicava? Julgando que naqueles dez
predicamentos se achavam compreendidas, de modo absoluto, todas as coisas, esforçava-me por
compreender também a ti, meu Deus, Ser maravilhosamente simples e imutável, como se fosses
subordinado à tua grandeza e formosura, como se estas estivessem em ti como em seu sujeito,
como se fosses um corpo; tua grandeza e beleza são porém uma mesma coisa contigo, ao
contrário dos corpos, que não são grandes ou belos por serem corpos, pois, embora fosses
menores e menos belos, nem por isso deixariam de ser corpos.
 Era pois falso o que pensava de ti, e não verdade; ilusões de minha miséria, e não
representação sólida de tua beleza. Havias ordenado, Senhor, e assim se cumpria em mim tua
vontade, que a terra me produzisse abrolhos e espinhos, e que eu só conseguisse meu pão à
custa de trabalho.
 De que me aproveitava também ler e compreender por mim mesmo todos os livros que
pude ter nas mãos sobre as artes chamadas liberais, se eu era então escravo de minhas más
inclinações? Comprazia-me em sua leitura, sem atinar de onde vinha quanto de verdadeiro e certo
achava neles; eu estava de costas para a luz, e o rosto, para os objetos iluminados, e por isso
meus olhos, que os viam iluminados, não recebiam luz.
 Tu sabes, Senhor, meu Deus, como sem ajuda de mestre, aprendi tudo o que li, quanto às
leis da retórica, da dialética, da geometria, da música e da matemática, porque também a
vivacidade da inteligência e a agudeza da intuição são dons teus. Mas não te oferecia por eles
sacrifício algum, e por isso causavam-me mais dano do que proveito. Insisti em me apoderar da
melhor parte da minha herança, e não guardei em ti minha força, mas afastei-me de ti para uma
região longínqua, a fim de dissipá-la entre as meretrizes de minhas paixões.
 De que me serviam dons tão preciosos, se não usava bem deles? Só compreendi que
aquelas artes eram tão difíceis de entender, mesmo para os estudiosos e sábios, quando me
esforçava para expô-las: entre eles, o mais destacado era o que me compreendia menos
vagarosamente.
 Mas qual o fruto disso, se eu te concebia, Senhor meu Deus, ó Verdade, como um corpo
luminoso e infinito, e eu como uma parcela desse corpo? Que rematada perversidade! Assim era
eu; não me envergonho agora, meu Deus, de confessar tuas misericórdias para comigo, e de te 
invocar, já que não me envergonhei então de proferir ante os homens tais blasfêmias e de ladrar
contra ti. De que me aproveitava, repito, a inteligência ágil para entender aquelas ciências, e para
explicar com clareza tantos livros complicados, sem que ninguém mos houvesse explicado, se
errava monstruosamente na piedade com sacrílega torpeza? E que prejuízo sofriam teus
pequeninos em serem de menor inteligência, se não se afastavam de ti, para que, seguros no
ninho da tua Igreja, se cobrissem de penas, e lhes alimentassem as asas da caridade com o sadio
alimento da fé?
 Ó Deus e Senhor nosso! Esperemos, ao abrigo de tuas asas; protege-nos, leva-nos! Tu
levarás os pequeninos, e até escarnecidos tu os levarás, nossa firmeza só é firmeza quando está
em ti; mas quando depende de nós, então é debilidade. Nosso bem vive sempre em ti, e somos
perversos porque nos afastamos de ti. Voltemos já, Senhor, para não nos aniquilarmos, porque
em ti vive nosso bem, sem deficiência alguma; sem medo de não o encontrar quando voltarmos
para nossa origem e, embora ausentes, nem por isso desaba nossa casa, tua eternidade. 
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)