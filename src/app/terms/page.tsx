import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ClaimScribe terms of service — the agreement between you and ClaimScribe AI.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#080810] py-20">
        <article className="max-w-3xl mx-auto px-4 prose prose-invert">
          <h1>Terms of Service</h1>
          <p className="text-sm text-gray-500">Last updated: March 15, 2026</p>

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your access to and use of ClaimScribe AI&apos;s
            insurance claim scoping platform, including our website, applications, and services
            (collectively, the &quot;Service&quot;). By using the Service, you agree to these Terms.
          </p>

          <h2>1. Account Registration</h2>
          <p>
            You must create an account to use ClaimScribe. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities under your account.
            You must provide accurate, current, and complete information during registration.
          </p>

          <h2>2. Subscription and Payment</h2>
          <ul>
            <li><strong>Free trial:</strong> New accounts receive a 14-day free trial with full access to all features. No credit card is required to start.</li>
            <li><strong>Billing:</strong> After the trial, continued access requires an active paid subscription. Subscriptions are billed monthly or annually as selected.</li>
            <li><strong>Cancellation:</strong> You may cancel your subscription at any time. Access continues through the end of your current billing period. No refunds are issued for partial billing periods.</li>
            <li><strong>Price changes:</strong> We may adjust pricing with 30 days&apos; notice. Existing subscribers are locked into their current rate until their next renewal cycle.</li>
          </ul>

          <h2>3. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Share your account credentials with unauthorized parties</li>
            <li>Attempt to reverse-engineer, decompile, or disassemble the Service or its AI models</li>
            <li>Upload malicious code, viruses, or harmful content</li>
            <li>Interfere with the security or integrity of the Service</li>
            <li>Scrape, crawl, or use automated tools to extract data from the Service</li>
            <li>Upload photos or content you do not have the right to use</li>
          </ul>

          <h2>4. AI-Generated Content</h2>
          <p>
            ClaimScribe uses AI to analyze property damage photos and generate scope of work estimates.
            AI-generated scopes are provided as professional assistance — they are not a substitute for
            professional judgment. You are responsible for reviewing, verifying, and approving all
            AI-generated estimates before submission to insurance carriers or clients.
          </p>

          <h2>5. Your Data</h2>
          <p>
            You retain ownership of all photos, claim documentation, scope reports, and other content
            you create or upload to ClaimScribe (&quot;Your Data&quot;). You grant us a limited license
            to host, store, and process Your Data solely to provide and improve the Service. We will
            not share Your Data with third parties except as described in our Privacy Policy.
          </p>

          <h2>6. Data Export</h2>
          <p>
            You may export Your Data at any time in standard formats (PDF reports, Xactimate-compatible
            exports, CSV data). Upon account termination, you will have 30 days to export Your Data
            before it is permanently deleted.
          </p>

          <h2>7. Service Availability</h2>
          <p>
            We strive for high availability but do not guarantee uninterrupted service. We may perform
            scheduled maintenance with advance notice. We are not liable for temporary service
            interruptions due to maintenance, updates, or circumstances beyond our control.
          </p>

          <h2>8. Disclaimer of Warranties</h2>
          <p>
            ClaimScribe is provided &quot;as is&quot; and &quot;as available.&quot; AI-powered damage
            analysis is a professional tool to assist restoration contractors — it does not guarantee
            claim approval, accurate damage assessment in all conditions, or compliance with any
            specific insurance carrier requirements. You remain responsible for the accuracy of all
            submitted claims and scopes of work.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, ClaimScribe&apos;s total liability for any claims
            arising from or related to the Service shall not exceed the amount you paid us in the
            12 months preceding the claim. We are not liable for indirect, incidental, consequential,
            or punitive damages, including lost profits, denied claims, data loss, or business interruption.
          </p>

          <h2>10. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless ClaimScribe AI and its officers, employees, and
            agents from any claims, damages, or expenses arising from your use of the Service or
            violation of these Terms.
          </p>

          <h2>11. Termination</h2>
          <p>
            We may suspend or terminate your account if you violate these Terms or engage in conduct
            that may harm our platform or other users. You may terminate your account at any time
            through your account settings or by contacting support.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. We will notify you of material changes via
            email or in-app notification at least 30 days before they take effect. Continued use of
            the Service after changes take effect constitutes acceptance.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Texas, without regard to conflict of
            law principles. Any disputes shall be resolved in the courts of Harris County, Texas.
          </p>

          <h2>14. Contact</h2>
          <p>
            Questions about these Terms? Contact us at{" "}
            <a href="mailto:support@claimscribe.ai" className="text-blue-400 hover:underline">support@claimscribe.ai</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
