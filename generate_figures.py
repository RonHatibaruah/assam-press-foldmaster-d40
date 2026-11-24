import os
import pymupdf as fitz

figures_dir = "/Users/kalyan/Downloads/2026/Nov2026/Folding-Govt-Press-NESFIC-D-40/public/figures"
png_dir = os.path.join(figures_dir, "png")
os.makedirs(png_dir, exist_ok=True)

# 1. Figure 3: Suction Feeder Aeration Physics
fig3_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="100%" style="background:#0f172a; font-family:'Inter', system-ui, sans-serif;">
  <text x="30" y="38" fill="#f8fafc" font-size="18" font-weight="800">FIGURE 3: PNEUMATIC AERATION &amp; TOP-SUCTION DRUM MECHANICS</text>
  <text x="30" y="60" fill="#94a3b8" font-size="11">Eliminating friction drag, static cling, and double-feeding on lightweight 54 GSM Assam Gazette paper</text>

  <!-- Left: Paper Pile and Side Air Blast -->
  <g transform="translate(60, 100)">
    <rect width="380" height="280" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="28" fill="#38bdf8" font-size="12" font-weight="700">Substrate Aeration &amp; Fluffing Nozzles</text>

    <!-- Paper Stack -->
    <rect x="40" y="160" width="220" height="90" rx="2" fill="#e2e8f0" stroke="#cbd5e1"/>
    <text x="150" y="210" fill="#475569" font-size="11" font-weight="700" text-anchor="middle">54 GSM Maplitho Paper Pile</text>
    <text x="150" y="226" fill="#64748b" font-size="9" text-anchor="middle">(Guwahati High Humidity ~78% RH)</text>

    <!-- Side Blower Nozzle 1 -->
    <rect x="10" y="140" width="25" height="15" rx="3" fill="#0d9488"/>
    <path d="M 35 145 C 50 145, 60 140, 75 135" fill="none" stroke="#2dd4bf" stroke-width="2.5" stroke-dasharray="3 2"/>
    <path d="M 35 150 C 50 150, 60 152, 75 155" fill="none" stroke="#2dd4bf" stroke-width="2.5" stroke-dasharray="3 2"/>
    <text x="20" y="130" fill="#2dd4bf" font-size="9" font-weight="700">Air Blower</text>

    <!-- Ionization Anti-Static Discharge Needle -->
    <line x1="150" y1="50" x2="150" y2="100" stroke="#f59e0b" stroke-width="3"/>
    <circle cx="150" cy="105" r="4" fill="#f59e0b"/>
    <text x="150" y="40" fill="#f59e0b" font-size="9" font-weight="700" text-anchor="middle">5.2 kV Ionizer Bar</text>
    <text x="150" y="125" fill="#fcd34d" font-size="8" text-anchor="middle">Neutralizes Static Charges</text>

    <!-- Top floating sheet -->
    <path d="M 40 145 Q 150 135 260 142" fill="none" stroke="#38bdf8" stroke-width="3"/>
    <text x="270" y="142" fill="#38bdf8" font-size="9" font-weight="700">Aerate &amp; Float Top Sheet</text>
  </g>

  <!-- Right: Rotating Vacuum Suction Drum -->
  <g transform="translate(480, 100)">
    <rect width="420" height="280" rx="8" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="28" fill="#38bdf8" font-size="12" font-weight="700">Pulsating Rotary Vacuum Drum Head</text>

    <!-- Drum Outer Body -->
    <circle cx="180" cy="150" r="70" fill="#0f172a" stroke="#0d9488" stroke-width="4"/>
    <circle cx="180" cy="150" r="30" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="180" y="154" fill="#cbd5e1" font-size="10" font-mono text-anchor="middle">ROTATION</text>

    <!-- Suction Valve Zone -->
    <path d="M 180 150 L 130 100 A 70 70 0 0 1 230 100 Z" fill="#0284c7" opacity="0.4"/>
    <text x="180" y="115" fill="#38bdf8" font-size="10" font-weight="800" text-anchor="middle">-64.2 kPa</text>
    <text x="180" y="127" fill="#bae6fd" font-size="8" text-anchor="middle">Vacuum Port</text>

    <!-- Paper Sheet Picked Up -->
    <path d="M 60 190 Q 130 90 290 85" fill="none" stroke="#f8fafc" stroke-width="4"/>
    <text x="295" y="80" fill="#f8fafc" font-size="10" font-weight="700">To Buckle Section #1</text>
    <text x="295" y="94" fill="#34d399" font-size="9">(Zero Wheel Drag Marks)</text>

    <rect x="20" y="235" width="380" height="30" rx="4" fill="#0f172a"/>
    <text x="30" y="254" fill="#2dd4bf" font-size="10" font-weight="600">RESULT: Single-sheet separation at 10,000 sh/hr without double-sheet feed.</text>
  </g>

  <!-- Technical Spec Footer -->
  <g transform="translate(60, 400)">
    <rect width="840" height="50" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="20" y="22" fill="#38bdf8" font-size="10" font-mono font-bold">PHYSICAL SPECIFICATIONS:</text>
    <text x="20" y="38" fill="#94a3b8" font-size="9">
      • Vacuum Pump Capacity: 60 m³/hr | • Air Blast Pressure: 1.5 - 2.5 bar | • Substrate Grammage: 50 - 130 GSM | • Pickup Tolerance: ±0.15 mm
    </text>
  </g>
</svg>"""

# 2. Figure 4: 16-Page Cross-Fold Kinematics
fig4_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="100%" style="background:#0f172a; font-family:'Inter', system-ui, sans-serif;">
  <text x="30" y="38" fill="#f8fafc" font-size="18" font-weight="800">FIGURE 4: KINEMATIC 16-PAGE CROSS-FOLD &amp; IMPOSITION SEQUENCE</text>
  <text x="30" y="60" fill="#94a3b8" font-size="11">Standard right-angle signature imposition for Assam Budget Books, Gazettes, and Legislative Assembly Acts</text>

  <!-- Step 0: Flat Sheet -->
  <g transform="translate(40, 95)">
    <rect width="190" height="310" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="15" y="26" fill="#38bdf8" font-size="11" font-weight="700">Step 0: Flat Imposed</text>
    <text x="15" y="40" fill="#94a3b8" font-size="9">Demy Sheet (18" x 23")</text>

    <!-- 16 Page Grid -->
    <g transform="translate(15, 55)">
      <rect width="160" height="210" fill="#fef3c7" stroke="#d97706" rx="3"/>
      <!-- Grid lines -->
      <line x1="0" y1="52" x2="160" y2="52" stroke="#b45309" stroke-width="0.8"/>
      <line x1="0" y1="105" x2="160" y2="105" stroke="#dc2626" stroke-width="2" stroke-dasharray="3 2"/>
      <line x1="0" y1="157" x2="160" y2="157" stroke="#b45309" stroke-width="0.8"/>
      
      <line x1="40" y1="0" x2="40" y2="210" stroke="#b45309" stroke-width="0.8"/>
      <line x1="80" y1="0" x2="80" y2="210" stroke="#2563eb" stroke-width="2" stroke-dasharray="3 2"/>
      <line x1="120" y1="0" x2="120" y2="210" stroke="#b45309" stroke-width="0.8"/>

      <text x="80" y="100" fill="#dc2626" font-size="8" font-weight="700" text-anchor="middle">Crease 1 (Buckle)</text>
      <text x="75" y="40" fill="#2563eb" font-size="7" font-weight="700" transform="rotate(-90 75 40)">Knife 1</text>
      <text x="80" y="195" fill="#78350f" font-size="9" font-weight="700" text-anchor="middle">16 Pages Imposed</text>
    </g>

    <text x="15" y="290" fill="#cbd5e1" font-size="9 font-mono">1 Ply · 0.084 mm</text>
  </g>

  <!-- Step 1: Parallel Fold -->
  <g transform="translate(265, 95)">
    <rect width="190" height="310" rx="8" fill="#1e293b" stroke="#0d9488" stroke-width="1.5"/>
    <text x="15" y="26" fill="#2dd4bf" font-size="11" font-weight="700">Step 1: Buckle Fold 1</text>
    <text x="15" y="40" fill="#94a3b8" font-size="9">Halved into 8-page folio</text>

    <!-- 8 page folio folded representation -->
    <g transform="translate(15, 80)">
      <rect width="160" height="105" fill="#fde68a" stroke="#d97706" rx="3"/>
      <line x1="80" y1="0" x2="80" y2="105" stroke="#2563eb" stroke-width="2" stroke-dasharray="3 2"/>
      <text x="80" y="55" fill="#1e40af" font-size="8" font-weight="700" text-anchor="middle">Cross Knife Line #1</text>
      <text x="80" y="90" fill="#78350f" font-size="9" font-weight="700" text-anchor="middle">Pages 1-8 / 9-16</text>
    </g>

    <text x="15" y="240" fill="#a7f3d0" font-size="10" font-weight="600">Stop Gauge: 285 mm</text>
    <text x="15" y="258" fill="#94a3b8" font-size="9">Roller gap set to 2 plies</text>
    <text x="15" y="290" fill="#cbd5e1" font-size="9 font-mono">2 Plies · 0.168 mm</text>
  </g>

  <!-- Step 2: 1st Cross-Knife -->
  <g transform="translate(490, 95)">
    <rect width="190" height="310" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
    <text x="15" y="26" fill="#60a5fa" font-size="11" font-weight="700">Step 2: Cross Knife 1</text>
    <text x="15" y="40" fill="#94a3b8" font-size="9">90° Right Angle Descent</text>

    <g transform="translate(40, 70)">
      <rect width="110" height="135" fill="#fde68a" stroke="#2563eb" stroke-width="2" rx="3"/>
      <line x1="0" y1="68" x2="110" y2="68" stroke="#10b981" stroke-width="2" stroke-dasharray="3 2"/>
      <text x="55" y="62" fill="#047857" font-size="8" font-weight="700" text-anchor="middle">Knife 2 Line</text>
      <text x="55" y="115" fill="#1e3a8a" font-size="9" font-weight="700" text-anchor="middle">Quarter Signature</text>
    </g>

    <text x="15" y="240" fill="#93c5fd" font-size="10" font-weight="600">Knife Speed: 150 strokes/m</text>
    <text x="15" y="258" fill="#94a3b8" font-size="9">Anti-swell perforation</text>
    <text x="15" y="290" fill="#cbd5e1" font-size="9 font-mono">4 Plies · 0.336 mm</text>
  </g>

  <!-- Step 3: Finished 16-Page Signature -->
  <g transform="translate(715, 95)">
    <rect width="205" height="310" rx="8" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
    <text x="15" y="26" fill="#6ee7b7" font-size="11" font-weight="800">Step 3: Finished Signature</text>
    <text x="15" y="40" fill="#a7f3d0" font-size="9">16-Page Closed Book Block</text>

    <g transform="translate(40, 65)">
      <!-- Book signature with spine at left -->
      <rect width="125" height="145" fill="#ffffff" stroke="#10b981" stroke-width="2" rx="2"/>
      <line x1="8" y1="0" x2="8" y2="145" stroke="#047857" stroke-width="6"/>
      <text x="65" y="30" fill="#065f46" font-size="8" font-weight="800">ASSAM GOVT PRESS</text>
      <text x="65" y="65" fill="#0f172a" font-size="16" font-weight="900">16P</text>
      <text x="65" y="80" fill="#475569" font-size="8">SIGNATURE</text>
      <text x="65" y="115" fill="#047857" font-size="8" font-weight="700">Reg: ±0.2mm OK</text>
    </g>

    <text x="15" y="240" fill="#6ee7b7" font-size="10" font-weight="700">Spine Compressed</text>
    <text x="15" y="258" fill="#a7f3d0" font-size="9">Ready for Gathering &amp; Binding</text>
    <text x="15" y="290" fill="#ffffff" font-size="9" font-weight="700 font-mono">16 Plies · 1.34 mm Final</text>
  </g>
</svg>"""

# 3. Figure 6: Cyber-Physical Architecture Diagram
fig6_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="100%" style="background:#0f172a; font-family:'Inter', system-ui, sans-serif;">
  <text x="30" y="38" fill="#f8fafc" font-size="18" font-weight="800">FIGURE 6: 4-TIER CYBER-PHYSICAL SYSTEM &amp; TELEMETRY ARCHITECTURE</text>
  <text x="30" y="60" fill="#94a3b8" font-size="11">Air-gapped industrial automation, deterministic PLC motion control, and local edge dispatch</text>

  <!-- 4 Horizontal Tiers -->
  <!-- Tier 1: Mechanical -->
  <g transform="translate(50, 85)">
    <rect width="860" height="75" rx="6" fill="#1e293b" stroke="#64748b"/>
    <rect x="0" y="0" width="160" height="22" rx="4" fill="#334155"/>
    <text x="10" y="15" fill="#cbd5e1" font-size="9" font-weight="700">TIER 1: PHYSICAL HARDWARE</text>
    <text x="20" y="45" fill="#f8fafc" font-size="11" font-weight="600">Rotary Suction Feeder Head · 4-Plate Buckle Unit · Dual Cross-Fold Knives · Air Compressor</text>
    <text x="20" y="62" fill="#94a3b8" font-size="10">High-torque brushless DC motors · Pepperl+Fuchs Ultrasonic Sensor · Sick Optical Gates</text>
  </g>

  <!-- Tier 2: Real-time PLC -->
  <g transform="translate(50, 175)">
    <rect width="860" height="75" rx="6" fill="#134e4a" stroke="#0d9488"/>
    <rect x="0" y="0" width="200" height="22" rx="4" fill="#0f766e"/>
    <text x="10" y="15" fill="#ccfbf1" font-size="9" font-weight="700">TIER 2: DETERMINISTIC PLC / MOTION</text>
    <text x="20" y="45" fill="#f0fdfa" font-size="11" font-weight="600">Industrial PLC (Beckhoff TwinCAT / Siemens S7-1200) · 1 kHz Fast Control Loop</text>
    <text x="20" y="62" fill="#a7f3d0" font-size="10">24V DC Digital I/O · 40ms Solenoid Valve Trigger · Linear Stepper Actuators · E-Stop Safety Relay</text>
  </g>

  <!-- Tier 3: Edge IoT Gateway -->
  <g transform="translate(50, 265)">
    <rect width="860" height="75" rx="6" fill="#1e1b4b" stroke="#6366f1"/>
    <rect x="0" y="0" width="180" height="22" rx="4" fill="#3730a3"/>
    <text x="10" y="15" fill="#e0e7ff" font-size="9" font-weight="700">TIER 3: IOT EDGE GATEWAY</text>
    <text x="20" y="45" fill="#ffffff" font-size="11" font-weight="600">Industrial Edge Controller (Raspberry Pi CM4) · RS-485 Modbus RTU @ 50 Hz</text>
    <text x="20" y="62" fill="#c7d2fe" font-size="10">Python Daemon · Real-time JSON Telemetry Cache · Anomaly Detection · Local MQTT Broker</text>
  </g>

  <!-- Tier 4: Local Application & Dispatch -->
  <g transform="translate(50, 355)">
    <rect width="860" height="75" rx="6" fill="#042f2e" stroke="#10b981"/>
    <rect x="0" y="0" width="210" height="22" rx="4" fill="#065f46"/>
    <text x="10" y="15" fill="#d1fae5" font-size="9" font-weight="700">TIER 4: AIR-GAPPED WEB APPLICATION</text>
    <text x="20" y="45" fill="#ecfdf5" font-size="11" font-weight="600">FoldMaster Press OS (React 18 + Vite + Tailwind HMI) · Node.js Local Orchestrator</text>
    <text x="20" y="62" fill="#6ee7b7" font-size="10">Air-Gapped Operation · Zero Content Archival · Cryptographic PIN RBAC · Publication SLA Tracker</text>
  </g>

  <!-- Side Security Callout -->
  <rect x="740" y="30" width="170" height="40" rx="4" fill="#7f1d1d" stroke="#ef4444"/>
  <text x="825" y="48" fill="#fee2e2" font-size="9" font-weight="800" text-anchor="middle">100% AIR-GAPPED</text>
  <text x="825" y="62" fill="#fecaca" font-size="8" text-anchor="middle">Zero Internet Required</text>
</svg>"""

# 4. Figure 10: Shop Floor Layout at Bamunimaidam
fig10_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 480" width="100%" height="100%" style="background:#0f172a; font-family:'Inter', system-ui, sans-serif;">
  <text x="30" y="38" fill="#f8fafc" font-size="18" font-weight="800">FIGURE 10: ASSAM GOVERNMENT PRESS (BAMUNIMAIDAM, GUWAHATI) PILOT LAYOUT</text>
  <text x="30" y="60" fill="#94a3b8" font-size="11">Shop floor mechanical integration, electrical drops, safety clearances, and production material flow</text>

  <!-- Factory Floor Boundary -->
  <rect x="50" y="90" width="860" height="340" rx="10" fill="#1e293b" stroke="#475569" stroke-width="2"/>
  
  <!-- Section 1: Sheetfed Offset Press Hall (Left) -->
  <g transform="translate(70, 115)">
    <rect width="230" height="290" rx="6" fill="#0f172a" stroke="#64748b" stroke-dasharray="3 2"/>
    <text x="115" y="30" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">OFFSET PRINTING HALL</text>
    <rect x="30" y="60" width="170" height="80" rx="4" fill="#334155" stroke="#64748b"/>
    <text x="115" y="105" fill="#f1f5f9" font-size="10" font-weight="600" text-anchor="middle">Sheetfed Offset Press #1</text>
    <rect x="30" y="160" width="170" height="80" rx="4" fill="#334155" stroke="#64748b"/>
    <text x="115" y="205" fill="#f1f5f9" font-size="10" font-weight="600" text-anchor="middle">Sheetfed Offset Press #2</text>
    
    <!-- Printed Pallet Output -->
    <rect x="180" y="250" width="40" height="30" fill="#f59e0b" opacity="0.6"/>
    <text x="200" y="270" fill="#ffffff" font-size="8" text-anchor="middle">Pallets</text>
  </g>

  <!-- Material Transfer Arrow 1 -->
  <path d="M 290 265 L 340 265" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="4 2"/>

  <!-- Section 2: Proposed FoldMaster Installation Bay (Center) -->
  <g transform="translate(350, 115)">
    <rect width="280" height="290" rx="6" fill="#042f2e" stroke="#10b981" stroke-width="2"/>
    <text x="140" y="30" fill="#34d399" font-size="12" font-weight="800" text-anchor="middle">PROPOSED FOLDMASTER BAY</text>
    <text x="140" y="46" fill="#a7f3d0" font-size="9" text-anchor="middle">(Footprint: 3.8m x 1.6m)</text>

    <!-- FoldMaster Machine Outline -->
    <rect x="30" y="70" width="220" height="150" rx="6" fill="#0f766e" stroke="#2dd4bf" stroke-width="2"/>
    <text x="140" y="110" fill="#ffffff" font-size="12" font-weight="800" text-anchor="middle">FoldMaster-16</text>
    <text x="140" y="128" fill="#ccfbf1" font-size="9" text-anchor="middle">Automated Suction Cross-Folder</text>
    <text x="140" y="145" fill="#fef08a" font-size="9" font-weight="700" text-anchor="middle">8,850 sheets/hr</text>

    <!-- Machine Utility Connections -->
    <circle cx="50" cy="190" r="8" fill="#e11d48"/>
    <text x="65" y="193" fill="#fda4af" font-size="8">415V 3-Phase</text>
    
    <circle cx="150" cy="190" r="8" fill="#0284c7"/>
    <text x="165" y="193" fill="#7dd3fc" font-size="8">6-Bar Pneumatic</text>

    <!-- Operator Access Zone -->
    <rect x="20" y="240" width="240" height="30" rx="4" fill="#0f172a" stroke="#10b981" stroke-dasharray="2 2"/>
    <text x="140" y="260" fill="#6ee7b7" font-size="9" text-anchor="middle">Operator Ergonomic Safety Zone</text>
  </g>

  <!-- Material Transfer Arrow 2 -->
  <path d="M 620 200 L 670 200" fill="none" stroke="#10b981" stroke-width="3" stroke-dasharray="4 2"/>

  <!-- Section 3: Binding & Stitching Section (Right) -->
  <g transform="translate(680, 115)">
    <rect width="210" height="290" rx="6" fill="#0f172a" stroke="#64748b" stroke-dasharray="3 2"/>
    <text x="105" y="30" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">POST-PRESS BINDERY</text>

    <rect x="25" y="70" width="160" height="70" rx="4" fill="#334155" stroke="#64748b"/>
    <text x="105" y="110" fill="#f1f5f9" font-size="10" font-weight="600" text-anchor="middle">Gathering &amp; Collator</text>

    <rect x="25" y="160" width="160" height="70" rx="4" fill="#334155" stroke="#64748b"/>
    <text x="105" y="200" fill="#f1f5f9" font-size="10" font-weight="600" text-anchor="middle">Perfect Binding &amp; Stitching</text>

    <text x="105" y="265" fill="#34d399" font-size="9" font-weight="700" text-anchor="middle">To Dispatch / Gazette Vault</text>
  </g>
</svg>"""

# Save SVGs
svg_files = {
    "figure3_suction_feeder_aeration.svg": fig3_svg,
    "figure4_16p_crossfold_kinematics.svg": fig4_svg,
    "figure6_cyber_physical_architecture.svg": fig6_svg,
    "figure10_press_floor_layout.svg": fig10_svg,
}

for fname, content in svg_files.items():
    fpath = os.path.join(figures_dir, fname)
    with open(fpath, "w") as f:
        f.write(content)
    print("Saved:", fname)

# Convert all SVGs in figures_dir to PNG in png_dir
for item in os.listdir(figures_dir):
    if item.endswith(".svg"):
        svg_p = os.path.join(figures_dir, item)
        png_name = item.replace(".svg", ".png")
        png_p = os.path.join(png_dir, png_name)
        try:
            doc = fitz.open(svg_p)
            pix = doc[0].get_pixmap(dpi=150)
            pix.save(png_p)
            print(f"Rendered {item} -> {png_name} ({pix.width}x{pix.height})")
        except Exception as e:
            print(f"Error rendering {item}: {e}")
