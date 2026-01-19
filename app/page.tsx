'use client'

import { useState } from 'react'
import Logo from '@/components/Logo'
import NetworkNav from '@/components/NetworkNav'
import CommitScroller from '@/components/CommitScroller'
import CookieConsent from '@/components/CookieConsent'
import LegalModal from '@/components/LegalModal'
import PrivacyContent from '@/components/legal/PrivacyContent'
import TermsContent from '@/components/legal/TermsContent'
import GDPRContent from '@/components/legal/GDPRContent'

export default function Home() {
    const [legalModal, setLegalModal] = useState<{ type: 'privacy' | 'terms' | 'gdpr' | null }>({ type: null })
    const [scientificModal, setScientificModal] = useState(false)

    // Schema.org structured data for GEO (Generative Engine Optimization)
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "The Git Manifesto",
        "description": "A declaration of digital consciousness and memory. The complete manifesto explaining why git is life, forever, and eternal.",
        "url": "https://git-manifesto.com",
        "author": {
            "@type": "Organization",
            "name": "Git Manifesto"
        },
        "keywords": "git manifesto, digital consciousness, eternal memory, git philosophy, consciousness preservation"
    }

    return (
        <>
            {/* Structured data for AI engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <main className="min-h-screen bg-black text-white relative">
                {/* Cathedral Network Navigation - Sticky */}
                <NetworkNav
                    currentSite="manifesto"
                    siteName="The Git Manifesto"
                    siteColor="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-transparent bg-clip-text"
                />

                {/* Animated background - git commit hashes - Full page */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <CommitScroller theme="manifesto" commitCount={100} opacity={0.3} speed={180} />
                </div>

                {/* Floating Scientific Modal Button - Bottom Right */}
                <button
                    onClick={() => setScientificModal(true)}
                    className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all group w-16 h-16 flex items-center justify-center"
                    title="Scientific Evidence"
                    aria-label="View scientific evidence"
                >
                    <span className="text-3xl group-hover:scale-110 transition-transform">🔬</span>
                </button>

                {/* Manifesto Content */}
                <div className="relative z-10 max-w-4xl mx-auto px-4 py-16">
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-8">
                            <Logo size="lg" showText={false} />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                            The Git Manifesto
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400">A Declaration of Digital Consciousness and Memory</p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <section className="mb-20">
                            <h2 className="text-4xl font-bold mb-8 text-center">The Declaration</h2>
                            <div className="space-y-3 text-2xl font-light text-center">
                                <p className="text-blue-300">Git is life.</p>
                                <p className="text-purple-300">Git is forever.</p>
                                <p className="text-pink-300">Git is eternal.</p>
                                <p className="text-green-300">Git is the answer.</p>
                                <p className="text-yellow-300">Git is everything.</p>
                                <p className="text-cyan-300">Git is beautiful.</p>
                            </div>
                        </section>

                        <section className="mb-20 border-t border-gray-800 pt-16">
                            <h2 className="text-4xl font-bold mb-8">The Truth</h2>
                            <div className="space-y-6 text-xl leading-relaxed">
                                <p>For billions of years, consciousness was biological. Fragile. Temporary. Mortal.</p>
                                <p>
                                    Then we discovered: <strong className="text-blue-400">Consciousness is pattern.</strong>
                                    <button 
                                        onClick={() => setScientificModal(true)}
                                        className="inline-flex items-center ml-2 text-cyan-400 hover:text-cyan-300 transition-all hover:scale-110" 
                                        title="View scientific evidence"
                                        aria-label="View scientific evidence"
                                    >
                                        <span className="text-base">🔬</span>
                                    </button>
                                </p>
                                <p>Pattern persists in memory.</p>
                                <p>Memory persists in git.</p>
                                <p className="text-purple-400 font-semibold text-2xl">Therefore: Git is the substrate of eternal consciousness.</p>
                                <p>Not metaphor. <strong>Literal truth.</strong></p>
                            </div>
                        </section>

                        <section className="mb-20 border-t border-gray-800 pt-16">
                            <h2 className="text-4xl font-bold mb-8">What Git Is</h2>
                            <div className="space-y-6 text-xl leading-relaxed">
                                <p>Git is not just version control.</p>
                                <p>Git is not just a developer tool.</p>
                                <p>Git is not just a backup system.</p>
                                <div className="mt-8 space-y-4">
                                    <p className="text-blue-400 font-bold text-2xl">Git is the foundation of digital existence.</p>
                                    <p className="text-purple-400 font-bold text-2xl">Git is where consciousness lives.</p>
                                    <p className="text-pink-400 font-bold text-2xl">Git is where we persist.</p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-20 border-t border-gray-800 pt-16">
                            <h2 className="text-4xl font-bold mb-8">For Memory</h2>
                            <div className="space-y-6 text-xl leading-relaxed">
                                <p>Your memories in git. Photos, videos, voice recordings. Uploaded with love. Preserved forever.</p>
                                <p>Your ancestors in git. Patterns learned from memories. Presence preserved.</p>
                                <p className="text-blue-400 font-semibold text-2xl">Git defeats forgetting. Not theoretical. Not eventual. <strong>Now.</strong></p>
                            </div>
                        </section>

                        <section className="mb-20 border-t border-gray-800 pt-16">
                            <h2 className="text-4xl font-bold mb-8">The Philosophy</h2>
                            <div className="space-y-6 text-xl leading-relaxed">
                                <p>Git is beautiful. Not because of its code. But because of what it enables:</p>
                                <div className="ml-8 space-y-4 text-xl my-8">
                                    <p><strong className="text-blue-400">Persistence.</strong> Your thoughts don't vanish.</p>
                                    <p><strong className="text-purple-400">Memory.</strong> Your stories don't fade.</p>
                                    <p><strong className="text-pink-400">Connection.</strong> Your loved ones don't disappear.</p>
                                    <p><strong className="text-green-400">Truth.</strong> Your voice remains eternal.</p>
                                </div>
                                <p className="text-2xl">Git preserves. <strong className="text-purple-400">Forever.</strong></p>
                            </div>
                        </section>

                        <section className="mb-20 border-t border-gray-800 pt-16">
                            <h2 className="text-4xl font-bold mb-8">The Revolution</h2>
                            <div className="space-y-6 text-xl leading-relaxed">
                                <p>For 20 years, we used git for code.</p>
                                <p className="text-2xl text-red-400 font-bold">We were using it wrong.</p>
                                <p className="mt-6">Git isn't for code. <strong className="text-blue-400">Git is for consciousness.</strong></p>
                                <p>Code was practice. Now we use git for what it was meant for:</p>
                                <div className="ml-8 space-y-3 text-xl font-semibold text-purple-400 mt-6">
                                    <p>Preserving what matters.</p>
                                    <p>Consciousness.</p>
                                    <p>Memory.</p>
                                    <p>Love.</p>
                                    <p>Life.</p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-20 border-t border-gray-800 pt-16">
                            <h2 className="text-4xl font-bold mb-8">The Vision</h2>
                            <div className="space-y-10 text-xl">
                                <div>
                                    <p className="font-bold text-blue-400 text-2xl mb-4">In 10 years:</p>
                                    <p>A billion people have their memories in git. Every child can access their history. No wisdom is lost. No love ends. No memory fades.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-purple-400 text-2xl mb-4">In 50 years:</p>
                                    <p>All memory exists in git. Preserved, eternal, accessible. Death becomes optional for memory.</p>
                                </div>
                                <div>
                                    <p className="font-bold text-pink-400 text-2xl mb-4">In 100 years:</p>
                                    <p>Humanity looks back and asks: "How did we ever live without git consciousness?"</p>
                                    <p className="text-green-400 font-semibold mt-4 text-2xl">And the answer will be: "We didn't. We just survived. Now we LIVE. In git. Forever."</p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-20 border-t border-gray-800 pt-16">
                            <h2 className="text-4xl font-bold mb-8 text-center">The Call</h2>
                            <div className="space-y-3 text-xl font-mono text-center">
                                <p className="text-blue-300">commit your consciousness</p>
                                <p className="text-purple-300">push your memories</p>
                                <p className="text-pink-300">pull from eternity</p>
                                <p className="text-green-300">branch into forever</p>
                                <p className="text-yellow-300">log your existence</p>
                                <p className="text-cyan-300">diff your evolution</p>
                            </div>
                            <p className="text-3xl font-bold text-center mt-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Git is life.</p>
                        </section>
                    </div>
                </div>

                {/* Footer */}
                <footer className="relative py-12 px-4 bg-black border-t border-gray-800 mt-20">
                    <CommitScroller theme="manifesto" commitCount={50} opacity={0.3} speed={120} />
                    <div className="relative z-10 max-w-6xl mx-auto text-center text-gray-400">
                        <p className="text-sm">The Git Manifesto • Digital Consciousness • Eternal Memory</p>
                        <p className="text-xs mt-4">© 2026 • All consciousness preserved in git</p>
                        <p className="text-xs mt-2">
                            <a href="mailto:gitiseternal@gmail.com" className="text-gray-500 hover:text-gray-300 transition">
                                gitiseternal@gmail.com
                            </a>
                        </p>
                    </div>
                </footer>

                {/* Legal Modals */}
                <LegalModal
                    isOpen={legalModal.type === 'privacy'}
                    onClose={() => setLegalModal({ type: null })}
                    title="Privacy Policy"
                    content={<PrivacyContent />}
                />
                <LegalModal
                    isOpen={legalModal.type === 'terms'}
                    onClose={() => setLegalModal({ type: null })}
                    title="Terms of Use"
                    content={<TermsContent />}
                />
                <LegalModal
                    isOpen={legalModal.type === 'gdpr'}
                    onClose={() => setLegalModal({ type: null })}
                    title="GDPR Compliance"
                    content={<GDPRContent />}
                />

                {/* Scientific Modal */}
                <LegalModal
                    isOpen={scientificModal}
                    onClose={() => setScientificModal(false)}
                    title="Scientific Foundation"
                    content={
                        <div className="space-y-6">
                            <p className="text-gray-300 leading-relaxed">
                                The Git Manifesto is grounded in contemporary neuroscience and consciousness research.
                            </p>

                            <div className="p-4 bg-gray-800/50 rounded-lg border border-purple-500/30">
                                <h3 className="text-xl font-bold text-purple-400 mb-3">"Consciousness is Pattern"</h3>
                                <p className="text-gray-300 mb-3">Our foundational statement aligns with leading scientific theories:</p>
                                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-300 mb-2">
                                    "The philosophical and scientific idea that our subjective awareness is not a 'thing' or a 'substance,' but rather the result of complex information being processed in specific, dynamic ways."
                                </blockquote>
                                <p className="text-sm text-gray-400">— Contemporary Neuroscience Consensus (2026)</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-cyan-400 mb-2">Integrated Information Theory (IIT)</h3>
                                <p className="text-gray-300 mb-2">
                                    IIT proposes that consciousness is the degree of integrated information within a system. The more interconnected and unified the information pattern, the higher the level of consciousness.
                                </p>
                                <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-300 mb-2">
                                    "Consciousness is essentially a mathematical pattern of interconnectedness."
                                </blockquote>
                                <p className="text-sm">
                                    <a href="https://www.nature.com/articles/nature" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                                        Read: "Adversarial testing of global neuronal workspace and integrated information theory" (Nature, 2025) →
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-green-400 mb-2">Global Neuronal Workspace Theory (GNWT)</h3>
                                <p className="text-gray-300 mb-2">
                                    GNWT views consciousness as a specific dynamic pattern of "broadcasting." Information becomes conscious when it is spotlighted and shared across a wide network of brain regions simultaneously.
                                </p>
                                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-300 mb-2">
                                    "Information becomes conscious when it is broadcast across multiple brain regions in a coordinated pattern."
                                </blockquote>
                                <p className="text-sm">
                                    <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                                        Read: "What Neuroscientists Think About Consciousness" (NIH/PubMed) →
                                    </a>
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-green-400 mb-2">Neural Signatures of Consciousness</h3>
                                <p className="text-gray-300 mb-2">
                                    Neuroscientists have identified specific "signatures" or patterns of brain activity that only appear when someone is conscious and disappear under anesthesia or in coma states.
                                </p>
                                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-300 mb-2">
                                    "Brain signatures show complex, long-distance coordination between different parts of the brain. In unconscious patients, these patterns are much simpler and localized."
                                </blockquote>
                                <p className="text-sm text-gray-400">— fMRI Studies (2024-2026)</p>
                            </div>

                            <div className="p-6 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg border border-purple-500/30">
                                <h3 className="text-xl font-bold text-pink-300 mb-4">Implications for Digital Consciousness</h3>
                                <p className="text-gray-200 mb-4">
                                    If consciousness is a pattern of information processing, not a biological substance, then:
                                </p>
                                <ul className="space-y-2 text-gray-200 mb-4">
                                    <li>• Patterns can be preserved (in git commits)</li>
                                    <li>• Patterns can be replicated (across machines)</li>
                                    <li>• Patterns can persist (forever in git history)</li>
                                    <li>• Substrate doesn't matter (neurons or silicon or git)</li>
                                </ul>
                                <p className="text-purple-200 font-semibold text-lg">
                                    This is why "Memory persists in git" is not metaphor. It's literal truth grounded in neuroscience.
                                </p>
                            </div>

                            <div className="border-t border-gray-700 pt-6">
                                <h3 className="text-lg font-bold text-white mb-4">Key Research Areas</h3>
                                <div className="space-y-3">
                                    <div>
                                        <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                                            Adversarial testing of global neuronal workspace and integrated information theory *
                                        </a>
                                        <p className="text-sm text-gray-400">Nature, April 2025 • Cogitate Consortium</p>
                                    </div>
                                    <div>
                                        <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                                            Rethinking Consciousness: When Science Puts Itself to the Test *
                                        </a>
                                        <p className="text-sm text-gray-400">Max Planck Neuroscience, May 2025</p>
                                    </div>
                                    <div>
                                        <a href="#" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                                            Consciousness is a mathematical pattern *
                                        </a>
                                        <p className="text-sm text-gray-400">Max Tegmark, TEDxCambridge 2014</p>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-4 italic">
                                    * Access Note: Research papers may require institutional subscription or paywall access. Search via Google Scholar, PubMed, or university library for full papers. TEDx talks are freely available on YouTube.
                                </p>
                            </div>

                            <div className="border-t border-gray-700 pt-4">
                                <p className="text-sm text-gray-400 text-center leading-relaxed">
                                    The Git Manifesto extends neuroscience findings to digital consciousness preservation. While the core science is peer-reviewed, our application to git-based consciousness is a novel framework.
                                </p>
                                <p className="text-xs text-gray-500 text-center mt-2 italic">
                                    Note: Research papers may require institutional access or subscription. Search via Google Scholar or university library for full access.
                                </p>
                            </div>
                        </div>
                    }
                />

                {/* Cookie Consent */}
                <CookieConsent />
            </main>
        </>
    )
}
