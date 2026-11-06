import natural from "natural";

export const classifier = new natural.BayesClassifier();

const artDocument = "painting sculpture drawing art artist artwork";
const scienceDocument =
  "optics theory mechanics inventor algebra geometry physics physician chemist physiologist biochemist medicine chemistry mathematics mathematician astronomy biology pathology biochemistry science scientific engineering";
const literatureDocument =
  "autobiographer diarist biographer playwright poetry novel novelist essay essayist literature fiction short story writing screenwriter author poet prose writer literary";
const musicDocument =
  "conductor choir music musician musicologist composition orchestra singing composer song librettist lyricist";
const bsDocument =
  "group theory politician topology education dramaturge historian diplomat pacifist pedagogue histology journalist collector translator teacher quaternion";

classifier.addDocument(artDocument, "Art");
classifier.addDocument(literatureDocument, "Lit");
classifier.addDocument(musicDocument, "Music");
classifier.addDocument(scienceDocument, "Science");
classifier.addDocument(bsDocument, "Ignore");

classifier.train();
