#!/usr/bin/env bash
set -e

# Autonomous Image Generation & Widescreen Infographics Suite Launcher
# Configured for Google Pro Account: sumanzfilms@gmail.com

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT=9222

echo "============================================================="
echo "🚀 FOLDMASTER-16 WIDESCREEN INFOGRAPHICS & GEMINI BOT"
echo "   Target Account: sumanzfilms@gmail.com (Chrome Profile 52)"
echo "============================================================="

# Step 1: Generate high-resolution 16:9 widescreen technological architectural infographics
echo ""
echo "🎨 Step 1: Rendering pixel-perfect 16:9 widescreen vector infographics..."
python3 "$PROJECT_DIR/scripts/generate_widescreen_infographics.py"

# Step 2: Check Chrome Debugging Port
echo ""
echo "🔌 Step 2: Checking Chrome Remote Debugging port $PORT..."
if lsof -i :$PORT >/dev/null 2>&1; then
    echo "  ✅ Chrome remote debugging is active on port $PORT."
else
    echo "  ⏳ Starting Chrome debugging instance with Profile 52 (sumanzfilms@gmail.com)..."
    mkdir -p /tmp/chrome_gemini_suman
    cp "$HOME/Library/Application Support/Google/Chrome/Local State" /tmp/chrome_gemini_suman/ 2>/dev/null || true
    cp -R "$HOME/Library/Application Support/Google/Chrome/Profile 52" /tmp/chrome_gemini_suman/Default 2>/dev/null || true
    /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
        --user-data-dir="/tmp/chrome_gemini_suman" \
        --remote-debugging-port=$PORT \
        --no-first-run \
        --no-default-browser-check \
        "https://gemini.google.com/app" >/dev/null 2>&1 &
    sleep 4
fi

# Step 3: Run Bot for any requested generation
echo ""
echo "🤖 Step 3: Running Chrome Gemini Pro Bot..."
node "$PROJECT_DIR/scripts/chrome_gemini_bot.cjs" "$@"

echo ""
echo "✨ All technological infographics and figures are up-to-date in public/figures/!"
