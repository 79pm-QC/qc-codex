import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function QCAssistant() {
  return (
    <Layout title="QC Assistant" description="Assistant portal for the Qualian Codex.">
      <main className="qc-page qc-page-narrow">
        <header className="qc-header">
          <div className="qc-hero-kicker">QC Assistant</div>
          <h1 className="qc-hero-title">A guided entry point.</h1>
          <p className="qc-hero-subtitle">
            This page is a clean portal. It stays stable even if you later change provider,
            embed a widget, or run the assistant elsewhere.
          </p>
        </header>

        <section className="qc-grid qc-grid-2">
          <div className="qc-card">
            <div className="qc-card-title">What it does</div>
            <div className="qc-card-body">
              <ul className="qc-list">
                <li>Directs visitors to the right Codex section.</li>
                <li>Explains terms in plain language.</li>
                <li>Provides structured prompts for inquiry and reflection.</li>
                <li>Offers “technical view” when needed — without forcing it.</li>
              </ul>
            </div>
          </div>

          <div className="qc-card">
            <div className="qc-card-title">How you will deploy it</div>
            <div className="qc-card-body">
              <ol className="qc-list">
                <li>Phase 1: Link out to your assistant (simple + safe).</li>
                <li>Phase 2: Embed a chat widget (optional).</li>
                <li>Phase 3: Add lightweight on-page tools (optional).</li>
              </ol>
              <div className="qc-card-footer">
                <div className="qc-note-small">
                  Keep this page as the permanent address: <strong>/qc-assistant</strong>.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="qc-actions-row">
          <Link className="qc-button qc-button-primary" to="/docs/start-here">
            Start Here
          </Link>

          {/* Replace this link later with your actual assistant destination */}
          <a className="qc-button qc-button-secondary" href="#" onClick={(e) => e.preventDefault()}>
            Assistant link (placeholder)
          </a>

          <Link className="qc-button qc-button-tertiary" to="/docs/intro">
            Open the Codex
          </Link>
        </section>

        <section className="qc-note qc-note-margin">
          <div className="qc-note-title">Next upgrade</div>
          <div className="qc-note-body">
            When you’re ready, we’ll add a provider widget here (or a simple embedded iframe).
            For now, this portal is enough to make the site feel complete and intentional.
          </div>
        </section>
      </main>
    </Layout>
  );
}