import React, { useState } from 'react';
import { Image, Download, ExternalLink, ZoomIn, Check, Layers, Cpu, BarChart3, Workflow } from 'lucide-react';

export default function FiguresGallery() {
  const [selectedFigure, setSelectedFigure] = useState(0);

  const figures = [
    {
      id: "fig-3d",
      title: "Figure 2: 3D CAD Photorealistic Assembly of FoldMaster-16",
      category: "Hardware & Mechanical CAD",
      desc: "Industrial 3D rendering of the FoldMaster-16 automated suction cross-folding machine designed for the Assam Government Press, showing rotary vacuum feeder, 4 buckle plates, dual right-angle electronic knives, and articulated HMI terminal.",
      src: "/figures/foldmaster_16_3d_render.jpg",
      isImage: true,
      caption: "Figure 2: 3D CAD Engineering Assembly of the FoldMaster-16 Automated Suction Cross-Fold Machine for Assam Government Press."
    },
    {
      id: "fig-1",
      title: "Figure 1: Comparative Process Transformation (Before vs. After)",
      category: "Process Architecture",
      desc: "Side-by-side workflow contrast illustrating the transition from legacy manual friction-feed bottlenecks (1,500–2,000 sh/hr, 6% spoilage) to FoldMaster automated rotary suction cross-folding (8,500–10,000 sh/hr, <0.8% spoilage).",
      src: "/figures/figure1_process_comparison.svg",
      isImage: false,
      caption: "Figure 1: Comparative Process Transformation — Legacy Bottleneck vs. FoldMaster Modernized Pipeline."
    },
    {
      id: "fig-5",
      title: "Figure 5: Ultrasonic Double-Sheet Sensor & 40ms In-Flight Reject Gate",
      category: "Mechatronics & Anti-Jam Novelty",
      desc: "Engineering schematic showing Pepperl+Fuchs 300 kHz ultrasonic acoustic sensor triggering high-speed solenoid pneumatic diverter flap (<40ms) to eject double-sheets without stopping line production.",
      src: "/figures/figure5_ultrasonic_reject_schematic.svg",
      isImage: false,
      caption: "Figure 5: Ultrasonic Double-Sheet Detection and High-Speed Pneumatic In-Flight Reject Gate Mechanism."
    },
    {
      id: "fig-8",
      title: "Figure 8: 50,000-Sheet Empirical Performance Benchmarks",
      category: "Empirical Test Data",
      desc: "Dual performance validation charts demonstrating sustained speed stability at 8,850 sheets/hr across an 8-hour shift and cumulative spoilage reduction from 6.4% down to 0.72% (saving 2,840 sheets per 50k run).",
      src: "/figures/figure8_throughput_spoilage_chart.svg",
      isImage: false,
      caption: "Figure 8: 50,000-Sheet Empirical Performance Test Benchmarks — Speed Stability and Spoilage Curves."
    },
    {
      id: "fig-9",
      title: "Figure 9: Overall Equipment Effectiveness (OEE) Benchmark Matrix",
      category: "Operations & Financial Impact",
      desc: "World-class OEE breakdown across Availability (94.2%), Performance (95.1%), and Quality (99.2%) yielding 88.9% total OEE vs. legacy press baseline of 27.8%.",
      src: "/figures/figure9_oee_benchmark_matrix.svg",
      isImage: false,
      caption: "Figure 9: Overall Equipment Effectiveness (OEE) Comparison Matrix between FoldMaster and Legacy Friction-Feed Press."
    }
  ];

  const current = figures[selectedFigure];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-teal-500/20 text-teal-400 border border-teal-500/30">
              Proof of Work PDF Visual Assets
            </span>
            <span className="text-xs text-slate-400">High-Resolution Vector SVGs &amp; 3D Renders · Rojes Labs</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Image className="w-5 h-5 text-teal-400" />
            Proposal Visual Assets &amp; Figure Gallery
          </h2>
          <p className="text-sm text-slate-400">
            Engineered figures ready to embed directly into your NESFIC-D-40 submission proposal and 10 MB Proof of Work PDF. Lead Applicant: Abhisekh Saharia.
          </p>
        </div>

        <a
          href={current.src}
          download
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg text-xs font-bold flex items-center gap-2 shadow transition shrink-0"
        >
          <Download className="w-4 h-4" />
          Download Active Figure
        </a>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Thumbnails List (4/12) */}
        <div className="lg:col-span-4 space-y-2.5">
          {figures.map((fig, idx) => (
            <button
              key={fig.id}
              onClick={() => setSelectedFigure(idx)}
              className={`w-full text-left p-3.5 rounded-xl border transition ${
                selectedFigure === idx
                  ? 'bg-teal-950/60 border-teal-500 shadow-md ring-1 ring-teal-500/40 text-white'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className="text-teal-400 font-bold uppercase">{fig.category}</span>
                <span className="text-slate-500">Figure #{idx + 1}</span>
              </div>
              <h4 className="text-xs font-bold leading-snug">{fig.title}</h4>
              <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{fig.desc}</p>
            </button>
          ))}
        </div>

        {/* Right Active Preview Box (8/12) */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800 font-bold">
                  {current.category}
                </span>
                <h3 className="text-base font-bold text-white mt-1">{current.title}</h3>
              </div>
              <a
                href={current.src}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-teal-400 hover:underline flex items-center gap-1 font-mono"
              >
                Open Fullscreen <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stage */}
            <div className="bg-slate-950 rounded-xl border border-slate-800 p-2 flex items-center justify-center min-h-[380px] overflow-hidden">
              <img
                src={current.src}
                alt={current.title}
                className="max-h-[460px] w-auto object-contain rounded-lg shadow-2xl"
              />
            </div>

            <div className="mt-4 p-3.5 bg-slate-950 rounded-lg border border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-400 block font-semibold mb-1">
                Suggested PDF Caption:
              </span>
              <p className="text-xs text-slate-200 font-serif italic">
                "{current.caption}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
