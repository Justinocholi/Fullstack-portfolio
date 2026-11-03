import { chromium } from 'playwright'
import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const PROJECTS = [
  {
    id: 'thriftlink',
    url: 'https://www.thriftlink.com.ng',
    filename: 'thriftlink.png'
  },
  {
    id: 'delverse-tech',
    url: 'https://www.delversetech.com/',
    filename: 'delverse-tech.png'
  },
  {
    id: 'blockchain-voting-platform',
    url: 'https://blockchain-voting-platform.vercel.app/',
    filename: 'blockchain-voting.png'
  },
  {
    id: 'ai-vocal-studio',
    url: 'https://ai-vocal-studio-kappa.vercel.app/',
    filename: 'ai-vocal-studio.png'
  },
  {
    id: 'taskflow-nova',
    url: 'https://taskflow-nova.vercel.app/',
    filename: 'taskflow-nova.png'
  },
  {
    id: 'insightly-analytics',
    url: 'https://insightly-analytics-nova.vercel.app/',
    filename: 'insightly-analytics.png'
  },
  {
    id: 'nova-news-app',
    url: 'https://nova-newsapp-gamma.vercel.app/',
    filename: 'nova-news.png'
  }
]

const OUTPUT_DIR = path.resolve('public/work')
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

async function run() {
  console.log('🚀 Starting project screenshot capture...')
  let browser
  try {
    browser = await chromium.launch({ channel: 'msedge', headless: true })
  } catch (err) {
    console.log('Edge launch failed, falling back to default chromium...')
    browser = await chromium.launch({ headless: true })
  }

  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  })

  const results = []

  for (const proj of PROJECTS) {
    const page = await context.newPage()
    const outPng = path.join(OUTPUT_DIR, proj.filename)
    console.log(`\n📸 Capturing ${proj.id} from ${proj.url}...`)

    try {
      const response = await page.goto(proj.url, {
        waitUntil: 'domcontentloaded',
        timeout: 15000
      })

      const status = response ? response.status() : 0
      if (status >= 400) {
        throw new Error(`HTTP status ${status}`)
      }

      // Wait a moment for dynamic rendering and images to settle
      await page.waitForTimeout(3000)

      await page.screenshot({
        path: outPng,
        type: 'png',
        clip: { x: 0, y: 0, width: 1440, height: 900 }
      })

      console.log(`✅ Saved: ${outPng}`)
      results.push({ id: proj.id, success: true, file: proj.filename })
    } catch (err) {
      console.warn(`⚠️ Failed to capture ${proj.id}: ${err.message}`)
      results.push({ id: proj.id, success: false, error: err.message })
    } finally {
      await page.close()
    }
  }

  await browser.close()

  console.log('\n📊 Capture Summary:')
  console.table(results)

  // Convert captured PNGs to WebP using python Pillow
  console.log('\n🔄 Converting captured screenshots to optimized WebP...')
  try {
    execSync(
      `python -c "
import os
from PIL import Image

work_dir = 'public/work'
converted = 0
for f in os.listdir(work_dir):
    if f.endswith('.png'):
        src = os.path.join(work_dir, f)
        dst = os.path.join(work_dir, f[:-4] + '.webp')
        with Image.open(src) as img:
            img = img.convert('RGB')
            img.save(dst, 'WEBP', quality=85)
            print(f'{f} ({os.path.getsize(src)/1024:.1f}KB) -> {os.path.basename(dst)} ({os.path.getsize(dst)/1024:.1f}KB)')
        os.remove(src)
        converted += 1
if converted == 0:
    print('No PNGs found to convert.')
"`,
      { stdio: 'inherit' }
    )
    console.log('✨ WebP conversion complete!')
  } catch (convErr) {
    console.warn('WebP conversion note:', convErr.message)
  }
}

run().catch((err) => {
  console.error('Fatal capture error:', err)
  process.exit(1)
})
