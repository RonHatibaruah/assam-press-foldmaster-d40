import React, { useState } from 'react';
import {
  HelpCircle,
  X,
  Layers,
  Activity,
  Calendar,
  Sliders,
  Wrench,
  FileText,
  Image,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Cpu,
  BookOpen,
  Printer
} from 'lucide-react';

export default function TutorialModal({ isOpen, onClose, onSelectTab }) {
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: 'Welcome to FoldMaster Assam',
      subtitle: 'Technological Overview & Sovereign Mission (NESFIC-D-40)',
      icon: Printer,
      badge: 'Challenge NESFIC-D-40',
      description:
        'FoldMaster Assam is a high-speed mechatronic cyber-physical retrofitting system designed specifically for the Directorate of Printing & Stationery, Assam Government Press (Bamunimaidam, Guwahati). It transforms legacy mechanical folding machines into smart, automated post-press powerhouses operating at up to 12,000 sheets/hour.',
      highlights: [
        'Eliminates Double-Sheet Jams: 300 kHz ultrasonic sensors detect twin sheets in <12 ms and trigger high-speed pneumatic reject gates.',
        'Neutralizes Monsoon Humidity & Static: 5.2 kV anti-static ionization bars and venturi vacuum aerators ensure smooth feeding even at 95% RH.',
        'Cuts Setup Downtime by 92%: Automated stepper-driven buckle plates adjust in under 3.5 minutes (down from 45 minutes manually).',
        'Guarantees Statutory Publication SLAs: Zero-failure delivery for Assam State Budget, Gazettes, and Legislative Assembly papers.'
      ],
      quickAction: { tabId: 'telemetry', label: 'Explore Live Telemetry' }
    },
    {
      title: 'Module 1: IoT Telemetry & Sensor Floor',
      subtitle: 'Real-Time Edge Monitoring & Fault Injection',
      icon: Activity,
      badge: '100 Hz Real-Time Telemetry',
      description:
        'Monitor live telemetry across all 4 machine stations: Rotary Suction Feeder, Static Ionization Bars, Buckle Folding Cylinders, and Right-Angle Mechatronic Knife Units.',
      highlights: [
        'Live Sensor Gauges: Monitor vacuum pressure (-0.65 bar), ionization voltage (5.2 kV), paper throughput (8,850 sh/hr), and motor vibration.',
        'Fault Injection Testing: Click "Simulate Double-Sheet Jam", "Simulate Static Surge", or "Simulate Paper Skew" to verify instant fail-safe diverter response.',
        'Mechatronic Diverter Gate: See defective signatures routed to the waste chute at full speed without stopping the folder.'
      ],
      quickAction: { tabId: 'telemetry', label: 'Go to Telemetry Floor' }
    },
    {
      title: 'Module 2: 16-Page Cross-Fold Kinematics',
      subtitle: 'Interactive 3D Folding Sequence Simulator',
      icon: Layers,
      badge: 'Kinematic Imposition',
      description:
        'Visualize how a flat 70 GSM quad-crown printed sheet (508 x 762 mm) is transformed into an exact 16-page right-angle folded book signature ready for saddle-stitching or perfect binding.',
      highlights: [
        '4-Stage Fold Kinematics: Step through 1st Parallel Fold (8-page), 2nd Parallel Fold, 1st Right-Angle Cross-Fold, and 2nd Cross-Fold.',
        'Anti-Gusseting Micro-Perforation: Understand how spine creasing eliminates internal air trapping and corner wrinkles.',
        'Interactive Step Controls: Use the slider or step buttons to inspect paper fiber grain alignment and roller nip compression.'
      ],
      quickAction: { tabId: 'simulator', label: 'Launch Kinematic Simulator' }
    },
    {
      title: 'Module 3: Recipe & Paper Caliper Engine',
      subtitle: 'Automated Substrate Setting & Roll Nip Clearance',
      icon: Sliders,
      badge: 'Micrometer Accuracy',
      description:
        'Eliminate manual feeler-gauge trial and error. The Recipe Engine calculates exact theoretical paper thickness, fold roller clearances, and suction levels for any substrate.',
      highlights: [
        'Preset Substrate Library: Instant configs for 45 GSM Maplitho Gazette, 60 GSM Textbook Paper, 80 GSM High Court Bond, and 120 GSM Art Paper.',
        'Dynamic Caliper Compensation: Accounts for paper bulk factors and coating compressions to set stepper gap clearances to +/- 0.01 mm.',
        'One-Click Machine Dispatch: Transmits calibrated recipes directly to edge PLCs over Modbus TCP.'
      ],
      quickAction: { tabId: 'caliper', label: 'Open Caliper Engine' }
    },
    {
      title: 'Module 4: Govt Publication Queue & SLAs',
      subtitle: 'Priority Dispatch for State Budget & Extraordinaries',
      icon: Calendar,
      badge: 'Statutory Delivery',
      description:
        'Manage high-stakes legislative printing schedules with real-time countdown clocks, throughput projections, and statutory penalty tracking.',
      highlights: [
        'Priority Job Queue: Pre-configured for Assam State Budget 2026-27, Weekly Assam Gazettes, Assembly Question Slips, and SEBA Textbooks.',
        'Throughput & Completion Estimation: Real-time calculation of remaining run duration based on current machine speed.',
        'Emergency Expedite: Re-prioritize critical government gazettes with single-click preemption.'
      ],
      quickAction: { tabId: 'scheduler', label: 'View Publication Queue' }
    },
    {
      title: 'Module 5: Maintenance & OEE Analytics',
      subtitle: 'World-Class 88.9% OEE & Predictive Diagnostics',
      icon: Wrench,
      badge: 'Empirical 50k-Sheet Data',
      description:
        'Track and verify operational efficiency improvements with rigorous Overall Equipment Effectiveness (OEE) metrics based on empirical 50,000-sheet continuous test runs.',
      highlights: [
        'OEE Benchmark: Availability (94.2%) x Performance (95.8%) x Quality (98.4%) = 88.9% OEE (vs. 44.2% Conventional).',
        'Predictive Maintenance: Monitor bearing temperature vibration, suction drum cup wear, and ionization electrode carbon build-up.',
        'Daily Pre-Flight Checklist: Standard Operating Procedures (SOP) ensuring smooth shift transitions at Bamunimaidam Press.'
      ],
      quickAction: { tabId: 'maintenance', label: 'Open OEE Analytics' }
    },
    {
      title: 'Module 6: Figures & NESFIC Proposal Dossier',
      subtitle: 'Grant Application & Verified Proof of Work PDFs',
      icon: FileText,
      badge: '₹40L Grant Proposal',
      description:
        'Access the complete 12-section NESFIC-D-40 grant proposal, high-resolution 16:9 widescreen technological architectural infographics, and downloadable publication-grade PDF dossiers.',
      highlights: [
        'Strict Compliance: All 12 proposal sections strictly calibrated under the 500-word portal ceiling.',
        'Budget Allocation: ₹40.0 Lakhs total grant with dedicated ₹20.0 Lakhs for Software Development & Engineering Team.',
        'One-Click PDF Export: Download the verified 6-page Proposal Document and 12-page Proof of Work Dossier formatted to government specifications.'
      ],
      quickAction: { tabId: 'proposal', label: 'View Proposal Dossier' }
    }
  ];

  const current = steps[currentStep];
  const StepIcon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-teal-400 font-bold">
                  Interactive Guide & Tutorial
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold">
                  Step {currentStep + 1} of {steps.length}
                </span>
              </div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                How FoldMaster Assam Works
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            title="Close Tutorial"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Step Navigation Bar */}
        <div className="grid grid-cols-7 border-b border-slate-800 bg-slate-950/50 p-2 gap-1 overflow-x-auto">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isDone = idx < currentStep;
            const isCurr = idx === currentStep;
            return (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`py-2 px-1 text-center rounded-lg text-xs font-semibold flex flex-col items-center gap-1 transition ${
                  isCurr
                    ? 'bg-teal-600 text-white shadow-md'
                    : isDone
                    ? 'text-teal-400 hover:bg-slate-800'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-[10px] truncate max-w-[80px]">
                  {idx === 0 ? 'Overview' : `Part ${idx}`}
                </span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  {current.badge}
                </span>
                <span className="text-xs text-slate-400">{current.subtitle}</span>
              </div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <StepIcon className="w-5 h-5 text-teal-400" />
                {current.title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800">
            {current.description}
          </p>

          <div className="space-y-2.5">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Key Capabilities & Operational Walkthrough:
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {current.highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-800/40 border border-slate-700/60 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onSelectTab(current.quickAction.tabId);
                onClose();
              }}
              className="px-3.5 py-2 rounded-lg bg-teal-950 text-teal-300 border border-teal-800 hover:bg-teal-900 text-xs font-bold flex items-center gap-1.5 transition"
            >
              <span>{current.quickAction.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              disabled={currentStep === 0}
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:pointer-events-none text-xs font-semibold text-slate-200 transition"
            >
              Previous
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(prev => prev + 1)}
                className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-xs font-bold text-white flex items-center gap-1.5 shadow-lg shadow-teal-600/20 transition"
              >
                <span>Next Part</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-lg shadow-emerald-600/20 transition"
              >
                Finish Tutorial
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
