import { useState } from "react";

/**
 * Static-site-compatible contact form. GitHub Pages can't run a backend, so
 * this posts to FormSubmit.co's AJAX endpoint — no account signup required.
 * The FIRST message ever sent through it triggers a one-time confirmation
 * email to the destination address; after that link is clicked once, every
 * later submission is delivered automatically. See README.md.
 */
export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formsubmit.co/ajax/zachary.greenlief@littleliefai.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="form-success">
        Thanks — your message is on its way. I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="hidden" name="_subject" value="New message from personal site" />
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Message
        <textarea name="message" rows={6} required />
      </label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send"}
      </button>
      {status === "error" && (
        <p className="form-error">
          Something went wrong — try again, or email me directly at{" "}
          <a href="mailto:zachary.greenlief@littleliefai.com">zachary.greenlief@littleliefai.com</a>.
        </p>
      )}
    </form>
  );
}
