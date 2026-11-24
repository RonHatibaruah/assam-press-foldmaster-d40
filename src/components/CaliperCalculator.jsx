import React, { useState } from 'react';
import { Sliders, Check, Sparkles, RefreshCw, Layers, Calculator, ShieldCheck } from 'lucide-react';

export default function CaliperCalculator() {
  const [selectedPreset, setSelectedPreset] = useState('budget-16p');
  const [gsm, setGsm] = useState(70);
  const [bulkFactor, setBulkFactor] = useState(1.25); // cm³/g
  const [sheetWidth, setSheetWidth] = useState(584); // 23" in mm
  const [sheetLength, setSheetLength] = useState(457); // 18" in mm
  const [appliedState, setAppliedState] = useState(false);

  const presets = {
    'budget-16p': {
      name: "Assam Budget 16-Page Signature",
      gsm: 70,
      bulk: 1.25,
      width: 584,
      length: 457,
      scheme: "16-Page Right Angle Cross",
      plies: 16,
      paperType: "Cream Wove Book Paper"
    },
    'gazette-8p': {
      name: "Weekly Assam Gazette (Statutory)",
      gsm: 54,
      bulk: 1.18,
      width: 508,
      length: 381,
      scheme: "8-Page Parallel Accordion",
      plies: 8,
      paperType: "Regional Maplitho"
    },
    'assembly-bill': {
      name: "Legislative Assembly Bill",
      gsm: 60,
      bulk: 1.22,
      width: 457,
      length: 292,
      scheme: "4-Page Single Folio",
      plies: 4,
      paperType: "White Printing Paper"
    },
    'report-32p': {
      name: "Assembly Committee Annual Report",
      gsm: 80,
      bulk: 1.30,
      width: 635,
      length: 508,
      scheme: "32-Page Double Parallel",
      plies: 32,
      paperType: "Natural Shade Art Paper"
    }
  };

  const handlePresetChange = (key) => {
    setSelectedPreset(key);
    const p = presets[key];
    setGsm(p.gsm);
    setBulkFactor(p.bulk);
    setSheetWidth(p.width);
    setSheetLength(p.length);
    setAppliedState(false);
  };

  // Single sheet caliper (thickness in micrometers and millimeters)
  const singleSheetCaliperMm = (gsm * bulkFactor * 0.001);
  const singleSheetCaliperUm = Math.round(singleSheetCaliperMm * 1000);

  // Roller nip gaps for each folding station
  const roller1Gap = (singleSheetCaliperMm * 2 * 0.95).toFixed(3); // 2 plies
  const roller2Gap = (singleSheetCaliperMm * 4 * 0.92).toFixed(3); // 4 plies
  const knife1RollerGap = (singleSheetCaliperMm * 8 * 0.88).toFixed(3); // 8 plies
  const knife2RollerGap = (singleSheetCaliperMm * 16 * 0.85).toFixed(3); // 16 plies

  // Buckle stop distances in mm
  const buckle1StopMm = Math.round(sheetLength / 2);
  const buckle2StopMm = Math.round(sheetLength / 4);

  // Suction air timing
  const vacuumPulseMs = Math.round(18 + (gsm / 10)); // e.g. 25ms

  const handleApplyToPLC = () => {
    setAppliedState(true);
    setTimeout(() => {
      setAppliedState(false);
    }, 4000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-teal-500/20 text-teal-400 border border-teal-500/30">
              Automated Recipe & Caliper Engine
            </span>
            <span className="text-xs text-slate-400">Micro-Adjust Actuator Calculations</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Sliders className="w-5 h-5 text-teal-400" />
            Digital Fold Recipe & Plate Stopper Caliper
          </h2>
          <p className="text-sm text-slate-400">
            Replaces manual feeler gauges and trial sheet waste. Automatically adjusts roller gaps and motorized buckle stops in &lt;60s.
          </p>
        </div>

        {/* 1-Click Send to Machine */}
        <button
          onClick={handleApplyToPLC}
          className={`px-5 py-2.5 rounded-lg font-bold text-xs flex items-center gap-2 shadow-lg transition ${
            appliedState
              ? 'bg-emerald-600 text-white'
              : 'bg-teal-600 hover:bg-teal-500 text-white'
          }`}
        >
          {appliedState ? <Check className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
          {appliedState ? 'Synced with PLC Actuators!' : 'Sync Recipe with PLC Actuators'}
        </button>
      </div>

      {/* Preset Cards */}
      <div>
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
          1-Click Standard Government Publication Presets
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.entries(presets).map(([key, item]) => {
            const isSelected = selectedPreset === key;
            return (
              <button
                key={key}
                onClick={() => handlePresetChange(key)}
                className={`p-4 rounded-xl text-left border transition ${
                  isSelected
                    ? 'bg-teal-950/40 border-teal-500 shadow-md ring-1 ring-teal-500/50'
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.gsm} GSM
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-teal-400" />}
                </div>
                <h4 className="text-xs font-bold text-white mt-2 leading-snug">{item.name}</h4>
                <p className="text-[11px] text-slate-400 mt-1">{item.scheme}</p>
                <div className="text-[10px] text-slate-500 font-mono mt-2 pt-2 border-t border-slate-800/80">
                  {item.width} x {item.length} mm
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Caliper Calculations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Technical Calculation Output */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Calculator className="w-4 h-4 text-teal-400" />
              Calculated Actuator Setpoints for PLC
            </h3>
            <span className="text-[11px] font-mono text-teal-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              Tolerance: ±0.015 mm
            </span>
          </div>

          {/* Roller clearances grid */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Folding Roller Caliper Nips (Compression Compensated)
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-center">
                <div className="text-[10px] text-slate-400 font-mono">Roller Nip 1 (2 Plies)</div>
                <div className="text-lg font-mono font-bold text-teal-400 mt-1">{roller1Gap} mm</div>
                <div className="text-[9px] text-slate-500 mt-0.5">Parallel Fold 1</div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-center">
                <div className="text-[10px] text-slate-400 font-mono">Roller Nip 2 (4 Plies)</div>
                <div className="text-lg font-mono font-bold text-teal-400 mt-1">{roller2Gap} mm</div>
                <div className="text-[9px] text-slate-500 mt-0.5">Parallel Fold 2</div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-center">
                <div className="text-[10px] text-slate-400 font-mono">Cross Knife 1 (8 Plies)</div>
                <div className="text-lg font-mono font-bold text-amber-400 mt-1">{knife1RollerGap} mm</div>
                <div className="text-[9px] text-slate-500 mt-0.5">90° Cross Fold 1</div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg text-center">
                <div className="text-[10px] text-slate-400 font-mono">Cross Knife 2 (16 Plies)</div>
                <div className="text-lg font-mono font-bold text-purple-400 mt-1">{knife2RollerGap} mm</div>
                <div className="text-[9px] text-slate-500 mt-0.5">Final Signature Nip</div>
              </div>
            </div>
          </div>

          {/* Motorized Stopper Positions */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Motorized Linear Stepper Stops
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Buckle Stop #1:</span>
                  <span className="font-mono text-white font-bold">{buckle1StopMm} mm</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1 font-mono">Target: 50% sheet length</div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Buckle Stop #2:</span>
                  <span className="font-mono text-white font-bold">{buckle2StopMm} mm</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1 font-mono">Target: 25% sheet length</div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3 rounded-lg">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Suction Pulse Duration:</span>
                  <span className="font-mono text-teal-400 font-bold">{vacuumPulseMs} ms</span>
                </div>
                <div className="text-[10px] text-slate-500 mt-1 font-mono">Rotary drum suction valve</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Manual Parameter Adjuster */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-white mb-2">Fine-Tuning Adjuster</h3>

          <div className="space-y-4 text-xs">
            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>Base Grammage (GSM):</span>
                <span className="font-mono text-teal-400 font-bold">{gsm} GSM</span>
              </div>
              <input
                type="range"
                min="50"
                max="130"
                value={gsm}
                onChange={(e) => setGsm(Number(e.target.value))}
                className="w-full accent-teal-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-slate-400 mb-1">
                <span>Bulk Factor:</span>
                <span className="font-mono text-teal-400 font-bold">{bulkFactor} cm³/g</span>
              </div>
              <input
                type="range"
                min="1.0"
                max="1.6"
                step="0.05"
                value={bulkFactor}
                onChange={(e) => setBulkFactor(Number(e.target.value))}
                className="w-full accent-teal-500"
              />
            </div>

            <div className="p-3 bg-slate-950 rounded border border-slate-800 text-[11px] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-400">Single Sheet Caliper:</span>
                <span className="font-mono text-white font-bold">{singleSheetCaliperUm} µm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Total Signature (16 Plies):</span>
                <span className="font-mono text-amber-400 font-bold">{(singleSheetCaliperMm * 16).toFixed(2)} mm</span>
              </div>
            </div>

            <div className="p-3 bg-amber-950/20 border border-amber-800/40 rounded text-[11px] text-amber-300">
              <strong className="block text-white mb-1">Impact on Assam Press Operations:</strong>
              Manual changeover time of 35-45 minutes on legacy machines is reduced to under 45 seconds using motorized recipe positioning!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
