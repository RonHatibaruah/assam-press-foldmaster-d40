import React, { useState } from 'react';
import { proposalSections, supportingMaterial, leadApplicant } from '../data/proposalData';
import { FileText, Copy, Check, Search, Download, ExternalLink, BookmarkCheck, Shield, ChevronRight, UserCheck, Building, IndianRupee } from 'lucide-react';

export default function ProposalViewer() {
  const [activeSectionId, setActiveSectionId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [copiedAll, setCopiedAll] = useState(false);

  const activeSection = proposalSections.find((s) => s.id === activeSectionId) || proposalSections[0];

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCopyAll = () => {
    const fullText = proposalSections
      .map((s) => `### ${s.title}\nWord Count: ${s.wordCount} / 500\n\n${s.content}\n\n`)
      .join('---\n\n');
    navigator.clipboard.writeText(fullText);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2500);
  };

  const filteredSections = proposalSections.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Top Banner with Lead Applicant & Budget Highlights */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950/40 to-slate-900 border border-teal-500/40 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded bg-teal-500/20 text-teal-400 border border-teal-500/30 font-bold">
              NESFIC-D-40 Submission Dossier
            </span>
            <span className="px-2 py-0.5 text-xs rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono flex items-center gap-1 font-bold">
              <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
              Lead Applicant: {leadApplicant.name} ({leadApplicant.organization})
            </span>
            <span className="px-2 py-0.5 text-xs rounded bg-amber-950 text-amber-300 border border-amber-800 font-mono font-bold">
              Total Grant: ₹40 Lakhs · Software/Engg: ₹20 Lakhs
            </span>
          </div>
          <h2 className="text-xl font-bold text-white mt-1.5 flex items-center gap-2">
            <FileText className="w-5 h-5 text-teal-400" />
            Assam Startup Proposal Document Generator
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Complete, submission-ready narrative structured for the North East Seva First Innovation Challenge 2026. Strictly ≤ 500 words/section.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          <a
            href="/NESFIC-D40_Proposal_Document_FoldMaster.pdf"
            download
            className="px-3.5 py-2 rounded-lg font-bold text-xs bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 flex items-center gap-1.5 shadow transition shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            Download Proposal PDF (0.3 MB)
          </a>

          <a
            href="/NESFIC-D40_Proof_of_Work_Dossier_FoldMaster.pdf"
            download
            className="px-3.5 py-2 rounded-lg font-bold text-xs bg-teal-700 hover:bg-teal-600 text-white flex items-center gap-1.5 shadow transition shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            Download Proof of Work PDF (1.6 MB)
          </a>

          <button
            onClick={handleCopyAll}
            className={`px-3.5 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 shadow transition shrink-0 ${
              copiedAll
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
            }`}
          >
            {copiedAll ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            {copiedAll ? 'Copied All!' : 'Copy 12 Sections'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Col (4/12): Section Navigation Menu */}
        <div className="lg:col-span-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search proposal text..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-2 space-y-1 max-h-[640px] overflow-y-auto">
            {filteredSections.map((sec) => {
              const isActive = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectionId(sec.id)}
                  className={`w-full text-left p-3 rounded-lg text-xs transition flex flex-col justify-between ${
                    isActive
                      ? 'bg-teal-950/60 border border-teal-500/50 text-white'
                      : 'hover:bg-slate-800/60 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold truncate max-w-[210px]">{sec.title}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-teal-400 shrink-0 border border-slate-800">
                      {sec.wordCount}/500w
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate mt-1">{sec.summary}</p>
                </button>
              );
            })}

            {/* Supporting material link button */}
            <button
              onClick={() => setActiveSectionId(13)}
              className={`w-full text-left p-3 rounded-lg text-xs transition flex items-center justify-between ${
                activeSectionId === 13
                  ? 'bg-amber-950/60 border border-amber-500/50 text-white'
                  : 'hover:bg-slate-800/60 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold">03. Supporting Material & Proof of Work</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Right Col (8/12): Active Section Detail View & Copy Box */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
          {activeSectionId <= 12 ? (
            <div>
              {/* Header inside viewer */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950 border border-teal-800 text-teal-300 font-bold">
                      Section {activeSection.id} of 12
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      {activeSection.wordCount} words (Under 500 word limit)
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">{activeSection.title}</h3>
                </div>

                <button
                  onClick={() => handleCopy(activeSection.id, activeSection.content)}
                  className={`px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-1.5 shrink-0 shadow transition ${
                    copiedId === activeSection.id
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  {copiedId === activeSection.id ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedId === activeSection.id ? 'Copied to Clipboard!' : 'Copy Section'}
                </button>
              </div>

              {/* Prose Content */}
              <div className="mt-5 text-sm text-slate-200 leading-relaxed font-sans whitespace-pre-line bg-slate-950 p-5 rounded-lg border border-slate-800/80 max-h-[500px] overflow-y-auto">
                {activeSection.content}
              </div>
            </div>
          ) : (
            /* Supporting Material View */
            <div className="space-y-5">
              <div className="pb-3 border-b border-slate-800">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-300 font-bold">
                  Section 03
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  03. Supporting Material & Proof of Work Dossier
                </h3>
              </div>

              {/* Upload POW Box */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-red-950/40 text-red-400 rounded-lg border border-red-800/50">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{supportingMaterial.powDossier.title}</h4>
                      <p className="text-xs text-slate-400">
                        {supportingMaterial.powDossier.size} · Lead: <strong>{leadApplicant.name}</strong> ({leadApplicant.organization})
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950 px-2 py-1 rounded border border-emerald-800">
                      Grant: ₹40L Total
                    </span>
                    <div className="text-[10px] font-mono text-teal-400 mt-1">Software/Engg: ₹20L</div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-xs">
                  <span className="font-bold text-slate-300 block mb-2">Included Artifacts in Dossier:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400">
                    {supportingMaterial.powDossier.sections.map((sec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                        <span className="truncate">{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* URLs Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Demo / Product Video URL</div>
                  <a
                    href={supportingMaterial.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-teal-400 hover:underline mt-2 flex items-center gap-1 break-all"
                  >
                    {supportingMaterial.demoUrl}
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>

                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Product / Website URL (Live)</div>
                  <a
                    href={supportingMaterial.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-teal-400 hover:underline mt-2 flex items-center gap-1 break-all"
                  >
                    {supportingMaterial.websiteUrl} (Live Dev Server)
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Regional & GEO Data Box */}
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-teal-400 shrink-0" />
                  <span className="text-slate-300">
                    Target Facility: <strong>Assam Government Press</strong>, Bamunimaidam, Guwahati, Assam 781021
                  </span>
                </div>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
                  GEO: 26.1856° N, 91.7777° E
                </span>
              </div>
            </div>
          )}

          {/* Footer Navigation */}
          <div className="mt-5 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <span>Official Problem Statement: <strong>NESFIC-D-40</strong></span>
            <span>{leadApplicant.copyright} · Lead: {leadApplicant.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
