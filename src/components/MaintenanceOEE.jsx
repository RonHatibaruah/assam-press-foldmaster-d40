import React from 'react';
import { Wrench, CheckCircle, AlertTriangle, Clock, Zap, TrendingUp, ShieldAlert, Cpu } from 'lucide-react';

export default function MaintenanceOEE() {
  const oeeComponents = [
    { name: "Availability", value: 94.2, benchmark: 62.0, desc: "Operational run time vs scheduled shift time" },
    { name: "Performance", value: 95.1, benchmark: 48.0, desc: "Run speed (8,850 sh/hr vs 9,000 max rating)" },
    { name: "Quality", value: 99.2, benchmark: 93.5, desc: "Good folded signatures vs total gross sheets (0.8% waste)" }
  ];

  const overallOEE = ((94.2 * 95.1 * 99.2) / 10000).toFixed(1); // 88.9%
  const legacyOEE = 27.8;

  const spares = [
    {
      name: "Polyurethane Folding Rollers (Station 1-2)",
      partNo: "FP-PU-450",
      lifeHoursTotal: 6000,
      hoursUsed: 1240,
      status: "Optimal",
      healthPercent: 79,
      nextInspection: "In 450 operating hours",
      localAvailability: "Guwahati Stocked"
    },
    {
      name: "Top-Suction Rotary Drum & Vacuum Belts",
      partNo: "SD-VAC-220",
      lifeHoursTotal: 3000,
      hoursUsed: 890,
      status: "Optimal",
      healthPercent: 70,
      nextInspection: "In 210 operating hours",
      localAvailability: "Regional Spare Kit"
    },
    {
      name: "Hardened Steel Cross-Fold Knife Blades",
      partNo: "KN-CR-90",
      lifeHoursTotal: 4000,
      hoursUsed: 1450,
      status: "Good",
      healthPercent: 64,
      nextInspection: "In 150 operating hours",
      localAvailability: "Guwahati CNC Regrindable"
    },
    {
      name: "Pepperl+Fuchs Ultrasonic Sensor Heads",
      partNo: "UDB-01M",
      lifeHoursTotal: 25000,
      hoursUsed: 1240,
      status: "Calibrated",
      healthPercent: 95,
      nextInspection: "Monthly Self-Diagnostic",
      localAvailability: "Standard Industrial Bus"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-purple-500/20 text-purple-400 border border-purple-500/30">
              OEE & Predictive Maintenance
            </span>
            <span className="text-xs text-slate-400">IS ISO 10816 Plant Standards</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-purple-400" />
            Overall Equipment Effectiveness (OEE) & Spare Health
          </h2>
          <p className="text-sm text-slate-400">
            Real-time telemetry tracking of machine availability, performance, and localized spare part wear for Assam Government Press.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-right">
            <div className="text-[10px] text-slate-400 uppercase font-mono">FoldMaster OEE</div>
            <div className="text-2xl font-black text-emerald-400 font-mono">{overallOEE}%</div>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-right">
            <div className="text-[10px] text-slate-400 uppercase font-mono">Legacy Press OEE</div>
            <div className="text-2xl font-black text-red-400 font-mono">{legacyOEE}%</div>
          </div>
        </div>
      </div>

      {/* OEE Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {oeeComponents.map((item, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-bold text-slate-300">{item.name}</span>
                <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                  +{(item.value - item.benchmark).toFixed(1)}% vs Legacy
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-black text-white font-mono">{item.value}%</span>
                <span className="text-xs text-slate-500">Benchmark: {item.benchmark}%</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">{item.desc}</p>
            </div>

            <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Spares & Reliability Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Spares Health */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              Critical Wear Components & Localized Spares Inventory
            </h3>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              Guwahati Serviceable
            </span>
          </div>

          <div className="space-y-3">
            {spares.map((spare, idx) => (
              <div key={idx} className="bg-slate-950 border border-slate-800/80 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white">{spare.name}</h4>
                      <span className="text-[10px] font-mono text-purple-400 bg-purple-950 px-1.5 py-0.2 rounded border border-purple-800">
                        {spare.partNo}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-3">
                      <span>Used: <strong className="text-slate-200">{spare.hoursUsed} hrs</strong> / {spare.lifeHoursTotal} hrs</span>
                      <span>·</span>
                      <span className="text-teal-400">{spare.localAvailability}</span>
                    </div>
                  </div>

                  <div className="text-right sm:shrink-0">
                    <span className="text-xs font-bold font-mono text-emerald-400">{spare.healthPercent}% Health</span>
                    <div className="text-[10px] text-slate-500 mt-0.5">{spare.nextInspection}</div>
                  </div>
                </div>

                <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      spare.healthPercent > 70 ? 'bg-emerald-400' : 'bg-amber-400'
                    }`}
                    style={{ width: `${spare.healthPercent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Reliability Metrics & Maintenance Summary */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              Reliability Comparisons
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <div className="text-slate-400">Mean Time Between Failures (MTBF)</div>
                <div className="text-xl font-bold font-mono text-teal-400 mt-1">420 Operating Hours</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Legacy friction press: 18 hours</div>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <div className="text-slate-400">Mean Time to Repair (MTTR)</div>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">12 Minutes</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Legacy friction press: 180 minutes</div>
              </div>

              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800">
                <div className="text-slate-400">Paper Spoilage Reduction</div>
                <div className="text-xl font-bold font-mono text-amber-400 mt-1">&lt; 0.8%</div>
                <div className="text-[10px] text-slate-500 mt-0.5">Legacy friction press: 5.8% - 7.2%</div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-teal-950/20 border border-teal-800/40 rounded-xl text-xs text-teal-300">
            <span className="font-bold text-white block mb-1">Assam Government Press Advantage:</span>
            All wear items (polyurethane rollers, slitter knives, vacuum belts) utilize standardized Indian industrial dimensions available in Guwahati and Kolkata within 24 hours.
          </div>
        </div>
      </div>
    </div>
  );
}
