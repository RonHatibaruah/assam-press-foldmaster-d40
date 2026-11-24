import React, { useState } from 'react';
import { Image, Download, ExternalLink, ZoomIn, Check, Layers, Cpu, BarChart3, Workflow, Sparkles } from 'lucide-react';

export default function FiguresGallery() {
  const [selectedFigure, setSelectedFigure] = useState(0);

  const figures = [
    {
      id: "fig-1",
      num: "Figure 1",
      title: "Conventional Mechanical vs. FoldMaster-16 Mechatronic Workflow",
      category: "Process Transformation",
      desc: "Side-by-side comparative architecture demonstrating the elimination of legacy friction feeding bottlenecks (3,200 sh/hr, 8.2% spoilage, 45-min setup) and replacement with FoldMaster-16 automated rotary suction and ultrasonic inspection (12,000 sh/hr, 0.4% spoilage, 3.5-min setup).",
      src: "/figures/figure1_process_comparison.svg",
      pngSrc: "/figures/png/figure1_process_comparison.png",
      isImage: false,
      badge: "Process Architecture",
      caption: "Figure 1: End-to-End Post-Press Transformation — Conventional Mechanical Folder vs. FoldMaster-16 Cyber-Physical Retrofit."
    },
    {
      id: "fig-2",
      num: "Figure 2",
      title: "Legislative Assembly & State Budget Statutory Delivery Pipeline",
      category: "Statutory SLA Engine (Suggested Addition)",
      desc: "Four-stage mission-critical publishing workflow connecting digital cryptographic PDF ingestion, high-speed offset web printing (64-page forms), FoldMaster-16 16-page cross-folding, and sovereign distribution to the Assam Legislative Assembly in Dispur within <48 hours.",
      src: "/figures/figure2_legislative_sla_pipeline.svg",
      pngSrc: "/figures/png/figure2_legislative_sla_pipeline.png",
      isImage: false,
      badge: "SLA Pipeline",
      caption: "Figure 2: Assam Legislative Assembly & State Budget Statutory Fast-Track Delivery Pipeline Architecture."
    },
    {
      id: "fig-3",
      num: "Figure 3",
      title: "Rotary Suction Feeder & Static Neutralization Mechanics (95% RH)",
      category: "Pneumatics & Aeration",
      desc: "Mechanical schematic of the feed table showing high-flow Venturi blast air nozzles, -0.65 bar rotary suction drum with timed solenoid valves, active 5.2 kV anti-static ionization bar discharging paper surfaces, and optical spacing sensors preventing double-feeding in 95% monsoon humidity.",
      src: "/figures/figure3_suction_feeder_aeration.svg",
      pngSrc: "/figures/png/figure3_suction_feeder_aeration.png",
      isImage: false,
      badge: "Pneumatics Physics",
      caption: "Figure 3: Rotary Suction Drum Feeder & 5.2 kV Static Neutralization Mechanics at 12,000 Sheets/Hour in 95% RH."
    },
    {
      id: "fig-4",
      num: "Figure 4",
      title: "16-Page Right-Angle Kinematic Cross-Fold Geometry & Anti-Gusseting Science",
      category: "Kinematics & Imposition",
      desc: "Step-by-step mathematical folding sequence from 508x762 mm flat quad-crown sheet through 1st and 2nd parallel buckle plates, 90-degree right-angle cross-carrier, mechatronic knife 1, inline spine micro-slitting wheel, and mechatronic knife 2 producing an exact 16-page book signature.",
      src: "/figures/figure4_16p_crossfold_kinematics.svg",
      pngSrc: "/figures/png/figure4_16p_crossfold_kinematics.png",
      isImage: false,
      badge: "Imposition Geometry",
      caption: "Figure 4: 16-Page Right-Angle Kinematic Cross-Fold Geometry and Anti-Gusseting Micro-Perforation Science."
    },
    {
      id: "fig-5",
      num: "Figure 5",
      title: "300 kHz Ultrasonic Double-Sheet Sensor & <12ms In-Flight Reject Gate",
      category: "Mechatronics & Anti-Jam Novelty",
      desc: "Mechatronic sensing loop showing 300 kHz piezoelectric acoustic transducers, edge DSP signal processing classifying sheets in <4 ms, and ultra-high-speed pneumatic diverter gate actuated in <12 ms to eject defective sheets at 3.3 m/s line speed without stopping production.",
      src: "/figures/figure5_ultrasonic_reject_schematic.svg",
      pngSrc: "/figures/png/figure5_ultrasonic_reject_schematic.png",
      isImage: false,
      badge: "Sub-12ms Diverter",
      caption: "Figure 5: 300 kHz Ultrasonic Double-Sheet Detection and In-Flight High-Speed Pneumatic Reject Gate."
    },
    {
      id: "fig-6",
      num: "Figure 6",
      title: "Four-Tier Cyber-Physical Architecture (IoT, PLC, Gateway, Cloud)",
      category: "System Architecture",
      desc: "Complete industrial IoT architecture across 4 distinct layers: Tier 1 Physical Mechatronics, Tier 2 Deterministic PLC running IEC 61131-3 logic, Tier 3 Shop-Floor Edge Gateway (Node.js/SQLite with air-gapped offline mode), and Tier 4 Sovereign Cloud & Press MIS.",
      src: "/figures/figure6_cyber_physical_architecture.svg",
      pngSrc: "/figures/png/figure6_cyber_physical_architecture.png",
      isImage: false,
      badge: "4-Tier Architecture",
      caption: "Figure 6: Four-Tier Cyber-Physical Architecture — Mechatronics, Edge PLC, IoT Telemetry, and Sovereign Cloud."
    },
    {
      id: "fig-7",
      num: "Figure 7",
      title: "Dynamic Substrate Caliper Profiling & Adaptive Roll-Nip Engine",
      category: "Calibration & Recipes (Suggested Addition)",
      desc: "Closed-loop caliper profiling architecture: inline laser micrometer scanning paper thickness across 45-120 GSM stocks, edge AI computing optimal roll clearances, and dual high-torque stepper motors positioning eccentric cam bearings to +/-0.01 mm in under 3.5 minutes.",
      src: "/figures/figure7_caliper_adaptive_recipe.svg",
      pngSrc: "/figures/png/figure7_caliper_adaptive_recipe.png",
      isImage: false,
      badge: "Caliper Engine",
      caption: "Figure 7: Dynamic Substrate Caliper Profiling & Adaptive Roll-Nip Clearance Engine Across 45-120 GSM Papers."
    },
    {
      id: "fig-8",
      num: "Figure 8",
      title: "Empirical Throughput Scaling & Spoilage Reduction (50,000-Sheet Run)",
      category: "Empirical Benchmarks",
      desc: "Empirical validation graphs: Graph A shows sustained production throughput maintaining 12,000 sheets/hour over an 8-hour shift. Graph B shows cumulative paper waste dropping from 8.2% (4,100 sheets) to 0.4% (200 sheets), saving ₹18.4 Lakhs annually for the Assam state exchequer.",
      src: "/figures/figure8_throughput_spoilage_chart.svg",
      pngSrc: "/figures/png/figure8_throughput_spoilage_chart.png",
      isImage: false,
      badge: "50k Sheet Data",
      caption: "Figure 8: Empirical Throughput Scaling and Cumulative Spoilage Reduction Trajectory (50,000-Sheet Validation Run)."
    },
    {
      id: "fig-9",
      num: "Figure 9",
      title: "World-Class OEE Benchmark Matrix & Gap Analysis (88.9% OEE)",
      category: "OEE & Financial Impact",
      desc: "Structured industrial engineering audit: Availability (94.2%), Performance (95.8%), and Quality (98.4%) combining to achieve 88.9% Total OEE (World-Class Manufacturing category), representing a massive +44.7% productivity leap over legacy mechanical press operations (44.2% OEE).",
      src: "/figures/figure9_oee_benchmark_matrix.svg",
      pngSrc: "/figures/png/figure9_oee_benchmark_matrix.png",
      isImage: false,
      badge: "88.9% OEE",
      caption: "Figure 9: Overall Equipment Effectiveness (OEE) Benchmark Matrix and Gap Analysis Comparing Legacy Press vs. FoldMaster-16."
    },
    {
      id: "fig-10",
      num: "Figure 10",
      title: "Shop-Floor Retrofit & Post-Press Cell Layout (Bamunimaidam Press)",
      category: "Plant Blueprint & Facility",
      desc: "Detailed architectural blueprint of the 85 m² post-press cell at Assam Government Press (Bamunimaidam, Guwahati) showing 7 designated operational zones from pallet acclimatization bay to automated shingle collation and transit to binding hall.",
      src: "/figures/figure10_press_floor_layout.svg",
      pngSrc: "/figures/png/figure10_press_floor_layout.png",
      isImage: false,
      badge: "85 m² Cell Blueprint",
      caption: "Figure 10: Shop-Floor Retrofit & Post-Press Cell Layout for Assam Government Press (Bamunimaidam, Guwahati)."
    },
    {
      id: "fig-11",
      num: "Figure 11",
      title: "FoldMaster-16 Mechatronic Industrial Folding Unit (3D Render)",
      category: "Hardware & Mechanical CAD",
      desc: "Photorealistic 3D perspective visualization of the FoldMaster-16 automated suction cross-folding unit engineered for Assam Government Press, featuring stainless steel rollers, teal mechatronic servo enclosures, polycarbonate safety guards, and capacitive touchscreen HMI terminal.",
      src: "/figures/foldmaster_16_3d_render.jpg",
      pngSrc: "/figures/foldmaster_16_3d_render.jpg",
      isImage: true,
      badge: "Photorealistic CAD",
      caption: "Figure 11: 3D CAD Perspective Visualization of the FoldMaster-16 High-Speed Mechatronic Folding Machine."
    }
  ];

  const current = figures[selectedFigure];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-teal-500/20 text-teal-400 border border-teal-500/30">
              16:9 Widescreen Technological Infographics
            </span>
            <span className="text-xs text-slate-400">1920x1080 High-Resolution Vector Visuals · Rojes Labs</span>
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold">
              11 Full Figures
            </span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Image className="w-5 h-5 text-teal-400" />
            Proposal Visual Assets &amp; Architectural Infographics Gallery
          </h2>
          <p className="text-sm text-slate-400 mt-0.5">
            Master engineering reference suite modeled on high-impact technological blueprint infographics. Embedded across the NESFIC-D-40 Grant Proposal &amp; Proof of Work Dossier. Lead Applicant: Abhisekh Saharia.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={current.pngSrc || current.src}
            download
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow transition"
          >
            <Download className="w-4 h-4" />
            Download PNG (1920x1080)
          </a>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Thumbnails List (4/12) */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[780px] overflow-y-auto pr-1">
          {figures.map((fig, idx) => (
            <button
              key={fig.id}
              onClick={() => setSelectedFigure(idx)}
              className={`w-full text-left p-3.5 rounded-xl border transition ${
                selectedFigure === idx
                  ? 'bg-teal-950/70 border-teal-500 shadow-md ring-1 ring-teal-500/40 text-white'
                  : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-mono font-bold text-teal-400">{fig.num}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                  {fig.badge}
                </span>
              </div>
              <h4 className="text-xs font-bold leading-tight line-clamp-1">{fig.title}</h4>
              <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{fig.category}</p>
            </button>
          ))}
        </div>

        {/* Right Active Viewer (8/12) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 shadow-xl">
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {current.num}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{current.category}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">{current.title}</h3>
              </div>
              <a
                href={current.src}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-teal-400 hover:text-teal-300 flex items-center gap-1 font-mono shrink-0"
              >
                Inspect Vector <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Display Canvas with 16:9 Aspect Ratio Frame */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-2 shadow-inner">
              <img
                src={current.src}
                alt={current.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Detailed Description & Caption */}
            <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800/80 space-y-2">
              <p className="text-xs text-slate-300 leading-relaxed">{current.desc}</p>
              <div className="text-[11px] font-mono text-teal-400 border-t border-slate-800/60 pt-2 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Caption: {current.caption}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
