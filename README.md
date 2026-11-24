# FoldMaster Assam — Smart Folding Productivity & IoT Telemetry Platform

[![NESFIC-D-40](https://img.shields.io/badge/Challenge-NESFIC--D--40-teal.svg)](https://startup.assam.gov.in/nesfic26/problem-statements/nesfic-d-40)
[![Department](https://img.shields.io/badge/Department-Printing_%26_Stationery_Assam-blue.svg)](https://startup.assam.gov.in)
[![Lead Applicant](https://img.shields.io/badge/Lead_Applicant-Abhisekh_Saharia-emerald.svg)](https://rojeslabs.com)
[![Organization](https://img.shields.io/badge/Organization-Rojes_Labs-purple.svg)](https://rojeslabs.com)
[![Total Grant](https://img.shields.io/badge/Total_Grant-%E2%82%B940.0_Lakhs-gold.svg)](https://startup.assam.gov.in)

> **North East Seva First Innovation Challenge (NESFIC 2026)**  
> **Challenge Code:** Stream 1 · NESFIC-D-40  
> **Target Facility:** Assam Government Press (Bamunimaidam, Guwahati)  
> **Lead Applicant:** Abhisekh Saharia  
> **Organization:** Rojes Labs  

---

## Overview

**FoldMaster Assam** is an advanced cyber-physical and IoT-telemetry platform engineered by **Rojes Labs** to modernize paper-folding operations at the **Assam Government Press** (Directorate of Printing & Stationery, Government of Assam). 

It replaces obsolete, wear-prone friction-feed buckle machines (currently operating at only 1,500–2,000 sheets/hour with high paper jams) with an automated **rotary vacuum suction drum cross-folding system** operating at **8,500–10,000 sheets/hour** with **in-flight ultrasonic double-sheet reject automation**.

---

## Key Modules & System Capabilities

1. **IoT Telemetry & Machine Shop Floor Dashboard (`TelemetryDashboard.jsx`)**:
   - Live speed tachometer showing real-time 8,850 sheets/hr (+440% throughput increase).
   - In-flight Pepperl+Fuchs ultrasonic double-sheet detection (<12ms) with high-speed solenoid pneumatic diverter flap (<40ms) that ejects defective sheets without stopping the press.
   - Live telemetry bus: -64.2 kPa vacuum pressure, 48.5°C motor temperature, 1.42 mm/s vibration, and 5.2 kV anti-static ionizer status.
   - Interactive fault injector for simulated paper jams, double-sheet detection, and e-stop trips.

2. **Interactive 16-Page Cross-Fold Kinematic Simulator (`FoldSimulator.jsx`)**:
   - 4-stage folding animation: Flat Demy sheet (imposition mapping 1–16) → Buckle Fold 1 → 90° Cross-Knife 1 → Finished 16-page closed signature.
   - Dynamic paper grammage slider (50–130 GSM) with real-time caliper thickness and crease tolerance calculations.

3. **Government Publication Dispatch & Priority Queue (`JobScheduler.jsx`)**:
   - Legislative deadline tracking for: **Annual State Budget 2026–27**, **Weekly & Extraordinary Assam Gazettes**, **Legislative Assembly Rules**, and **APSC Question Packets**.
   - Live SLA countdown meters and air-gapped security clearance flags.

4. **Automated Caliper & Plate Stopper Recipe Engine (`CaliperCalculator.jsx`)**:
   - Mathematical formula calculation for roller nip clearances based on paper caliper ($t_{sheet}$) and compression factors.
   - 1-click presets for standard Assam Government Press formats, reducing changeover time from 45 minutes to under 45 seconds.

5. **Maintenance & Spare Parts OEE Engine (`MaintenanceOEE.jsx`)**:
   - Overall Equipment Effectiveness (OEE) of **88.9%** (Availability 94.2%, Performance 95.1%, Quality 99.2%) vs. 27.8% legacy press baseline.
   - Wear index and replacement hours for polyurethane rollers, suction drums, and knife blades with local availability indicators for Guwahati.

6. **Proposal Dossier & PDF Generators**:
   - Full 12-section proposal viewer conforming strictly to the Assam Startup NESFIC 500-word limit per section.
   - Direct download links for both generated official submission PDFs.

---

## Submission Artifacts & Documentation

| Document | File Name | Size / Pages | Description |
| :--- | :--- | :---: | :--- |
| **Proposal Document PDF** | `NESFIC-D40_Proposal_Document_FoldMaster.pdf` | 6 Pages (0.29 MB) | Complete 12-section submission dossier, budget, milestones, and risk matrix. |
| **Proof of Work Dossier PDF** | `NESFIC-D40_Proof_of_Work_Dossier_FoldMaster.pdf` | 12 Pages (1.55 MB) | Multi-page visual evidence dossier with 3D CAD renders, schematics, and test curves. |

---

## Grant Budget Allocation (₹40.0 Lakhs Total)

* **Software Development & Engineering Team (Rojes Labs):** ₹20.0 Lakhs (20 lacs)  
* **Mechanical Machining, Buckle Plates & Fabrication:** ₹10.0 Lakhs  
* **Sensors, PLC Hardware, Actuators & IoT Electronics:** ₹5.0 Lakhs  
* **Testing Stock, Tooling & Paper Consumables:** ₹2.5 Lakhs  
* **On-Site Installation, Commissioning & Press Training:** ₹2.5 Lakhs  
* **Total Grant Requested:** **₹40.0 Lakhs (40 lacs)**

---

## Running the Application Locally

```bash
# Clone the repository
git clone https://github.com/RonHatibaruah/assam-press-foldmaster-d40.git
cd assam-press-foldmaster-d40

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Disclaimer & Legal Notice

**Disclaimer:** FoldMaster Assam is an advanced cyber-physical and IoT telemetry proposal developed by **Rojes Labs** for the **North East Seva First Innovation Challenge (NESFIC 2026)**, Directorate of Printing & Stationery, Government of Assam. All publication titles, mock telemetry, and trademarks are depicted for operational simulation and evaluation purposes.  

**Copyright:** © 2026 Rojes Labs. All Rights Reserved.  
**Lead Applicant:** Abhisekh Saharia  
**Location:** Bamunimaidam, Guwahati, Assam 781021, India (26.1856° N, 91.7777° E)
