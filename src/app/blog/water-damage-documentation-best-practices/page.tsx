import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Water Damage Documentation Best Practices for Contractors",
  description:
    "The complete guide to documenting water damage claims for restoration contractors. Learn photo documentation, moisture mapping, drying logs, and scope writing best practices to maximize claim approvals.",
  keywords: [
    "water damage documentation",
    "water damage claim",
    "moisture mapping",
    "water damage photos",
    "IICRC S500",
    "water damage restoration",
    "insurance claim documentation",
    "drying log",
  ],
};

export default function WaterDamageDocumentationBestPractices() {
  return (
    <article className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm text-gray-500 hover:text-primary-400 transition-colors mb-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
            <span className="px-2 py-0.5 rounded-full border border-primary-600/20 text-primary-400">
              Best Practices
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              January 27, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              10 min read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Water Damage Documentation Best Practices for Contractors
          </h1>
          <p className="text-lg text-gray-400">
            The complete guide to documenting water damage claims, from
            initial site arrival through final reporting, to maximize claim
            approvals.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>
            Water damage is the most common type of insurance claim in the
            restoration industry, accounting for roughly 30% of all
            homeowner claims filed annually. For restoration contractors,
            proper documentation of water losses is the foundation of
            getting paid fairly and avoiding disputes with adjusters.
          </p>
          <p>
            Yet documentation is where many contractors fall short. In the
            rush to begin mitigation — setting up equipment, extracting
            standing water, starting demolition — critical documentation
            steps get skipped or done hastily. The result is a scope that
            tells an incomplete story, leading to denied line items and
            lower claim settlements.
          </p>
          <p>
            This guide covers every aspect of water damage documentation,
            from the moment you arrive on site through final scope
            submission. Follow these practices consistently and you will see
            measurable improvements in claim approval rates and settlement
            amounts.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Document Before You Touch Anything
          </h2>
          <p>
            The most important documentation happens before any mitigation
            work begins. Once you start extracting water, pulling baseboard,
            or placing equipment, you are altering the scene. Adjusters need
            to see the property in its damaged state to understand the
            severity and scope of the loss.
          </p>
          <p>
            Before doing anything else, walk the entire affected area and
            capture comprehensive photographs. Take wide-angle shots of
            every affected room that show the overall condition, including
            visible water on floors, staining on walls, and any standing
            water depth indicators. Follow up with close-up shots of
            specific damage: watermarks on drywall, swelling in laminate
            flooring, discoloration on cabinetry, and any visible mold
            growth.
          </p>
          <p>
            Photograph the source of the water loss if it is still visible.
            A burst pipe, failed appliance, roof penetration, or
            overflowing fixture helps establish causation. If the source has
            already been repaired by the time you arrive, photograph the
            repair and note it in your documentation.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Moisture Mapping Is Non-Negotiable
          </h2>
          <p>
            Visual inspection alone is insufficient for water damage
            documentation. Water travels behind walls, under flooring, and
            through cavities in ways that are not visible to the naked eye.
            A thorough moisture mapping protocol is essential for
            identifying the full extent of damage and justifying your scope
            of work to the adjuster.
          </p>
          <p>
            Use a combination of pin-type and pinless moisture meters to
            document moisture levels throughout the affected area. Create a
            grid map with readings taken at regular intervals — typically
            every two to three feet along walls and across floors. Record
            both the reading value and the location using consistent room
            reference points.
          </p>
          <p>
            Document moisture readings in adjacent rooms and above or below
            the primary affected area. Water migration through shared walls,
            ceilings, and floor systems is common and frequently missed.
            Finding elevated moisture in a room that appeared unaffected on
            visual inspection is a critical discovery that belongs in your
            scope.
          </p>
          <p>
            Thermal imaging, if available, adds another layer of
            documentation. Infrared cameras reveal moisture patterns behind
            walls and under floors that moisture meters alone might miss.
            Include thermal images alongside standard photographs, with
            annotations showing temperature differentials and suspected
            moisture paths.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Water Category and Class Classification
          </h2>
          <p>
            Every water damage claim must include proper classification per
            IICRC S500 standards. Water category (1, 2, or 3) describes the
            contamination level of the water source. Water class (1 through
            4) describes the rate of evaporation and the extent of material
            saturation. These classifications directly determine the
            appropriate remediation protocol and, consequently, the scope
            of work and cost.
          </p>
          <p>
            Category 1 water originates from a sanitary source — a broken
            supply line, for example. Category 2 is water with significant
            contamination that could cause illness — dishwasher or washing
            machine discharge. Category 3 is grossly contaminated water
            that can cause severe illness or death — sewage backups, rising
            flood water, or Category 1 water that has remained stagnant for
            more than 48 hours.
          </p>
          <p>
            Document the basis for your category classification in your
            scope notes. If you classify as Category 2 or 3, explain the
            evidence: the water source, duration of exposure, visible
            contamination, and any biological growth. This justification
            supports the more extensive remediation protocols — and higher
            costs — associated with contaminated water categories.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Daily Drying Logs and Progress Documentation
          </h2>
          <p>
            For water losses that require structural drying, daily
            documentation of the drying process is critical for both scope
            justification and adjuster relations. Record moisture readings
            at the same locations each day, track psychrometric conditions
            (temperature, relative humidity, grain depression), and document
            equipment placement and run time.
          </p>
          <p>
            Drying logs serve two purposes. First, they demonstrate that
            drying equipment was necessary for the duration you are billing.
            Adjusters frequently challenge equipment charges if there is no
            documentation showing ongoing elevated moisture. Second, they
            provide evidence of when the structure reached dry standard,
            which determines when equipment can be removed and demolition
            or rebuilding can begin.
          </p>
          <p>
            Include drying progress documentation in your scope submission.
            A summary showing initial moisture levels, daily readings, and
            final dry verification gives the adjuster confidence that the
            drying timeline and equipment charges are justified.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Photograph Demolition and Concealed Damage
          </h2>
          <p>
            As demolition proceeds, additional damage is often revealed.
            Water behind baseboards may have migrated further than initial
            readings indicated. Removing drywall might reveal saturated
            insulation, corroded electrical components, or mold growth on
            framing. Each discovery should be photographed and added to your
            documentation.
          </p>
          <p>
            Take before and after photographs of every demolition step.
            Before removing baseboard, photograph the baseboard in place
            showing visible damage indicators. After removal, photograph
            the wall cavity showing the conditions behind it. This visual
            evidence trail makes supplement requests nearly indisputable.
          </p>
          <p>
            If concealed damage expands the scope beyond your initial
            estimate, document the discovery thoroughly before proceeding
            with additional work. Contact the adjuster with the new evidence
            and a revised scope that includes the additional line items.
            Performing work before getting approval for scope expansions is
            a common source of payment disputes.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Writing the Water Damage Scope
          </h2>
          <p>
            With thorough documentation in hand, writing the scope becomes
            a matter of organizing your observations into structured line
            items. For each affected area, include extraction and water
            removal, demolition of damaged materials, equipment placement
            and monitoring, antimicrobial application, rebuild of removed
            materials, and any contents manipulation or cleaning.
          </p>
          <p>
            Do not forget general conditions that apply to the overall
            project: furniture moving, temporary protection of unaffected
            areas, debris removal, and equipment setup and monitoring.
            These items are frequently left out of scopes but represent
            real costs that are reimbursable under most policies.
          </p>
          <p>
            Reference your moisture maps, drying logs, and photographs
            throughout the scope. When an adjuster can match each line item
            to visual evidence and measured data, the approval process
            accelerates dramatically.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Leveraging Technology for Better Documentation
          </h2>
          <p>
            Modern documentation tools have transformed what is possible in
            the field. AI-powered platforms like ClaimScribe allow
            contractors to capture photos and voice narrations during the
            initial walkthrough and generate a structured scope
            automatically. The AI identifies damage types from photos,
            extracts measurements and observations from voice notes, and
            maps everything to Xactimate codes.
          </p>
          <p>
            For water damage specifically, this means you can walk the
            property once, capturing photos and narrating your observations
            in real time, and have a draft scope ready before you leave the
            site. You can then add your moisture readings and drying data
            to create a comprehensive documentation package that covers
            every aspect of the loss.
          </p>
          <p>
            The result is documentation that is more thorough, more
            consistent, and produced in a fraction of the time compared to
            manual methods. Contractors using AI-assisted documentation
            report higher approval rates and fewer supplement disputes
            because the initial submission is simply more complete.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
            <p className="text-white font-semibold mb-2">
              Document water damage faster and more thoroughly
            </p>
            <p className="text-gray-400 text-sm mb-4">
              ClaimScribe AI turns your on-site photos and voice notes into
              a professional water damage scope of work in minutes. Try it
              free for 14 days.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center text-sm text-primary-400 font-medium hover:text-primary-300 transition-colors"
            >
              Start your free trial <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
