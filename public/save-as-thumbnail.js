// save-as-thumbnail.js
const { convert } = require('pdf-poppler');

const options = {
  format: 'png',
  out_dir: './public/assets',
  out_prefix: 'resume-thumbnail',
  page: 1
};

convert('./resume.pdf', options)
  .then(() => console.log('Thumbnail created!'))
  .catch(err => console.error('Error creating thumbnail:', err));
