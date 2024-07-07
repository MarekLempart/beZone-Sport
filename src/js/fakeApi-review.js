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
      'Szyte na miarę podejście do każdego schorzenia i wibracji danego dnia :) Marcin jest pokręcony jak mój kręgosłup :). Kręgosłup jest prostszy z każdym dniem, nie wiem za to co będzie z Marcinem. Jeśli jesteś nogą z anatomii i/lub jej pochodnymi to Marcin bardzo dokładnie wyperswaduje Ci gdzie i jak długa jest ! Specjalista przez duże S. Czuję wdzięczność. Dzięki !',
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
    photo: images.avatarWoman01Photo,
    photoAlt:
      'a woman with long fair hair and a phone in hand looking over her shoulder',
  },
  {
    id: nanoid(),
    name: 'Marek',
    review: 'Trening personalny oparty na nieznanej w Polsce...',
    photo:
      'https://i.pinimg.com/originals/c4/ba/30/c4ba30d9ef965500cda87939a5df5d29.jpg',
    photoAlt: 'Marek with a dog',
  },
  {
    id: nanoid(),
    name: 'Marek',
    review: 'Trening personalny oparty na nieznanej w Polsce...',
    photo:
      'https://img.freepik.com/fotos-premium/retrato-de-um-poderoso-lider-viking-de-descendencia-nordica-viking-com-barba-e-trancas-no-cabelo_889131-1406.jpg?size=626&ext=jpg',
    photoAlt: 'Marek with a dog',
  },
];
