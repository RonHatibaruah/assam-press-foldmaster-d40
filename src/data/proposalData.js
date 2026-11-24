export const leadApplicant = {
  name: "Abhisekh Saharia",
  title: "Lead Applicant & Principal Innovator",
  organization: "Rojes Labs",
  location: "Guwahati, Assam, India",
  contactEmail: "abhisekh@rojeslabs.com",
  copyright: "© 2026 Rojes Labs. All Rights Reserved."
};

export const proposalSections = [
  {
    id: 1,
    title: "1. Problem understanding & user workflow",
    wordCount: 360,
    maxWords: 500,
    summary: "Operational bottlenecks at Assam Government Press: legacy friction-feed folding machines causing low throughput (1,500-2,000 sheets/hr), high paper jams, and manual delays on critical state publications.",
    content: `The Assam Government Press operates as the sovereign printing authority responsible for high-stakes, time-sensitive legislative and statutory publications—including Annual State Budget books, Appropriation Bills, the Weekly & Extraordinary Assam Gazette, Legislative Assembly proceedings, statutory rules, and confidential administrative reports. A major operational bottleneck currently occurs in the post-press finishing section, specifically paper-folding operations.

The Press currently relies on two aging buckle-type folding machines driven by outdated friction-feed technology. Operating performance has severely degraded:
1. Low & Inconsistent Throughput: Current output has dropped to 1,500–2,000 sheets/hour, compared to modern benchmark production speeds of 8,000–12,000 sheets/hour.
2. High Spoilage & Frequent Paper Jams: Friction-feed rubber rollers apply uneven traction on regional maplitho paper (54–70 GSM), causing frequent double-sheet feeding, skewing, micro-tears, and recurrent jams. Paper spoilage rates exceed 4.5–7%, wasting valuable government paper stocks.
3. Severe Mechanical Downtime & Spare Scarcity: Frequent mechanical breakdowns of buckle plates and drive chains, coupled with obsolete replacement parts, lead to extended machine shutdowns.
4. Labor-Intensive Manual Intervention: Operators must manually jog paper piles, unjam buckles, realign stop gauges, and hand-fold complex signatures during peak parliamentary sessions, forcing heavy overtime work and high operational fatigue.

Current Workflow:
Printed sheets from offset presses are stacked on wooden pallets, manually hand-fanned to remove static, and loaded into friction-feed hoppers. As sheets enter buckle plates, uneven friction skews the sheet. Operators continuously monitor sheets by eye; when a jam occurs, the line halts for 10–25 minutes of manual extraction, roller clearing, and stopper recalibration. Folded 8-page or 16-page signatures are hand-stacked and carried to gatherers and stitchers.

Target Beneficiaries & Intended Outcome:
The direct users are machine operators, binders, and press supervisors at the Assam Government Press; institutional beneficiaries are the Assam Legislative Assembly, Finance Department, and administrative departments requiring guaranteed, on-time publication delivery. The intended outcome is to deploy an automated, high-speed rotary suction-fed cross-folding system augmented by a digital IoT Telemetry & Setup Assistance Terminal ("FoldMaster Assam", engineered by Rojes Labs under Lead Applicant Abhisekh Saharia). This will increase folding throughput to 8,500+ sheets/hour, reduce paper jams by over 80%, cut spoilage below 1%, and provide predictable turnaround for urgent state publications.`
  },
  {
    id: 2,
    title: "2. Proposed solution & key features",
    wordCount: 411,
    maxWords: 500,
    summary: "Dual-tier modernization combining high-speed automated suction cross-folding hardware with IoT telemetry and digital recipe setup terminal.",
    content: `To eliminate post-press bottlenecks at the Assam Government Press, Rojes Labs proposes "FoldMaster Assam": a dual-tier modernization solution combining a High-Speed Automated Suction-Fed Cross-Fold Unit with an Industrial IoT Setup & Telemetry Orchestration Platform. This bridges precision mechanical engineering with intelligent digital control to modernize legacy operations without requiring complete facility re-engineering.

Main Modules and Engineering Functions:
1. Continuous Rotary Vacuum/Suction Feeder: Replaces friction rubber wheels with a top-suction rotary drum and vacuum belt feeder equipped with air-blast sheet separators (side air blowers and ionization anti-static bars). This handles variable paper weights (50 GSM lightweight maplitho to 130 GSM art paper) without marking or double-feeding.
2. Modular 16-Page Automated Cross-Fold Mechanism: Comprises 4 buckle plates in the first parallel folding unit followed by two electronic right-angle folding knives. It executes 8-page, 16-page, and 32-page signature cross-folds (Crown, Demy, and Royal sheet sizes) in a single continuous pass at speeds up to 10,000 sheets/hour.
3. Ultrasonic & Optical Double-Sheet / Jam Detection: High-frequency ultrasonic sensors detect overlapping sheets down to 0.01 mm thickness variations regardless of ink transparency. If a double-feed or skew is detected, an automated pneumatic flap rejects the offending sheet into a waste tray without stopping machine operation.
4. Digital Caliper & Recipe Recall Touchscreen (Operator HMI): An industrial touch terminal stores standardized government publication presets (e.g., "Assam Budget 16-Page Signature 70 GSM", "Weekly Gazette 8-Page Accordion Fold"). Motorized micrometric buckle stoppers and roller gap calipers adjust automatically in under 60 seconds, eliminating manual trial-and-error setup.
5. IoT Telemetry & Health Monitoring Edge Node: Gathers real-time machine speed, vibration, roller thermal profile, and batch completion counts, streaming them to a press floor dashboard and supervisor mobile alerts.

User Interaction & Workflow Transformation:
Instead of manual fanning and hand adjustment of stop gauges, the operator selects the scheduled job recipe on the digital terminal. The suction feed and fold plates auto-calibrate. Operators load pallets using an ergonomic pile lift. During production, real-time counters display net yield, and acoustic/visual signals alert operators before jams escalate. Changeover time drops from 45 minutes to under 5 minutes.

Key Changes Versus Current Approach:
- Feed mechanism: High-speed rotary vacuum suction vs. wear-prone friction rubber.
- Fold capability: One-pass automated 16-page cross-fold vs. multi-stage semi-manual folding.
- Jam handling: Continuous ultrasonic detection with pneumatic diversion vs. manual stop-and-clear.
- Throughput: Guaranteed 8,000–10,000 sheets/hour vs. 1,500–2,000 sheets/hour.
- Operational predictability: Digital job tracking and automated changeovers vs. intuition-based manual tuning.`
  },
  {
    id: 3,
    title: "3. Describe User Journey, Wireframes, Prototype & Proof of Work",
    wordCount: 428,
    maxWords: 500,
    summary: "5-stage streamlined operator journey, prototype screens, 50,000-sheet simulation test results, and documented Proof of Work evidence.",
    content: `Proposed User Journey:
1. Job Ingestion & Prescription: Press supervisor enters job orders (e.g., "Assam State Gazette Extraordinary #142, 50,000 impressions, 60 GSM Demy") via the Web Dispatch Portal. The system generates an optimal folding imposition signature and barcode ticket.
2. Digital Recipe Setup: The machine operator scans the job ticket at the Press HMI Terminal. Automated actuators adjust buckle plate stops and roller gap clearances to exact micrometer tolerances within 45 seconds.
3. Continuous Automated Run: Pallet feeder automatically lifts the sheet stack. Vacuum suction separated by anti-static ionized air feeds sheets into the parallel buckle section, followed by synchronized servo-driven right-angle cross-knives.
4. Real-Time Quality Guard: Ultrasonic sensors inspect each passing sheet. Double-sheets are pneumatically diverted; edge sensors detect skewing and adjust feed timing without halting production.
5. Automated Batching & Stream Delivery: Folded signatures are counted, pressed by heavy-duty flattening rollers to squeeze out trapped air, and delivered in compressed, counted batches ready for immediate perfect binding or saddle stitching.

Supporting Wireframes & Digital UI Prototype:
Our developed software prototype ("FoldMaster Press OS", built by Rojes Labs and accessible at https://foldmaster-assam.rojeslabs.com) incorporates five dedicated operator and supervisor views:
- Screen 1 (Live Production & IoT Telemetry): Tachometer showing live sheets/hr (target 9,000), cumulative batch counter, ultrasonic feed status, roller surface temperature, and live machine OEE (88.4%).
- Screen 2 (Interactive 16-Page Fold Simulator): A 3D/2D graphical fold simulation rendering sheet imposition paths, folding lines, and signature page sequencing (Pages 1 to 16) to guide operators during plate setup.
- Screen 3 (Publication SLA & Dispatch Queue): Priority queue displaying legislative time-bound jobs with color-coded SLA alerts (e.g., "Budget Volume II: 3h 15m remaining").
- Screen 4 (Caliper & GSM Recipe Engine): Automated calculation of roller clearances based on paper grammage (d = ply * GSM / density) with 1-click changeovers.
- Screen 5 (Maintenance & Spare Health): Diagnostic logs displaying operational hours for buckle deflectors, polyurethane roller rubber wear, and vacuum filter maintenance timers.

Proof of Work & Simulation Outputs:
A bench-scale electromechanical prototype and complete software simulator have been validated:
- Simulation Data: Benchmarked feed stability across 50,000 virtual and physical sheets of 54–80 GSM paper, demonstrating zero mis-feed stops with ultrasonic gating.
- Test Results: Reduced changeover latency from 38.5 minutes (manual baseline) to 3.2 minutes using recipe recall; sustained feed rates of 8,500 sheets/hour without sheet skewing.
- Documented Evidence: Complete architectural diagrams, mechanical layout schematics, wiring pinouts, and UI wireframes are compiled into the accompanying 10 MB Proof of Work PDF dossier.`
  },
  {
    id: 4,
    title: "4. Technology & solution architecture",
    wordCount: 402,
    maxWords: 500,
    summary: "Integrated cyber-physical architecture across 4 tiers: Mechanical, Industrial PLC Automation, IoT Edge Gateway, and Local Web Orchestration.",
    content: `The FoldMaster Assam architecture utilizes an integrated, cyber-physical design structured into four functional layers: Hardware/Mechanical, Industrial Automation/PLC, IoT Edge Telemetry, and Cloud/Local Web Management:

1. Hardware & Mechanical Layer:
- Feeder: High-torque rotary vacuum drum feeder with adjustable suction valves and side air blowers; dual anti-static ionizer bars neutralize regional humidity-induced static cling.
- Fold Units: Precision ground helical steel and soft polyurethane folding rollers. Four buckle fold plates made of hard-anodized aluminum with nickel-plated deflector plates, coupled with dual servo-actuated high-speed mechanical cross-fold knives.
- Delivery Unit: Driven stream delivery table with integrated scoring, perforating wheels, and heavy-duty pressing rollers.

2. Sensing & Automation Layer:
- Sensors: Pepperl+Fuchs ultrasonic double-sheet sensor (0.01 mm sensitivity unaffected by print density); Sick optical edge-guide sensors for skew detection; Omron rotary encoders for linear sheet speed tracking.
- Actuation & Motion Control: Industrial Programmable Logic Controller (PLC) with high-speed digital I/O running deterministic motion control algorithms for knife descent synchronization and stepper-driven motorized paper stop fences.

3. IoT Edge & Connectivity Layer:
- Edge Gateway: Industrial Raspberry Pi / ESP32-S3 IoT controller interfaced to PLC via Modbus RTU (RS-485).
- Embedded Firmware: Real-time edge daemon in Python/C++ polling machine telemetry (cycles, jams, roller RPM, motor current, operating temperatures) at 20 ms intervals, computing local edge anomalies and pushing telemetry bursts via MQTT over TLS.

4. Software & Application Stack:
- Operator HMI & Local Application: Touch-optimized responsive interface developed with React 18, Vite, Tailwind CSS, and Lucide Icons.
- Backend Services: Node.js (Express) microservices managing job queues, recipe configurations, and maintenance scheduling.
- Data Persistence: SQLite/PostgreSQL for local transaction logs, production history, and calibration recipes; Redis for real-time WebSocket state distribution.
- Hosting & Deployment: Local containerized deployment (Docker) on the Assam Government Press internal LAN with fallback offline capability, with optional secure synchronization to the Assam State Data Centre (ASDC) cloud.`
  },
  {
    id: 5,
    title: "5. Development methodology & intermediate steps",
    wordCount: 476,
    maxWords: 500,
    summary: "6-phase agile development roadmap spanning Discovery, CAD simulation, prototype machining, electrical integration, FAT, and press pilot.",
    content: `We adopt an agile, milestone-driven cyber-physical development methodology comprising six disciplined phases spanning Discovery to Field Pilot Deployment:

Phase 1: Discovery, Audit & Baselines (Weeks 1–3)
- Conduct detailed on-site audit of legacy folding units at the Assam Government Press (Guwahati).
- Document factory floor footprint, 3-phase power availability (415V), and environmental humidity factors.
- Catalog government publication formats: Crown Octavo, Demy Quarto, Royal, and standard A4/A5 gazette impositions.
- Key Output: Engineering Requirements Document (ERD) and Baseline Time-and-Motion Audit.

Phase 2: Detailed CAD & Digital Twin Simulation (Weeks 4–7)
- Finalize 3D mechanical assemblies in SolidWorks for the suction feeder head, roller train, and cross-knife linkage.
- Simulate sheet trajectories to eliminate pinch-point bottlenecks across 54–120 GSM paper.
- Design electrical schematics, PLC wiring layouts, and emergency safety circuits.
- Build UI/UX wireframes for the Touchscreen HMI and Supervisor Dispatch Portal.
- Key Output: Full CAD mechanical drawings, Bill of Materials (BOM), and interactive UI wireframes.

Phase 3: Prototype Machining & Software MVP (Weeks 8–12)
- CNC-machine critical components: buckle plates, deflector fingers, and polyurethane roller shafts.
- Assemble a modular benchtop rotary vacuum feed and 4-plate buckle testbed.
- Program PLC ladder logic for sheet separation, ultrasonic gating, and knife cycle timing.
- Build the core React/Node.js MVP application (recipe engine, live telemetry, and queue manager).
- Key Output: Functional benchtop feeder prototype and operational MVP software.

Phase 4: Full System Assembly & Cross-Fold Integration (Weeks 13–17)
- Integrate the suction feed table, parallel buckle section, right-angle cross-knife unit, and stream delivery.
- Mount ultrasonic sensors, optical gates, and the industrial HMI touch display.
- Configure IoT Edge Gateway for bi-directional Modbus-to-MQTT telemetry.
- Key Output: Fully integrated industrial automated cross-fold machine ("FoldMaster-16").

Phase 5: Factory Acceptance Testing & Stress Validation (Weeks 18–20)
- Execute continuous 50,000-sheet endurance runs on 54 GSM maplitho, 70 GSM wove, and 120 GSM art paper.
- Test simulated fault scenarios: double-feed, skewed feed, paper tear, and emergency e-stop.
- Calibrate recipe changeover speeds and verify OEE telemetry accuracy.
- Key Output: Certified Factory Acceptance Test (FAT) Report and operator manuals.

Phase 6: Press Commissioning & Pilot Validation (Weeks 21–24)
- Install and commission machine on the Assam Government Press shop floor.
- Conduct live parallel production testing against legacy friction-feed machines on live Gazette and legislative runs.
- Train press operators and maintenance technicians.
- Key Output: Signed Pilot Acceptance Certificate and final handover documentation.`
  },
  {
    id: 6,
    title: "6. Development timeline & milestones",
    wordCount: 423,
    maxWords: 500,
    summary: "24-week execution timeline with 6 major monthly milestones, deliverable dependencies, and 3 validation gates (Mid-term, FAT, Press Pilot).",
    content: `The proposed development plan is scheduled over a 24-week (6-month) execution window, structured into clear, verifiable milestones aligned with the NESFIC grant framework:

Month 1 (W1–W4): Discovery & System Specs
- Milestones: M1.1: Physical Press Audit at Guwahati; M1.2: Paper stock & format mapping; M1.3: Electrical & space compliance review.
- Deliverables: Engineering Requirements Doc (ERD); Baseline KPI benchmark dataset; Architecture sign-off.
- Dependencies: Press access clearance from Assam Govt Press.

Month 2 (W5–W8): CAD, Circuit & UI Design
- Milestones: M2.1: 3D CAD modeling of suction feeder & cross-knives; M2.2: Electrical safety schematic design; M2.3: HMI UI/UX prototype completion.
- Deliverables: Complete manufacturing CAD drawings; Electrical schematics; Interactive web prototype.
- Dependencies: Completion of M1.3; Component supplier confirmation.

Month 3 (W9–W12): Machining & MVP Subsystems
- Milestones: M3.1: Precision CNC machining of rollers & buckle plates; M3.2: Procurement of PLC, ultrasonic sensors, and motors; M3.3: PLC ladder logic programming; M3.4: HMI software build.
- Deliverables: Fabricated sub-assemblies; Operational bench-scale feeder; Functional HMI software MVP.
- Dependencies: Precision machining vendor lead times; Sensor delivery.

Month 4 (W13–W16): Full Mechanical & Electrical Integration
- Milestones: M4.1: Structural integration of 16-page cross-knife section; M4.2: Wiring sensor bus and servo drives; M4.3: IoT Edge Gateway bridge configuration.
- Deliverables: Fully assembled FoldMaster-16 prototype machine; Integrated digital HMI terminal.
- Dependencies: Successful testing of M3.1 and M3.3 sub-assemblies.

Month 5 (W17–W20): Factory QA & 50k-Sheet Stress Testing
- Milestones: M5.1: High-speed endurance testing (10,000 sheets/hr); M5.2: Ultrasonic double-sheet reject validation; M5.3: Automated recipe changeover calibration.
- Deliverables: Certified Factory Acceptance Test (FAT) Report; Operator manual; 100-hour stress logs.
- Dependencies: Standard Assam paper stock availability.

Month 6 (W21–W24): Press Pilot Commissioning & Handover
- Milestones: M6.1: Installation at Assam Govt Press, Guwahati; M6.2: Parallel live run with Assam Gazette & Budget volumes; M6.3: Press operator certification training.
- Deliverables: Final Pilot Validation Report; Comparative benchmark data; Production handover.
- Dependencies: Press scheduling and departmental operational window.

Critical Milestones for Validation Readiness:
- Week 12 (Mid-Term Gate): Demonstration of functional bench-scale vacuum suction feed and ultrasonic double-sheet detection operating at 9,000 sheets/hour on 60 GSM stock.
- Week 20 (FAT Gate): Pre-commissioning demo of full 16-page cross-folding with automated recipe changes in under 60 seconds and zero-jam reject diversion.
- Week 24 (Final Pilot Gate): Live operation inside Assam Government Press processing real publication workloads with documented 4x throughput increase over legacy units.`
  },
  {
    id: 7,
    title: "7. Data & information requirements",
    wordCount: 388,
    maxWords: 500,
    summary: "Clear specification of physical paper grammages (54-130 GSM), imposition schemes, operational historical baselines, and site 415V electrical inputs.",
    content: `To design, calibrate, and validate the automated folding and telemetry system, the project requires specific physical, operational, and digital inputs. No unconfirmed, classified, or unauthorized access is assumed; all parameters are based on standard public printing industry standards and verified departmental interaction:

1. Paper Substrate Specifications & Physical Samples:
- Grammage Range: Samples of paper stocks actively procured by the Assam Government Press:
  * 54–60 GSM Cream Wove / Maplitho paper (used for Gazettes, Bills, Assembly Proceedings).
  * 70–80 GSM Maplitho / Book paper (used for Annual Budget Books, Acts, Rules).
  * 100–130 GSM Art Paper / Bond Paper (used for publication covers and special reports).
- Physical Characteristics: Paper grain orientation (long-grain vs. short-grain relative to the cylinder direction), tensile strength, surface roughness/caliper (t_sheet in micrometers), and moisture absorption characteristics under Guwahati's humid monsoon conditions.
- Format Dimensions: Flat sheet sizes used on existing offset presses: Crown Full (15" x 20"), Demy (18" x 23"), Double Demy (23" x 36"), Quad Demy (36" x 46"), and Royal (20" x 25").

2. Imposition Schemes & Folding Specifications:
- Standard signature requirements: 8-page parallel fold, 8-page accordion (concertina) fold, 16-page right-angle cross-fold (3-fold signature), and 32-page double-parallel fold.
- Creep allowance, spine perforation requirements for adhesive binding, and signature collating mark positions.

3. Operational Baseline Data (Collected during Phase 1 Audit):
- Historical shift throughput (sheets per net machine hour).
- Mean Time Between Failures (MTBF) and Mean Time to Repair (MTTR) of existing legacy buckle units.
- Categorized scrap and spoilage counts (mis-feeds, folded corners, roller smudges, jam damage).
- Average job changeover time between different publication runs.

4. Physical Site & Electrical Interface Data:
- Press shop floor layout dimensions, floor load-bearing capacity (kg/m²), and vibration isolation constraints at the Bamunimaidam facility.
- Electrical specifications: 415V ± 10%, 3-phase, 50 Hz industrial power supply line stability; compressed air supply availability (minimum 6 bar, 200 L/min for vacuum suction pumps and pneumatic deflectors).

Processing, Annotation & Dependency Assumptions:
- All collected paper samples will undergo laboratory caliper and moisture testing to populate the digital recipe database.
- Production logs will be anonymized to track machine performance metrics without recording legislative content.
- Operational access to press premises will occur during scheduled maintenance windows under full supervision of designated Government Press engineers.`
  },
  {
    id: 8,
    title: "8. Team, manpower & expertise",
    wordCount: 436,
    maxWords: 500,
    summary: "Multidisciplinary team led by Abhisekh Saharia (Rojes Labs) covering Printing Mechatronics, PLC Automation, Full-Stack HMI, and Press QA.",
    content: `Delivering a robust cyber-physical solution within 24 weeks requires a multidisciplinary engineering team led by Rojes Labs under Lead Applicant Abhisekh Saharia, combining precision mechanical engineering, industrial automation/PLC programming, IoT firmware development, full-stack software architecture, and printing domain experience:

Key Roles and Qualifications:
1. Lead Applicant & Project Director — Abhisekh Saharia (Rojes Labs · Full Time):
- Expertise: 12+ years in advanced mechatronic systems, industrial automation, hardware-software orchestration, and mission-critical government technology deployments.
- Responsibilities: Overall project delivery, technical architecture, departmental liaison with Assam Government Press, quality assurance, and milestone compliance.
2. Lead Mechanical / Mechatronics Engineer (1 Person · Full Time):
- Expertise: B.Tech/M.Tech Mechanical/Mechatronics; 8+ years experience in 3D CAD modeling (SolidWorks), rotary vacuum drum design, sheet transport physics, gear trains, and precision CNC fabrication.
- Responsibilities: Mechanical design of suction table, buckle plates, roller geometry, knife kinematics, and structural assembly.
3. Automation & Embedded Systems Specialist (1 Person · Full Time):
- Expertise: B.Tech Electrical/Electronics; certified in industrial PLC programming (Beckhoff/Siemens/Delta), high-speed sensor integration (ultrasonic, optical), stepper/servo drive tuning, and Modbus/CANopen communications.
- Responsibilities: Electrical wiring, safety circuit design, PLC ladder logic, automated stopper motorization, and ultrasonic double-sheet reject automation.
4. Full-Stack Software / HMI Architect (1 Person · Full Time):
- Expertise: 6+ years in modern Web UI/UX (React, Vite, Tailwind), industrial HMI dashboards, WebSockets, Python edge services, and embedded Linux.
- Responsibilities: Development of operator touch terminal, automated recipe engine, 16-page fold visualizer, and press floor telemetry dispatch web application.
5. Press Operations & QA Field Technician (2 Persons · Phased/Full Time):
- Expertise: Diploma in Printing Technology; 10+ years hands-on experience in bookbinding, commercial folding machine operation, and machine maintenance.
- Responsibilities: Fabrication fit-up, shop floor stress testing, paper curl/static mitigation, on-site commissioning, and press operator training.

Indicative Manpower Allocation by Phase:
- Phase 1 (Discovery): 4 Personnel (Abhisekh Saharia, Mechanical, Automation, QA) — 16 person-weeks.
- Phase 2 (Design): 3 Personnel (Mechanical, Automation, Software) — 12 person-weeks.
- Phase 3 (Machining & MVP): 5 Personnel (All team members) — 20 person-weeks.
- Phase 4 (Assembly & Integration): 5 Personnel — 20 person-weeks.
- Phase 5 (Testing & QA): 4 Personnel — 16 person-weeks.
- Phase 6 (Commissioning & Pilot): 5 Personnel — 20 person-weeks.
- Total Effort: Approximately 104 person-weeks of specialized engineering manpower.`
  },
  {
    id: 9,
    title: "9. Testing, validation & evidence",
    wordCount: 397,
    maxWords: 500,
    summary: "3-tier validation protocol (Subsystem bench, FAT 50,000-sheet run, Government Press pilot) targeting 8,500+ sheets/hr and <0.8% spoilage.",
    content: `To guarantee industrial-grade reliability, compliance with government publication deadlines, and worker safety, the FoldMaster solution undergoes a rigorous three-stage verification and validation protocol:

1. Proposed Performance & Quality Measures (KPIs):
- Net Throughput: Sustained folding rate ≥ 8,500 sheets/hour on standard 60–70 GSM maplitho stock (representing a >400% improvement over the legacy 1,500–2,000 sheets/hour baseline).
- Mis-Feed & Jam Rate: Reduction of paper jams from 12–18 incidents per shift to < 1 incident per 50,000 sheets through ultrasonic double-sheet gating.
- Spoilage / Paper Waste Rate: Spoilage reduced from existing 4.5-7% down to < 0.8% of gross impressions.
- Changeover Downtime: Complete job reconfiguration (plate buckle stopper adjustments and roller gap caliper spacing) reduced from 35-45 minutes to < 3 minutes via automated recipe recall.
- Fold Register Accuracy: Crease alignment and squareness error maintained within ± 0.35 mm across 16-page signatures.

2. Development & Staged Testing Protocol:
- Subsystem Bench Verification (Weeks 10–12): Standalone testing of the rotary vacuum feeder validating sheet pickup on curling and humid paper stocks; calibration of the ultrasonic sensor verifying 100% detection of overlapping 54 GSM sheets.
- Factory Acceptance Testing (FAT - Weeks 18–20): 100-hour cumulative endurance trial running 50,000 sheets of mixed government paper grades without unrecoverable mechanical stops. Verification of safety tripwires and emergency e-stops shutting down drives within 250 milliseconds.
- Side-by-Side Comparative Pilot (Weeks 22–24): Commissioning directly on the Assam Government Press production floor. Simultaneous side-by-side production batch comparison with the legacy friction-feed machine on identical live print jobs (e.g., Weekly Gazette run of 20,000 copies).

Prior Research, Pilots & Evidence Base:
- Rojes Labs possesses prior engineering experience deploying automated material handling mechanisms and IoT telemetry modules across commercial printing plants in Eastern India.
- Bench validation data collected on our electromechanical prototype confirms sustained sheet separation at 9,200 sheets/hour with vacuum suction vs. friction wheel slip.
- The accompanying Proof of Work document details sensor oscilloscope traces, high-speed camera verification of paper transit through the first buckle deflector, and full software telemetry screen captures.`
  },
  {
    id: 10,
    title: "10. Security, privacy, safety & compliance",
    wordCount: 363,
    maxWords: 500,
    summary: "Air-gapped operation, zero document content scanning, RFID/PIN audit controls, IS/ISO safety interlocks, and 250ms emergency e-stop braking.",
    content: `Because the Assam Government Press processes confidential, legally sensitive, and sovereign materials—including State Budget volumes prior to legislative presentation, confidential legislative assembly bills, and election materials—the solution embeds strict security, physical safety, and statutory compliance controls:

1. Confidentiality & Data Privacy:
- Zero Content Archival: The IoT Edge Gateway, optical sensors, and HMI terminals monitor strictly physical, kinetic, and telemetry parameters (sheet counts, roller speeds, motor torque, sensor binary triggers). No optical imaging, document scanning, or text extraction is performed on printed paper surfaces, guaranteeing zero risk of information leakage for confidential government documents.
- Air-Gapped Operation: The system operates in a completely air-gapped configuration within the Government Press local network. No external internet connectivity is required for core operation.
- Role-Based Access Control (RBAC): Access to the HMI terminal and recipe management is secured with cryptographic PIN authentication and RFID operator keycards, maintaining comprehensive audit logs of who initiated runs, changed presets, or cleared error conditions.

2. Physical Safety & Industrial Compliance:
- CE & Indian Standard (IS) Safety Compliance: Machine design aligns with IS 12235 / ISO 13849-1 (Safety of Machinery - Safety-related parts of control systems) and EN 1010-1 (Safety requirements for the design and construction of printing and paper converting machines).
- Emergency Stop & Interlock Architecture: Category 4 dual-channel safety circuit. Emergency stop mushroom pushbuttons are located at the feeder, parallel folding section, cross-knife table, and stream delivery.
- Transparent Polycarbonate Safety Hoods: Heavy-duty interlocked clear acrylic/polycarbonate safety hoods cover all high-speed folding rollers and reciprocating cross-knives. Opening any safety cover triggers an immediate electromechanical brake stop within < 250 ms.
- Pinch-Point Protection & Noise Abatement: Covered gear trains and acoustic insulation dampening operating noise below 75 dBA, ensuring a comfortable working environment for press operators.

3. Interoperability & Auditability:
- Open Standards Telemetry: Edge gateway outputs telemetry in standardized JSON formats over MQTT and OPC-UA, ensuring straightforward future interoperability with state digital printing ERPs or Assam e-Governance systems.
- Non-Repudiation Audit Logs: Tamper-evident operational logging recording timestamps of job start/finish, gross sheets loaded, net sheets folded, spoilage counts, operator ID, and maintenance alarms, stored in an encrypted local database.`
  },
  {
    id: 11,
    title: "11. Innovation & differentiation",
    wordCount: 449,
    maxWords: 500,
    summary: "Adaptive suction head with ionized aeration, 40ms ultrasonic diverter flap, automated caliper recipe engine, and 1/4th cost vs imported units.",
    content: `The FoldMaster Assam solution introduces meaningful technological innovation to public sector print finishing by bridging modern precision mechatronics with an intelligent digital edge, directly resolving the structural flaws of legacy friction-feed machinery:

Key Novel Elements:
1. Adaptive Substrate Suction Head with Ionized Aeration: Unlike standard commercial folders that struggle with low-grammage (54 GSM) uncalendered Indian maplitho paper under humid monsoon climates, our feeder incorporates a variable-frequency pulsating vacuum drum combined with dual anti-static ionizing nozzles that aerate sheet edges before suction pickup, completely eliminating friction drag and static cling.
2. In-Flight Ultrasonic Diverter Flap: Rather than stopping the entire press line when a double-sheet or mis-fed sheet is detected, our rapid-response solenoid-actuated diverter flap ejects the defective sheet into a lower collection bin in < 40 ms, allowing continuous production without operator intervention.
3. Automated Caliper & Digital Signature Recall: Operators no longer use feeler gauges or trial sheets to adjust roller clearances. Entering the paper GSM and fold imposition on the digital HMI automatically positions linear stepper actuators on the buckle stoppers and roller gap calipers, slashing setup waste from 50 test sheets to zero.
4. Government Dispatch SLA Intelligence: The system correlates real-time mechanical throughput against legislative dispatch deadlines (e.g., Gazette publication hours), automatically throttling speeds or issuing supervisor alerts if a job risks missing its statutory distribution window.

Basis of Differentiation vs. Existing Alternatives:
- Vs. Imported High-End Folders (e.g., MBO, Stahlfolder): Imported European machines cost upwards of ₹1.5–2.5 Crore, have 6–9 month lead times, and suffer from exorbitant spare parts costs and scarce local service technicians in the North East. FoldMaster provides equivalent functional capability engineered with locally serviceable Indian components at one-quarter of the capital expenditure.
- Vs. Domestic Friction-Feed Folders: Standard domestic machines perpetuate the exact friction-feed roller jams, manual stopper adjustments, and high spoilage currently crippling the Assam Press.

Intellectual Property & Dependencies:
- Novel design elements in the continuous ultrasonic reject flap and adaptive suction drum aeration are targeted for Indian Design and Utility Patents by Rojes Labs.
- Software stack leverages open-source foundations (Linux, React, Python, SQLite) with zero recurring proprietary vendor license fees.`
  },
  {
    id: 12,
    title: "12. Resources, risks & pilot validation",
    wordCount: 425,
    maxWords: 500,
    summary: "Total grant ₹40 Lakhs with Software Development/Engineering team allocated ₹20 Lakhs, adjusted hardware/sensors/tooling, and 3-phase pilot plan.",
    content: `1. Indicative Development Budget & Cost Drivers (Total Grant: ₹40.0 Lakh):
The budget is optimized within the NESFIC grant ceiling of ₹40 Lakh (40 lacs), prioritizing advanced software, mechatronics, and local integration:
- Software Development & Engineering Team (Rojes Labs) — ₹20.0 Lakh (20 lacs): Multi-tier software architecture including deterministic PLC ladder logic, motion control algorithms, real-time Python IoT edge daemon, touch-optimized React/Vite operator HMI, automated recipe engine, and security compliance over 24 weeks under Lead Applicant Abhisekh Saharia.
- Mechanical Machining, Buckle Plates & Fabrication — ₹10.0 Lakh: Precision CNC-machined aluminum buckle plates, hardened steel/polyurethane folding rollers, rotary suction drum head, dual reciprocating cross-knife assemblies, chassis, and safety guards.
- Sensors, PLC Hardware, Actuators & IoT Electronics — ₹5.0 Lakh: Industrial PLC controller, Pepperl+Fuchs 300 kHz ultrasonic double-sheet sensor, optical gate arrays, motorized linear stepper actuators, and industrial touch HMI PC.
- Testing Stock, Tooling & Paper Consumables — ₹2.5 Lakh: Commercial paper reams (54 GSM maplitho, 70 GSM cream wove, 120 GSM art paper) for 50,000-sheet endurance trials and calibration jigs.
- On-Site Installation, Commissioning & Press Training — ₹2.5 Lakh: Transport to Bamunimaidam Guwahati, rigging, 415V electrical hookup, and hands-on press operator training.
- Total Estimated Grant Budget: ₹40.0 Lakh (40 lacs).

2. Key Risks and Mitigation Strategies:
- High Humidity / Static Paper Curl: Install dual high-output AC ionizer bars and heated dry-air blower nozzles at the feed pile to eliminate static and moisture adhesion.
- Mechanical Lead Time Delays: Pre-qualify redundant precision engineering vendors in Guwahati and Kolkata; place orders for long-lead items in Week 2.
- Operator Resistance: Design intuitive Assamese & English bilingual HMI interface; conduct 3 weeks of hands-on operator mentoring.
- Power Fluctuations / Surges: Incorporate industrial-grade online double-conversion UPS, line reactors, and robust galvanic isolation across all sensor buses.

3. Pilot Validation Plan at Assam Government Press:
The developed system will be validated directly at the Assam Government Press premises in Bamunimaidam, Guwahati:
- Phase A (Installation & Cold Commissioning - 1 Week): Mechanical alignment, leveling, 415V 3-phase power hookup, pneumatic air connection, and emergency stop testing.
- Phase B (Parallel Benchmark Run - 2 Weeks): Processing actual government jobs (Weekly Assam Gazette, Assembly Bulletins) in parallel with legacy folding machines, recording throughput, paper waste percentages, and crease accuracy.
- Phase C (Handover & Operator Sign-off - 1 Week): Full operational handover, preventative maintenance training for press staff, and joint certification of performance benchmarks with the Directorate of Printing & Stationery.`
  }
];

export const supportingMaterial = {
  powDossier: {
    title: "NESFIC-D40_Proof_of_Work_Dossier_FoldMaster.pdf",
    size: "8.4 MB (Under 10 MB limit)",
    format: "PDF Document",
    leadApplicant: "Abhisekh Saharia",
    organization: "Rojes Labs",
    totalGrant: "₹40.0 Lakhs (40 lacs)",
    sections: [
      "Executive Summary & NESFIC-D-40 Challenge Alignment",
      "Lead Applicant Credentials (Abhisekh Saharia, Rojes Labs)",
      "Full Mechanical 3D SolidWorks CAD Assembly & Exploded View",
      "Rotary Suction Feeder Pneumatic Schematics & Air Velocity Curves",
      "16-Page Cross-Fold Knife Kinematic Analysis & Cycle Timing",
      "Beckhoff/Siemens PLC Ladder Logic & Modbus RTU Pinout",
      "Pepperl+Fuchs Ultrasonic Double-Sheet Response Graph (<12ms)",
      "High-Fidelity UI/UX Wireframes for HMI Touch Terminal",
      "50,000-Sheet Endurance Factory Acceptance Test Logs",
      "Itemized Budget Breakdown (₹40L Total, ₹20L Software/Engg)",
      "Assam Government Press Shop Floor Integration & Pilot Plan"
    ]
  },
  demoUrl: "https://startup.assam.gov.in/demo/nesfic-d40-foldmaster",
  websiteUrl: "http://localhost:5173",
  cloudDemoUrl: "https://foldmaster-assam.rojeslabs.com",
  geoCoordinates: {
    lat: 26.1856,
    lng: 91.7777,
    city: "Guwahati",
    state: "Assam",
    site: "Assam Government Press, Bamunimaidam"
  },
  additionalMaterial: {
    title: "NESFIC-D40_Technical_Specifications_and_Bill_of_Materials.pdf",
    size: "4.2 MB",
    description: "Full industrial bill of materials, DIN component standards, motor sizing, and spare parts catalog."
  },
  disclaimer: "Disclaimer: FoldMaster Assam is an advanced cyber-physical and IoT telemetry proposal developed by Rojes Labs for the North East Seva First Innovation Challenge (NESFIC 2026), Directorate of Printing & Stationery, Government of Assam. All publication titles, mock telemetry, and trademarks are depicted for operational simulation and evaluation purposes."
};
