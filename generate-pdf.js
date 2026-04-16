/**
 * Generate PDF using Puppeteer (headless Chrome).
 * Uses real browser print – supports @page :first for full-bleed cover.
 *
 * Run: npm run generate-pdf
 * (Starts a local server automatically, then generates Business-Credit-Report.pdf)
 */

const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

function startServer() {
  const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.ico': 'image/x-icon',
  };

    return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const urlPath = (req.url || '/').split('?')[0];
      let filePath = path.join(ROOT, urlPath === '/' ? 'index.html' : urlPath);
      if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }
      const ext = path.extname(filePath);
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404);
          res.end('Not found');
          return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      });
    });
    server.listen(0, () => {
      const port = server.address().port;
      console.log(`Server running at http://localhost:${port}`);
      resolve({ server, port });
    });
  });
}

async function generatePdf() {
  const { server, port } = await startServer();
  let browser;

  try {
    browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.goto(`http://localhost:${port}/?pdf=1`, {
      waitUntil: 'networkidle0',
      timeout: 15000,
    });

    await new Promise((r) => setTimeout(r, 300));

    // Prepare for print
    await page.emulateMediaType('print');

    const pdfPath = path.join(ROOT, 'Business-Credit-Report.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    console.log(`PDF saved: ${pdfPath}`);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

generatePdf().catch((err) => {
  console.error('Failed:', err.message);
  process.exit(1);
});
