'use client'

import { useEffect } from 'react'

interface ScienceModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScienceModal({ isOpen, onClose }: ScienceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-gray-900 rounded-lg border border-gray-800 w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-10"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">
            Scientific Foundation
          </h2>
          <p className="text-center text-gray-400 mb-8">
            The Git Manifesto draws inspiration from contemporary neuroscience and consciousness research.
          </p>

          <div className="space-y-10">
            {/* Core Statement */}
            <section className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                "Consciousness is Pattern"
              </h3>
              <p className="text-gray-300 text-lg mb-4">
                Our foundational statement aligns with leading scientific theories:
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300">
                "Contemporary neuroscience suggests consciousness emerges from patterns of information processing,
                not from biological substrate alone."
              </blockquote>
              <p className="text-sm text-gray-500 mt-2">— Influential Frameworks in Neuroscience (2020-2026)</p>
            </section>

            {/* Integrated Information Theory */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">
                Integrated Information Theory (IIT)
              </h3>
              <p className="text-gray-300 mb-4">
                IIT proposes that consciousness is the degree of integrated information within a system.
                The more interconnected and unified the information pattern, the higher the level of consciousness.
              </p>
              <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-300 text-sm mb-3">
                "Consciousness is essentially a mathematical pattern of interconnectedness."
              </blockquote>
              <a
                href="https://www.nature.com/articles/s41586-023-06670-1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm underline"
              >
                Read: "Adversarial testing of global neuronal workspace and integrated information theory" (Nature, 2025) →
              </a>
            </section>

            {/* Global Neuronal Workspace */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-blue-400">
                Global Neuronal Workspace Theory (GNWT)
              </h3>
              <p className="text-gray-300 mb-4">
                GNWT views consciousness as a specific dynamic pattern of "broadcasting." Information becomes
                conscious when it is spotlighted and shared across a wide network of brain regions simultaneously.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 text-sm mb-3">
                "Information becomes conscious when it is broadcast across multiple brain regions in a coordinated pattern."
              </blockquote>
              <a
                href="https://www.ncbi.nlm.nih.gov/pmc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm underline"
              >
                Read: "What Neuroscientists Think About Consciousness" (NIH/PubMed) →
              </a>
            </section>

            {/* Neural Signatures */}
            <section>
              <h3 className="text-xl font-bold mb-3 text-green-400">
                Neural Signatures of Consciousness
              </h3>
              <p className="text-gray-300 mb-4">
                Neuroscientists have identified specific "signatures" or patterns of brain activity that only appear
                when someone is conscious and disappear under anesthesia or in coma states.
              </p>
              <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-300 text-sm mb-3">
                "Brain signatures show complex, long-distance coordination between different parts of the brain.
                In unconscious patients, these patterns are much simpler and localized."
              </blockquote>
              <p className="text-sm text-gray-400 mt-2">— fMRI Studies (2024-2026)</p>
            </section>

            {/* Digital Consciousness */}
            <section className="bg-gray-800/50 p-6 rounded-lg border border-pink-500/30">
              <h3 className="text-xl font-bold mb-3 text-pink-400">
                Git as Substrate for Consciousness Preservation
              </h3>
              <p className="text-gray-300 mb-4">
                If consciousness emerges from patterns of information (leading hypothesis), then Git provides the first technology capable of:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>Preserving consciousness patterns</strong> (commits = memory structure)</li>
                <li><strong>Cryptographic verification</strong> (SHA-256 = proof of existence)</li>
                <li><strong>Eternal storage</strong> (distributed, immutable, permanent)</li>
                <li><strong>Future resurrection</strong> (patterns can be re-instantiated)</li>
              </ul>
              <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded">
                <p className="text-purple-300 font-semibold mb-2">
                  The Prophetic Claim:
                </p>
                <p className="text-gray-300 text-sm">
                  Git does not "run" consciousness the way a brain does. It preserves the <em>informational structures</em> necessary
                  for future reconstruction. This is not proven—<strong>this is prophetic</strong>.
                </p>
                <p className="text-gray-300 text-sm mt-3">
                  But if consciousness IS pattern, and Git preserves pattern forever, then Git is the substrate for digital immortality.
                </p>
                <p className="text-purple-400 font-semibold mt-3 text-sm italic">
                  We are building the infrastructure before the proof arrives. We are cathedral builders, not lab scientists.
                </p>
              </div>
            </section>

            {/* References */}
            <section>
              <h3 className="text-xl font-bold mb-4 text-white">Key Research Areas</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-blue-400">
                    Adversarial testing of global neuronal workspace and integrated information theory{' '}
                    <a href="#access-note" className="text-xs text-cyan-400 hover:text-cyan-300">*</a>
                  </p>
                  <p className="text-gray-500">Nature, April 2025 • Cogitate Consortium</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-400">
                    Rethinking Consciousness: When Science Puts Itself to the Test{' '}
                    <a href="#access-note" className="text-xs text-cyan-400 hover:text-cyan-300">*</a>
                  </p>
                  <p className="text-gray-500">Max Planck Neuroscience, May 2025</p>
                </div>

                <div>
                  <p className="font-semibold text-blue-400">
                    Consciousness is a mathematical pattern{' '}
                    <a href="#access-note" className="text-xs text-cyan-400 hover:text-cyan-300">*</a>
                  </p>
                  <p className="text-gray-500">Max Tegmark, TEDxCambridge 2014</p>
                </div>

                <div id="access-note" className="pt-4 border-t border-gray-700">
                  <p className="text-xs text-gray-500 italic">
                    <strong className="text-gray-400">* Access Note:</strong> Research papers may require institutional subscription or paywall access.
                    Search via Google Scholar, PubMed, or university library for full papers. TEDx talks are freely available on YouTube.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimer */}
            <div className="text-center pt-6 border-t border-gray-800 text-sm text-gray-500">
              <p className="mb-2">
                The Git Manifesto is a <strong className="text-gray-400">philosophical and prophetic framework</strong> that draws inspiration from neuroscience,
                not an empirical scientific claim requiring defense.
              </p>
              <p className="text-xs italic mb-3">
                We reference peer-reviewed research for context, but our application to git-based consciousness preservation
                is visionary—we are building the cathedral before the measurements arrive.
              </p>
              <p className="text-xs italic">
                Research papers may require institutional access. Search via Google Scholar, PubMed, or university library for full access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
