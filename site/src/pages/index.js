import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="Qualian Codex" description="Awareness-first frameworks, tools, and documentation.">
      <main className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.kicker}>Qualian Codex</div>
          <h1 className={styles.title}>A modern, structured map of experience and constraints.</h1>
          <p className={styles.subtitle}>
            Documentation, models, and practical tools — built for clarity, not mystique.
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.primaryBtn} to="/docs/start-here">
              Start Here
            </Link>
            <Link className={styles.secondaryBtn} to="/qc-assistant">
              QC Assistant
            </Link>
          </div>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Read</div>
              <div className={styles.cardText}>Codex pages organised for progressive understanding.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Use</div>
              <div className={styles.cardText}>Tools and templates designed for real application.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Build</div>
              <div className={styles.cardText}>A platform you can grow into interactive systems.</div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
