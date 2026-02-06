import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function QCAssistant() {
  return (
    <Layout title="QC Assistant" description="Guided navigation for the Qualian Codex using constraint-based explanations.">
      <main style={styles.main}>
        {/* Hero */}
        <section style={styles.hero}>
          <div style={styles.kicker}>QUALIAN CODEX</div>
          <h1 style={styles.h1}>QC Assistant</h1>
          <p style={styles.lede}>
            The QC Assistant is a guide to help you explore the Qualian Codex using <b>constraint-based explanations</b>.
            It is designed to explain ideas in plain language, point you to the right pages, and help you choose what to read next.
          </p>

          <div style={styles.buttonRow}>
            <Link className="button button--primary" to="/docs/start-here">
              Start Here
            </Link>
            <Link className="button button--secondary" to="/docs/intro">
              Introduction
            </Link>
          </div>
        </section>

        {/* What it can help with */}
        <section style={styles.section}>
          <h2 style={styles.h2}>What it can help with</h2>
          <ul style={styles.ul}>
            <li>Understand Codex concepts in everyday terms</li>
            <li>See how constraints shape outcomes</li>
            <li>Find relevant sections of the Codex</li>
            <li>Compare different explanations of the same idea</li>
          </ul>

          <div style={styles.examples}>
            <div style={styles.examplesTitle}>Examples</div>
            <ul style={styles.ulTight}>
              <li>“Where should I start?”</li>
              <li>“What does this concept mean in simple terms?”</li>
              <li>“Which section explains this idea?”</li>
              <li>“How would this be described using constraints?”</li>
            </ul>
          </div>
        </section>

        {/* How it explains */}
        <section style={styles.section}>
          <h2 style={styles.h2}>How it explains things</h2>
          <p style={styles.p}>
            By default, the Assistant uses the <b>constraints lens</b>. That means it focuses on:
          </p>

          <div style={styles.grid}>
            <div style={styles.card}><b>Limits</b><div style={styles.cardText}>What cannot be exceeded (bandwidth, time, energy, attention).</div></div>
            <div style={styles.card}><b>Structures</b><div style={styles.cardText}>What is fixed or inherited (rules, architecture, environment).</div></div>
            <div style={styles.card}><b>Conditions</b><div style={styles.cardText}>What must be true for an outcome to appear and stay stable.</div></div>
            <div style={styles.card}><b>Trade-offs</b><div style={styles.cardText}>What improves only by worsening something else (speed vs accuracy, novelty vs coherence).</div></div>
            <div style={styles.card}><b>Probabilities</b><div style={styles.cardText}>What becomes more/less likely under different constraints.</div></div>
            <div style={styles.card}><b>Failure modes</b><div style={styles.cardText}>What breaks when constraints are pushed past tolerance.</div></div>
          </div>

          <div style={styles.note}>
            <b>Default rule:</b> explain in constraints first. If you want the more metaphysical QC lens, you must explicitly ask for it.
          </div>
        </section>

        {/* Status */}
        <section style={styles.section}>
          <h2 style={styles.h2}>Status</h2>
          <div style={styles.statusBox}>
            <div style={styles.statusTag}>Public entry page</div>
            <p style={styles.p}>

              Interactive features will be added later. For now, use this page to navigate the Codex and decide what to explore next.
            </p>
            <div style={styles.small}>
              Next step: connect this page to the hosted Assistant when you’re ready.
            </div>
          </div>
        </section>

        <hr style={styles.hr} />

        {/* Collapsible privacy/terms */}
        <details style={styles.details}>
          <summary style={styles.summary}>Privacy &amp; Terms</summary>
          <div style={styles.detailsBody}>
            <p style={styles.p}>
              The QC Assistant is a guidance interface designed to help you navigate the Qualian Codex using constraint-based
              explanations and plain language.
            </p>
            <p style={styles.p}>
              The Assistant does not store personal conversations, does not learn from individual users, and does not modify or extend
              the Qualian Codex.
            </p>
            <p style={styles.p}>
              Conversations occur through the hosting AI platform and are subject to that platform’s own privacy policies.
              Do not share sensitive or personal information.
            </p>
            <p style={styles.p}>
              Links:
              {' '}
              <a href="https://veran.neocities.org/privacy.html" target="_blank" rel="noreferrer">Privacy</a>
              {' '}•{' '}
              <a href="https://veran.neocities.org/terms.html" target="_blank" rel="noreferrer">Terms</a>
            </p>
          </div>
        </details>
      </main>
    </Layout>
  );
}

const styles = {
  main: {
    padding: '2.5rem 1.25rem',
    maxWidth: 980,
    margin: '0 auto',
  },
  hero: {
    marginBottom: '2.25rem',
  },
  kicker: {
    fontSize: 12,
    letterSpacing: '0.14em',
    opacity: 0.7,
    marginBottom: 10,
  },
  h1: {
    fontSize: 44,
    lineHeight: 1.05,
    margin: '0 0 12px 0',
  },
  lede: {
    fontSize: 18,
    lineHeight: 1.6,
    opacity: 0.92,
    margin: '0 0 18px 0',
  },
  buttonRow: {
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    marginTop: 10,
  },
  section: {
    marginTop: 22,
    marginBottom: 22,
  },
  h2: {
    fontSize: 22,
    marginBottom: 10,
  },
  p: {
    fontSize: 16,
    lineHeight: 1.65,
    margin: '10px 0',
  },
  ul: {
    margin: '10px 0 0 18px',
    lineHeight: 1.7,
    fontSize: 16,
  },
  ulTight: {
    margin: '8px 0 0 18px',
    lineHeight: 1.7,
    fontSize: 15,
  },
  examples: {
    marginTop: 14,
    padding: '14px 16px',
    border: '1px solid rgba(0,0,0,0.10)',
    borderRadius: 14,
  },
  examplesTitle: {
    fontWeight: 700,
    marginBottom: 6,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: 12,
    marginTop: 14,
  },
  card: {
    padding: '14px 14px',
    border: '1px solid rgba(0,0,0,0.10)',
    borderRadius: 14,
  },
  cardText: {
    marginTop: 6,
    opacity: 0.85,
    lineHeight: 1.5,
    fontSize: 14,
  },
  note: {
    marginTop: 14,
    padding: '12px 14px',
    borderLeft: '4px solid rgba(0,0,0,0.25)',
    background: 'rgba(0,0,0,0.03)',
    borderRadius: 12,
    lineHeight: 1.6,
  },
  statusBox: {
    padding: '14px 16px',
    border: '1px solid rgba(0,0,0,0.10)',
    borderRadius: 14,
  },
  statusTag: {
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 700,
    opacity: 0.75,
    letterSpacing: '0.08em',
    marginBottom: 8,
  },
  small: {
    marginTop: 8,
    fontSize: 13,
    opacity: 0.8,
    lineHeight: 1.5,
  },
  hr: {
    margin: '2.5rem 0',
    opacity: 0.25,
  },
  details: {
    fontSize: '0.95rem',
    opacity: 0.9,
  },
  summary: {
    cursor: 'pointer',
    fontWeight: 700,
  },
  detailsBody: {
    marginTop: '0.9rem',
    lineHeight: 1.7,
  },
};