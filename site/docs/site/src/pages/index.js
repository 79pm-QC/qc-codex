import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Card({ title, children, href, cta = 'Open' }) {
  return (
    <div className="qc-card">
      <div className="qc-card-title">{title}</div>
      <div className="qc-card-body">{children}</div>
      {href ? (
        <div className="qc-card-footer">
          <Link className="qc-link" to={href}>
            {cta} →
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <Layout title="Qualian Codex" description="A practical framework for experience, structure, and constraint-aware inquiry.">
      <main className="qc-page">
        <section className="qc-hero">
          <div className="qc-hero-kicker">Qualian Codex</div>
          <h1 className="qc-hero-title">A clear map of experience and structure.</h1>
          <p className="qc-hero-subtitle">
            A public-facing system for thinking: readable, testable, and expandable.
            Start with a guided entry, open the Codex, or use the Assistant portal.
          </p>

          <div className="qc-hero-actions">
            <Link className="qc-button qc-button-primary" to="/docs/start-here">
              Start Here
            </Link>
            <Link className="qc-button qc-button-secondary" to="/docs/intro">
              Open the Codex
            </Link>
          </div>

          <div className="qc-hero-meta">
            <span className="qc-pill">Editorial minimal</span>
            <span className="qc-pill">Built to scale</span>
            <span className="qc-pill">Static + safe</span>
          </div>
        </section>

        <section className="qc-grid">
          <Card title="Start Here" href="/docs/start-here" cta="Begin">
            A short, guided path. Minimal reading. Maximum orientation.
          </Card>

          <Card title="QC Assistant" href="/qc-assistant" cta="Open portal">
            A single entry point for guided navigation, explanations, and structured prompts.
          </Card>

          <Card title="Tools" href="/docs/tools" cta="View tools">
            Lightweight tools and templates. Kept practical and public-friendly.
          </Card>
        </section>

        <section className="qc-split">
          <div className="qc-split-left">
            <h2 className="qc-h2">Two maps, one destination.</h2>
            <p className="qc-p">
              The Codex is designed to be readable without prior commitment:
              one map is experiential (how experience presents), the other is structural (how constraints shape outcomes).
            </p>
            <p className="qc-p">
              You can engage at the level you want: conceptual, practical, or technical.
            </p>
          </div>

          <div className="qc-split-right">
            <div className="qc-note">
              <div className="qc-note-title">Default entry</div>
              <div className="qc-note-body">
                If you are new: use <strong>Start Here</strong>. If you want the material: open <strong>Codex</strong>.
                If you want guided help: open <strong>QC Assistant</strong>.
              </div>
            </div>
          </div>
        </section>

        <section className="qc-footer">
          <div className="qc-footer-left">
            <div className="qc-footer-title">Publishing posture</div>
            <div className="qc-footer-text">
              Stable structure first. Then expand content and tools. No fragile dependencies.
            </div>
          </div>
          <div className="qc-footer-right">
            <Link className="qc-link" to="/docs/intro">Read intro →</Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}