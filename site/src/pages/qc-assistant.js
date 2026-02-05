import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Card({ title, children }) {
  return (
    <div
      style={{
        border: '1px solid rgba(0,0,0,0.12)',
        borderRadius: 14,
        padding: '1rem',
        background: 'var(--ifm-background-surface-color)',
      }}
    >
      <div style={{ fontWeight: 800, marginBottom: 8 }}>{title}</div>
      <div style={{ opacity: 0.92, lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}

export default function QCAssistant() {
  return (
    <Layout title="QC Assistant" description="Constraint-first guide to the Qualian Codex.">
      <main style={{ padding: '2.5rem 1.25rem', maxWidth: 980, margin: '0 auto' }}>
        <header style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.75 }}>
            Qualian Codex
          </div>
          <h1 style={{ fontSize: '2.25rem', lineHeight: 1.1, margin: '0.6rem 0 0.8rem' }}>
            QC Assistant
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, lineHeight: 1.6, margin: 0, maxWidth: '70ch' }}>
            The QC Assistant is a guide to help you explore the Qualian Codex using <strong>constraint-based
            explanations</strong>. It is designed to explain ideas in plain language, point you to the right pages,
            and help you choose what to read next.
          </p>
        </header>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '0.9rem',
            marginTop: '1rem',
          }}
        >
          <Card title="What it can help with">
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>Understand Codex concepts in everyday terms</li>
              <li>See how constraints shape outcomes</li>
              <li>Find relevant sections of the Codex</li>
              <li>Compare different explanations of the same idea</li>
            </ul>

            <div style={{ marginTop: 10, opacity: 0.9 }}>
              Examples:
              <ul style={{ margin: '6px 0 0', paddingLeft: '1.2rem' }}>
                <li>“Where should I start?”</li>
                <li>“What does this concept mean in simple terms?”</li>
                <li>“Which section explains this idea?”</li>
                <li>“How would this be described using constraints?”</li>
              </ul>
            </div>
          </Card>

          <Card title="How it explains things">
            <p style={{ marginTop: 0 }}>
              By default, the Assistant uses the <strong>constraints lens</strong>. That means it focuses on:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>limits</li>
              <li>structures</li>
              <li>conditions</li>
              <li>probabilities</li>
              <li>how these shape what can happen</li>
            </ul>
            <p style={{ margin: '10px 0 0' }}>
              It avoids metaphysical or awareness-based language unless you explicitly ask for that perspective.
            </p>
          </Card>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <Card title="Three ways to explore">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '0.9rem' }}>
              <div>
                <div style={{ fontWeight: 750, marginBottom: 6 }}>Everyday Life</div>
                <div style={{ opacity: 0.9 }}>Practical explanations using familiar situations.</div>
              </div>
              <div>
                <div style={{ fontWeight: 750, marginBottom: 6 }}>Big Picture</div>
                <div style={{ opacity: 0.9 }}>High-level models and patterns across systems.</div>
              </div>
              <div>
                <div style={{ fontWeight: 750, marginBottom: 6 }}>Philosophy</div>
                <div style={{ opacity: 0.9 }}>Deeper reflection on mind, meaning, and reality.</div>
              </div>
            </div>
            <div style={{ marginTop: 10, opacity: 0.9 }}>
              You can state which style you want, or default to plain-speak.
            </div>
          </Card>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <Card title="Important notes">
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>Provides general information only (not medical, legal, or psychological advice).</li>
              <li>Do not share sensitive or private information.</li>
              <li>The Qualian Codex is a conceptual framework, not a statement of physical or metaphysical fact.</li>
            </ul>

            <div style={{ marginTop: 12, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <Link className="button button--primary" to="/docs/start-here">
                Start Here
              </Link>
              <Link className="button button--secondary" to="/docs/intro">
                Introduction
              </Link>
              <Link className="button button--secondary" to="/docs/tools">
                Tools
              </Link>
            </div>
          </Card>
        </section>

        <section style={{ marginTop: '1rem' }}>
          <div
            style={{
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: 14,
              padding: '1rem',
              background: 'var(--ifm-background-surface-color)',
              opacity: 0.92,
              lineHeight: 1.55,
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 6 }}>Status</div>
            <div>
              This is the public entry point for the QC Assistant. Interactive features will be added later. For now,
              use it to navigate the Codex and decide what to explore next.
            </div>
            <div style={{ marginTop: 10, fontSize: 13, opacity: 0.85 }}>
              Next step: add Privacy and Terms pages and link them here.
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 900px) {
            main { padding-top: 2rem !important; }
          }
          @media (max-width: 860px) {
            section[style*="grid-template-columns: repeat(2"] { grid-template-columns: 1fr !important; }
            section div[style*="grid-template-columns: repeat(3"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </main>
    </Layout>
  );
}

