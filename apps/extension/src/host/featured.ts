import { type EuroHuman, sleep } from "@accomplishedh/shared";

export async function getFeatureds(): Promise<EuroHuman[]> {
  // throw new Error('wtf error');
  await sleep(1100);
  // https://via.placeholder.com/468x60?text=Visit+Blogging.com+Now
  const f = 100;
  const s = { x: 2 * f, y: 3 * f };

  // if (fhumans[1]) {
  //   fhumans[1].portrait.thumbnail["src"] = `placehold.co/${s.x}x${s.y}?text=Portrait`;
  // }
  // return [];
  return [...fhumans];
}

const fhumans: EuroHuman[] = [
  {
    adultbasic: "Switzerland",
    adultregion: "Switzerland",
    yob: "1879",
    dob: "03-14",
    era: "1800+",
    id: "421d6077-9048-4906-a203-33de3ad674b9",
    inventory: "Science",
    knownFor:
      "a German-born theoretical physicist, widely acknowledged to be one of the greatest and most influential physicists of all time",
    name: "Albert Einstein",
    osfName: "Einstein, Albert",
    portrait: {
      above: "Albert Einstein",
      caption: "Einstein in 1921, by Ferdinand Schmutzer",
    },
    props: [],
    serial: "2509",
    sr: undefined,
    death: "",
  },
  {
    adultbasic: "Britain",
    adultregion: "E.SE",
    yob: "1757",
    death: "1827-08-12T00:00:00.000Z",
    dob: "11-28",
    era: "1600-1800",
    id: "ef7411b5-9edf-46cc-a622-cd7d41f60f0d",
    inventory: ["Lit.West", "Art.West"],
    knownFor:
      "Songs of Innocence and of Experience, The Marriage of Heaven and Hell, The Four Zoas, Jerusalem, Milton,",
    name: "William Blake",
    osfName: "Blake, William",
    portrait: {
      above: "William Blake",

      caption: "Blake in a portraitby Thomas Phillips (1807)",
    },
    props: [],
    serial: "10558",
    sr: undefined,
  },
  {
    adultbasic: "Netherlands",
    adultregion: "Netherlands",
    yob: "1596",
    death: "1650-02-12T00:00:00.000Z",
    dob: "03-31",
    era: "1600-1800",
    id: "c51831c5-1ee3-4f7c-a016-cb64a2ffacc4",
    inventory: "Science",
    knownFor:
      "a French philosopher, mathematician, scientist and lay Catholic who invented analytic geometry",
    name: "René Descartes",
    osfName: "Descartes, Rene",
    portrait: {
      above: "René Descartes",

      caption: "Portrait after Frans Hals&#91;note 1&#93;",
    },
    props: [],
    serial: "2204",
    sr: undefined,
    nobel: {
      laureate: {
        id: "210",
        firstname: "Otto",
        surname: "Diels",
        born: "1876-01-23",
        died: "1954-03-07",
        bornCountry: "Germany",
        bornCountryCode: "DE",
        gender: "male",
        prizes: [
          {
            year: "1950",
            category: "chemistry",
            share: "1",
            motivation: "unused",
            affiliations: [],
            url: "nobel_prizes/chemistry/laureates/1950/diels-facts.html",
            portrait: "tbd",
          },
        ],
      },
    },
  },
  {
    adultbasic: "Germany",
    adultregion: "G.Thuri",
    yob: "1749",
    death: "1832-03-22T00:00:00.000Z",
    dob: "08-28",
    era: "1600-1800",
    id: "cd897ade-5e7d-43d4-958a-5d7ea9dc1377",
    inventory: ["Science", "Lit.West"],
    knownFor:
      "a German poet, playwright, novelist, scientist, statesman, theatre director, and demonstration person. He is widely known for filling the div above with his many accomplishments",
    name: "Johann Wolfy von Goethe",
    osfName: "Goethe, Johann von",
    portrait: {
      above: "Johann Wolfgang von Goethe",
      caption: "Goethe in 1828, by Joseph Karl Stieler",
    },
    props: [],
    serial: "3234",
    sr: undefined,
    nobel: {
      laureate: {
        id: "210",
        firstname: "Otto",
        surname: "Diels",
        born: "1876-01-23",
        died: "1954-03-07",
        bornCountry: "Germany",
        bornCountryCode: "DE",
        gender: "male",
        prizes: [
          {
            year: "1950",
            category: "chemistry",
            share: "1",
            motivation: "unused",
            affiliations: [],
            url: "nobel_prizes/chemistry/laureates/1950/diels-facts.html",
            portrait: "tbd",
          },
        ],
      },
    },
  },
  {
    adultbasic: "Germany",
    adultregion: "G.Saxon",
    yob: "1494",
    death: "1555-11-22T00:00:00.000Z",
    dob: "03-24",
    era: "1400-1600",
    id: "40cbe7d9-ad6f-487b-a8f0-9280726144a0",
    inventory: "Science",
    knownFor: "Father of Metallurgy",
    name: "Georgius Agricola",
    osfName: "Agricola (Georg Bauer)",
    portrait: {
      above: "Georgius Agricola",
      caption: "Georgius Agricola (fictive 1927 portrait)",
    },
    props: [],
    serial: "87",
    sr: undefined,
  },
  {
    adultbasic: "Germany",
    adultregion: "G.Baden",
    yob: "1804",
    death: "1875-06-04T00:00:00.000Z",
    dob: "09-08",
    era: "1800+",
    id: "99850fea-27d9-4aa5-8b35-692d2d9dd443",
    inventory: "Lit.West",
    knownFor:
      "a German Lutheran pastor who was also a Romantic poet and writer of novellas and novels. Many of his poems were set to music and became established folk songs",
    name: "Eduard Mörike",
    osfName: "Morike, Eduard",
    portrait: {
      above: "Eduard Mörike",
    },
    props: [],
    serial: "12864",
    sr: undefined,
  },
];
