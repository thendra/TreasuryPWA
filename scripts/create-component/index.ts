const fs = require('fs');

const path = require('path');

const COMPONENTS_DIR = path.resolve(__dirname, '../../src/components');
const SCRIPTS_DIR = path.resolve(__dirname, './');

const fName = process.argv[2];
const parentDir = process.argv[3];

const componentTemplate = fs.readFileSync(
  `${SCRIPTS_DIR}/Component.txt`,
  'utf8'
);

const indexTemplate = fs.readFileSync(`${SCRIPTS_DIR}/index.txt`, 'utf8');

const componentTestTemplate = fs.readFileSync(
  `${SCRIPTS_DIR}/Component.test.txt`,
  'utf8'
);

const componentStoriesTemplate = fs.readFileSync(
  `${SCRIPTS_DIR}/Component.stories.txt`,
  'utf8'
);

fs.mkdirSync(`${COMPONENTS_DIR}/${parentDir ? `${parentDir}/` : ''}${fName}`);

fs.writeFileSync(
  `${COMPONENTS_DIR}/${parentDir ? `${parentDir}/` : ''}${fName}/${fName}.tsx`,
  componentTemplate.replace(/\$CNAME/g, fName).replace(/\$FNAME/g, fName),
  'utf8'
);
fs.writeFileSync(
  `${COMPONENTS_DIR}/${parentDir ? `${parentDir}/` : ''}${fName}/index.tsx`,
  indexTemplate.replace(/\$CNAME/g, fName).replace(/\$FNAME/g, fName),
  'utf8'
);

fs.writeFileSync(
  `${COMPONENTS_DIR}/${
    parentDir ? `${parentDir}/` : ''
  }${fName}/${fName}.test.tsx`,
  componentTestTemplate.replace(/\$CNAME/g, fName).replace(/\$FNAME/g, fName),
  'utf8'
);

fs.writeFileSync(
  `${COMPONENTS_DIR}/${
    parentDir ? `${parentDir}/` : ''
  }${fName}/${fName}.stories.tsx`,
  componentStoriesTemplate
    .replace(/\$CNAME/g, fName)
    .replace(/\$TITLE/g, parentDir || fName)
    .replace(/\$FNAME/g, fName),
  'utf8'
);
