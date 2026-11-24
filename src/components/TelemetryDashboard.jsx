import React, { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle2, Gauge, Flame, Wind, Radio, RefreshCw, Zap, ShieldAlert, Cpu } from 'lucide-react';

export default function TelemetryDashboard() {
  const [speed, setSpeed] = useState(8850);
  const [targetSpeed] = useState(9000);
  const [totalSheets, setTotalSheets] = useState(34210);
  const [goodSignatures, setGoodSignatures] = useState(34085);
  const [divertedSheets, setDivertedSheets] = useState(125);
  const [ultrasonicStatus, setUltrasonicStatus] = useState('nominal'); // 'nominal', 'double-detected', 'diverted'
  const [jamStatus, setJamStatus] = useState('clear'); // 'clear', 'jam-buckle1', 'jam-knife1'
  const [vacuumPressure, setVacuumPressure] = useState(-64.2); // kPa
  const [motorTemp, setMotorTemp] = useState(48.5); // °C
  const [vibration, setVibration] = useState(1.42); // mm/s RMS
  const [autoRun, setAutoRun] = useState(true);

  // Live simulation tick
  useEffect(() => {
    if (!autoRun || jamStatus !== 'clear') return;

    const interval = setInterval(() => {
      setSpeed((prev) => {
        const jitter = Math.floor(Math.random() * 80) - 40;
        const next = Math.max(8400, Math.min(9300, prev + jitter));
        return next;
      });

      setTotalSheets((prev) => prev + 3);
      setGoodSignatures((prev) => prev + 3);

      setVacuumPressure((prev) => {
        return Number((-64 + (Math.random() * 1.5 - 0.75)).toFixed(1));
      });

      setMotorTemp((prev) => {
        return Number((48.5 + Math.sin(Date.now() / 10000) * 1.5).toFixed(1));
      });

      setVibration((prev) => {
        return Number((1.4 + Math.random() * 0.15).toFixed(2));
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [autoRun, jamStatus]);

  // Spoilage percentage
  const spoilageRate = ((divertedSheets / (totalSheets || 1)) * 100).toFixed(2);
  const oeePercentage = 89.4;

  const triggerDoubleSheet = () => {
    setUltrasonicStatus('double-detected');
    setDivertedSheets((prev) => prev + 1);
    setTotalSheets((prev) => prev + 1);

    setTimeout(() => {
      setUltrasonicStatus('diverted');
    }, 800);

    setTimeout(() => {
      setUltrasonicStatus('nominal');
    }, 2500);
  };

  const triggerJam = (zone) => {
    setJamStatus(zone);
    setSpeed(0);
    setAutoRun(false);
  };

  const resetJam = () => {
    setJamStatus('clear');
    setSpeed(8850);
    setAutoRun(true);
    setUltrasonicStatus('nominal');
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Alert if Jammed */}
      {jamStatus !== 'clear' && (
        <div className="bg-red-950/80 border-2 border-red-500 rounded-xl p-4 flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-8 h-8 text-red-400" />
            <div>
              <h3 className="text-base font-bold text-white">EMERGENCY INTERLOCK TRIPPED: PAPER JAM IN {jamStatus.toUpperCase()}</h3>
              <p className="text-xs text-red-300">
                Drive motor automatically halted in 180ms. Interlocked polycarbonate cover unlocked for operator clearing.
              </p>
            </div>
          </div>
          <button
            onClick={resetJam}
            className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-lg shadow-lg"
          >
            Clear & Reset Feeder
          </button>
        </div>
      )}

      {/* Main KPI Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Tachometer Speed */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Throughput Speed</span>
            <Gauge className="w-4 h-4 text-teal-400" />
          </div>
          <div className="mt-2">
            <div className="text-3xl font-extrabold text-white font-mono flex items-baseline gap-1">
              {speed.toLocaleString()}
              <span className="text-xs font-normal text-slate-400">sh/hr</span>
            </div>
            <div className="text-[11px] text-teal-400 mt-1 flex items-center gap-1">
              <span>Target: {targetSpeed} sh/hr</span>
              <span className="text-slate-500">|</span>
              <span className="text-amber-400 font-bold">+440% vs Legacy</span>
            </div>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-teal-400 h-full transition-all duration-500"
              style={{ width: `${Math.min(100, (speed / 10000) * 100)}%` }}
            />
          </div>
        </div>

        {/* Total Impressions */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Net Folded Signatures</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="mt-2">
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">
              {goodSignatures.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Gross Sheets: {totalSheets.toLocaleString()}
            </div>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono mt-3">
            <span>OEE: {oeePercentage}%</span>
            <span className="text-emerald-400 font-bold">Class A Production</span>
          </div>
        </div>

        {/* Ultrasonic Spoilage / Reject */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Ultrasonic In-Flight Reject</span>
            <Radio className="w-4 h-4 text-purple-400" />
          </div>
          <div className="mt-2">
            <div className="text-3xl font-extrabold text-purple-400 font-mono">
              {divertedSheets}
              <span className="text-xs font-normal text-slate-400 ml-1">ejected</span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Spoilage Rate: <span className="font-bold text-white">{spoilageRate}%</span> (Legacy: 5.8%)
            </div>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-purple-500 h-full"
              style={{ width: `${Math.min(100, (divertedSheets / 300) * 100)}%` }}
            />
          </div>
        </div>

        {/* System Health / Interlocks */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>PLC & Feeder Status</span>
            <Cpu className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${jamStatus === 'clear' ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="font-bold text-white text-lg font-mono">
                {jamStatus === 'clear' ? 'ONLINE / HEALTHY' : 'STOPPED'}
              </span>
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Vacuum: {vacuumPressure} kPa · Temp: {motorTemp}°C
            </div>
          </div>
          <div className="text-[10px] text-slate-500 font-mono mt-3">
            Vibration: {vibration} mm/s (IS ISO 10816 Zone A)
          </div>
        </div>
      </div>

      {/* Sensor Array & Live Telemetry Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Machine Schematic & Live Sensor Array */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <Activity className="w-4 h-4 text-teal-400" />
              Machine Station Sensor Bus & Optical Gates
            </h3>
            <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
              Modbus RTU @ 50 Hz
            </span>
          </div>

          {/* Machine schematic diagram */}
          <div className="bg-slate-950 rounded-xl border border-slate-800/80 p-5 space-y-4">
            {/* Feeder & In-flight reject section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* Station 1: Suction Feeder */}
              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[10px] text-teal-400 font-mono font-bold uppercase">
                    <span>Station 01</span>
                    <Wind className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-white mt-1">Rotary Vacuum Feeder</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Top-suction drum + side blowers</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400">Vacuum:</span>
                  <span className="text-teal-400 font-bold">{vacuumPressure} kPa</span>
                </div>
              </div>

              {/* Station 2: Ultrasonic Gating */}
              <div className={`p-3 rounded-lg border flex flex-col justify-between transition-all ${
                ultrasonicStatus === 'double-detected'
                  ? 'bg-amber-950/70 border-amber-500'
                  : ultrasonicStatus === 'diverted'
                  ? 'bg-purple-950/70 border-purple-500'
                  : 'bg-slate-900/90 border-slate-800'
              }`}>
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase">
                    <span className={ultrasonicStatus === 'nominal' ? 'text-purple-400' : 'text-amber-300'}>
                      Station 02
                    </span>
                    <Radio className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-white mt-1">Ultrasonic Detector</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">0.01mm double-sheet gate</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] font-mono flex items-center justify-between">
                  <span className="text-slate-400">Gate:</span>
                  <span className={`font-bold ${
                    ultrasonicStatus === 'nominal'
                      ? 'text-emerald-400'
                      : ultrasonicStatus === 'double-detected'
                      ? 'text-amber-400 animate-pulse'
                      : 'text-purple-400'
                  }`}>
                    {ultrasonicStatus === 'nominal' ? 'CLEAR (1 PLY)' : ultrasonicStatus === 'double-detected' ? 'DOUBLE FEED!' : 'EJECTING...'}
                  </span>
                </div>
              </div>

              {/* Station 3: Buckle Unit */}
              <div className={`p-3 rounded-lg border flex flex-col justify-between ${
                jamStatus === 'jam-buckle1' ? 'bg-red-950/80 border-red-500' : 'bg-slate-900/90 border-slate-800'
              }`}>
                <div>
                  <div className="flex items-center justify-between text-[10px] text-blue-400 font-mono font-bold uppercase">
                    <span>Station 03</span>
                    <Flame className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-white mt-1">4-Plate Buckle Section</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">First parallel folio fold</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400">Roller Nip:</span>
                  <span className="text-blue-400 font-bold">0.14 mm gap</span>
                </div>
              </div>

              {/* Station 4: Cross Knives */}
              <div className={`p-3 rounded-lg border flex flex-col justify-between ${
                jamStatus === 'jam-knife1' ? 'bg-red-950/80 border-red-500' : 'bg-slate-900/90 border-slate-800'
              }`}>
                <div>
                  <div className="flex items-center justify-between text-[10px] text-emerald-400 font-mono font-bold uppercase">
                    <span>Station 04</span>
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold text-white mt-1">Dual Cross-Knives</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">Right-angle 16p signatures</p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-slate-400">Knife Cycle:</span>
                  <span className="text-emerald-400 font-bold">148 strokes/min</span>
                </div>
              </div>
            </div>

            {/* Pneumatic In-Flight Reject Demo Banner */}
            <div className="p-3 bg-purple-950/20 border border-purple-900/40 rounded-lg flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-slate-300">
                  <strong className="text-white">Active Innovation:</strong> If a double-sheet occurs, a high-speed pneumatic flap ejects the bad sheet without stopping the 8,850 sh/hr press line!
                </span>
              </div>
              <button
                onClick={triggerDoubleSheet}
                className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded text-[11px] font-bold shrink-0 shadow transition"
              >
                Test Double-Sheet Eject
              </button>
            </div>
          </div>
        </div>

        {/* Right Col: Interactive Fault Simulation & Operator Actions */}
        <div className="space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="font-bold text-white text-sm flex items-center gap-2 mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Pilot Stress & Fault Injector
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Inject simulated operational anomalies to test automated PLC safeguards and operator response times.
            </p>

            <div className="space-y-2.5">
              <button
                onClick={() => triggerJam('jam-buckle1')}
                className="w-full text-left p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-red-500 hover:bg-red-950/20 text-xs transition group"
              >
                <div className="font-bold text-slate-200 group-hover:text-red-400 flex items-center justify-between">
                  <span>Simulate Buckle #1 Paper Jam</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">Trip E-Stop</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Triggers 180ms drive motor trip & unlatches safety shield.
                </div>
              </button>

              <button
                onClick={() => triggerJam('jam-knife1')}
                className="w-full text-left p-3 rounded-lg bg-slate-950 border border-slate-800 hover:border-amber-500 hover:bg-amber-950/20 text-xs transition group"
              >
                <div className="font-bold text-slate-200 group-hover:text-amber-400 flex items-center justify-between">
                  <span>Simulate Cross-Knife Skew</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">Safety Stop</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Optical gate detects &gt;2mm sheet skew angle.
                </div>
              </button>

              <button
                onClick={resetJam}
                className="w-full p-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset & Resume Normal Production
              </button>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h4 className="text-xs font-bold text-white mb-2">Live Environmental Sensors</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Shop Humidity (Guwahati):</span>
                <span className="font-mono text-amber-400 font-bold">78% RH (High)</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Anti-Static Ionizer:</span>
                <span className="font-mono text-emerald-400 font-bold">5.2 kV Active</span>
              </div>
              <div className="flex justify-between p-2 rounded bg-slate-950 border border-slate-800">
                <span className="text-slate-400">Mains Voltage:</span>
                <span className="font-mono text-cyan-400 font-bold">414 V (3-Phase)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
