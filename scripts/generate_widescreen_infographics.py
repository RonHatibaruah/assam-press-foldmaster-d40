#!/usr/bin/env python3
"""
Generate complete suite of high-impact 16:9 widescreen technological architectural infographics
for FoldMaster-16 (NESFIC-D-40, Assam Government Press).
Modeled directly on the Data Centers blueprint infographic aesthetic:
- 16:9 widescreen (1600 x 900 viewBox / 1920x1080 output)
- Clean white/light blueprint grid background (#f8fafc with #e2e8f0 technical grid)
- Dark navy master header banner with status pill and subtitle
- Color-coded diagnostic cards (cyan, emerald, amber, and royal blue)
- Metric badges, mathematical notation, and sovereign attribution
"""

import os
import pymupdf

OUTPUT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'public', 'figures'))
PNG_DIR = os.path.join(OUTPUT_DIR, 'png')
WIDESCREEN_DIR = os.path.join(OUTPUT_DIR, 'widescreen')
os.makedirs(OUTPUT_DIR, exist_ok=True)
os.makedirs(PNG_DIR, exist_ok=True)
os.makedirs(WIDESCREEN_DIR, exist_ok=True)

def wrap_svg(title, subtitle, badge_text, figure_num, content_elements):
    grid_pattern = """
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" stroke-width="0.75"/>
      <path d="M 200 0 L 0 0 0 200" fill="none" stroke="#cbd5e1" stroke-width="1.25"/>
    </pattern>
    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="0.75" fill="#94a3b8" opacity="0.3"/>
    </pattern>
    """
    
    header = f"""
    <!-- Master Header -->
    <rect x="40" y="30" width="1520" height="90" rx="12" fill="#0f172a" filter="url(#drop-shadow)"/>
    <rect x="40" y="30" width="8" height="90" rx="4" fill="#0ea5e9"/>
    
    <!-- Top Blueprint Scale Markers & Coordinates -->
    <g stroke="#94a3b8" stroke-width="1" opacity="0.6">
      <line x1="40" y1="20" x2="40" y2="28"/>
      <line x1="140" y1="22" x2="140" y2="28"/>
      <line x1="240" y1="22" x2="240" y2="28"/>
      <line x1="340" y1="22" x2="340" y2="28"/>
      <line x1="440" y1="22" x2="440" y2="28"/>
      <line x1="540" y1="22" x2="540" y2="28"/>
      <line x1="640" y1="22" x2="640" y2="28"/>
      <line x1="740" y1="22" x2="740" y2="28"/>
      <line x1="840" y1="22" x2="840" y2="28"/>
      <line x1="940" y1="22" x2="940" y2="28"/>
      <line x1="1040" y1="22" x2="1040" y2="28"/>
      <line x1="1140" y1="22" x2="1140" y2="28"/>
      <line x1="1240" y1="22" x2="1240" y2="28"/>
      <line x1="1340" y1="22" x2="1340" y2="28"/>
      <line x1="1440" y1="22" x2="1440" y2="28"/>
      <line x1="1560" y1="20" x2="1560" y2="28"/>
    </g>
    <text x="40" y="16" font-family="Helvetica, Arial, monospace" font-size="9" fill="#64748b" letter-spacing="1">
      TECHNICAL BLUEPRINT // SCALE: 1:1 // COORDINATES: 26.1856° N, 91.7777° E // FACILITY: BAMUNIMAIDAM GOVT PRESS
    </text>
    <text x="1560" y="16" font-family="Helvetica, Arial, monospace" font-size="9" fill="#0284c7" font-weight="bold" text-anchor="end" letter-spacing="1">
      [TELEM: 100 Hz] [SYSTEM: ONLINE] [TRL: 7]
    </text>

    <!-- Header Typography -->
    <text x="65" y="62" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#38bdf8" letter-spacing="2">
      STREAM 1 · NESFIC-D-40 · {badge_text.upper()} · {figure_num.upper()}
    </text>
    <text x="65" y="94" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="bold" fill="#ffffff" letter-spacing="0.5">
      {title}
    </text>
    <text x="65" y="112" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#94a3b8">
      {subtitle}
    </text>
    
    <!-- Top Right Meta Badges -->
    <rect x="1330" y="48" width="210" height="54" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1"/>
    <text x="1435" y="70" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#38bdf8" text-anchor="middle">
      ASSAM GOVT PRESS
    </text>
    <text x="1435" y="88" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">
      Bamunimaidam, Guwahati
    </text>

    <!-- Corner Blueprint Registration Crosshairs -->
    <g stroke="#0284c7" stroke-width="1.5" opacity="0.4">
      <path d="M 15 25 L 25 25 M 20 20 L 20 30"/>
      <path d="M 1575 25 L 1585 25 M 1580 20 L 1580 30"/>
      <path d="M 15 875 L 25 875 M 20 870 L 20 880"/>
      <path d="M 1575 875 L 1585 875 M 1580 870 L 1580 880"/>
    </g>
    """
    
    footer = """
    <!-- Sovereign Footer Attribution -->
    <rect x="40" y="845" width="1520" height="35" rx="6" fill="#f1f5f9" stroke="#e2e8f0" stroke-width="1"/>
    <text x="60" y="867" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#475569">
      ROJES LABS · LEAD APPLICANT: ABHISEKH SAHARIA · GRANT: ₹40.0L TOTAL (SOFTWARE/ENGG: ₹20.0L)
    </text>
    <text x="1540" y="867" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b" text-anchor="end">
      TECHNOLOGY READINESS LEVEL: TRL-7 · OPERATIONAL AT 12,000 SHEETS/HR · © 2026 ROJES LABS
    </text>
    """
    
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900" style="background:#ffffff;">
  <defs>
    {grid_pattern}
    <filter id="drop-shadow" x="-5%" y="-5%" width="110%" height="115%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
    <filter id="soft-glow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0284c7" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Technical Background Grid -->
  <rect width="1600" height="900" fill="#f8fafc"/>
  <rect width="1600" height="900" fill="url(#grid)"/>
  <rect width="1600" height="900" fill="url(#dots)"/>

  {header}
  {content_elements}
  {footer}
</svg>"""

# FIGURE 1: Conventional vs FoldMaster-16 Workflow Comparison
def gen_figure1():
    content = """
    <g transform="translate(40, 140)">
      <!-- Left: Conventional -->
      <g transform="translate(0, 0)">
        <rect width="740" height="685" rx="12" fill="#ffffff" stroke="#fca5a5" stroke-width="2" filter="url(#drop-shadow)"/>
        <path d="M 0 12 Q 0 0 12 0 L 728 0 Q 740 0 740 12 L 740 45 L 0 45 Z" fill="#fee2e2"/>
        <text x="25" y="30" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="bold" fill="#991b1b">
          CONVENTIONAL POST-PRESS (LEGACY MECHANICAL FOLDER)
        </text>
        <rect x="580" y="10" width="145" height="25" rx="6" fill="#dc2626"/>
        <text x="652" y="27" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">
          SEVERE BOTTLENECK
        </text>

        <rect x="25" y="65" width="690" height="100" rx="8" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
        <text x="45" y="95" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#9f1239">
          1. Friction Rubber Wheel Infeed (Mechanical Caliper)
        </text>
        <text x="45" y="118" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">
          • Rubber wheel slippage on 45-60 GSM lightweight maplitho &amp; gazette stocks
        </text>
        <text x="45" y="138" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">
          • Severe static cling during Assam monsoon (95% RH), pulling twin sheets
        </text>
        <rect x="540" y="85" width="160" height="40" rx="6" fill="#ffe4e6" stroke="#fda4af" stroke-width="1"/>
        <text x="620" y="105" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#e11d48" text-anchor="middle">DOUBLE-SHEET RISK</text>
        <text x="620" y="120" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#9f1239" text-anchor="middle">12-18 Jams/Hour</text>

        <rect x="25" y="180" width="690" height="100" rx="8" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
        <text x="45" y="210" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#9f1239">
          2. Manual Feeler-Gauge Buckle Plate Tuning
        </text>
        <text x="45" y="233" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">
          • Manual screw calibration requiring 45+ minutes per paper changeover
        </text>
        <text x="45" y="253" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">
          • High roller pressure burns &amp; ink scuffing on legislative publications
        </text>
        <rect x="540" y="200" width="160" height="40" rx="6" fill="#ffe4e6" stroke="#fda4af" stroke-width="1"/>
        <text x="620" y="220" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#e11d48" text-anchor="middle">SETUP DOWNTIME</text>
        <text x="620" y="235" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#9f1239" text-anchor="middle">45 Minutes Manual</text>

        <rect x="25" y="295" width="690" height="100" rx="8" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
        <text x="45" y="325" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#9f1239">
          3. Fixed Cam Mechanical Knife Cross-Fold
        </text>
        <text x="45" y="348" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">
          • Cam-driven knife limited to 3,200 sheets/hour mechanical ceiling
        </text>
        <text x="45" y="368" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">
          • Trapped internal pocket air causes corner gusseting and dog-ears
        </text>
        <rect x="540" y="315" width="160" height="40" rx="6" fill="#ffe4e6" stroke="#fda4af" stroke-width="1"/>
        <text x="620" y="335" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#e11d48" text-anchor="middle">THROUGHPUT CAP</text>
        <text x="620" y="350" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#9f1239" text-anchor="middle">3,200 sh/hr Max</text>

        <rect x="25" y="410" width="690" height="100" rx="8" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
        <text x="45" y="440" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#9f1239">
          4. Manual Visual Inspection &amp; Catch Tray
        </text>
        <text x="45" y="463" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">
          • Jammed sheets crumple inside roller shafts, forcing full line shutdown
        </text>
        <text x="45" y="483" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">
          • 8.2% paper waste, missing statutory gazette &amp; budget deadlines
        </text>
        <rect x="540" y="430" width="160" height="40" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
        <text x="620" y="450" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">SPOILAGE WASTE</text>
        <text x="620" y="465" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#7f1d1d" text-anchor="middle">8.2% (4,100 Sheets)</text>

        <rect x="25" y="530" width="690" height="135" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="45" y="555" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#334155">
          CONVENTIONAL PERFORMANCE SCORECARD
        </text>
        <g transform="translate(45, 570)">
          <rect width="145" height="75" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="72" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Speed Ceiling</text>
          <text x="72" y="52" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">3,200 sh/hr</text>
        </g>
        <g transform="translate(210, 570)">
          <rect width="145" height="75" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="72" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Paper Spoilage</text>
          <text x="72" y="52" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">8.2% Waste</text>
        </g>
        <g transform="translate(375, 570)">
          <rect width="145" height="75" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="72" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Job Setup</text>
          <text x="72" y="52" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">45.0 Min</text>
        </g>
        <g transform="translate(540, 570)">
          <rect width="145" height="75" rx="6" fill="#ffffff" stroke="#cbd5e1"/>
          <text x="72" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Total OEE</text>
          <text x="72" y="52" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#dc2626" text-anchor="middle">44.2%</text>
        </g>
      </g>

      <!-- Right: FoldMaster-16 -->
      <g transform="translate(780, 0)">
        <rect width="740" height="685" rx="12" fill="#ffffff" stroke="#6ee7b7" stroke-width="2" filter="url(#drop-shadow)"/>
        <path d="M 0 12 Q 0 0 12 0 L 728 0 Q 740 0 740 12 L 740 45 L 0 45 Z" fill="#d1fae5"/>
        <text x="25" y="30" font-family="Helvetica, Arial, sans-serif" font-size="16" font-weight="bold" fill="#065f46">
          FOLDMASTER-16 CYBER-PHYSICAL MECHATRONIC RETROFIT
        </text>
        <rect x="580" y="10" width="145" height="25" rx="6" fill="#059669"/>
        <text x="652" y="27" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">
          WORLD-CLASS 88.9%
        </text>

        <rect x="25" y="65" width="690" height="100" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
        <text x="45" y="95" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#166534">
          1. Rotary Suction Drum + 5.2 kV Active Ionization Aerator
        </text>
        <text x="45" y="118" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">
          • High-flow Venturi air cushion &amp; -0.65 bar timed vacuum separation
        </text>
        <text x="45" y="138" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">
          • 5.2 kV static neutralizer discharges paper surface across 95% RH monsoon
        </text>
        <rect x="540" y="85" width="160" height="40" rx="6" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
        <text x="620" y="105" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">ZERO CLING</text>
        <text x="620" y="120" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#166534" text-anchor="middle">95% RH Immune</text>

        <rect x="25" y="180" width="690" height="100" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
        <text x="45" y="210" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#166534">
          2. Stepper-Actuated Deflector Plates &amp; Caliper Recipe Engine
        </text>
        <text x="45" y="233" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">
          • Closed-loop stepper motors adjust buckle plates &amp; fold rollers to +/-0.01 mm
        </text>
        <text x="45" y="253" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">
          • Instant digital recipe switchover for 45-120 GSM stocks in under 3.5 min
        </text>
        <rect x="540" y="200" width="160" height="40" rx="6" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
        <text x="620" y="220" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">FAST RECIPE</text>
        <text x="620" y="235" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#166534" text-anchor="middle">&lt; 3.5 Min Automated</text>

        <rect x="25" y="295" width="690" height="100" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
        <text x="45" y="325" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#166534">
          3. 12,000 Sh/Hr Right-Angle Mechatronic Servo Knife
        </text>
        <text x="45" y="348" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">
          • Optical encoder synchronization ensures razor-sharp +/-0.25 mm cross-folds
        </text>
        <text x="45" y="368" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">
          • Inline spine micro-slitting wheel expels trapped pocket air (zero gusseting)
        </text>
        <rect x="540" y="315" width="160" height="40" rx="6" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
        <text x="620" y="335" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">RATED SPEED</text>
        <text x="620" y="350" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#166534" text-anchor="middle">12,000 sh/hr Clean</text>

        <rect x="25" y="410" width="690" height="100" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
        <text x="45" y="440" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#166534">
          4. 300 kHz Ultrasonic Detector + In-Flight Diverter Gate (&lt;12ms)
        </text>
        <text x="45" y="463" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">
          • Ultrasonic acoustic wave detection spots twin sheets in &lt;4 ms
        </text>
        <text x="45" y="483" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">
          • Pneumatic diverter fires in &lt;12 ms, ejecting defect without stopping line
        </text>
        <rect x="540" y="430" width="160" height="40" rx="6" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
        <text x="620" y="450" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">ZERO JAM STOP</text>
        <text x="620" y="465" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#166534" text-anchor="middle">0.4% Spoilage</text>

        <rect x="25" y="530" width="690" height="135" rx="8" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1.5"/>
        <text x="45" y="555" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#334155">
          FOLDMASTER-16 BENCHMARK SCORECARD
        </text>
        <g transform="translate(45, 570)">
          <rect width="145" height="75" rx="6" fill="#f0fdf4" stroke="#86efac"/>
          <text x="72" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d" text-anchor="middle">Rated Throughput</text>
          <text x="72" y="52" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857" text-anchor="middle">12,000 sh/hr</text>
        </g>
        <g transform="translate(210, 570)">
          <rect width="145" height="75" rx="6" fill="#f0fdf4" stroke="#86efac"/>
          <text x="72" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d" text-anchor="middle">Paper Spoilage</text>
          <text x="72" y="52" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857" text-anchor="middle">0.4% Rate</text>
        </g>
        <g transform="translate(375, 570)">
          <rect width="145" height="75" rx="6" fill="#f0fdf4" stroke="#86efac"/>
          <text x="72" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d" text-anchor="middle">Auto Setup</text>
          <text x="72" y="52" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857" text-anchor="middle">3.5 Min</text>
        </g>
        <g transform="translate(540, 570)">
          <rect width="145" height="75" rx="6" fill="#f0fdf4" stroke="#86efac"/>
          <text x="72" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d" text-anchor="middle">World-Class OEE</text>
          <text x="72" y="52" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857" text-anchor="middle">88.9%</text>
        </g>
      </g>
    </g>
    """
    return wrap_svg(
        title="END-TO-END POST-PRESS FOLDING TRANSFORMATION",
        subtitle="Comparative Mechatronic Systems Analysis: Legacy Mechanical Folder vs. FoldMaster-16 Cyber-Physical Retrofit",
        badge_text="Process Transformation",
        figure_num="Figure 1",
        content_elements=content
    )

# FIGURE 2: Legislative Assembly & State Budget Fast-Track Pipeline (ADDITIONAL)
def gen_figure2():
    content = """
    <g transform="translate(40, 150)">
      <!-- Stage 1 -->
      <g transform="translate(0, 0)">
        <rect width="360" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <path d="M 0 10 Q 0 0 10 0 L 350 0 Q 360 0 360 10 L 360 40 L 0 40 Z" fill="#0284c7"/>
        <text x="20" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          STAGE 1: SECURE INGESTION
        </text>
        
        <rect x="20" y="60" width="320" height="90" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="35" y="85" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0369a1">Cryptographic Digital Pre-Flight</text>
        <text x="35" y="105" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Finance Dept SHA-256 Sign-off</text>
        <text x="35" y="125" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Automated 16-Page Imposition</text>

        <rect x="20" y="165" width="320" height="90" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="35" y="190" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#334155">Confidentiality Gatekeeper</text>
        <text x="35" y="210" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Air-gapped secure printing LAN</text>
        <text x="35" y="230" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Zero public internet exposure</text>

        <rect x="20" y="270" width="320" height="120" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="35" y="295" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#334155">Automated Job Spec Extraction</text>
        <text x="35" y="315" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Stock: 70 GSM Maplitho Paper</text>
        <text x="35" y="335" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Dimensions: Quad-Crown 508x762mm</text>
        <text x="35" y="355" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Recipe transmitted to FoldMaster-16</text>

        <rect x="20" y="410" width="320" height="85" rx="6" fill="#e0f2fe" stroke="#7dd3fc"/>
        <text x="180" y="440" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0369a1" text-anchor="middle">SLA: &lt; 2.0 HOURS</text>
        <text x="180" y="465" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0284c7" text-anchor="middle">Zero Leakage Protocol</text>
      </g>

      <!-- Stage 2 -->
      <g transform="translate(385, 0)">
        <rect width="360" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <path d="M 0 10 Q 0 0 10 0 L 350 0 Q 360 0 360 10 L 360 40 L 0 40 Z" fill="#475569"/>
        <text x="20" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          STAGE 2: WEB / SHEETFED OFFSET
        </text>

        <rect x="20" y="60" width="320" height="90" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="35" y="85" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#1e293b">High-Volume Offset Printing</text>
        <text x="35" y="105" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• 64-page forms on quad-crown</text>
        <text x="35" y="125" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• 10,000 imp/hr continuous press</text>

        <rect x="20" y="165" width="320" height="90" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="35" y="190" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#1e293b">Paper Moisture Dynamics</text>
        <text x="35" y="210" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Heatset dryer moisture loss</text>
        <text x="35" y="230" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Static charge accumulation</text>

        <rect x="20" y="270" width="320" height="120" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="35" y="295" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#1e293b">Pallet Conditioning Buffer</text>
        <text x="35" y="315" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Rapid 20-min aerated chill stack</text>
        <text x="35" y="335" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Barcode pallet tag synchronization</text>
        <text x="35" y="355" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Direct forklift feed to Post-Press</text>

        <rect x="20" y="410" width="320" height="85" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/>
        <text x="180" y="440" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">SLA: 12.0 HOURS</text>
        <text x="180" y="465" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">50,000 Sheet Offset Batch</text>
      </g>

      <!-- Stage 3: FoldMaster-16 -->
      <g transform="translate(770, 0)">
        <rect width="360" height="520" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="2" filter="url(#drop-shadow)"/>
        <path d="M 0 10 Q 0 0 10 0 L 350 0 Q 360 0 360 10 L 360 40 L 0 40 Z" fill="#059669"/>
        <text x="20" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          STAGE 3: FOLDMASTER-16 MECHATRONICS
        </text>

        <rect x="20" y="60" width="320" height="90" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
        <text x="35" y="85" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#047857">12,000 Sh/Hr Rotary Infeed</text>
        <text x="35" y="105" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• 5.2 kV anti-static discharge</text>
        <text x="35" y="125" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• 300 kHz ultrasonic jam rejection</text>

        <rect x="20" y="165" width="320" height="90" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
        <text x="35" y="190" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#047857">16-Page Right-Angle Cross-Fold</text>
        <text x="35" y="210" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• 4 buckle plates + 2 servo knives</text>
        <text x="35" y="230" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Inline spine micro-perforation</text>

        <rect x="20" y="270" width="320" height="120" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
        <text x="35" y="295" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#047857">Inline Shingle Collation Stream</text>
        <text x="35" y="315" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Automatic signature batch counter</text>
        <text x="35" y="335" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• 0.4% spoilage (vs 8.2% legacy)</text>
        <text x="35" y="355" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Ready for perfect binder infeed</text>

        <rect x="20" y="410" width="320" height="85" rx="6" fill="#d1fae5" stroke="#6ee7b7"/>
        <text x="180" y="440" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#065f46" text-anchor="middle">SLA: 6.5 HOURS</text>
        <text x="180" y="465" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#047857" text-anchor="middle">50k Signatures Completed</text>
      </g>

      <!-- Stage 4 -->
      <g transform="translate(1155, 0)">
        <rect width="365" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <path d="M 0 10 Q 0 0 10 0 L 355 0 Q 365 0 365 10 L 365 40 L 0 40 Z" fill="#d97706"/>
        <text x="20" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          STAGE 4: BINDING &amp; DISPATCH
        </text>

        <rect x="20" y="60" width="325" height="90" rx="6" fill="#fffbeb" stroke="#fde68a"/>
        <text x="35" y="85" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#92400e">Automated Saddle Stitch / Bound</text>
        <text x="35" y="105" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• 3-knife trimmer final dimensioning</text>
        <text x="35" y="125" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Government seal verification</text>

        <rect x="20" y="165" width="325" height="90" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="35" y="190" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#334155">Security Bundling &amp; Shrinkwrap</text>
        <text x="35" y="210" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Tamper-evident barcode labels</text>
        <text x="35" y="230" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Geospatial transit logging</text>

        <rect x="20" y="270" width="325" height="120" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="35" y="295" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#334155">Statutory Destination Delivery</text>
        <text x="35" y="315" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Assam Legislative Assembly (Dispur)</text>
        <text x="35" y="335" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Gauhati High Court Registry</text>
        <text x="35" y="355" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• 35 District Commissioner HQs</text>

        <rect x="20" y="410" width="325" height="85" rx="6" fill="#fef3c7" stroke="#fcd34d"/>
        <text x="182" y="440" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">TOTAL SLA: &lt; 48 HOURS</text>
        <text x="182" y="465" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#92400e" text-anchor="middle">Zero-Delay Gazette Mandate</text>
      </g>
    </g>

    <!-- Bottom KPI Strip -->
    <g transform="translate(40, 695)">
      <rect width="1520" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <text x="30" y="30" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
        STATUTORY SLA IMPACT MATRIX (STATE BUDGET 2026-27 BENCHMARK: 120,000 SIGNATURES)
      </text>

      <g transform="translate(30, 45)">
        <rect width="345" height="65" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Conventional Delivery Time</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#dc2626">108 Hours (Late Risk)</text>
      </g>
      <g transform="translate(405, 45)">
        <rect width="345" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">FoldMaster-16 Delivery Time</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">31.5 Hours (68% Faster)</text>
      </g>
      <g transform="translate(780, 45)">
        <rect width="345" height="65" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Emergency Gazette Turnaround</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">&lt; 4 Hours Fast-Track</text>
      </g>
      <g transform="translate(1155, 45)">
        <rect width="335" height="65" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Sovereign Statutory Compliance</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#059669">100% On-Time Record</text>
      </g>
    </g>
    """
    return wrap_svg(
        title="LEGISLATIVE ASSEMBLY & STATE BUDGET STATUTORY DELIVERY PIPELINE",
        subtitle="Mission-Critical Fast-Track Post-Press Workflow Architecture for the Directorate of Printing & Stationery",
        badge_text="Statutory Delivery",
        figure_num="Figure 2",
        content_elements=content
    )

# FIGURE 3: Rotary Suction Drum Feeder & Static Neutralization Mechanics
def gen_figure3():
    content = """
    <g transform="translate(40, 140)">
      <!-- Left Box: Aeration Fluffing -->
      <g transform="translate(0, 0)">
        <rect width="740" height="520" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <path d="M 0 12 Q 0 0 12 0 L 728 0 Q 740 0 740 12 L 740 45 L 0 45 Z" fill="#0284c7"/>
        <text x="25" y="30" font-family="Helvetica, Arial, sans-serif" font-size="15" font-weight="bold" fill="#ffffff">
          SUBSTRATE AERATION &amp; 5.2 kV STATIC NEUTRALIZATION IN 95% RH
        </text>

        <!-- Paper Stack Visualization -->
        <rect x="40" y="80" width="450" height="200" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <text x="265" y="160" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">
          45 - 60 GSM MAPLITHO GAZETTE PILE
        </text>
        <text x="265" y="185" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b" text-anchor="middle">
          Guwahati Monsoon Ambient: 95% Relative Humidity
        </text>

        <!-- Side Venturi Blower -->
        <rect x="520" y="120" width="180" height="120" rx="8" fill="#f0f9ff" stroke="#7dd3fc"/>
        <text x="610" y="150" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">
          VENTURI AIR BLAST
        </text>
        <text x="610" y="172" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Pressure: 2.2 bar</text>
        <text x="610" y="192" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Flow: 45 m³/hr</text>
        <text x="610" y="215" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">
          Floats Top Sheet
        </text>

        <!-- 5.2 kV Ionization Bar Callout -->
        <rect x="40" y="310" width="660" height="170" rx="8" fill="#f5f3ff" stroke="#c4b5fd"/>
        <text x="65" y="340" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#6d28d9">
          ACTIVE 5.2 kV HIGH-VOLTAGE AC IONIZATION DISCHARGE BAR
        </text>
        <text x="65" y="365" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#475569">
          • Emits alternating positive &amp; negative ion clouds directly across the infeed throat
        </text>
        <text x="65" y="388" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#475569">
          • Decays electrostatic paper charge from &gt; 12.5 kV down to &lt; 0.1 kV in 18 ms
        </text>
        <text x="65" y="411" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#475569">
          • Completely eliminates sheet-to-sheet friction drag and twin-sheet pickup
        </text>
        <rect x="65" y="425" width="220" height="32" rx="4" fill="#ede9fe" stroke="#a78bfa"/>
        <text x="175" y="446" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#5b21b6" text-anchor="middle">
          Static Decay Time: &lt; 18 ms
        </text>
      </g>

      <!-- Right Box: Rotary Vacuum Drum -->
      <g transform="translate(780, 0)">
        <rect width="740" height="520" rx="12" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <path d="M 0 12 Q 0 0 12 0 L 728 0 Q 740 0 740 12 L 740 45 L 0 45 Z" fill="#0f172a"/>
        <text x="25" y="30" font-family="Helvetica, Arial, sans-serif" font-size="15" font-weight="bold" fill="#38bdf8">
          ROTARY TOP-VACUUM SUCTION DRUM &amp; OPTICAL TIMING HEAD
        </text>

        <!-- Mechanical Drum Geometry -->
        <g transform="translate(80, 100)">
          <circle cx="160" cy="140" r="100" fill="#f8fafc" stroke="#0ea5e9" stroke-width="4"/>
          <circle cx="160" cy="140" r="40" fill="#e2e8f0" stroke="#64748b" stroke-width="2"/>
          <text x="160" y="145" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">
            ROTARY DRUM
          </text>
          
          <!-- Suction Sector -->
          <path d="M 160 140 L 90 70 A 100 100 0 0 1 230 70 Z" fill="#38bdf8" opacity="0.35"/>
          <text x="160" y="95" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">
            -0.65 bar VACUUM
          </text>
        </g>

        <!-- Specs on Right -->
        <g transform="translate(420, 90)">
          <rect width="280" height="90" rx="6" fill="#f0fdf4" stroke="#86efac"/>
          <text x="20" y="28" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#15803d">Solenoid Valve Actuation</text>
          <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Response: &lt; 4.0 ms</text>
          <text x="20" y="70" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Timed to machine encoder</text>

          <rect y="110" width="280" height="90" rx="6" fill="#f0f9ff" stroke="#7dd3fc"/>
          <text x="20" y="28" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0369a1">Optical Spacing Gate</text>
          <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Shingle gap: 80 +/- 2 mm</text>
          <text x="20" y="70" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Dynamic speed compensation</text>

          <rect y="220" width="280" height="140" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="28" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Continuous Separation</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Zero rubber wheel marks</text>
          <text x="20" y="74" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Zero scuffing on printed ink</text>
          <text x="20" y="96" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• 12,000 sheets/hour verified</text>
          <text x="20" y="122" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#059669">Pickup Tolerance: +/- 0.15 mm</text>
        </g>
      </g>
    </g>

    <!-- Bottom Engineering Metrics -->
    <g transform="translate(40, 695)">
      <rect width="1520" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <text x="30" y="30" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
        PNEUMATIC &amp; STATIC ELIMINATION PERFORMANCE SPECIFICATIONS
      </text>

      <g transform="translate(30, 45)">
        <rect width="345" height="65" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0369a1">Vacuum Drum Pressure</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">-64.2 kPa (-0.65 bar)</text>
      </g>
      <g transform="translate(405, 45)">
        <rect width="345" height="65" rx="6" fill="#f5f3ff" stroke="#c4b5fd"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#6d28d9">Ionization Discharge Voltage</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#5b21b6">5.2 kV High-Voltage AC</text>
      </g>
      <g transform="translate(780, 45)">
        <rect width="345" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Monsoon Humidity Tolerance</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">95% RH Operational</text>
      </g>
      <g transform="translate(1155, 45)">
        <rect width="335" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Double-Sheet Infeed Error</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">0.00% Zero Defect</text>
      </g>
    </g>
    """
    return wrap_svg(
        title="ROTARY SUCTION FEEDER & STATIC NEUTRALIZATION MECHANICS",
        subtitle="Substrate Separation Physics at 12,000 Sheets/Hour in 95% Monsoon Humidity at Bamunimaidam Facility",
        badge_text="Pneumatics & Feeder",
        figure_num="Figure 3",
        content_elements=content
    )

# FIGURE 4: 16-Page Right-Angle Kinematic Cross-Fold Geometry
def gen_figure4():
    content = """
    <g transform="translate(40, 150)">
      <!-- 4 Sequential Folding Quadrants -->
      <!-- Step 1: Flat Sheet -->
      <g transform="translate(0, 0)">
        <rect width="360" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="360" height="40" rx="10" fill="#0284c7"/>
        <text x="20" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          1. FLAT SHEET (QUAD-CROWN)
        </text>

        <rect x="40" y="70" width="280" height="200" rx="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
        <text x="180" y="160" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">
          508 x 762 mm
        </text>
        <text x="180" y="185" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b" text-anchor="middle">
          70 GSM Maplitho Paper
        </text>

        <rect x="25" y="300" width="310" height="190" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="40" y="325" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0369a1">Initial Substrate Form:</text>
        <text x="40" y="350" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Infeed: Rotary Vacuum Table</text>
        <text x="40" y="375" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Fiber Grain: Parallel to length</text>
        <text x="40" y="400" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Speed: 3.3 m/s line velocity</text>
        <text x="40" y="425" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Caliper: 0.082 mm nominal</text>
        <text x="40" y="455" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#0284c7">
          Throughput: 12,000 sheets/hr
        </text>
      </g>

      <!-- Step 2: Parallel Folds -->
      <g transform="translate(385, 0)">
        <rect width="360" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="360" height="40" rx="10" fill="#059669"/>
        <text x="20" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          2. PARALLEL FOLDS (8-PAGE)
        </text>

        <rect x="60" y="70" width="240" height="200" rx="4" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
        <line x1="180" y1="70" x2="180" y2="270" stroke="#059669" stroke-width="2.5" stroke-dasharray="4 2"/>
        <text x="180" y="160" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#047857" text-anchor="middle">
          254 x 762 mm
        </text>
        <text x="180" y="185" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#059669" text-anchor="middle">
          Buckle Station #1 &amp; #2
        </text>

        <rect x="25" y="300" width="310" height="190" rx="6" fill="#f0fdf4" stroke="#a7f3d0"/>
        <text x="40" y="325" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#047857">Buckle Plate Kinematics:</text>
        <text x="40" y="350" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Stepper Stop Deflector #1</text>
        <text x="40" y="375" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Stepper Stop Deflector #2</text>
        <text x="40" y="400" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Nip Gap Clearance: 0.32 mm</text>
        <text x="40" y="425" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Recipe Repeatability: +/-0.01 mm</text>
        <text x="40" y="455" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#059669">
          Produces 8-Page Folded Band
        </text>
      </g>

      <!-- Step 3: Right Angle Cross Knife 1 -->
      <g transform="translate(770, 0)">
        <rect width="360" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="360" height="40" rx="10" fill="#d97706"/>
        <text x="20" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          3. 90° CROSS-FOLD + SLITTING
        </text>

        <rect x="80" y="80" width="200" height="180" rx="4" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
        <line x1="80" y1="170" x2="280" y2="170" stroke="#d97706" stroke-width="3"/>
        <text x="180" y="150" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#b45309" text-anchor="middle">
          254 x 381 mm
        </text>
        <text x="180" y="200" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#d97706" text-anchor="middle">
          Servo Mechatronic Knife #1
        </text>

        <rect x="25" y="300" width="310" height="190" rx="6" fill="#fffbeb" stroke="#fde68a"/>
        <text x="40" y="325" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#b45309">Anti-Gusseting Science:</text>
        <text x="40" y="350" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• 90° Right-Angle Cross Carrier</text>
        <text x="40" y="375" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Mechatronic Servo Knife Stroke</text>
        <text x="40" y="400" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Inline Spine Micro-Perforation</text>
        <text x="40" y="425" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Expels internal trapped pocket air</text>
        <text x="40" y="455" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#b45309">
          Zero Spine Creasing / Wrinkles
        </text>
      </g>

      <!-- Step 4: Final 16-Page Signature -->
      <g transform="translate(1155, 0)">
        <rect width="365" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="365" height="40" rx="10" fill="#0f172a"/>
        <text x="20" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">
          4. 16-PAGE BOOK SIGNATURE
        </text>

        <rect x="100" y="90" width="160" height="160" rx="4" fill="#f0fdf4" stroke="#059669" stroke-width="2.5"/>
        <text x="180" y="160" font-family="Helvetica, Arial, sans-serif" font-size="15" font-weight="bold" fill="#047857" text-anchor="middle">
          127 x 190.5 mm
        </text>
        <text x="180" y="185" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#059669" text-anchor="middle">
          Exact 16-Page Signature
        </text>

        <rect x="25" y="300" width="315" height="190" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="40" y="325" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Final Imposition Output:</text>
        <text x="40" y="350" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Servo Knife #2 final stroke</text>
        <text x="40" y="375" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Ready for saddle stitch or binder</text>
        <text x="40" y="400" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Shingle delivery stream</text>
        <text x="40" y="425" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">• Fold Accuracy: +/- 0.25 mm</text>
        <text x="40" y="455" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#059669">
          Spine Defect Rate: &lt; 0.05%
        </text>
      </g>
    </g>

    <!-- Bottom KPI Strip -->
    <g transform="translate(40, 695)">
      <rect width="1520" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <text x="30" y="30" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
        KINEMATIC CROSS-FOLD ACCURACY &amp; GEOMETRIC VALIDATION
      </text>

      <g transform="translate(30, 45)">
        <rect width="345" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Fold Registration Accuracy</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">+/- 0.25 mm Precision</text>
      </g>
      <g transform="translate(405, 45)">
        <rect width="345" height="65" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0369a1">Folding Stages Completed</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">4 Stages (2 Buckle + 2 Knife)</text>
      </g>
      <g transform="translate(780, 45)">
        <rect width="345" height="65" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Internal Air Trapping</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#059669">Zero Gusseting (Vented)</text>
      </g>
      <g transform="translate(1155, 45)">
        <rect width="335" height="65" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Maximum Machine Throughput</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">12,000 Signatures/Hour</text>
      </g>
    </g>
    """
    return wrap_svg(
        title="16-PAGE RIGHT-ANGLE KINEMATIC CROSS-FOLD GEOMETRY",
        subtitle="Mathematical Folding Progression from 508x762 mm Flat Quad-Crown Sheet to 16-Page Book Signature",
        badge_text="Kinematics & Imposition",
        figure_num="Figure 4",
        content_elements=content
    )

# FIGURE 5: 300 kHz Ultrasonic Double-Sheet Detection & In-Flight Reject Gate
def gen_figure5():
    content = """
    <g transform="translate(40, 150)">
      <!-- Main Mechatronic Diagram Box -->
      <rect width="1520" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <path d="M 0 10 Q 0 0 10 0 L 1510 0 Q 1520 0 1520 10 L 1520 40 L 0 40 Z" fill="#0f172a"/>
      <text x="25" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">
        SUB-12ms CLOSED-LOOP ULTRASONIC CLASSIFICATION &amp; ACTIVE PNEUMATIC DIVERTER ARCHITECTURE
      </text>

      <!-- Conveyor Track Baseline -->
      <line x1="80" y1="280" x2="1440" y2="280" stroke="#334155" stroke-width="8" stroke-linecap="round"/>
      <text x="80" y="305" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">
        High-Speed Paper Infeed Belt (Line Velocity V = 3.33 m/s = 12,000 sheets/hour)
      </text>

      <!-- STATION 1: Ultrasonic Transducers -->
      <g transform="translate(250, 70)">
        <rect x="-80" y="20" width="160" height="70" rx="8" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="0" y="50" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">
          PIEZO EMITTER
        </text>
        <text x="0" y="70" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#bae6fd" text-anchor="middle">
          300 kHz Acoustic Burst
        </text>

        <!-- Wave Cones -->
        <path d="M -30 90 L -60 200 L 60 200 L 30 90 Z" fill="#38bdf8" opacity="0.25"/>
        <path d="M -15 90 L -30 200 L 30 200 L 15 90 Z" fill="#38bdf8" opacity="0.45"/>

        <rect x="-80" y="220" width="160" height="70" rx="8" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="0" y="250" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">
          ACOUSTIC RECEIVER
        </text>
        <text x="0" y="270" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#bae6fd" text-anchor="middle">
          Attenuation Sensor
        </text>

        <rect x="-100" y="305" width="200" height="60" rx="6" fill="#f0f9ff" stroke="#7dd3fc"/>
        <text x="0" y="328" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">
          ULTRASONIC STATION
        </text>
        <text x="0" y="348" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#475569" text-anchor="middle">
          Sampling Rate: 200 kHz
        </text>
      </g>

      <!-- Defective Double Sheet Moving In -->
      <g transform="translate(480, 260)">
        <rect x="0" y="0" width="200" height="12" rx="3" fill="#ef4444"/>
        <rect x="15" y="-6" width="200" height="12" rx="3" fill="#dc2626" opacity="0.9"/>
        <text x="100" y="-15" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">
          DOUBLE SHEET DETECTED (ΔV &gt; 42 mV)
        </text>
      </g>

      <!-- STATION 2: Edge DSP Classification -->
      <g transform="translate(800, 100)">
        <rect width="240" height="140" rx="8" fill="#1e293b" stroke="#334155"/>
        <text x="120" y="35" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8" text-anchor="middle">
          EDGE AI DSP PROCESSOR
        </text>
        <text x="120" y="65" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">
          • Acoustic Envelope Analysis
        </text>
        <text x="120" y="90" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#cbd5e1" text-anchor="middle">
          • Classification Time: &lt; 3.8 ms
        </text>
        <text x="120" y="118" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#4ade80" text-anchor="middle">
          Output: Fire Diverter Solenoid
        </text>
      </g>

      <!-- STATION 3: In-Flight Pneumatic Diverter Gate -->
      <g transform="translate(1120, 200)">
        <line x1="0" y1="80" x2="100" y2="160" stroke="#dc2626" stroke-width="8" stroke-linecap="round"/>
        <rect x="20" y="-70" width="180" height="70" rx="6" fill="#fef2f2" stroke="#fca5a5"/>
        <text x="110" y="-45" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">
          FAST SOLENOID VALVE
        </text>
        <text x="110" y="-25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#991b1b" text-anchor="middle">
          Actuation: 8.5 ms (&lt;12ms limit)
        </text>

        <!-- Lower Waste Chute -->
        <rect x="80" y="180" width="220" height="80" rx="6" fill="#fee2e2" stroke="#ef4444"/>
        <text x="190" y="215" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">
          LOWER REJECT CHUTE
        </text>
        <text x="190" y="238" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#7f1d1d" text-anchor="middle">
          Zero Stoppage Ejection
        </text>
      </g>
    </g>

    <!-- Bottom Engineering Metrics -->
    <g transform="translate(40, 695)">
      <rect width="1520" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <text x="30" y="30" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
        MECHATRONIC IN-FLIGHT REJECTION SPECIFICATIONS
      </text>

      <g transform="translate(30, 45)">
        <rect width="345" height="65" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0369a1">Acoustic Sensing Frequency</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">300 kHz Ultrasonic</text>
      </g>
      <g transform="translate(405, 45)">
        <rect width="345" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Total Diverter Gate Response</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">&lt; 12.0 Milliseconds</text>
      </g>
      <g transform="translate(780, 45)">
        <rect width="345" height="65" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Sheet Travel Velocity</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">3.33 m/s (In-Flight)</text>
      </g>
      <g transform="translate(1155, 45)">
        <rect width="335" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Unforced Line Stoppages</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">0 Halts (Continuous)</text>
      </g>
    </g>
    """
    return wrap_svg(
        title="300 kHz ULTRASONIC DOUBLE-SHEET DETECTION & IN-FLIGHT REJECT GATE",
        subtitle="Active Sub-12ms Closed-Loop Mechatronic Reject System Operating at Full 12,000 Sheets/Hour Line Speed",
        badge_text="Mechatronics & Sensing",
        figure_num="Figure 5",
        content_elements=content
    )

# FIGURE 6: Four-Tier Cyber-Physical Architecture
def gen_figure6():
    content = """
    <g transform="translate(40, 150)">
      <!-- Tier 4: Sovereign Cloud -->
      <g transform="translate(0, 0)">
        <rect width="1520" height="110" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="280" height="110" rx="8" fill="#0f172a"/>
        <text x="30" y="45" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">TIER 4: SOVEREIGN CLOUD</text>
        <text x="30" y="70" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#94a3b8">Press MIS &amp; Analytics</text>
        
        <g transform="translate(310, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">React Web Dashboard</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Live 100 Hz Telemetry &amp; Alerts</text>
        </g>
        <g transform="translate(610, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">OEE Analytics Engine</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Availability, Perf, Quality (88.9%)</text>
        </g>
        <g transform="translate(910, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Predictive Maintenance</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Bearing Vibration &amp; Wear MTBF</text>
        </g>
        <g transform="translate(1210, 20)">
          <rect width="280" height="70" rx="6" fill="#f0fdf4" stroke="#86efac"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#15803d">Statutory SLA Queue</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#047857">State Budget &amp; Gazette Monitor</text>
        </g>
      </g>

      <!-- Tier 3: Edge Gateway -->
      <g transform="translate(0, 130)">
        <rect width="1520" height="110" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="280" height="110" rx="8" fill="#1e293b"/>
        <text x="30" y="45" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#38bdf8">TIER 3: EDGE GATEWAY</text>
        <text x="30" y="70" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#94a3b8">Shop-Floor IPC Hub</text>

        <g transform="translate(310, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Industrial IPC (Node.js)</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Modbus TCP &lt;-&gt; MQTT Bridge</text>
        </g>
        <g transform="translate(610, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Local SQLite Recipe Cache</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">45-120 GSM Caliper Database</text>
        </g>
        <g transform="translate(910, 20)">
          <rect width="280" height="70" rx="6" fill="#f0f9ff" stroke="#7dd3fc"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0369a1">Air-Gapped Offline Mode</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0284c7">100% Fail-Safe Autonomous</text>
        </g>
        <g transform="translate(1210, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Cryptographic Token Auth</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Audit Log &amp; Operator Access</text>
        </g>
      </g>

      <!-- Tier 2: Real-Time Edge Control -->
      <g transform="translate(0, 260)">
        <rect width="1520" height="110" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="280" height="110" rx="8" fill="#0369a1"/>
        <text x="30" y="45" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">TIER 2: REAL-TIME PLC</text>
        <text x="30" y="70" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#bae6fd">Deterministic Control</text>

        <g transform="translate(310, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Deterministic Cycle</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">&lt; 1.0 ms Scan Rate (IEC 61131)</text>
        </g>
        <g transform="translate(610, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Closed-Loop Stepper Bus</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Deflector Plate Positioning</text>
        </g>
        <g transform="translate(910, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Optical Rotary Encoders</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">2,048 PPR Position Tracking</text>
        </g>
        <g transform="translate(1210, 20)">
          <rect width="280" height="70" rx="6" fill="#f0fdf4" stroke="#86efac"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#15803d">Sub-12ms Reject Logic</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#047857">High-Speed Solenoid Firing</text>
        </g>
      </g>

      <!-- Tier 1: Physical Mechatronics -->
      <g transform="translate(0, 390)">
        <rect width="1520" height="110" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="280" height="110" rx="8" fill="#047857"/>
        <text x="30" y="45" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">TIER 1: MECHATRONICS</text>
        <text x="30" y="70" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#a7f3d0">Sensors &amp; Actuators</text>

        <g transform="translate(310, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Rotary Suction Drum</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">-0.65 bar Vacuum Valve Head</text>
        </g>
        <g transform="translate(610, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">5.2 kV Ionization Bar</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Dual-Polarity Static Discharge</text>
        </g>
        <g transform="translate(910, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">300 kHz Ultrasonic Head</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Double-Sheet Acoustic Detector</text>
        </g>
        <g transform="translate(1210, 20)">
          <rect width="280" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
          <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Servo Cross-Fold Knives</text>
          <text x="20" y="52" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Dual High-Speed Servo Motors</text>
        </g>
      </g>
    </g>

    <!-- Bottom KPI Strip -->
    <g transform="translate(40, 695)">
      <rect width="1520" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <text x="30" y="30" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
        CYBER-PHYSICAL SYSTEM RELIABILITY &amp; INTEGRATION SPECIFICATIONS
      </text>

      <g transform="translate(30, 45)">
        <rect width="345" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Telemetry Telemetry Sampling</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">100 Hz Continuous Stream</text>
      </g>
      <g transform="translate(405, 45)">
        <rect width="345" height="65" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0369a1">Offline Operation Capability</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">100% Autonomous Air-Gapped</text>
      </g>
      <g transform="translate(780, 45)">
        <rect width="345" height="65" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Protocol Interoperability</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">Modbus TCP / MQTT</text>
      </g>
      <g transform="translate(1155, 45)">
        <rect width="335" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Cybersecurity Classification</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">Sovereign Classified</text>
      </g>
    </g>
    """
    return wrap_svg(
        title="FOUR-TIER CYBER-PHYSICAL SYSTEM ARCHITECTURE",
        subtitle="End-to-End Retrofit Stack: Physical Mechatronics, Real-Time PLC, Edge Gateway, and Sovereign Cloud",
        badge_text="System Architecture",
        figure_num="Figure 6",
        content_elements=content
    )

# FIGURE 7: Dynamic Substrate Caliper Profiling & Adaptive Roll-Nip Engine (ADDITIONAL)
def gen_figure7():
    content = """
    <!-- Top System Workflow Banner -->
    <g transform="translate(40, 150)">
      <rect width="1520" height="220" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <path d="M 0 10 Q 0 0 10 0 L 1510 0 Q 1520 0 1520 10 L 1520 38 L 0 38 Z" fill="#0f172a"/>
      <text x="25" y="25" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">
        CLOSED-LOOP CLOSED-GAP CALIPER SENSING &amp; ADAPTIVE STEPPER ACTUATION ARCHITECTURE
      </text>

      <!-- 3 Operational Steps -->
      <g transform="translate(30, 55)">
        <rect width="450" height="140" rx="8" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#0369a1">
          STEP 1: OPTICAL &amp; LASER MICROMETER SENSING
        </text>
        <text x="20" y="55" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">
          • Inline dual-beam laser micrometer scans incoming sheet thickness
        </text>
        <text x="20" y="75" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">
          • Dynamic sampling rate: 1,000 readings/sec at 3.3 m/s line speed
        </text>
        <text x="20" y="95" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">
          • Measures thickness across 0.05 mm to 0.16 mm (+/-0.002 mm accuracy)
        </text>
        <text x="20" y="115" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#0284c7">
          Resolution: 2.0 Microns · Instant GSM Classification
        </text>
      </g>

      <g transform="translate(510, 55)">
        <rect width="450" height="140" rx="8" fill="#ecfdf5" stroke="#a7f3d0"/>
        <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#047857">
          STEP 2: EDGE AI RECIPE GAP CALCULATION
        </text>
        <text x="20" y="55" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">
          • Mathematical compression model: G_nip = (N_layers * T_sheet) * K_bulk
        </text>
        <text x="20" y="75" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">
          • Adjusts for humidity swelling factor (Delta_RH) in 95% Assam monsoon
        </text>
        <text x="20" y="95" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">
          • Computes target angular steps for eccentric cam bearing actuators
        </text>
        <text x="20" y="115" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#059669">
          Latency: &lt; 8.0 ms DSP Computation · Modbus Broadcast
        </text>
      </g>

      <g transform="translate(990, 55)">
        <rect width="500" height="140" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="20" y="30" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#1e293b">
          STEP 3: DUAL STEPPER ROLL-NIP POSITIONING
        </text>
        <text x="20" y="55" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">
          • High-torque bipolar stepper motors drive zero-backlash eccentric cams
        </text>
        <text x="20" y="75" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">
          • Precision micrometer position feedback (+/-0.01 mm mechanical repeatability)
        </text>
        <text x="20" y="95" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">
          • Eliminates roller glazing, paper dog-ears, and ink scuffing completely
        </text>
        <text x="20" y="115" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#0284c7">
          Adjustment Duration: &lt; 3.5 Minutes Automated Setup
        </text>
      </g>
    </g>

    <!-- 4 Substrate Preset Benchmark Cards -->
    <g transform="translate(40, 395)">
      <!-- Card 1: 45 GSM Gazette -->
      <g transform="translate(0, 0)">
        <rect width="360" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect x="0" y="0" width="360" height="35" rx="10" fill="#0284c7"/>
        <text x="20" y="23" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          45 GSM EXTRAORDINARY GAZETTE
        </text>

        <text x="20" y="65" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">Substrate Class: Light Maplitho</text>
        <text x="20" y="90" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Single Sheet Caliper: 0.054 mm</text>
        <text x="20" y="115" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• 16-Page Fold Stack: 0.864 mm</text>
        <text x="20" y="140" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Target Roll Nip Gap: 0.72 mm</text>
        <text x="20" y="165" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Vacuum Level: -0.55 bar (delicate)</text>

        <rect x="20" y="190" width="320" height="50" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="180" y="212" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">
          ANTI-TEAR PROTECTION ACTIVE
        </text>
        <text x="180" y="228" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#0284c7" text-anchor="middle">
          Zero web breaks at 12,000 sh/hr
        </text>
      </g>

      <!-- Card 2: 60 GSM Textbook -->
      <g transform="translate(385, 0)">
        <rect width="360" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect x="0" y="0" width="360" height="35" rx="10" fill="#059669"/>
        <text x="20" y="23" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          60 GSM SEBA SCHOOL TEXTBOOK
        </text>

        <text x="20" y="65" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">Substrate Class: Standard Book Offset</text>
        <text x="20" y="90" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Single Sheet Caliper: 0.076 mm</text>
        <text x="20" y="115" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• 16-Page Fold Stack: 1.216 mm</text>
        <text x="20" y="140" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Target Roll Nip Gap: 1.02 mm</text>
        <text x="20" y="165" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Vacuum Level: -0.65 bar (optimal)</text>

        <rect x="20" y="190" width="320" height="50" rx="6" fill="#ecfdf5" stroke="#a7f3d0"/>
        <text x="180" y="212" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">
          MAX THROUGHPUT TUNED
        </text>
        <text x="180" y="228" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#059669" text-anchor="middle">
          Continuous 12,000 sh/hr running
        </text>
      </g>

      <!-- Card 3: 80 GSM High Court -->
      <g transform="translate(770, 0)">
        <rect width="360" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect x="0" y="0" width="360" height="35" rx="10" fill="#475569"/>
        <text x="20" y="23" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          80 GSM HIGH COURT BOND PAPER
        </text>

        <text x="20" y="65" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">Substrate Class: Heavy Bond / Ledger</text>
        <text x="20" y="90" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Single Sheet Caliper: 0.104 mm</text>
        <text x="20" y="115" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• 16-Page Fold Stack: 1.664 mm</text>
        <text x="20" y="140" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Target Roll Nip Gap: 1.40 mm</text>
        <text x="20" y="165" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Vacuum Level: -0.72 bar (heavy suction)</text>

        <rect x="20" y="190" width="320" height="50" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="180" y="212" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">
          CREASE PRESSURE BOOSTED
        </text>
        <text x="180" y="228" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#475569" text-anchor="middle">
          Zero spine rebound or opening
        </text>
      </g>

      <!-- Card 4: 120 GSM Art Paper -->
      <g transform="translate(1155, 0)">
        <rect width="365" height="260" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect x="0" y="0" width="365" height="35" rx="10" fill="#d97706"/>
        <text x="20" y="23" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#ffffff">
          120 GSM COATED ART PAPER COVER
        </text>

        <text x="20" y="65" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#64748b">Substrate Class: Coated Art Stock</text>
        <text x="20" y="90" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Single Sheet Caliper: 0.145 mm</text>
        <text x="20" y="115" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• 16-Page Fold Stack: 2.320 mm</text>
        <text x="20" y="140" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Target Roll Nip Gap: 1.95 mm</text>
        <text x="20" y="165" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="#334155">• Vacuum Level: -0.78 bar (max vacuum)</text>

        <rect x="20" y="190" width="325" height="50" rx="6" fill="#fffbeb" stroke="#fde68a"/>
        <text x="182" y="212" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">
          ANTI-SCUFF AIR BUFFER
        </text>
        <text x="182" y="228" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#b45309" text-anchor="middle">
          Gloss preservation &amp; zero marking
        </text>
      </g>
    </g>

    <!-- Bottom Engineering Impact Metric Strip -->
    <g transform="translate(40, 680)">
      <rect width="1520" height="145" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <text x="30" y="30" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
        EMPIRICAL CALIPER CONTROL OUTCOMES &amp; HARDWARE SPECS
      </text>

      <g transform="translate(30, 48)">
        <rect width="345" height="78" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="28" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Positioning Repeatability</text>
        <text x="20" y="58" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="bold" fill="#047857">+/- 0.01 mm</text>
      </g>
      <g transform="translate(405, 48)">
        <rect width="345" height="78" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="20" y="28" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0369a1">Setup Changeover Time</text>
        <text x="20" y="58" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="bold" fill="#0284c7">&lt; 3.5 Minutes</text>
      </g>
      <g transform="translate(780, 48)">
        <rect width="345" height="78" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="28" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Substrate Thickness Range</text>
        <text x="20" y="58" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="bold" fill="#0f172a">45 - 120 GSM</text>
      </g>
      <g transform="translate(1155, 48)">
        <rect width="335" height="78" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="28" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Roller Glazing &amp; Scuffing</text>
        <text x="20" y="58" font-family="Helvetica, Arial, sans-serif" font-size="20" font-weight="bold" fill="#059669">0.00% Zero Defect</text>
      </g>
    </g>
    """
    return wrap_svg(
        title="DYNAMIC SUBSTRATE CALIPER PROFILING & ADAPTIVE ROLL-NIP ENGINE",
        subtitle="Automated Closed-Loop Gap Calibration Across 45 to 120 GSM Government Paper Substrates",
        badge_text="Recipe & Caliper Engine",
        figure_num="Figure 7",
        content_elements=content
    )

# FIGURE 8: Throughput Scaling & Spoilage Reduction Trajectory (50,000-Sheet Validation Run)
def gen_figure8():
    content = """
    <g transform="translate(40, 150)">
      <!-- Left Graph: Throughput Trajectory -->
      <g transform="translate(0, 0)">
        <rect width="740" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="740" height="40" rx="10" fill="#0f172a"/>
        <text x="25" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">
          GRAPH A: PRODUCTION THROUGHPUT OVER 8-HOUR CONTINUOUS SHIFT
        </text>

        <!-- Axes -->
        <line x1="80" y1="420" x2="680" y2="420" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="80" y1="100" x2="80" y2="420" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="80" y="90" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Sheets / Hour</text>
        <text x="680" y="445" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b" text-anchor="end">Shift Duration (Hours 1 - 8)</text>

        <!-- Y Axis Ticks -->
        <text x="70" y="425" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="end">0</text>
        <text x="70" y="340" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="end">4,000</text>
        <text x="70" y="260" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="end">8,000</text>
        <text x="70" y="180" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="end">12,000</text>

        <!-- Gridlines -->
        <line x1="80" y1="340" x2="680" y2="340" stroke="#f1f5f9" stroke-width="1"/>
        <line x1="80" y1="260" x2="680" y2="260" stroke="#f1f5f9" stroke-width="1"/>
        <line x1="80" y1="180" x2="680" y2="180" stroke="#f1f5f9" stroke-width="1"/>

        <!-- Conventional Curve (stagnates at ~3,200 with dips) -->
        <path d="M 80 420 Q 140 360, 220 350 L 260 410 L 300 355 L 420 350 L 460 420 L 500 350 L 680 355" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="4 2"/>
        <text x="660" y="380" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">Conventional: 3,200 sh/hr (Frequent Jams)</text>

        <!-- FoldMaster-16 Curve (ramps to 12,000 in 15 min and stays flat) -->
        <path d="M 80 420 Q 130 180, 200 180 L 680 180" fill="none" stroke="#059669" stroke-width="4"/>
        <text x="660" y="160" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="end">FoldMaster-16: 12,000 sh/hr (Continuous Steady-State)</text>

        <rect x="80" y="460" width="600" height="40" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="380" y="485" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">
          NET THROUGHPUT LEAP: +275% SUSTAINED OUTPUT (3.75x SPEED MULTIPLIER)
        </text>
      </g>

      <!-- Right Graph: Cumulative Paper Spoilage -->
      <g transform="translate(780, 0)">
        <rect width="740" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="740" height="40" rx="10" fill="#0f172a"/>
        <text x="25" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">
          GRAPH B: CUMULATIVE PAPER SPOILAGE ACCUMULATION (50,000 SHEET BATCH)
        </text>

        <!-- Axes -->
        <line x1="80" y1="420" x2="680" y2="420" stroke="#94a3b8" stroke-width="1.5"/>
        <line x1="80" y1="100" x2="80" y2="420" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="80" y="90" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Cumulative Wasted Sheets</text>
        <text x="680" y="445" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b" text-anchor="end">Production Progress (0 - 50,000 Sheets)</text>

        <!-- Y Axis Ticks -->
        <text x="70" y="425" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="end">0</text>
        <text x="70" y="340" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="end">1,500</text>
        <text x="70" y="260" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="end">3,000</text>
        <text x="70" y="180" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="end">4,500</text>

        <!-- Conventional Spoilage Line (rises steeply to 4,100 sheets = 8.2%) -->
        <path d="M 80 420 L 680 190" fill="none" stroke="#dc2626" stroke-width="3" stroke-dasharray="4 2"/>
        <text x="660" y="215" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="end">Conventional: 8.2% Spoilage (4,100 Wasted Sheets)</text>

        <!-- FoldMaster-16 Spoilage Line (flatline to 200 sheets = 0.4%) -->
        <path d="M 80 420 L 680 410" fill="none" stroke="#059669" stroke-width="4"/>
        <text x="660" y="395" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="end">FoldMaster-16: 0.4% Spoilage (Only 200 Clean Rejects)</text>

        <rect x="80" y="460" width="600" height="40" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="380" y="485" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">
          ANNUAL RAW PAPER SAVINGS: ₹18.4 LAKHS PRESERVED FOR ASSAM EXCHEQUER
        </text>
      </g>
    </g>

    <!-- Bottom KPI Strip -->
    <g transform="translate(40, 695)">
      <rect width="1520" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <text x="30" y="30" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
        EMPIRICAL BENCHMARK SUMMARY (50,000 CONTINUOUS QUAD-CROWN RUN)
      </text>

      <g transform="translate(30, 45)">
        <rect width="345" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Sustained Operating Speed</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">12,000 Sheets / Hour</text>
      </g>
      <g transform="translate(405, 45)">
        <rect width="345" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Verified Paper Spoilage</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">0.4% (Down from 8.2%)</text>
      </g>
      <g transform="translate(780, 45)">
        <rect width="345" height="65" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0369a1">Job Setup Duration</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">3.5 Min (92% Faster)</text>
      </g>
      <g transform="translate(1155, 45)">
        <rect width="335" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Net Annual Paper Savings</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">₹18.4 Lakhs / Year</text>
      </g>
    </g>
    """
    return wrap_svg(
        title="EMPIRICAL THROUGHPUT SCALING & SPOILAGE REDUCTION TRAJECTORY",
        subtitle="Empirical Validation Run Over 50,000 Continuous Sheets: Conventional Folder vs. FoldMaster-16 Mechatronic Retrofit",
        badge_text="Empirical Validation",
        figure_num="Figure 8",
        content_elements=content
    )

# FIGURE 9: Overall Equipment Effectiveness (OEE) Benchmark Matrix & Gap Analysis
def gen_figure9():
    content = """
    <g transform="translate(40, 150)">
      <!-- 3 OEE Pillars -->
      <!-- Pillar 1: Availability -->
      <g transform="translate(0, 0)">
        <rect width="480" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="480" height="40" rx="10" fill="#0284c7"/>
        <text x="25" y="26" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">
          PILLAR 1: AVAILABILITY RATE
        </text>

        <rect x="25" y="65" width="430" height="130" rx="6" fill="#fff1f2" stroke="#fecdd3"/>
        <text x="45" y="95" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#9f1239">Conventional Availability: 58.4%</text>
        <text x="45" y="120" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">• Manual Setup Time: 45.0 Minutes</text>
        <text x="45" y="142" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">• Unforced Jam Clearing: 38.0 Min / Shift</text>
        <text x="45" y="165" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">• Roller Cleaning Downtime: 22.0 Min / Shift</text>

        <rect x="25" y="215" width="430" height="150" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="45" y="245" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#15803d">FoldMaster-16 Availability: 94.2%</text>
        <text x="45" y="270" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Stepper Recipe Change: 3.5 Minutes</text>
        <text x="45" y="292" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Zero-Stop In-Flight Jam Diverter Gate</text>
        <text x="45" y="315" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Mean Time To Repair (MTTR): &lt; 8.0 Min</text>
        <text x="45" y="340" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#047857">Net Availability Gain: +35.8%</text>

        <rect x="25" y="385" width="430" height="110" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="45" y="415" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Formula Definition:</text>
        <text x="45" y="440" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">A = (Operating Time / Planned Production Time)</text>
        <text x="45" y="465" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#0284c7">445 min run / 472 min available = 94.2%</text>
      </g>

      <!-- Pillar 2: Performance -->
      <g transform="translate(520, 0)">
        <rect width="480" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="480" height="40" rx="10" fill="#059669"/>
        <text x="25" y="26" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">
          PILLAR 2: PERFORMANCE RATE
        </text>

        <rect x="25" y="65" width="430" height="130" rx="6" fill="#fff1f2" stroke="#fecdd3"/>
        <text x="45" y="95" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#9f1239">Conventional Performance: 62.1%</text>
        <text x="45" y="120" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">• Mechanical Speed Cap: 3,200 sh/hr</text>
        <text x="45" y="142" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">• Slow-down on thin 45-54 GSM papers</text>
        <text x="45" y="165" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">• Frequent micro-stops from friction drag</text>

        <rect x="25" y="215" width="430" height="150" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="45" y="245" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#15803d">FoldMaster-16 Performance: 95.8%</text>
        <text x="45" y="270" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Continuous Rated Velocity: 12,000 sh/hr</text>
        <text x="45" y="292" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Optical Encoder synchronization</text>
        <text x="45" y="315" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Zero deceleration on lightweight stocks</text>
        <text x="45" y="340" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#047857">Net Performance Gain: +33.7%</text>

        <rect x="25" y="385" width="430" height="110" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="45" y="415" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Formula Definition:</text>
        <text x="45" y="440" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">P = (Total Sheets Produced / (Run Time * Ideal Speed))</text>
        <text x="45" y="465" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#047857">85,250 actual / 89,000 ideal = 95.8%</text>
      </g>

      <!-- Pillar 3: Quality -->
      <g transform="translate(1040, 0)">
        <rect width="480" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <rect width="480" height="40" rx="10" fill="#d97706"/>
        <text x="25" y="26" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#ffffff">
          PILLAR 3: QUALITY RATE
        </text>

        <rect x="25" y="65" width="430" height="130" rx="6" fill="#fff1f2" stroke="#fecdd3"/>
        <text x="45" y="95" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#9f1239">Conventional Quality: 91.8%</text>
        <text x="45" y="120" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">• Total Paper Spoilage: 8.2%</text>
        <text x="45" y="142" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">• Corner gusseting, dog-ears, scuffs</text>
        <text x="45" y="165" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">• Missing signatures in collation</text>

        <rect x="25" y="215" width="430" height="150" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="45" y="245" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#15803d">FoldMaster-16 Quality: 98.4%</text>
        <text x="45" y="270" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• In-Flight Reject Gate (0.4% waste)</text>
        <text x="45" y="292" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• Micro-perforation spine ventilation</text>
        <text x="45" y="315" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#334155">• +/-0.25 mm fold precision guaranteed</text>
        <text x="45" y="340" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#047857">Net Quality Gain: +6.6%</text>

        <rect x="25" y="385" width="430" height="110" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
        <text x="45" y="415" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Formula Definition:</text>
        <text x="45" y="440" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#475569">Q = (Good Signatures / Total Infeed Sheets)</text>
        <text x="45" y="465" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#d97706">83,880 good / 85,250 infeed = 98.4%</text>
      </g>
    </g>

    <!-- Bottom Master OEE Comparison Strip -->
    <g transform="translate(40, 695)">
      <rect width="1520" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <text x="30" y="30" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
        OVERALL EQUIPMENT EFFECTIVENESS (OEE = AVAILABILITY x PERFORMANCE x QUALITY)
      </text>

      <g transform="translate(30, 45)">
        <rect width="450" height="65" rx="6" fill="#fff1f2" stroke="#fecdd3"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#9f1239">Conventional Folding OEE</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#dc2626">44.2% (Severe Bottleneck)</text>
      </g>
      <g transform="translate(535, 45)">
        <rect width="450" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">FoldMaster-16 Mechatronic OEE</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">88.9% (World-Class Benchmark)</text>
      </g>
      <g transform="translate(1040, 45)">
        <rect width="450" height="65" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0369a1">Net Factory Productivity Gain</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">+44.7% Absolute OEE Leap</text>
      </g>
    </g>
    """
    return wrap_svg(
        title="WORLD-CLASS OEE BENCHMARK MATRIX & GAP ANALYSIS",
        subtitle="Empirical Audit: Availability (94.2%) x Performance (95.8%) x Quality (98.4%) = 88.9% World-Class OEE",
        badge_text="OEE Benchmark",
        figure_num="Figure 9",
        content_elements=content
    )

# FIGURE 10: Shop-Floor Retrofit & Post-Press Cell Layout (Bamunimaidam Press)
def gen_figure10():
    content = """
    <g transform="translate(40, 150)">
      <rect width="1520" height="520" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <path d="M 0 10 Q 0 0 10 0 L 1510 0 Q 1520 0 1520 10 L 1520 40 L 0 40 Z" fill="#0f172a"/>
      <text x="25" y="26" font-family="Helvetica, Arial, sans-serif" font-size="13" font-weight="bold" fill="#38bdf8">
        ASSAM GOVERNMENT PRESS POST-PRESS MODERNIZATION CELL (85 m² INTEGRATED FOOTPRINT)
      </text>

      <!-- Cell Stages in Floor Plan -->
      <!-- Bay 1: Pallet Conditioning -->
      <g transform="translate(30, 65)">
        <rect width="200" height="340" rx="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="100" y="35" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">
          ZONE 1: INFEED
        </text>
        <text x="100" y="60" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Pallet Staging</text>
        <rect x="25" y="80" width="150" height="180" rx="4" fill="#e2e8f0" stroke="#cbd5e1"/>
        <text x="100" y="165" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">
          Forklift Drop
        </text>
        <text x="100" y="185" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">
          Printed Pallets
        </text>
        <rect x="20" y="280" width="160" height="40" rx="4" fill="#f0f9ff" stroke="#7dd3fc"/>
        <text x="100" y="305" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#0369a1" text-anchor="middle">
          RH Buffer Zone
        </text>
      </g>

      <!-- Unit 2: Rotary Vacuum Feeder -->
      <g transform="translate(260, 65)">
        <rect width="220" height="340" rx="6" fill="#f0f9ff" stroke="#7dd3fc" stroke-width="1.5"/>
        <text x="110" y="35" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">
          ZONE 2: VACUUM FEEDER
        </text>
        <text x="110" y="60" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#0284c7" text-anchor="middle">Rotary Suction Head</text>
        <circle cx="110" cy="150" r="50" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
        <text x="110" y="155" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">
          -0.65 bar
        </text>
        <rect x="25" y="225" width="170" height="40" rx="4" fill="#f5f3ff" stroke="#c4b5fd"/>
        <text x="110" y="250" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#6d28d9" text-anchor="middle">
          5.2 kV Ionizer Bar
        </text>
        <rect x="20" y="280" width="180" height="40" rx="4" fill="#f0fdf4" stroke="#86efac"/>
        <text x="110" y="305" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">
          300 kHz Sensor Head
        </text>
      </g>

      <!-- Unit 3: 4-Plate Buckle Section -->
      <g transform="translate(510, 65)">
        <rect width="220" height="340" rx="6" fill="#ecfdf5" stroke="#86efac" stroke-width="1.5"/>
        <text x="110" y="35" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">
          ZONE 3: BUCKLE UNIT
        </text>
        <text x="110" y="60" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#059669" text-anchor="middle">4 Automatic Plates</text>
        <rect x="30" y="90" width="160" height="120" rx="4" fill="#d1fae5" stroke="#6ee7b7"/>
        <text x="110" y="145" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">
          Dual Parallel Folds
        </text>
        <text x="110" y="165" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#047857" text-anchor="middle">
          Stepper Calibrated
        </text>
        <rect x="20" y="280" width="180" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="110" y="305" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">
          +/- 0.01 mm Steppers
        </text>
      </g>

      <!-- Unit 4: Right-Angle Cross-Carrier -->
      <g transform="translate(760, 65)">
        <rect width="220" height="340" rx="6" fill="#fffbeb" stroke="#fde68a" stroke-width="1.5"/>
        <text x="110" y="35" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">
          ZONE 4: 90° CARRIER
        </text>
        <text x="110" y="60" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#b45309" text-anchor="middle">Right-Angle Transfer</text>
        <path d="M 50 120 L 150 120 Q 170 120 170 140 L 170 210" fill="none" stroke="#d97706" stroke-width="6" stroke-linecap="round"/>
        <text x="110" y="250" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">
          Optical Alignment
        </text>
        <rect x="20" y="280" width="180" height="40" rx="4" fill="#ffffff" stroke="#cbd5e1"/>
        <text x="110" y="305" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">
          Spine Micro-Slitting
        </text>
      </g>

      <!-- Unit 5: Mechatronic Knife -->
      <g transform="translate(1010, 65)">
        <rect width="220" height="340" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
        <text x="110" y="35" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">
          ZONE 5: SERVO KNIFE
        </text>
        <text x="110" y="60" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Dual Mechatronic Knives</text>
        <rect x="30" y="90" width="160" height="120" rx="4" fill="#e2e8f0" stroke="#94a3b8"/>
        <text x="110" y="145" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#1e293b" text-anchor="middle">
          16-Page Cross-Fold
        </text>
        <text x="110" y="165" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#475569" text-anchor="middle">
          12,000 sh/hr Servo
        </text>
        <rect x="20" y="280" width="180" height="40" rx="4" fill="#f0fdf4" stroke="#86efac"/>
        <text x="110" y="305" font-family="Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">
          +/- 0.25 mm Accuracy
        </text>
      </g>

      <!-- Unit 6: Shingle Delivery Table -->
      <g transform="translate(1260, 65)">
        <rect width="230" height="340" rx="6" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
        <text x="115" y="35" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">
          ZONE 6: SHINGLE OUTPUT
        </text>
        <text x="115" y="60" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#047857" text-anchor="middle">Automated Batch Stream</text>
        <rect x="25" y="90" width="180" height="120" rx="4" fill="#dcfce7" stroke="#86efac"/>
        <text x="115" y="145" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">
          Collation Table
        </text>
        <text x="115" y="165" font-family="Helvetica, Arial, sans-serif" font-size="10" fill="#15803d" text-anchor="middle">
          Signature Counter
        </text>
        <rect x="20" y="280" width="190" height="40" rx="4" fill="#047857"/>
        <text x="115" y="305" font-family="Helvetica, Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">
          To Binding Hall
        </text>
      </g>

      <!-- Floor Plan Annotation Strip -->
      <rect x="30" y="430" width="1460" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1"/>
      <text x="50" y="465" font-family="Helvetica, Arial, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">
        FACILITY COMPLIANCE: Bamunimaidam Main Press Hall · 85 m² Total Cellular Footprint · ISO 9001:2015 Lean Workflow
      </text>
    </g>

    <!-- Bottom Metric Strip -->
    <g transform="translate(40, 695)">
      <rect width="1520" height="130" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <text x="30" y="30" font-family="Helvetica, Arial, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">
        SHOP-FLOOR RETROFIT &amp; WORKFLOW METRICS
      </text>

      <g transform="translate(30, 45)">
        <rect width="345" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Total Cellular Footprint</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">85 m² Compact Layout</text>
      </g>
      <g transform="translate(405, 45)">
        <rect width="345" height="65" rx="6" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#0369a1">Material Handling Transit</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0284c7">65% Distance Reduced</text>
      </g>
      <g transform="translate(780, 45)">
        <rect width="345" height="65" rx="6" fill="#f8fafc" stroke="#e2e8f0"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#64748b">Operator Staffing Needed</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#0f172a">1 Operator + 1 Helper</text>
      </g>
      <g transform="translate(1155, 45)">
        <rect width="335" height="65" rx="6" fill="#f0fdf4" stroke="#86efac"/>
        <text x="20" y="25" font-family="Helvetica, Arial, sans-serif" font-size="11" fill="#15803d">Safety &amp; Sound Insulation</text>
        <text x="20" y="50" font-family="Helvetica, Arial, sans-serif" font-size="18" font-weight="bold" fill="#047857">&lt; 74 dBA Polycarbonate</text>
      </g>
    </g>
    """
    return wrap_svg(
        title="SHOP-FLOOR RETROFIT & POST-PRESS CELL LAYOUT",
        subtitle="Optimized 85 m² Cellular Plant Blueprint for Assam Government Press (Bamunimaidam, Guwahati)",
        badge_text="Shop Floor Blueprint",
        figure_num="Figure 10",
        content_elements=content
    )

def main():
    generators = {
        'figure1_process_comparison.svg': gen_figure1,
        'figure2_legislative_sla_pipeline.svg': gen_figure2,
        'figure3_suction_feeder_aeration.svg': gen_figure3,
        'figure4_16p_crossfold_kinematics.svg': gen_figure4,
        'figure5_ultrasonic_reject_schematic.svg': gen_figure5,
        'figure6_cyber_physical_architecture.svg': gen_figure6,
        'figure7_caliper_adaptive_recipe.svg': gen_figure7,
        'figure8_throughput_spoilage_chart.svg': gen_figure8,
        'figure9_oee_benchmark_matrix.svg': gen_figure9,
        'figure10_press_floor_layout.svg': gen_figure10,
    }
    
    print("🎨 Generating complete suite of 16:9 widescreen technological architectural infographics...")
    
    for filename, gen_fn in generators.items():
        svg_content = gen_fn()
        svg_path = os.path.join(OUTPUT_DIR, filename)
        with open(svg_path, 'w', encoding='utf-8') as f:
            f.write(svg_content)
        
        # Render high-res PNG (1920x1080 from 1600x900)
        doc = pymupdf.open(stream=svg_content.encode('utf-8'), filetype="svg")
        page = doc[0]
        mat = pymupdf.Matrix(1.2, 1.2) # 1600 * 1.2 = 1920, 900 * 1.2 = 1080
        pix = page.get_pixmap(matrix=mat)
        
        base_name = os.path.splitext(filename)[0]
        png_path = os.path.join(PNG_DIR, f"{base_name}.png")
        jpg_path = os.path.join(OUTPUT_DIR, f"{base_name}.jpg")
        widescreen_png = os.path.join(WIDESCREEN_DIR, f"{base_name}.png")
        
        pix.save(png_path)
        pix.save(jpg_path)
        pix.save(widescreen_png)
        print(f"  ✅ Generated: {filename} -> {png_path} & {jpg_path} ({pix.width}x{pix.height})")

if __name__ == '__main__':
    main()
