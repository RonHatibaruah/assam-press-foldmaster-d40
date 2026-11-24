import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, FileText, CheckCircle2, Plus, ArrowUpRight, ShieldCheck, Filter } from 'lucide-react';

export default function JobScheduler() {
  const [filter, setFilter] = useState('all');

  const [jobs, setJobs] = useState([
    {
      id: "JOB-2026-0421",
      title: "Annual State Budget 2026–27 (Volume I: Revenue Receipts)",
      department: "Finance Department, Govt of Assam",
      priority: "CRITICAL",
      format: "Demy Quarto (16-Page Signature)",
      gsm: "70 GSM Cream Wove",
      totalSheets: 60000,
      completedSheets: 42100,
      slaDeadline: "2026-11-25 04:00 AM (Legislative Tabling)",
      hoursRemaining: "7h 45m",
      status: "In Progress",
      assignedMachine: "FoldMaster Unit 1",
      confidential: true
    },
    {
      id: "JOB-2026-0422",
      title: "Assam Gazette Extraordinary (Election Notification #118)",
      department: "Legislative & Judicial Department",
      priority: "URGENT",
      format: "Crown Octavo (8-Page Parallel Fold)",
      gsm: "54 GSM Maplitho",
      totalSheets: 35000,
      completedSheets: 35000,
      slaDeadline: "2026-11-24 18:00 PM (Statutory Release)",
      hoursRemaining: "Completed",
      status: "Dispatched",
      assignedMachine: "FoldMaster Unit 1",
      confidential: false
    },
    {
      id: "JOB-2026-0423",
      title: "Assam Legislative Assembly Rules & Standing Orders",
      department: "Assam Legislative Assembly Secretariat",
      priority: "HIGH",
      format: "Royal Octavo (16-Page Cross-Fold)",
      gsm: "80 GSM Natural Shade",
      totalSheets: 20000,
      completedSheets: 0,
      slaDeadline: "2026-11-26 12:00 PM",
      hoursRemaining: "39h 15m",
      status: "Queued",
      assignedMachine: "FoldMaster Unit 1",
      confidential: false
    },
    {
      id: "JOB-2026-0424",
      title: "Public Service Commission Confidential Examination Packets",
      department: "Assam Public Service Commission (APSC)",
      priority: "CRITICAL",
      format: "A4 4-Page Section Fold + Tamper Crease",
      gsm: "75 GSM Security Wove",
      totalSheets: 15000,
      completedSheets: 0,
      slaDeadline: "2026-11-27 06:00 AM",
      hoursRemaining: "57h 30m",
      status: "Queued",
      assignedMachine: "FoldMaster Unit 2 (Standby)",
      confidential: true
    }
  ]);

  const filteredJobs = jobs.filter(j => {
    if (filter === 'critical') return j.priority === 'CRITICAL';
    if (filter === 'in-progress') return j.status === 'In Progress';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
              Statutory SLA Engine
            </span>
            <span className="text-xs text-slate-400">Time-Bound Legislative Print Queue</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-amber-400" />
            Government Publication Dispatch & Priority Queue
          </h2>
          <p className="text-sm text-slate-400">
            Monitors legislative deadlines for State Budget Books, Extraordinary Gazettes, and Assembly Bills with real-time speed auto-throttling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              filter === 'all'
                ? 'bg-slate-700 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Publications ({jobs.length})
          </button>
          <button
            onClick={() => setFilter('critical')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              filter === 'critical'
                ? 'bg-red-900/60 text-red-200 border border-red-500/50'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Critical Legislative (2)
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              filter === 'in-progress'
                ? 'bg-teal-900/60 text-teal-200 border border-teal-500/50'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Active On Floor
          </button>
        </div>
      </div>

      {/* Active High-Priority Highlight Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-slate-900 to-slate-900 border border-amber-500/40 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
            <Clock className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-600 text-white font-bold uppercase">
                Zero Delay Tolerance
              </span>
              <span className="text-xs font-mono text-amber-300 font-bold">
                Legislative Deadline Alert
              </span>
            </div>
            <h3 className="text-base font-bold text-white mt-1">
              Annual State Budget 2026–27 (Volume I: Revenue Receipts)
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Current floor run rate: <strong className="text-teal-400">8,850 sheets/hr</strong>. Estimated completion: <strong className="text-white">2h 12m</strong> ahead of parliamentary tabling deadline!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <div className="text-xs text-slate-400">SLA Margin</div>
            <div className="text-lg font-mono font-bold text-emerald-400">+2h 12m Safe</div>
          </div>
          <div className="h-10 w-px bg-slate-800" />
          <div className="text-right">
            <div className="text-xs text-slate-400">Security Clearance</div>
            <div className="text-xs font-semibold text-amber-400 flex items-center gap-1 justify-end">
              <ShieldCheck className="w-3.5 h-3.5" />
              Air-Gapped
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Grid / Table */}
      <div className="space-y-3">
        {filteredJobs.map((job) => {
          const progressPercent = Math.round((job.completedSheets / job.totalSheets) * 100);

          return (
            <div
              key={job.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg shrink-0 ${
                    job.priority === 'CRITICAL'
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                      : job.priority === 'URGENT'
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    <FileText className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-slate-400">{job.id}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                        job.priority === 'CRITICAL'
                          ? 'bg-red-950 text-red-300 border border-red-800'
                          : job.priority === 'URGENT'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-blue-950 text-blue-300 border border-blue-800'
                      }`}>
                        {job.priority}
                      </span>
                      {job.confidential && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 font-mono flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Confidential
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-bold text-white mt-1">{job.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{job.department}</p>
                  </div>
                </div>

                {/* Right side stats */}
                <div className="flex items-center gap-6 text-xs shrink-0">
                  <div>
                    <div className="text-slate-400">Imposition & Paper:</div>
                    <div className="font-semibold text-slate-200 mt-0.5">{job.format}</div>
                    <div className="text-[11px] text-teal-400 font-mono">{job.gsm}</div>
                  </div>

                  <div className="text-right">
                    <div className="text-slate-400">Deadline SLA:</div>
                    <div className="font-bold text-white font-mono mt-0.5">{job.hoursRemaining}</div>
                    <div className="text-[11px] text-slate-500">{job.status}</div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-mono">
                  <span>
                    Progress: <strong className="text-white">{job.completedSheets.toLocaleString()}</strong> / {job.totalSheets.toLocaleString()} sheets
                  </span>
                  <span className="font-bold text-teal-400">{progressPercent}%</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      progressPercent === 100
                        ? 'bg-emerald-500'
                        : job.priority === 'CRITICAL'
                        ? 'bg-gradient-to-r from-teal-500 to-amber-500'
                        : 'bg-teal-500'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
