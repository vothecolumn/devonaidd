const fs = require('fs');
const cheerio = require('cheerio');

// Load the HTML file
const html = fs.readFileSync('./dist/index.html', 'utf8');

// Parse it with Cheerio
const $ = cheerio.load(html);

// Find all script tags
$('script').each((i, el) => {
  // Get the script's src attribute
  const src = $(el).attr('src');

  // If it has a src attribute
  if (src) {
    // Read the corresponding JS file
    const js = fs.readFileSync(`./dist/${src}`, 'utf8');

    // Replace the script tag's contents with the JS file's contents
    $(el).text(js);

    // Remove the src attribute
    $(el).removeAttr('src');
  }
});

// Write the modified HTML back to the file
fs.writeFileSync('./dist/index.html', $.html());