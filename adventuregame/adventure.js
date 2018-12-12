	//html elements
var levelImg
var container = document.getElementById("game-container");
var title = document.getElementById("title");
var description = document.getElementById("description");
var	inventory = document.getElementById("inventoryItem");


	//sound effects
var mutant = new Audio("music/monsterscream.mp3");
	mutant.volume = 0.8;
var rads = new Audio ("music/rads.mp3")
	rads.volume = 0.2;
var death = new Audio ("music/death.mp3")
	death.volume = 0.1;
var explosie = new Audio("music/bigboom.mp3");
	explosie.volume = 0.8;
var background = new Audio("music/backgroundMusic.mp3");
	background.volume = 0.2;
var victory = new Audio("music/victory.mp3");
	victory.volume = 1.0;
var alien = new Audio("music/alien.mp3");
	alien.volume = 1.0;

	//buttons en items
var buttons = document.getElementById("game-buttons");
var button_1 = document.getElementById("button1");
var button_2 = document.getElementById("button2");
var button_3 = document.getElementById("button3");

var item1 = 'no'

function start(){
	title.innerHTML = 'Hoofdmenu';
	description.innerHTML = 'Welkom in het hoofdmenu...';
	levelImg = document.createElement('img');
	container.appendChild(levelImg);
	levelImg.src = 'images/img8.jpg';
	levelImg.id = 'levelImage';

	button_1.innerHTML = ('Start de Game');	
	button_1.onclick = function(){
		item1 = 'no'
		background.loop = true;
        background.play();	
		hoofdstuk1();}

	button_2.innerHTML = ('Uitleg');
	button_2.onclick = function(){
		uitleg();}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
	inventory.style.display = 'none';
}
start();

		function uitleg(){
			title.innerHTML = 'Uitleg';
			description.innerHTML = 'Het spel is simpel.  er zijn verschillende opties verschillende eindes. Probeer goed na te denken om je omgeving en of je niet toevallig iets nodig hebt. er zijn verschillende geheime opties verborgen door het spel dus let ook op of er toevallig rare dingen voorkomen in je verhaal.';
			levelImg.src = 'images/img6.jpg';

			button_1.innerHTML = ('Terug naar het hoofdmenu');	
			button_1.onclick = function(){	
				levelImg.style.display = 'none'
				start();}

			button_1.style.display = 'inline-block';
			button_2.style.display = 'none';	
			button_3.style.display = 'none';	
		}



	//Hier staat het verhaal van het hele spel elke function elk hoofdstuk elke optie en elk einde. 
	//Hier beginnen alle elementen van hoofdstuk 1



function hoofdstuk1(){
	title.innerHTML = 'Hoofdstuk 1: Helpless';
	description.innerHTML = 'Welkom Kapitein... <br><br> Ik vind het vreselijk om dit te moeten zeggen maar we moeten terugtrekken naar een veilige zone. We zijn nog steeds in vijandig ruimte maar het schip heeft teveel schade opgelopen van de laatste aanval... <br><br> We kunnen proberen te landen op de dichtsbijzijnde planeet... maar deze planeet is nog niet bekend in ons systeem en kan grote gevaren bevatten... We kunnen ook proberen toch nog iets verder door te vliegen naar vriendelijke ruimte, daarna door naar een ruimtestation of een bekende planeet en de nodige reparaties doen. Beide opties zijn niet ideaal maar we kunnen niet anders. Als we zo doorgaan verliezen we binnen enkele dagen de besturing over het schip... daarna volgt lifesupport... en uiteindelijk een vreselijke dood';
	levelImg.src = 'images/img2.jpg';

	button_1.innerHTML = ('Vlieg door');
	button_1.onclick = function(){
		hoofdstuk2_1();}

	button_2.innerHTML = ('Land het ship');
	button_2.onclick = function(){
		hoofdstuk2_2();}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}



	// Hier beginnen alle elementen van hoofdstuk 2



function hoofdstuk2_1(){
	title.innerHTML = 'Hoofdstuk 2: Engine problems';
	description.innerHTML = 'Enkele uren nadat je bent begonnen op je reis terug naar huis nogsteeds diep vijandelijke ruimte is er een grote explosie aanboord. De reactor is gaan lekken en er is een brand in de controlekamer. Binnen enkele minuten zal het complete ship exploderen. <br><br> Terwijl dat de bemanning naar de escape pods rent maak jij een moeilijk keus... <br><br> Blijf je aan boord en probeer je het schip weg te sturen van de escape pods zodat de bemanning niet met jou en het schip mee opgeblazen worden. Of ren je toch naar de escape pods en hoop je op het beste?';
	levelImg.src = 'images/img1.jpg';

	button_1.innerHTML = ('Blijf aanboord');
	button_1.onclick = function(){
		explosie.play();		
		dood1();}

	button_2.innerHTML = ('Ga naar de escape pods');
	button_2.onclick = function(){
		hoofdstuk3_1();}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';

	
}

function hoofdstuk2_2(){
	title.innerHTML = 'Hoofdstuk 2: Landing succesfull';
	description.innerHTML = 'Landen was zeer moeilijk aangezien de reactor plots kapot ging en alpha-particles ging lekken. gelukkig waren we nog net op tijd en konden de personeels leden het vuur stoppen voordat de reactor verloren was <br><br> Na dat de rook verdwijnt zie je een ruïne van een oude verwoeste stad. snel ren je naar een console en scan je de omgeving op enig teken van leven. maar helaas er blijkt helemaal niks meer over te zijn behalve dikke aswolken en radioactieve stormen. <br><br> Waar zijn we? <br> Wie waren deze mensen? <br> Wat is er gebeurt hier? <br><br> Allemaal gedachtes gaan door je heen samen met een angstig gevoel. Tijdens de reparaties aan het schip kan je op onderzoek uitgaan en proberen erachter te komen wie deze mensen waren en waardoor ze allemaal zijn omgekomen. <br><br> Maar misschien kan je beter eerst aan boord blijven en scannen of er niks mis is met deze planeet.';	
	levelImg.src = 'images/img5.jpg';

	button_1.innerHTML = ('Blijf aanboord');
	button_1.onclick = function(){
		hoofdstuk3_2()}

	button_2.innerHTML = ('Ga naar buiten');
	button_2.onclick = function(){
		rads.play();
		dood2();}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';

}



	// Hier beginnen alle elementen van hoofdstuk 3



function hoofdstuk3_1(){
	title.innerHTML = 'Hoofdstuk 3: Space Oddity';
	description.innerHTML = 'Snel ren je naar een van de laatste twee escape pods. pak je de linkse of rechtste escape pod? ze gaan bijde totaal andere kanten op. De linkse pod gaat richting de onbekende planeet waar je in een aantal uur geleden langs kwam. De rechtse gaat dezelfde kant op als waar je met je schip heen ging... veilige ruimte, familie en vrienden, alles waar je nou het meest bij wilt zijn. Maar het is gevaarlijk je moet nog tientalle lichtjaren.. <br><br> is het de poging waard?';
	levelImg.src = 'images/img20.jpg';

	button_1.innerHTML = ('De linkse pod');
	button1.onclick = function(){
		explosie.play();
		hoofdstuk4_1();}

	button_2.innerHTML = ('De rechtste pod');
	button2.onclick = function(){
		victory.play();
		hoofdstuk4_2();}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}

function hoofdstuk3_2(){
	title.innerHTML = 'Hoofdstuk 3: Ziekte';
	description.innerHTML = 'Na een paar scans van de omgeving beginnen bemanningsleden ziek te worden. je doet meteen een diagnose van het schip en merkt dat de luchtfilters van het schip niet goed meer functioneren en dat er radioactieve bacteriën in de lucht zitten. wat moet je doen.. iedereen aanboord begint ziek te worden en hebben waarschijnlijk niet veel tijd. Je pakt snel een ruimtepak tegen bescherming van verdere bacteriën. ga je naar buiten zoekend naar een plek waar mogenlijk medicijnen zijn tegen het effect van deze ziekte. of blijf je binnen en zoek je op het schip naar een mogelijke oplossing?';
	levelImg.src = 'images/img16.jpg';

	button_1.innerHTML = ('Ga alsnog naar buiten');
	button1.onclick = function(){
		hoofdstuk4_3();}

	button_2.innerHTML = ('Blijf aanboord');
	button2.onclick = function(){
		victory.play();
		hoofdstuk4_4();}	

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}



	//Hier beginnen alle elementen van hoofdstuk 4



function hoofdstuk4_1(){
	title.innerHTML = 'Hoofdstuk 4: Eenzaam';
	description.innerHTML = 'Net als je naar de escape pod rent raakt stuk metaal je been. Je valt maar kan toch nog net op tijd toch in je escape pod komen. Binnen enkele seconden wordt je uit je schip geschoten achter je zie je nog een laatste grote explosie. Je zet je reddings baken aan en wacht..<br><br> niks... <br> helemaal niks... <br> uren lang niks... <br><br> na ongeveer een dag zie je op de sensors dat er een onbekend schip aankomt... pff nogmeer ongeluk je escape pod heeft geen verdedigings mogelijkheden wat moet je nu weer doen. na enige momenten denken besef je al snel dat je niet veel kan doen in je escape pod. in de buurt is een radioactieve nevel. Je escape pod zou tegen de bestraling moeten kunnen. Maar er is ook een asteroïde veld waarin je je kan verschuilen. Of het schip je al heeft gespot is onduidelijk dus je moet snel een beslissing maken.';
	levelImg.src = 'images/img10.jpg';

	button_1.innerHTML = ('Ga naar de nevel');
	button1.onclick = function(){
		hoofdstuk5_1();
		}

	button_2.innerHTML = ('Betreed het asteroïde veld');
	button_2.onclick = function(){
		death.play();
		dood3();}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}

function hoofdstuk4_2(){
	title.innerHTML = 'Hoofdstuk 4: The place where i belong';  //dit is het eerste goede einde van het spel dat je kan krijgen..
	description.innerHTML = 'Je schip explodeert en een losgebroken stuk van je schip raakt je escape pod en stuurt je een totaal andere richting op. Voor je zie je een enorm zwart gat verschijnen. Je probeert nog weg te komen maar dat lukt niet beetje bij beetje trekt het zwarte gat je naar binnen. Je denkt dit het einde je droomt over je huis je familie je kinderen je doet je ogen dicht. Na enkele ogenblikken raak je bewusteloos. <br><br> Ineens wordt je wakker je bent in een ziekenhuis op aarde.. <br><br> je huis.. <br> je familie.. <br> je vrouw je kinderen.. <br> eindelijk kan je ze weer zien. <br><br> Na een paar uur kom je erachter via de doctor dat je 2 jaar in coma lag en op dat moment komt je vrouw binnen. Je was nog nooit zo blij zo vol met liefde en verdriet je had alles weer. Alles dat je dacht nooit meer te zien.';
	levelImg.src = 'images/img10.jpg';

	button_1.innerHTML = ('Einde. Speel opnieuw?');
	button1.onclick = function(){
		levelImg.style.display = 'none'
		start();
		}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'none';
	button_3.style.display = 'none';
}

function hoofdstuk4_3(){
	title.innerHTML = 'Hoofdstuk 4: Uitgeput';
	description.innerHTML = 'Eenmaal buiten zoek je naar een plek waar je medicijnen kan vinden. Na een tijdje lopen vind je een verlaten ziekenhuis. net als je naar binnen wilt gaan merk je dat er achter je een stapel puin omvalt... raar... <br><br> zodra je binnen ga je door met zoeken naar iets van medicatie je vind al snel een kast vol met medicijnen en geneest jezelf. Je pakt een paar extra hypersprays mee en gaat op weg terug. Zodra je de gang in loopt hoor je achter je geluid. Je rent meteen de eerste de beste kamer in. In paniek weet je niet wat je moet doen je kan je snel ergens verstoppen en hopen dat wat het ook is je niet vind. Je kan de gang in gaan en kijken wat het was. Misschien waren het wel mensen. De originele bewoners van deze wereld?';
	levelImg.src = 'images/img13.jpg';

	button_1.innerHTML = ('Verstop je in de badkamer');
	button1.onclick = function(){
		hoofdstuk5_2();
		}

	button_2.innerHTML = ('Ren naar de gang');
	button_2.onclick = function(){
		mutant.play();
		dood4();
		}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}

function hoofdstuk4_4(){
	title.innerHTML = 'Hoofdstuk 4: Quarantaine'; // Dit is het tweede goede einde van mijn spel.
	description.innerHTML = 'Een voor een vallen je bemanningsleden neer. De paar gelukkige mensen die op tijd een ruimtepak hadden gepakt hebben nergens last van. Na een dag is meer dan 40% van de bemanning overleden in de komende dagen verdwijnen er steeds meer mensen op zoek naar redding. Buiten in de radiatie zullen ze nooit overleven maar ze vinden dat ze buiten een grotere kans hebben op overleven dan op het schip. Na enkele weken stil te staan op de planeet zijn jij en de laatste bemanningsleden eindelijk klaar met de nodige reparaties. Meer dan 230 mensen zijn ondertussen overleden en er blijft maar een klein groepje van 20 mensen over. Na de reparaties laat je de lichamen van de overleden bemanningsleden achter op de planeet. Zodra je de atmosfeer verlaat zet je het hele schip onder quarantaine en zet je een koers uit naar veilige ruimte met de hoop dat iemand je daar kan helpen met de enorme lading aan radioactieve bacteriën die nog aanboord zijn. <br> Enkele dagen later kom je aan in veilige ruimte je komt samen met een onderzoeks schip die je begeleid naar aarde. Na veel test en onderzoeken wordt er eindelijk een medicijn is gemaakt tegen de effecten dan de radioactieve bacteriën. daarna wordt je na maanden herenigd met je vrouw, kinderen en leef je nog een leven vol spijt dat bijna heel je bemanning is overleden.';
	levelImg.src = 'images/img17.jpg';

	button_3.innerHTML = ('Einde. Speel opnieuw?');
	button3.onclick = function(){
		levelImg.style.display = 'none'
		start();}

	button_1.style.display = 'none';
	button_2.style.display = 'none';
	button_3.style.display = 'inline-block';
}



	//Hier beginnen alle elementen van hoofdstuk 5



function hoofdstuk5_1(){
	title.innerHTML = 'Hoofdstuk 5: Grondlevel';
	description.innerHTML = 'Rusig betreed je de nevel en zet je alle systemen uit. Je kan alleen nog op je console kijken waar het onbekende ship heen gaat. Na een tijdje wachten vliegt het schip voorbij. Gelukkig was je niet gezien anders hadden ze wel iets gedaan. Na een tijdje is het schip buiten bereik en zet je weer koers naar de planeet. Na enkele dagen bereik je de atmosfeer van de planeet. En na een snelle scan van de planeet kom je er achter dat de planeet vol zit met radioactieve deeltjes. Je pakt je ruimte pak en land bij iets wat lijkt op een oud verlaten ziekenhuis terwijl je land zie je in de verte een ruimteschip staan. <br> Misschien werkt het nog?';
	levelImg.src = 'images/img5.jpg';

	button_1.innerHTML = ('Ga naar het ziekenhuis');
	button1.onclick = function(){
		hoofdstuk6_2();
		}

	button_2.innerHTML = ('Ga naar het schip');
	button_2.onclick = function(){
		hoofdstuk6_1();
		}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}

function hoofdstuk5_2(){
	title.innerHTML = 'Hoofdstuk 5: Verstopt';
	description.innerHTML = 'je bent verstopt in de badkamer met een iets onbekends in de gang. Na een paar minuten hoor je dat er een schip langs het ziekenhuis vliegt. Meteen hoor je in de gang allemaal geluide en rare schreeuwen... Net alsog er een monster in de gang staat. Daarna zie je ineens een zwarte schim voorbij de deur rennen. Je besluit om naar de gang te gaan om te kijken of het ding waar de gluiden vandaan kwamen er nog is. In de gang kan je niks zien wat lijkt op een levensvorm je ziet alleen dat er overal druppels speeksel in de gang liggen. Als iets zoveel speeksel verliest kan het niets goeds zijn... Dan moet het iets gevaarlijks zijn dat op zoek is naar zijn prooi. <br><br> Je moet besluiten waar je heen wilt gaan want je wilt hier geen seconde langer blijven.';
	levelImg.src = 'images/img15.jpg';

	button_1.innerHTML = ('Ga terug naar jou schip');
	button_1.onclick = function(){
		mutant.play();
		dood5();
		}

	button_2.innerHTML = ('Ga naar het schip');
	button2.onclick = function(){
		hoofdstuk6_1();
		}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}



	//Hier beginnen alle elementen van hoofdstuk 6




function hoofdstuk6_1(){
	title.innerHTML = 'Hoofdstuk 6: ';
	description.innerHTML = 'Na een tijdje lopen door het radioactieve puin kom je aan bij het ruimteship. Op een van de dozen voor het schip ligt een keycard wil je deze oppakken?';
	levelImg.src = 'images/img18.jpg';

	button_1.innerHTML = ('Laat liggen');
	button1.onclick = function(){
		hoofdstuk7_1();
		}

	button_2.innerHTML = ('Pak de keycard');
	button_2.onclick = function(){
		alert ('je hebt een keycard opgepakt');
		item1 = 'yes';
		inventory.src = 'images/keycard.png';
		inventory.style.display = 'inline-block';
		hoofdstuk7_1();
		}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}

function hoofdstuk6_2(){
	title.innerHTML = 'Hoofdstuk 6: Ziekenhuis';
	description.innerHTML = 'Als je het ziekenhuis binnenloopt krijg je al meteen een eng kill en koud gevoel. Je voelt je hier niet veilig. Achter hoor je soms geluiden en je krijgt het gevoel dat iets je volgt. Je loopt rustig door en hoort ineens achter je in de gang geluiden je loopt terug om te kijken wat het was. Trillend van angst kijk loop je de gang in.';
	levelImg.src = 'images/img13.jpg';

	button_1.innerHTML = ('Ga door...');
	button1.onclick = function(){
		mutant.play();
		dood4();
		}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'none';
	button_3.style.display = 'none';
}



	//Hier beginnen alle elementen van hoofdstuk 7



function hoofdstuk7_1(){
	title.innerHTML = 'Hoofdstuk 7: Verloren';
	description.innerHTML = 'je gaat aan boord van het ship. Het schip lijkt niet op een normaal door de mens gemaakt schip. Je hebt nog nooit zoiets gezien. Je ziet een paar bordjes op de muur hangen maar je kan het bijna niet lezen. Een bordje lijkt alsof er brug op staat en op de andere staat iets dat lijkt op een... uh.. doctorspraktijk?... Welke kant wil je opgaan?';
	levelImg.src = 'images/img25.jpg';

	button_1.innerHTML = ('Ga naar de brug');
	button1.onclick = function(){

		if (item1 == 'yes') {
			victory.play();
			hoofdstuk8_1();
		}
		else {
			alien.play();
			dood7();
		}
	}

	button_2.innerHTML = ('Ga naar de doctor');
	button2.onclick = function(){
		hoofdstuk8_2();
		}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}




	//Hier beginnen alle elementen van hoofdstuk 8



function hoofdstuk8_1(){
	title.innerHTML = 'Hoofdstuk 8: Brug';
	description.innerHTML = 'Je staat voor de deur van de brug en gebruikt de keycard. Op de brug zie je dat er een stil alarm aanstaat. Je scant de binnenkant van het schip en ziet dat er allemaal dingen aanboord zijn. Je sluit alle secties van het schip af en activeert de quarantaine protocollen. Op de cameras zie je elke alien in op het schip doodbranden. Daarna vlieg je uit de atmosfeer richting aarde. Na een reis van 3 maanden kom je eindelijk aan met een geweldig verhaal. <br><br> Jij bent de laatste overlevende van je schip. <br><br> Op aarde vind je je vrouw en kinderen en leef je nog lang en gelukkig.';
	levelImg.src = 'images/img26.jpg';

	button_3.innerHTML = ('Einde. Speel opnieuw?');
	button3.onclick = function(){
		levelImg.style.display = 'none'
		start();}

	button_1.style.display = 'none';
	button_2.style.display = 'none';
	button_3.style.display = 'inline-block';
}

function hoofdstuk8_2(){
	title.innerHTML = 'Hoofdstuk 8: Medische vleugel';
	description.innerHTML = 'In de doctorspraktijk zie je meteen een lichaam. achter een stapel dozen zie je iets bewegen. Je loopt er naartoe maar wordt meteen aangevallen door een alien. <br><br> Wat moet je doen?';
	levelImg.src = 'images/img24.jpg';

	button_1.innerHTML = ('Ren naar buiten');
	button1.onclick = function(){
		alien.play();
		dood6();
		}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'none';
	button_3.style.display = 'none';
}




	//Hier beginnen alle elementen van hoofdstuk 9




function hoofdstuk9_2(){
	title.innerHTML = 'Hoofdstuk 9: Brug';
	description.innerHTML = '';
	levelImg.src = 'images/img.jpg';

	button_1.innerHTML = ('Ga naar de brug');
	button1.onclick = function(){
		}

	button_2.innerHTML = ('Ga naar de medische vleugel');
	button2.onclick = function(){
		}

	button_1.style.display = 'inline-block';
	button_2.style.display = 'inline-block';
	button_3.style.display = 'none';
}




	// Hieronder staan alle functies die uitkomen op een fout einde (je gaat dood of erger).




function dood1(){
	title.innerHTML = 'Je bent dood';
	description.innerHTML = 'je blijft aan boord en komt om bij de explosie van je schip. Je bemanning komt na maanden reizen thuis en vertellen allemaal over hoe jij jezelf opofferde als kapitein. <br><br> Zoals ze zeggen. <br> Een goede kapitein gaat ten onder met zijn schip om de rest te redden.';
	levelImg.src = 'images/img9.jpg';

	button_3.innerHTML = ('Probeer het opnieuw?');
	button3.onclick = function(){
		levelImg.style.display = 'none'
		start();}

	button_1.style.display = 'none';
	button_2.style.display = 'none';
	button_3.style.display = 'inline-block';
}
		function dood2(){
			title.innerHTML = 'Je bent dood';
			description.innerHTML = 'Na een paar minuten rondlopen beginnen mensen van je team ziek te worden door de radioactieve deeltjes in de lucht... binnen enkele seconden valt iedereen neer op de grond en sterven jullie allemaal een vreselijke dood. je laat iedereen achter. je schip, je vrouw en kinderen, je vrienden en familie. Alles zie je in een flits voorbij komen terwijl je daar ligt.. op de grond.. in de radiatie..';
			levelImg.src = 'images/img12.jpg';

			button_3.innerHTML = ('Probeer het opnieuw?');
			button3.onclick = function(){
				levelImg.style.display = 'none'
				start();}

			button_1.style.display = 'none';
			button_2.style.display = 'none';
			button_3.style.display = 'inline-block';
		}
				function dood3(){
					title.innerHTML = 'Je bent dood';
					description.innerHTML = 'Je wordt verpletterd tussen een paar asteroïdes. Je lichaam en escape pod worden een paar jaar geborgen en verplaatst naar aarde voor onderzoek over wat er gebeurd is met het schip. <br><br> Als je lichaam op aarde aankomt staan een paar overlevende van je bemanning als een eerbetoon op je te wachten.';
					levelImg.src = 'images/img19.jpg';

					button_3.innerHTML = ('Probeer het opnieuw?');
					button3.onclick = function(){
						levelImg.style.display = 'none'
						start();}

					button_1.style.display = 'none';
					button_2.style.display = 'none';
					button_3.style.display = 'inline-block';
				}
						function dood4(){
							title.innerHTML = 'Je bent dood';
							description.innerHTML = 'In de gang staat een gemuteerd monster. Het lijkt op een uil maar sinds wanneer zijn die zo groot en hebben die een pak aan. Met een flinke slag slaat het monster je tegen de muur aan. Door de flinke klap raak je het bewustzijn kwijt. Even later word je wakker, vastgebonden in wat lijkt op een operatiekamer. Overal hangen oude rottende lichamen je probeert nog vrij te komen maar het is telaat. Met een beweging snijd het monster je keel door. <br><br> Terwijl je uitbloed op de vloer begint het monster met het opeten van je lichaam';
							levelImg.src = 'images/img14.jpg';

							button_3.innerHTML = ('Probeer het opnieuw?');
							button3.onclick = function(){
								levelImg.style.display = 'none'
								start();}

							button_1.style.display = 'none';
							button_2.style.display = 'none';
							button_3.style.display = 'inline-block';
						}
								function dood5(){
									title.innerHTML = 'Je bent dood';
									description.innerHTML = 'Als je terugkomt op je schip zie je een spoor van kwijl naar binnen toe gaan... Je kan je bemanning niet achterlaten en besluit toch naar binnen te gaan. Eenmaal op de brug staat naast een stapel van je overleden personeels leden een gigantisch monster. Je hoort dezelfde geluiden als je hoorde in het ziekenhuis en draait meteen om. Maar helaas het moster heeft je al gezien. Je rent door het hele schip heen op naar buiten maar voordat je buiten kan komen heeft het monster je al tepakken. Met een beweging steekt het monster zijn hand door je maag. Terwijl je doodbloed begint het monster met het opeten van je lichaam';
									levelImg.src = 'images/img23.jpg';

									button_3.innerHTML = ('Probeer het opnieuw?');
									button3.onclick = function(){
										levelImg.style.display = 'none'
										start();}

									button_1.style.display = 'none';
									button_2.style.display = 'none';
									button_3.style.display = 'inline-block';
								}
										function dood6(){
										title.innerHTML = 'Je bent dood';
										description.innerHTML = 'Op weg terug naar binnen staat de moeder van de alien voor je in de gang. Ze ziet je en stormt op je af. Je bent meteen dood....';
										levelImg.src = 'images/img22.jpg';

										button_3.innerHTML = ('Probeer het opnieuw?');
										button3.onclick = function(){
											levelImg.style.display = 'none'
											start();}

										button_1.style.display = 'none';
										button_2.style.display = 'none';
										button_3.style.display = 'inline-block';
									}
											function dood7(){
											title.innerHTML = 'Je bent dood';
											description.innerHTML = 'Je staat voor de deur van de brug maar kan er niet in. Achter zie je een alien op je afstormen Je probeert nog weg te rennen maar je bent niet snel genoeg. De alien maakt je dood en gebruikt je lichaam als broeikas voor haar kinderen. <br><br> Enkele jaren later vallen ze aarde aan. <br> Dit is jou schuld.';
											levelImg.src = 'images/img22.jpg';

											button_3.innerHTML = ('Probeer het opnieuw?');
											button3.onclick = function(){
												levelImg.style.display = 'none'
												inventory.style.display = 'none';
												item1 = 'no';
												start();}

											button_1.style.display = 'none';
											button_2.style.display = 'none';
											button_3.style.display = 'inline-block';
										}

	//functions voor een if/else etc inventory stuff



function inventory1(){

	if (item1 = 'yes') {
		victory.play();
		hoofdstuk8_1();
	}

	else {
		dood7();
	}
}