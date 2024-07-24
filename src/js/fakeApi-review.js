// fakeApi.js

import { nanoid } from 'nanoid';
import images from './index-ImagesImport';

export const reviews = [
  {
    id: nanoid(),
    name: 'Ewelina',
    review:
      'Do Marcina trafiłam ponieważ bolał mnie kręgosłup w odcinku lędźwiowym i musiałam zrezygnować z biegania. Zajęcia były inne niż wszystkie na jakie dotychczas chodziłam. Marcin wykazywał się dużą wiedzą, empatią, zaangażowaniem oraz pomysłowością treningów. Dzięki niemu zmieniłam podejście do swojej aktywności fizycznej i nie tylko. Po pół roku pracy mogę biegać bez bólu kręgosłupa i z większym luzem. Polecam biegaczom oraz tym, którzy mają jakiekolwiek problemy z układem ruchu.',
    photo: images.avatarWoman01Photo,
    photoAlt: 'a woman with short red hair and light eyes',
  },
  {
    id: nanoid(),
    name: 'Marek',
    review:
      'Trening personalny oparty na nieznanej w Polsce, ale cieszącej się coraz większą popularnością i ciągle rozwijanej w Europie i na świecie nowej metodzie functional patterns. U Marcina trenuję od prawie dwóch lat i obserwuję ciągły rozwój i szlifowanie metod treningowych. Marcin cechuje się profesjonalizmem, wysokim poziomem kultury osobistej i pasją. Gorąco polecam.',
    photo: images.marekPhoto,
    photoAlt: 'Marek with a dog',
  },
  {
    id: nanoid(),
    name: 'Edyta',
    review:
      'Szyte na miarę podejście do każdego schorzenia i wibracji danego dnia :) Marcin jest pokręcony jak mój kręgosłup :). Kręgosłup jest prostszy z każdym dniem, nie wiem za to co będzie z Marcinem. Jeśli jesteś nogą z anatomii i/lub jej pochodnymi to Marcin bardzo dokładnie wyperswaduje Ci gdzie i jak długa jest ! Specjalista przez duże S. Czuję wdzięczność. Dzięki!',
    photo: images.avatarWoman02Photo,
    photoAlt: 'a woman with long fair hair and make-up',
  },
  {
    id: nanoid(),
    name: 'Valeriia',
    review:
      'Mam znaczną skoliozę dwułukową (po ok. 70 stopni w każdym oddziale), dokuczała mi mała mobilność pleców i bóle lędźwiowe. Ortopeda nalegał na operacji usztywniającej, powiedział że nie ma sensu się bawić w fizjoterapię i podobne rzeczy bo to się będzie tylko powoli pogarszało. Otóż nie! Współpracuję z Marcinem od kwietnia i mamy wielką poprawę! Lędźwie nie bolą, a jak czasem się zdarzy to już wiem jak działać. Moje plecy stały się mobilne, mogę się wyginać i obracać na każdą stronę, mam wrażenie jakbym odzyskała z powrotem własne ciało, a to tylko początek. Z całego serducha polecam każdemu Marcina jako dociekliwego, skrupulatnego i empatycznego profesjonalistę! Zmienia życie na lepsze :)',
    photo: images.avatarWoman01Photo,
    photoAlt: 'a woman with long wavy red hair and freckles',
  },
  {
    id: nanoid(),
    name: 'Dominik',
    review:
      'Do Marcina trafiłem, ponieważ widziałem jego trening i zainteresowała mnie zupełnie inna metoda treningów, na początku chciałem oo prostu urozmaicić swoje treningi i spróbować czegoś nowego. I tak zostałem. Widzę poprawę postawy, większe zakresy ruchu, zwiększenie świadomości ciała, a z każdym treningiem widzę ile jeszcze przede mną do odkrycia. Bardzo cenię podejście Marcina, który rozwija się i uczy cały czas a następnie adaptuje metody treningowe. Polecam zarówno osobom z bólami różnego rodzaju, jak i sportowcom amatorom którzy chcą zwiększyć swoje możliwości i rozwinąć świadomość ciała i sposób trenowania. Dla mnie ważna jest poprawa techniki biegu - właściwie to był powód rozpoczęcia treningów.',
    photo: images.avatarMan01Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Natalia',
    review:
      'Do Marcina trafiłam po tym jak szwagier miał mieć operację kręgosłupa, przyjechał do Wrocławia i pracował intensywnie z Marcinem, okazało się, że operacja nie jest potrzebna. Już po pierwszych treningach miałam duże efekty. moje problemy z bólami pleców skończyły się. Przeszłam przez wielu rehabilitantów, trenerów, chodziłam na różne sporty, również walki, a wciąż miałam te same problemy. Nie tylko przestało mi "cos przeskakiwać w łopatkach i lędźwiach" ale okazało się, że ten trening przełożył się na moje bieganie. Zmiana postawy i pracy ciała spowodowała, że biegam szybciej, dłużej i się tak nie męczę jak wcześniej. To samo na biegówkach. Bardzo polecam Marcina, podoba mi się, że wciąż się rozwija i wprowadza to do swojej pracy. Treningi są zindywidualizowane, a Marcin na treningu jest na 100% skupiony na osobie. No i niesamowita świadomość ciała, z którą się wychodzi po kolejnych treningach.',
    photo: images.avatarWoman02Photo,
    photoAlt:
      'a woman with long fair hair and a phone in hand looking over her shoulder',
  },
  {
    id: nanoid(),
    name: 'Ola',
    review:
      'Do Marcina trafiłam w styczniu, aby ktoś z zewnątrz pomógł mi w pracy nad słabymi stronami. Sama pracowalam i pracuje z ruchem, więc mocno zwracam uwagę na profesjonalizm. Marcin używa nietuzinkowych narzędzi, modyfikuje je do potrzeb i jednocześnie ma ogromne czucie ciała. To co robił na treningach czy w terapii manualnej było zawsze w punkt. Wiele razy chodziłam do fizjoterapeutów m.in. z problemami w odcinku szyjnym i biodrach, jednak dopiero praca z Marcinem przyniosła oczekiwany efekt. Przywróciła komfort, a to jeszcze nie koniec, bo ciągle odkrywam, że w ciele można poczuć się jeszcze lepiej. Marcin podchodzi do człowieka holistycznie i ma w sobie sporo luzu. Polecam z całego serca!',
    photo: images.avatarWoman01Photo,
    photoAlt:
      'a woman with long fair hair and a phone in hand looking over her shoulder',
  },
  {
    id: nanoid(),
    name: 'Ula',
    review:
      'Marcin po prostu widzi i czuje nawet te bardzo subtelne historie w ciele. Jego wiedza wychodzi ponad systemy i schematy, a zajęcia u niego są niezwykle ciekawe. On sam jest zafascynowany uzdrawianiem i szuka najlepszych rozwiązań. Polecam bardzo, bo sesja u Marcina może zmienić podejście do ciała, zdrowia i życia.',
    photo: images.avatarWoman02Photo,
    photoAlt:
      'a woman with long fair hair and a phone in hand looking over her shoulder',
  },
  {
    id: nanoid(),
    name: 'Michał',
    review:
      'Marcin ma wyjątkowe podejście do pracy z ciałem. Wykorzystuje różnorodne narzędzia, będąc w stanie dobrać rozwiązanie do potrzeb, niezależnie czy wracasz po kontuzji czy szukasz sposobu na zwiększenie świadomości i skuteczności w uprawianej dyscyplinie sportu. Nie sposób nie wspomnieć o jego profesjonalizmie i uważności w trakcie pracy.',
    photo: images.avatarMan02Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Rafał',
    review:
      'Po 1,5 roku treningów z Marcinem bardzo doceniam jego indywidualne podeście i determinacje aby pomóc trwale usunąć dolegliwości. Marcin cechuje się szerokim spojrzeniem na problem i podejściem holistycznym, dzięki czemu jego pozytywny wpływ odczuwam z czasem nie tylko jeśli chodzi o ruch, ale i w innych obszarach życia. Zdecydowanie jest to profesjonalista z bardzo szeroka wiedza, który jednocześnie ciagle się uczy i doszkala a jego klientce czerpią z tego ogromne korzyści. Jest równierz bardzo empatyczny oraz wkłada dużo starań aby treningi były ciekawe i przyjemne.',
    photo: images.avatarMan01Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Szymon',
    review:
      'Marcin jest specjalistą w swoim fachu, jego wiedzę na tematy dookoła naszego ciała jest olbrzymia a zamiłowanie by za pomocą swojej niekonwencjonalnej techniki pomagać ludziom jest ponad skale. Polecam każdemu kto chce poznać swoje ciało na nowo',
    photo: images.avatarMan02Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Przemysław',
    review:
      'Jeden z bardzo niewielu trenerów personalnych rozumiejący jak działa ludzkie ciało od strony biomechanicznej. Marcin skutecznie prowadzi proces odkręcania dysfunkcji i kompensacji od zasiedziałego kowalskiego do atletycznego poruszania się. Zdecydowanie polecam.',
    photo: images.avatarMan01Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Jac',
    review:
      'Współpraca z Marcinem to niesamowita przygoda w poznawaniu, czuciu, dostrzeganiu własnego ciala. Świetne podejście do człowieka. Na zajęciach nie można się nudzić. Codzienna progresja, brak monotoni , zawsze coś nowego do zrobienia. Ćwiczenia ukierunkowana na cel przynoszące szybkie efekty i super poprawę. Ekstra atmosfera podczas zajęć. Serdecznie polecam Marcina.',
    photo: images.avatarMan02Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Barbara',
    review:
      'Jestem po ciężkim wypadku, z wieloodlamowymi złamaniami miednicy, stawu biodrowego, gdzie kość udowa wbiła się brzuch, złamaniem kolana, uszkodzeniem nerwu udowego, zanikami mięśniowymi, po rozewranie pęcherza odłamkami miednicy. Od prawie 2 lat ćwiczę z 4 fizjoterapeutami, którzy doprowadzili do tego, że zaczęłam chodzić. Jednak parę miesięcy temu poczułam, że już nic nie idzie dalej do przodu, że potrzebuję przerwy... Zaczęło pojawiać się kolejne załamanie. Trafiając do Marcina poruszałam się trochę jak robot... Zero plynnosci, strach przed upadkiem. Na pierwszym treningu trenowaliśmy wzrok, aby pobudzić układ nerwowy. Na każdym treningu pojawiają się jakieś nowe ćwiczenia - kiedy nie daje rady, wymyśla alternatywę. Marcin również bardzo skupia się na jakości-lepiej zrobić 2 powtórzenia, ale dobrze technicznie niż 10 byle było odbebnione. Duża wagę przywiązuje również do emocji i wizualizacji, dzięki czemu głowa inaczej pracuje i naprawdę więcej się chce i robi wszystko bardziej odważnie:) Minęły dopiero 2 miesiące naszej współpracy, a ja już widzę spektakularne efekty! Zaczęłam biegać na bieżni, coraz wyżej podnosić nogę z uszkodzonym nerwem i w końcu czuć w niej uśpione mięśnie! Marcin to profesjonalista w swojej dziedzinie! Jest bardzo empatyczny, wyrozumiały, potrafi wesprzeć psychicznie i urozmaicić każdy trening! Bardzo polecam Marcina!',
    photo: images.avatarWoman01Photo,
    photoAlt:
      'a woman with long fair hair and a phone in hand looking over her shoulder',
  },
  {
    id: nanoid(),
    name: 'Agnieszka',
    review:
      'Na treningi u Marcina zaczęłam chodzić ponad rok temu z bólem pleców. Okazało się, że nie tylko pozbyłam się bólu, ale również widzę ciągłą poprawę w postawie oraz coraz większą świadomość własnego ciała. Polecam Marcina jako zaangażowanego i ciągle poszerzającego swoją wiedzę trenera.',
    photo: images.avatarWoman02Photo,
    photoAlt:
      'a woman with long fair hair and a phone in hand looking over her shoulder',
  },
  {
    id: nanoid(),
    name: 'Grzegorz',
    review:
      'Z Marcinem pracuję od 2 lat. Wyprowadzał mnie po zerwaniu wiązadeł w kostce i dysfunkcjach związanych z wymianą ACL. Metoda pracy i podejście do klienta sprawia, że treningi są nie tylko bardzo efektywne ale też dają sporo satysfakcji. Marcin skutecznie różnicuje trening, co sprawia że unika się nużących powtarzalności. Polecam każdemu kto chce żeby jego ciało pracowało tak jak powinno.',
    photo: images.avatarMan01Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Anna',
    review:
      'Do Marcina trafiłam z polecenia kolegi, też "wózkowicza". Po ponad 4,5 latach rehabilitacji szukalam czegoś nowego, co pobudzi mój organizm do lepszego działania i funkcjonowania. Już po pierwszych zajęciach odczułam, że to jest to czego szukałam. Każde zajęcia to coś nowego i zaskakującego. Ja mam nie tylko problem z poruszaniem się, ale także z podwójnym widzeniem. Co mnie zaskoczyło bardzo pozytywnie, to łączenie ćwiczeń ruchowych z ćwiczeniami na poprawę wzroku. Marcin ma holistyczne podejście do "pacjenta". Dzięki treningom nie tylko poprawiła się moja postawa, koordynacja, zaburzone proporcje ciała ale także poprawia się wzrok i obuoczne, pojedyncze widzenie. Gorąco polecam!',
    photo: images.avatarWoman02Photo,
    photoAlt:
      'a woman with long fair hair and a phone in hand looking over her shoulder',
  },
  {
    id: nanoid(),
    name: 'Marcin',
    review:
      'Treningi u Marcin polecił mi fizjoterapeuta jako uzupełnienie leczenia po kontuzji kolana. Był to strzał w dziesiątkę. Poprawa mechaniki ruchu w całym ciele zlikwidowała problem z kolanem a system ćwiczeń oparty na technice functional patterns daje bardzo dobre rezultaty. Szczerze polecam Marcina! Zna się na rzeczy :)',
    photo: images.avatarMan01Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Tomasz',
    review:
      'Całokształtne i bardzo skuteczne podejście do ruchu, ciała i z tym związanymi wezwaniami i przygodami. Polecam!',
    photo: images.avatarMan02Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Jan',
    review:
      'Niespotykane podejście do treningów, każdy trening z Marcinem to zwiększenie świadomości własnego ciała. Do tego efekty w postaci pozbycia się bólu, większa symetria w ciele czy obudzenie mięśni uśpionych przez większość życia.',
    photo: images.avatarMan01Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Mateusz',
    review:
      'Jestem po wypadku(2 lata), doszło do złamania kręgosłupa na niskiej jego wysokości. Rdzeń nie uszkodzony, szanse na powrót do chodzenia duże, bardzo duże. Borykałem się po różnych instytucjach, różnych placówkach, które na tamte czasy mi pomogły ile mogły, ale szczerze mówiąc to nic do zajęć z Marcinem. Prawdę mówiąc z spotkania na spotkanie robimy nowe rzeczy, które mnie wzmacniają. Nowe innowacyjne ćwiczenia dzięki którym mam więcej mocy i siły do samodzielnej pionizacji... Ćwiczymy od kilku miesięcy, od miesiąca dosyć intesywniej i jestem mega zadowolony. Pełen profesjonalizm ze strony trenera oraz oczywiście bardzo indywidualne podejście do kazdego z którym ćwiczy. Jednymi slowy - 5 gwiazdek w przypadku tego trenera to mało. Skala opinii google nie dorasta trenerowi do pięt. :)',
    photo: images.avatarMan01Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Agnieszka',
    review: 'Jestem klientką Marcina, jestem bardzo zadowolona, polecam',
    photo: images.avatarWoman02Photo,
    photoAlt:
      'a woman with long fair hair and a phone in hand looking over her shoulder',
  },
  {
    id: nanoid(),
    name: 'Rafał',
    review:
      'Profesjonalne oraz spersonalizowane podejście dostosowane do klienta. Trening opierający się na pracy nad postawą umożliwiający poszerzenie funkcjonalności organizmu',
    photo: images.avatarMan02Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
  {
    id: nanoid(),
    name: 'Piotr',
    review: 'Serdecznie polecam. Jestem pod wrażeniem profesjonalizmu.',
    photo: images.avatarMan01Photo,
    photoAlt: 'a smiling young man with lush hair',
  },
];
