import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function QCAssistant() {
  return (
    <Layout title="QC Assistant" description="Orientation and navigation for the Qualian Codex (constraints-first).">
      <main style={{ padding: '2.25rem 1.25rem', maxWidth: 980, margin: '0 auto' }}>
        {/* Header */}
        <header style={{ marginBottom: '1.75rem' }}>
          <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.8 }}>QC Assistant</p>
          <h1 style={{ margin: '0.35rem 0 0.75rem 0', lineHeight: 1.1 }}>Orientation</h1>
          <p style={{ margin: 0, fontSize: '1.05rem', maxWidth: 780, opacity: 0.9 }}>
            Take a moment to orient yourself. There is no requirement to move quickly.
          </p>
        </header>

        {/* What this is */}
        <section style={{ marginBottom: '1.75rem' }}>
          <h2 style={{ marginTop: 0 }}>What this page does</h2>
          <p style={{ marginTop: 0, maxWidth: 860 }}>
            The Assistant exists to reduce ambiguity and help you choose an appropriate entry point.
            It provides a constraints-first overview so you can navigate the material without needing prior context.
          </p>

          <div
            style={{
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: 12,
              padding: '1rem',
              maxWidth: 860,
            }}
          >
            <p style={{ marginTop: 0, marginBottom: '0.75rem', fontWeight: 600 }}>Working stance</p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>
                Explanations here prioritise <strong>constraints and structure</strong> rather than experiential or metaphysical language.
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                You can use this material <strong>analytically</strong> (to understand) or <strong>instrumentally</strong> (to apply), without belief or acceptance.
              </li>
              <li>
                If something feels too abstract, return to constraints: <em>what is limiting, shaping, or stabilising the outcome?</em>
              </li>
            </ul>
          </div>
        </section>

        {/* Entry choice */}
        <section style={{ marginBottom: '1.75rem' }}>
          <h2 style={{ marginTop: 0 }}>Choose your entry</h2>
          <p style={{ marginTop: 0, maxWidth: 860 }}>
            Pick the path that matches your intent. You can switch at any time.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1rem',
              maxWidth: 980,
            }}
          >
            {/* First time */}
            <div style={{ border: '1px solid rgba(0,0,0,0.12)', borderRadius: 14, padding: '1rem' }}>
              <h3 style={{ marginTop: 0 }}>First time</h3>
              <p style={{ marginTop: 0, opacity: 0.9 }}>
                Use the guided entry. Minimal jargon. Clear orientation.
              </p>
              <p style={{ margin: 0 }}>
                <Link className="button button--primary button--sm" to="/docs/start-here">
                  Start Here
                </Link>
              </p>
            </div>

            {/* Returner */}
            <div style={{ border: '1px solid rgba(0,0,0,0.12)', borderRadius: 14, padding: '1rem' }}>
              <h3 style={{ marginTop: 0 }}>Returning</h3>
              <p style={{ marginTop: 0, opacity: 0.9 }}>
                Go straight to the framing and scope. This is the cleanest reset point.
              </p>
              <p style={{ margin: 0 }}>
                <Link className="button button--secondary button--sm" to="/docs/introduction">
                  Introduction
                </Link>
              </p>
            </div>

            {/* Full docs */}
            <div style={{ border: '1px solid rgba(0,0,0,0.12)', borderRadius: 14, padding: '1rem' }}>
              <h3 style={{ marginTop: 0 }}>Full documentation</h3>
              <p style={{ marginTop: 0, opacity: 0.9 }}>
                Enter the complete Codex documentation and formal material.
              </p>
              <p style={{ margin: 0 }}>
                <Link className="button button--secondary button--sm" to="/docs/qualian-codex">
                  Qualian Codex
                </Link>
              </p>
            </div>
          </div>

          <p style={{ marginTop: '0.85rem', maxWidth: 860, opacity: 0.85 }}>
            These links move you into the documentation itself; this page remains an orientation point.
          </p>
        </section>

        {/* What this is not */}
        <section style={{ marginBottom: '1.75rem' }}>
          <h2 style={{ marginTop: 0 }}>What this page is not</h2>
          <ul style={{ marginTop: 0, paddingLeft: '1.25rem', maxWidth: 860 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Not a chatbot (yet). No embedded AI is running on this page.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Not a source of authoritative conclusions or prescriptions.
            </li>
            <li>
              Not a replacement for the documentation; it is a navigation layer.
            </li>
          </ul>
        </section>

        {/* Privacy & terms */}
        <section style={{ marginBottom: '2.25rem' }}>
          <h2 style={{ marginTop: 0 }}>Privacy and terms</h2>
          <p style={{ marginTop: 0, maxWidth: 860 }}>
            This site is informational. If interactive features are added later, this section will be updated to describe what data (if any)
            is collected and how it is handled.
          </p>
          <ul style={{ marginTop: 0, paddingLeft: '1.25rem', maxWidth: 860 }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://veran.neocities.org/privacy.html" target="_blank" rel="noreferrer">
                Privacy
              </a>
            </li>
            <li>
              <a href="https://veran.neocities.org/terms.html" target="_blank" rel="noreferrer">
                Terms
              </a>
            </li>
          </ul>
        </section>

        {/* Footer note */}
        <footer style={{ borderTop: '1px solid rgba(0,0,0,0.12)', paddingTop: '1rem', maxWidth: 980 }}>
          <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.85 }}>
            Practical rule: if you can’t explain it in constraints, you don’t understand it yet. Go one layer down.
          </p>
        </footer>
      </main>
    </Layout>
  );
}