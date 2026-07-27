const fs = require('fs');
const text = fs.readFileSync('spline.html', 'utf8');
const match = text.match(/https:\/\/[a-zA-Z0-9.\/-]+\.splinecode/);
if (match) {
  console.log('FOUND:', match[0]);
} else {
  console.log('NO MATCH FOUND.');
}
