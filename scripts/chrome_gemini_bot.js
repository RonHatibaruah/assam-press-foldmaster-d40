#!/usr/bin/env node

/**
 * Autonomous Gemini Pro Image Generation Bot using Chrome DevTools Protocol & Puppeteer
 * Targeting Profile: sumanzfilms@gmail.com
 *
 * Requirements:
 *   Google Chrome running with remote debugging enabled on port 9222:
 *   /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222 &
 *
 * Usage:
 *   node scripts/chrome_gemini_bot.js
 *   node scripts/chrome_gemini_bot.js --id=figure1
 *   node scripts/chrome_gemini_bot.js --force
 *   node scripts/chrome_gemini_bot.js --port=9222
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const BASE_DIR = path.resolve(__dirname, '..');
const PROMPTS_FILE = path.join(BASE_DIR, 'scripts', 'image_prompts.json');
const OUTPUT_DIR = path.join(BASE_DIR, 'public', 'figures');

// Parse CLI Arguments
const args = process.argv.slice(2);
let port = 9222;
let filterId = null;
let filterFilename = null;
let forceOverwrite = false;

args.forEach(arg => {
  if (arg.startsWith('--port=')) {
    port = parseInt(arg.replace('--port=', '').trim(), 10);
  } else if (arg.startsWith('--id=')) {
    filterId = arg.replace('--id=', '').trim();
  } else if (arg.startsWith('--filename=')) {
    filterFilename = arg.replace('--filename=', '').trim();
  } else if (arg === '--force') {
    forceOverwrite = true;
  }
});

if (!fs.existsSync(PROMPTS_FILE)) {
  console.error(`❌ Error: Prompts file not found at ${PROMPTS_FILE}`);
  process.exit(1);
}

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const allPrompts = JSON.parse(fs.readFileSync(PROMPTS_FILE, 'utf8'));
const allowedFiles = filterFilename ? filterFilename.split(',').map(s => s.trim()) : null;
const queue = allPrompts.filter(item => {
  if (allowedFiles && !allowedFiles.includes(item.filename)) return false;
  if (filterId && item.id !== filterId) return false;
  const targetPath = path.join(OUTPUT_DIR, item.filename);
  if (fs.existsSync(targetPath) && !forceOverwrite) {
    return false;
  }
  return true;
});

console.log('\n=============================================================');
console.log('🤖 CHROME GEMINI PRO AUTOMATION BOT (PUPPETEER CDP)');
console.log('   Target Account: sumanzfilms@gmail.com');
console.log('=============================================================');
console.log(`🔌 Target Chrome Port       : ${port}`);
console.log(`📁 Target Figures Directory : ${OUTPUT_DIR}`);
console.log(`📋 Total Prompts in Queue   : ${queue.length} of ${allPrompts.length}`);
if (filterId) console.log(`🔍 Filter ID                : ${filterId}`);
if (filterFilename) console.log(`🔍 Filter Filename           : ${filterFilename}`);
console.log('=============================================================\n');

if (queue.length === 0) {
  console.log('✨ All images in queue already exist in public/figures/! Use --force to regenerate.\n');
  process.exit(0);
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  let browser;
  try {
    console.log(`⏳ Connecting to Chrome on http://127.0.0.1:${port}...`);
    browser = await puppeteer.connect({
      browserURL: `http://127.0.0.1:${port}`,
      defaultViewport: null
    });
    console.log(`✅ Connected successfully to Google Chrome!`);
  } catch (err) {
    console.error(`\n❌ Could not connect to Google Chrome on port ${port}.`);
    console.error(`\n👉 Make sure Chrome is running in debugging mode:`);
    console.log(`   /Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --remote-debugging-port=${port} &\n`);
    process.exit(1);
  }

  // Find or create Gemini tab
  const pages = await browser.pages();
  let geminiPage = pages.find(p => p.url().includes('gemini.google.com'));

  if (!geminiPage) {
    console.log(`🌐 Opening a new tab navigating to https://gemini.google.com/app...`);
    geminiPage = await browser.newPage();
    await geminiPage.goto('https://gemini.google.com/app', { waitUntil: 'networkidle2' });
  } else {
    console.log(`🌐 Found active Gemini tab: ${geminiPage.url()}`);
    await geminiPage.bringToFront();
  }

  // Verify chat interface is ready
  console.log(`⏳ Checking Gemini chat interface...`);
  await geminiPage.waitForSelector('rich-textarea, div[contenteditable="true"], textarea', { timeout: 30000 })
    .catch(() => console.log('⚠️ Notice: Ensure sumanzfilms@gmail.com is signed in.'));

  let successCount = 0;
  let failureCount = 0;

  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    const targetFile = path.join(OUTPUT_DIR, item.filename);

    console.log(`\n-------------------------------------------------------------`);
    console.log(`[${i + 1}/${queue.length}] 🎨 Generating ${item.id} (${item.title})`);
    console.log(`   📄 Output File : ${item.filename}`);
    console.log(`   🎯 Section     : ${item.section}`);
    console.log(`-------------------------------------------------------------`);

    let promptSent = false;
    let attempts = 0;

    while (attempts < 2 && !promptSent) {
      attempts++;
      try {
        await geminiPage.goto('https://gemini.google.com/app', { waitUntil: 'networkidle2' });
        await sleep(2500);
        await geminiPage.waitForSelector('rich-textarea, div[contenteditable="true"], textarea', { timeout: 20000 }).catch(() => {});

        // Record existing image URLs in DOM before sending prompt
        const existingImageUrls = await geminiPage.evaluate(() => {
          return Array.from(document.querySelectorAll('img')).map(img => img.src).filter(Boolean);
        });

        // Format high-impact 16:9 widescreen prompt
        const promptFull = `Generate a high-quality 16:9 widescreen infographic image: ${item.prompt}`;

        await geminiPage.evaluate((text) => {
          const input = document.querySelector('rich-textarea p, rich-textarea div[contenteditable="true"], div[contenteditable="true"] p, div[contenteditable="true"], textarea');
          if (input) {
            input.focus();
            input.innerText = text;
            input.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }, promptFull);

        await sleep(1200);

        // Click Send button
        const clicked = await geminiPage.evaluate(() => {
          const sendBtn = document.querySelector('button[aria-label="Send message"], button.send-button, mat-icon[data-mat-icon-name="send"]')?.closest('button');
          if (sendBtn && !sendBtn.disabled) {
            sendBtn.click();
            return true;
          }
          return false;
        });

        if (!clicked) {
          await geminiPage.keyboard.press('Enter');
        }

        console.log(`   📤 Prompt submitted. Waiting for Imagen 3 generation...`);
        promptSent = true;

        // Wait for new generated image to appear in DOM
        let imageBuffer = null;
        let waitAttempts = 0;

        while (!imageBuffer && waitAttempts < 35) {
          await sleep(3000);
          waitAttempts++;

          const newImageData = await geminiPage.evaluate((existingUrls) => {
            const allImages = Array.from(document.querySelectorAll('img'));
            const candidates = allImages.filter(img =>
              img.src &&
              !existingUrls.includes(img.src) &&
              (img.src.includes('googleusercontent.com') || img.src.startsWith('blob:') || img.src.startsWith('data:image')) &&
              img.naturalWidth > 350
            );

            if (candidates.length > 0) {
              const latest = candidates[candidates.length - 1];
              return { src: latest.src, width: latest.naturalWidth, height: latest.naturalHeight };
            }
            return null;
          }, existingImageUrls);

          if (newImageData) {
            console.log(`   🖼️ Image detected in chat (${newImageData.width}x${newImageData.height})! Extracting raw image bytes...`);

            const base64Data = await geminiPage.evaluate((imgSrc) => {
              const img = Array.from(document.querySelectorAll('img')).find(i => i.src === imgSrc);
              if (!img || !img.complete || img.naturalWidth === 0) return null;
              try {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
                return dataUrl.split(',')[1];
              } catch (e) {
                return null;
              }
            }, newImageData.src);

            if (base64Data) {
              imageBuffer = Buffer.from(base64Data, 'base64');
            }
          }
        }

        if (imageBuffer) {
          fs.writeFileSync(targetFile, imageBuffer);
          const stats = fs.statSync(targetFile);
          console.log(`   ✅ Successfully saved: public/figures/${item.filename} (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
          successCount++;
        } else {
          console.error(`   ⚠️ Timed out waiting for ${item.filename} (105s). Skipping to next...`);
          failureCount++;
        }

      } catch (err) {
        console.error(`   ⚠️ Error during attempt ${attempts}: ${err.message}`);
        await sleep(3000);
      }
    }
  }

  console.log('\n=============================================================');
  console.log('🏁 GENERATION COMPLETED');
  console.log(`   ✅ Successful : ${successCount}`);
  console.log(`   ❌ Failed     : ${failureCount}`);
  console.log('=============================================================\n');

  await browser.disconnect();
}

main().catch(err => {
  console.error('Fatal bot error:', err);
  process.exit(1);
});
