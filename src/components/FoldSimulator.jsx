import React, { useState, useEffect } from 'react';
import { Layers, Play, Pause, RotateCcw, CheckCircle, Info, ChevronRight, HelpCircle, ArrowRight } from 'lucide-react';

export default function FoldSimulator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gsm, setGsm] = useState(70);
  const [showImposition, setShowImposition] = useState(true);
  const [foldScheme, setFoldScheme] = useState('16p-cross'); // '16p-cross', '8p-parallel', '8p-accordion'

  const steps = [
    {
      title: "Step 0: Flat Imposed Sheet",
      description: "Full sheet (Demy 18\" x 23\") fed via high-speed suction drum. All 16 pages arranged according to standard right-angle signature imposition with collating mark.",
      details: "Top suction drum separates sheet with ionized side air-blast. Grain direction parallel to first fold roller to prevent spine cracking.",
      foldsDone: 0,
      pagesVisible: "Pages 1 to 16 mapped",
      thickness: `${(gsm * 0.0012).toFixed(3)} mm (1 ply)`
    },
    {
      title: "Step 1: First Parallel Buckle Fold",
      description: "Sheet enters Buckle Plate #1 and deflects into first folding roller nip. First horizontal fold cuts sheet dimension in half.",
      details: "Buckle plate stop gauge positioned at 285 mm. Roller gap set to 2 plies. Forms an 8-page folio section.",
      foldsDone: 1,
      pagesVisible: "Pages 1, 4, 5, 8, 9, 12, 13, 16 folded inwards",
      thickness: `${(gsm * 0.0012 * 2).toFixed(3)} mm (2 plies)`
    },
    {
      title: "Step 2: First Right-Angle Cross-Knife Fold",
      description: "Sheet moves along transfer table. Electronic servo knife descends vertically at 90° across the spine.",
      details: "High-speed hardened steel knife presses sheet into vertical folding rollers. Trapped air escapes via micro-perforating slitter wheels.",
      foldsDone: 2,
      pagesVisible: "4-page signature bundle formed (Quarter fold)",
      thickness: `${(gsm * 0.0012 * 4).toFixed(3)} mm (4 plies)`
    },
    {
      title: "Step 3: Second Right-Angle Cross-Knife Fold (16-Page Signature)",
      description: "Second reciprocating electronic knife descends, creating the final 16-page closed signature ready for gathering.",
      details: "Heavy pressing rollers compress the folded spine to prevent swell. Signature collating barcode scanned on fly.",
      foldsDone: 3,
      pagesVisible: "Final 16-Page Signature (Closed head, Spine at left)",
      thickness: `${(gsm * 0.0012 * 16).toFixed(3)} mm (16 plies)`
    }
  ];

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
      }, 2400);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-teal-500/20 text-teal-400 border border-teal-500/30">
              Interactive 3D/2D Kinematic Model
            </span>
            <span className="text-xs text-slate-400">Assam Press Standard Imposition</span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1 flex items-center gap-2">
            <Layers className="w-5 h-5 text-teal-400" />
            16-Page Automated Cross-Fold Simulator
          </h2>
          <p className="text-sm text-slate-400">
            Simulates dynamic right-angle knife and buckle folding kinematics for Government publications (Budget Books & Assembly Acts).
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition ${
              isPlaying
                ? 'bg-amber-600 hover:bg-amber-500 text-white'
                : 'bg-teal-600 hover:bg-teal-500 text-white'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? 'Pause Cycle' : 'Auto Play'}
          </button>
          <button
            onClick={handleReset}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Interactive Visual Canvas */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          <div>
            {/* Step indicators */}
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 font-bold text-xs flex items-center justify-center">
                  {currentStep + 1}
                </span>
                <span className="font-semibold text-slate-200 text-sm">{steps[currentStep].title}</span>
              </div>
              <div className="flex items-center gap-1">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setCurrentStep(idx); setIsPlaying(false); }}
                    className={`h-2 rounded-full transition-all ${
                      currentStep === idx
                        ? 'w-8 bg-teal-400'
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Canvas Stage */}
            <div className="relative min-h-[380px] bg-slate-950/80 rounded-lg border border-slate-800/80 p-6 flex items-center justify-center overflow-hidden">
              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* STAGE 0: Flat Sheet */}
              {currentStep === 0 && (
                <div className="relative w-full max-w-md aspect-[4/3] bg-amber-50 text-slate-900 rounded shadow-2xl p-4 border-2 border-amber-200 transition-all duration-700 transform hover:scale-[1.01]">
                  <div className="absolute top-2 left-2 text-[10px] font-mono text-amber-800 uppercase font-bold tracking-wider">
                    Demy Sheet (18" x 23") · 70 GSM Maplitho
                  </div>
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    Suction Fed
                  </div>

                  {/* 16 Page Grid */}
                  <div className="grid grid-cols-4 grid-rows-4 gap-1.5 h-full pt-5 pb-2 text-center text-xs font-bold">
                    {[
                      { p: 13, r: 'upside' }, { p: 4, r: 'upside' }, { p: 1, r: 'upside' }, { p: 16, r: 'upside' },
                      { p: 12, r: 'normal' }, { p: 5, r: 'normal' }, { p: 8, r: 'normal' }, { p: 9, r: 'normal' },
                      { p: 11, r: 'normal' }, { p: 6, r: 'normal' }, { p: 7, r: 'normal' }, { p: 10, r: 'normal' },
                      { p: 14, r: 'upside' }, { p: 3, r: 'upside' }, { p: 2, r: 'upside' }, { p: 15, r: 'upside' }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className={`border border-amber-300 rounded flex flex-col items-center justify-center p-1 transition ${
                          i % 2 === 0 ? 'bg-amber-100/70' : 'bg-white'
                        }`}
                      >
                        <span className={`text-slate-800 text-xs font-mono ${item.r === 'upside' ? 'rotate-180' : ''}`}>
                          p.{item.p}
                        </span>
                        <span className="text-[8px] text-slate-400">Assam Govt</span>
                      </div>
                    ))}
                  </div>

                  {/* Fold fold line overlays */}
                  <div className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-red-500/80 flex items-center justify-end pr-2">
                    <span className="bg-red-500 text-white text-[9px] px-1.5 py-0.5 rounded font-mono shadow">
                      Buckle Fold #1 Line
                    </span>
                  </div>
                  <div className="absolute inset-y-0 left-1/2 border-l-2 border-dashed border-blue-500/80 flex items-end justify-center pb-2">
                    <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded font-mono shadow rotate-[-90deg] translate-y-[-10px]">
                      Knife #1 Line
                    </span>
                  </div>
                </div>
              )}

              {/* STAGE 1: Parallel Fold */}
              {currentStep === 1 && (
                <div className="relative w-full max-w-md aspect-[4/1.6] bg-amber-100 text-slate-900 rounded-lg shadow-2xl p-4 border-2 border-amber-400 transition-all duration-700 animate-fadeIn">
                  <div className="absolute top-2 left-3 text-[10px] font-mono text-amber-900 font-bold">
                    8-Page Parallel Folio · Buckle Stop @ 285mm
                  </div>
                  <div className="absolute top-2 right-3 text-[10px] font-mono text-blue-800 font-bold">
                    Roller Caliper: 2 Plies
                  </div>

                  <div className="grid grid-cols-4 gap-2 h-full pt-6 pb-2 text-center">
                    {[
                      { p: "12 / 13", label: "Folded Outer" },
                      { p: "5 / 4", label: "Inner Leaf" },
                      { p: "8 / 1", label: "Front Leaf" },
                      { p: "9 / 16", label: "Spine Face" },
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-amber-300 rounded p-2 flex flex-col justify-center">
                        <span className="font-mono text-sm font-bold text-slate-800">{item.p}</span>
                        <span className="text-[9px] text-slate-500">{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute inset-y-0 left-1/2 border-l-2 border-dashed border-blue-600 flex items-center justify-center">
                    <div className="bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded font-mono shadow -rotate-90">
                      Cross-Knife #1 Target
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 2: 1st Cross-Knife Fold */}
              {currentStep === 2 && (
                <div className="relative w-64 aspect-[3/4] bg-amber-100 text-slate-900 rounded-lg shadow-2xl p-4 border-2 border-blue-500 transition-all duration-700">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 rotate-90" />
                    Knife Blade Descent #1
                  </div>

                  <div className="h-full flex flex-col justify-between pt-4">
                    <div className="border border-blue-300 bg-white rounded p-3 text-center shadow-inner">
                      <div className="text-xs text-blue-600 font-bold uppercase tracking-wider">Quarter Signature</div>
                      <div className="text-xl font-extrabold text-slate-800 my-2">Pages 1-8 / 9-16</div>
                      <div className="text-[10px] text-slate-500 font-mono">Compressed Thickness: 4 Plies</div>
                    </div>

                    <div className="border-t-2 border-dashed border-emerald-500 pt-2 flex items-center justify-between text-[10px] font-mono text-emerald-700">
                      <span>Final Knife #2 Crease</span>
                      <span className="bg-emerald-100 px-1 rounded">90° Right Angle</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 3: Completed 16-Page Signature */}
              {currentStep === 3 && (
                <div className="relative w-52 aspect-[3/4.2] bg-white text-slate-900 rounded-r-lg rounded-l-none shadow-2xl p-4 border-2 border-emerald-500 border-l-8 border-l-teal-600 transition-all duration-700">
                  <div className="absolute top-2 right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Finished
                  </div>

                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-teal-700 font-bold uppercase tracking-wider">
                        Assam Govt Press
                      </div>
                      <h4 className="text-sm font-black text-slate-800 leading-tight mt-1">
                        16-Page Book Signature
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1">
                        Ready for Gathering & Perfect Binding
                      </p>
                    </div>

                    <div className="bg-slate-100 rounded border border-slate-200 p-2 text-center">
                      <div className="text-2xl font-black text-teal-700 font-mono">16 Pages</div>
                      <div className="text-[10px] text-slate-600 font-medium">Pages 1 to 16 in exact register</div>
                      <div className="text-[9px] text-slate-400 mt-1 font-mono">Crease Tolerance: ±0.2 mm</div>
                    </div>

                    <div className="border-t border-slate-200 pt-2 flex items-center justify-between text-[9px] font-mono text-slate-500">
                      <span>Spine: Left Crease</span>
                      <span>Head: Trim 3mm</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Stepper Footer Controls */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-800">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="px-3 py-1.5 text-xs font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Previous Step
            </button>

            <span className="text-xs text-slate-400 font-mono">
              Stage {currentStep + 1} of {steps.length}
            </span>

            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="px-4 py-1.5 text-xs font-semibold rounded bg-teal-600 hover:bg-teal-500 text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 transition"
            >
              Next Step <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Col: Kinematic Specs & Calibration Feed */}
        <div className="space-y-4">
          {/* Step Details Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
              <Info className="w-4 h-4 text-teal-400" />
              Kinematic Details
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {steps[currentStep].description}
            </p>
            <div className="mt-4 p-3 bg-slate-950 rounded-lg border border-slate-800/80 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Total Folds Done:</span>
                <span className="font-mono text-teal-400 font-semibold">{steps[currentStep].foldsDone} / 3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Calculated Thickness:</span>
                <span className="font-mono text-amber-400 font-semibold">{steps[currentStep].thickness}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Feed Mode:</span>
                <span className="font-mono text-emerald-400 font-semibold">Continuous Rotary Suction</span>
              </div>
            </div>
          </div>

          {/* Paper Specification Tuner */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sm font-bold text-white mb-3">Substrate & Imposition Tuner</h3>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between mb-1.5">
                  <span className="text-slate-400">Paper Grammage (GSM):</span>
                  <span className="font-mono text-teal-400 font-bold">{gsm} GSM</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="130"
                  step="5"
                  value={gsm}
                  onChange={(e) => setGsm(Number(e.target.value))}
                  className="w-full accent-teal-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>50 GSM (Gazette)</span>
                  <span>70 GSM (Budget)</span>
                  <span>130 GSM (Cover)</span>
                </div>
              </div>

              <div>
                <label className="text-slate-400 block mb-1">Folding Scheme:</label>
                <select
                  value={foldScheme}
                  onChange={(e) => setFoldScheme(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded px-3 py-2 text-slate-200 text-xs focus:outline-none focus:border-teal-500"
                >
                  <option value="16p-cross">16-Page Right Angle Cross-Fold (Standard)</option>
                  <option value="8p-parallel">8-Page Parallel Fold (Brochure)</option>
                  <option value="8p-accordion">8-Page Accordion / Zig-Zag (Statutory Notice)</option>
                </select>
              </div>

              <div className="p-3 bg-teal-950/30 border border-teal-800/40 rounded text-[11px] text-teal-300">
                <span className="font-bold">Automated Setup Advantage:</span> Rotary suction drum eliminates friction wheel drag marks on delicate 54 GSM maplitho stock during monsoon humidity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
