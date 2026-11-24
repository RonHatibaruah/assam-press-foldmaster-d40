import React, { useState } from 'react';
import {
  Layers,
  Activity,
  Calendar,
  Sliders,
  Wrench,
  FileText,
  ShieldCheck,
  Zap,
  Gauge,
  Power,
  ExternalLink,
  Printer,
  Image,
  MapPin,
  Building,
  UserCheck,
  HelpCircle,
  BookOpen
} from 'lucide-react';

import FoldSimulator from './components/FoldSimulator';
import TelemetryDashboard from './components/TelemetryDashboard';
import JobScheduler from './components/JobScheduler';
import CaliperCalculator from './components/CaliperCalculator';
import MaintenanceOEE from './components/MaintenanceOEE';
import ProposalViewer from './components/ProposalViewer';
import FiguresGallery from './components/FiguresGallery';
import TutorialModal from './components/TutorialModal';
import { leadApplicant, supportingMaterial } from './data/proposalData';

export default function App() {
  const [activeTab, setActiveTab] = useState('telemetry');
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  const tabs = [
    { id: 'telemetry', label: 'IoT Telemetry & Floor', icon: Activity, badge: '8,850 sh/hr' },
    { id: 'simulator', label: '16-Page Cross-Fold 3D', icon: Layers, badge: 'Interactive' },
    { id: 'figures', label: 'Figures & CAD Assets', icon: Image, badge: '5 Figures' },
    { id: 'scheduler', label: 'Govt Publication Queue', icon: Calendar, badge: '4 Jobs' },
    { id: 'caliper', label: 'Recipe & Caliper Engine', icon: Sliders, badge: 'Auto-Set' },
    { id: 'maintenance', label: 'Maintenance & OEE', icon: Wrench, badge: '88.9%' },
    { id: 'proposal', label: 'NESFIC Proposal Dossier', icon: FileText, badge: '12 Secs' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Sovereign Government Press Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Branding & Lead Applicant */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center text-slate-950 shadow-lg shadow-teal-500/20 font-black">
                <Printer className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold tracking-wider uppercase text-teal-400">
                    Govt of Assam · Printing & Stationery Dept
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                    NESFIC-D-40
                  </span>
                  <span className="hidden md:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    <UserCheck className="w-3 h-3 text-emerald-400" />
                    Lead: {leadApplicant.name} ({leadApplicant.organization})
                  </span>
                </div>
                <h1 className="text-base sm:text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
                  FoldMaster Assam
                  <span className="text-xs font-mono font-normal text-slate-400 hidden lg:inline">
                    | Precision Cross-Fold & Telemetry Orchestrator · Rojes Labs
                  </span>
                </h1>
              </div>
            </div>

            {/* Right: Machine Live Status Badge, Tutorial & Grant Info */}
            <div className="flex items-center gap-3">
              {/* Tutorial / How to Use Guide Button */}
              <button
                onClick={() => setIsTutorialOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition group"
                title="Application Tutorial & User Guide"
              >
                <BookOpen className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                <span>Tutorial</span>
                <span className="hidden sm:inline text-[10px] text-teal-400 font-mono">Guide</span>
              </button>

              <div className="hidden lg:flex flex-col text-right text-xs font-mono">
                <div className="text-amber-400 font-bold">Grant: ₹40L Total</div>
                <div className="text-teal-400 text-[10px]">Software/Engg: ₹20L</div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                <span className={`w-2.5 h-2.5 rounded-full ${isPowerOn ? 'bg-emerald-500 animate-ping' : 'bg-red-500'}`} />
                <span className="text-slate-300 font-semibold">{isPowerOn ? '8,850 sh/hr' : 'STOPPED'}</span>
              </div>

              {/* Master Power Toggle Button */}
              <button
                onClick={() => setIsPowerOn(!isPowerOn)}
                className={`p-2 rounded-lg border font-mono text-xs flex items-center gap-1.5 transition ${
                  isPowerOn
                    ? 'bg-slate-800 border-slate-700 text-slate-300 hover:border-red-500 hover:text-red-400'
                    : 'bg-red-950 border-red-500 text-red-300'
                }`}
                title="Master E-Stop / Power Toggle"
              >
                <Power className="w-4 h-4" />
                <span className="hidden sm:inline">{isPowerOn ? 'E-Stop' : 'Engage'}</span>
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 overflow-x-auto py-2.5 scrollbar-none border-t border-slate-800/60">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition shrink-0 ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-md shadow-teal-600/30 font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-teal-700 text-teal-100' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Workspace Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'telemetry' && <TelemetryDashboard />}
        {activeTab === 'simulator' && <FoldSimulator />}
        {activeTab === 'figures' && <FiguresGallery />}
        {activeTab === 'scheduler' && <JobScheduler />}
        {activeTab === 'caliper' && <CaliperCalculator />}
        {activeTab === 'maintenance' && <MaintenanceOEE />}
        {activeTab === 'proposal' && <ProposalViewer />}
      </main>

      {/* Interactive Tutorial Modal */}
      <TutorialModal
        isOpen={isTutorialOpen}
        onClose={() => setIsTutorialOpen(false)}
        onSelectTab={(tabId) => setActiveTab(tabId)}
      />

      {/* Comprehensive Sovereign Footer with Disclaimer & GEO Metadata */}
      <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Top row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-bold text-slate-200 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-teal-400" />
                Rojes Labs
              </span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5" />
                Lead Applicant: {leadApplicant.name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-300 font-mono">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Guwahati, Assam, India (26.1856° N, 91.7777° E)
              </span>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-amber-400">Total Grant: ₹40.0 Lakhs</span>
              <span className="text-slate-600">|</span>
              <span className="text-teal-400">Software/Engg: ₹20.0 Lakhs</span>
              <span className="text-slate-600">|</span>
              <a
                href="https://startup.assam.gov.in/nesfic26/problem-statements/nesfic-d-40"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-teal-400 flex items-center gap-1 transition"
              >
                NESFIC-D-40 Portal <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Legal Disclaimer & Copyright */}
          <div className="text-[11px] text-slate-400 leading-relaxed space-y-1.5">
            <p>
              <strong className="text-slate-300">Disclaimer:</strong> {supportingMaterial.disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-slate-500 text-[11px]">
              <span>{leadApplicant.copyright}</span>
              <span>Target Facility: Assam Government Press, Bamunimaidam, Guwahati, Assam 781021</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
