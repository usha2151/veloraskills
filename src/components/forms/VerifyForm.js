"use client";

import { useState } from "react";

export function VerifyForm() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setResult(null);
    setStatus({ state: "loading", message: "Checking certificate record..." });

    try {
      const response = await fetch(`/api/verify?q=${encodeURIComponent(query)}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Certificate could not be verified.");
      }

      setResult(data.certificate);
      setStatus({ state: "success", message: "Certificate verified successfully." });
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error.message ||
          "Verification failed. Please check the ID or MySQL configuration.",
      });
    }
  }

  return (
    <form className="panel form-panel" onSubmit={handleSubmit}>
      <label htmlFor="verify-query">Certificate ID or Intern ID</label>
      <div className="inline-form">
        <input
          id="verify-query"
          name="q"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="VS-CERT-2026-001"
          required
        />
        <button
          className="button button--primary"
          type="submit"
          disabled={status.state === "loading"}
        >
          {status.state === "loading" ? "Checking..." : "Verify"}
        </button>
      </div>
      <p className="form-note">QR certificates can point to this same route.</p>
      {status.message ? (
        <p className={`form-status form-status--${status.state}`}>{status.message}</p>
      ) : null}
      {result ? (
        <dl className="verify-result">
          <div>
            <dt>Name</dt>
            <dd>{result.full_name}</dd>
          </div>
          <div>
            <dt>Domain</dt>
            <dd>{result.domain}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{result.status}</dd>
          </div>
          <div>
            <dt>Issue Date</dt>
            <dd>{result.issue_date}</dd>
          </div>
        </dl>
      ) : null}
    </form>
  );
}
