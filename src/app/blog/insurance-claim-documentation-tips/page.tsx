import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import { AuthorByline } from "@/components/author-byline";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Insurance Claim Documentation: A Contractor's Guide to Getting Paid",
  description:
    "Master insurance claim documentation for restoration contractors. Learn photo best practices, what adjusters look for, and how to avoid claim denials that delay payment.",
  keywords: [
    "insurance claim documentation contractor",
    "restoration claim documentation",
    "claim documentation best practices",
    "insurance adjuster documentation",
    "restoration photo documentation",
    "claim denial prevention contractor",
    "insurance documentation requirements",
  ],
  alternates: { canonical: "/blog/insurance-claim-documentation-tips" },
};

export default function InsuranceClaimDocumentationTips() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Insurance Claim Documentation: A Contractor's Guide to Getting Paid",
  "description": "Master insurance claim documentation for restoration contractors. Learn photo best practices, what adjusters look for, and how to avoid claim denials that delay payment.",
  "datePublished": "2026-02-22",
  "dateModified": "2026-02-22",
  "author": {
    "@type": "Organization",
    "name": "ClaimScribe",
    "url": "https://claimscribe.ai"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ClaimScribe",
    "url": "https://claimscribe.ai"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://claimscribe.ai/blog/insurance-claim-documentation-tips"
  }
};
  
  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://claimscribe.ai"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://claimscribe.ai/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Insurance Claim Documentation: A Contractor's Guide to Getting Paid",
      "item": "https://claimscribe.ai/blog/insurance-claim-documentation-tips"
    }
  ]
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
              Documentation Guide
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              February 22, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              15 min read
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Insurance Claim Documentation: A Contractor's Guide to Getting Paid
          </h1>
          <p className="text-lg text-gray-400">
            Photo documentation best practices, what adjusters look for, and how to avoid claim denials that delay your payment and damage customer relationships.
          </p>
          <AuthorByline authorSlug="claimscribe-team" />
        </header>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>
            Documentation quality often determines the difference between smooth claim approval and months of disputes, denials, and delayed payments. While restoration contractors focus primarily on technical competence and customer service, insurance adjusters evaluate claims based largely on the quality and completeness of documentation provided to support scope and pricing decisions.
          </p>
          <p>
            Poor documentation doesn't just delay individual claims — it damages your reputation with adjusters and carriers, making future claims more difficult to approve. Conversely, consistently excellent documentation builds trust and credibility that smooths the approval process for all your claims. The time invested in proper documentation protocols pays dividends through faster approvals, fewer supplements, and stronger adjuster relationships.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Understanding the Adjuster's Perspective
          </h2>
          <p>
            Insurance adjusters review dozens of claims weekly, each requiring detailed evaluation of damage extent, repair necessity, and cost appropriateness. They rely entirely on contractor-provided documentation to make these determinations, as they rarely have the opportunity for detailed site inspections of every claim. Understanding what adjusters need helps contractors provide documentation that supports efficient claim processing.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Adjuster Documentation Priorities
          </h3>
          <p>
            Adjusters prioritize documentation that clearly connects damage to covered loss events, demonstrates the necessity of proposed repairs, and justifies the scope and pricing of restoration work. They need evidence that repairs are reasonable, necessary, and cost-effective — not just technically possible or customer-preferred.
          </p>
          <p>
            Clear causation documentation shows how property damage resulted from the covered loss event rather than pre-existing conditions or maintenance issues. Necessity documentation demonstrates why proposed repairs are required to restore the property to pre-loss condition. Scope justification explains why specific repair methods and materials are appropriate for the damage conditions and property characteristics.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Common Documentation Deficiencies
          </h3>
          <p>
            The most common documentation problems include insufficient overview photos that fail to show damage context, detail photos that don't clearly show damage extent, missing measurements that prevent accurate area calculations, and inadequate descriptions that leave room for multiple interpretations of repair requirements.
          </p>
          <p>
            Adjusters frequently encounter documentation that assumes knowledge they don't possess about property conditions, restoration standards, or technical requirements. Documentation must be self-explanatory, providing all information necessary for someone unfamiliar with the property to understand damage conditions and repair requirements.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Photography Best Practices for Insurance Documentation
          </h2>
          <p>
            Photographic documentation forms the foundation of successful insurance claims, providing visual evidence that supports all other documentation elements. Effective photography requires systematic approaches that capture both overall damage context and specific details that justify repair requirements.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Overview and Context Photography
          </h3>
          <p>
            Begin documentation with overview photos that establish spatial context and show the relationship between damaged and undamaged areas. These photos help adjusters understand the overall impact of the loss event and provide reference points for interpreting detailed damage photos.
          </p>
          <p>
            Overview photography should include: exterior shots showing the entire building and identifying the affected areas, room overview shots showing the complete space and damage distribution, hallway and transition photos showing how damage extends between areas, and reference shots showing undamaged areas for comparison purposes.
          </p>
          <p>
            Include measurement references in overview photos by placing tape measures, rulers, or other scale objects that allow accurate size estimation. Wide-angle views help show complete room layouts while maintaining sufficient detail to identify damage patterns and material types.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Detail and Close-Up Photography
          </h3>
          <p>
            Detail photography provides the specific visual evidence that supports individual line items and repair decisions. These photos should clearly show damage characteristics, material conditions, and environmental factors that influence restoration requirements.
          </p>
          <p>
            Effective detail photography includes: close-up shots of water staining or damage lines showing extent and severity, material condition photos showing saturation, warping, or deterioration, damage transition photos showing where affected areas meet undamaged areas, and specialty condition photos showing mold growth, contamination, or other hazards requiring specialized handling.
          </p>
          <p>
            Use proper lighting to clearly show damage characteristics — natural light or bright LED work lights provide better color accuracy than built-in camera flashes. Take multiple angles of complex damage to provide complete visual documentation that leaves no questions about conditions or repair requirements.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Sequential and Progress Photography
          </h3>
          <p>
            Document work progression with sequential photography that shows conditions before, during, and after restoration work. This progression provides evidence of work necessity and completion while supporting supplement requests for additional work discovered during the restoration process.
          </p>
          <p>
            Progress documentation should include: pre-work photos showing initial damage conditions, demolition photos revealing hidden damage or conditions requiring additional work, work-in-progress photos showing restoration methods and materials, and completion photos showing finished work and restored conditions.
          </p>
          <p>
            Timestamp all photos and maintain organized filing systems that enable quick retrieval during claim reviews or supplement submissions. Consider using photo management software that automatically organizes images by project, date, and room location for efficient documentation management.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Measurement and Calculation Documentation
          </h2>
          <p>
            Accurate measurements provide the quantitative foundation for scope development and cost calculations. Adjusters scrutinize measurements carefully, as errors in calculation can significantly impact claim values and create disputes over appropriate scope and pricing.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Measurement Methodology and Tools
          </h3>
          <p>
            Use professional measurement tools and systematic approaches that ensure accuracy and reproducibility. Laser measuring devices, professional measuring wheels, and high-quality tape measures provide more accurate results than basic consumer tools or estimation methods.
          </p>
          <p>
            Document measurement methodology in your reports, noting any challenging conditions that affect accuracy. Room irregularities, obstruction from contents, or multi-level damage areas require special attention to ensure comprehensive measurement coverage and accurate calculations.
          </p>
          <p>
            Include measurement reference photos that show tape measure or laser device readings for key dimensions. These photos provide verification of measured dimensions and demonstrate the care taken to ensure accuracy. Consider using measurement apps that automatically capture and organize dimensional data with corresponding photos.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Area Calculations and Verification
          </h3>
          <p>
            Break complex areas into simple geometric shapes for accurate calculation, documenting each component clearly in your measurements and sketches. Provide calculation details that show how total areas were determined, including any deductions for unaffected areas or additions for irregular spaces.
          </p>
          <p>
            Verify calculations through multiple methods when possible — hand calculations, software tools, and cross-checking with measurements from different team members help ensure accuracy and build confidence in your documentation. Document any assumptions made in calculations, such as standard ceiling heights or typical wall configurations.
          </p>
          <p>
            Pay special attention to vertical measurements that determine the extent of wall damage, as these measurements often significantly impact scope and cost. Document the methodology used to determine flood cuts, repair heights, and reconstruction requirements with both measurements and photographic evidence.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Written Documentation and Reporting Standards
          </h2>
          <p>
            Written documentation provides the technical explanations and professional analysis that support photographic and measurement evidence. Clear, professional writing demonstrates competence and builds adjuster confidence in your restoration approach and cost estimates.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Damage Description and Analysis
          </h3>
          <p>
            Write damage descriptions that clearly explain what happened, what was affected, and why specific restoration approaches are necessary. Use technical terminology appropriately while ensuring that non-technical readers can understand the essential information. Avoid jargon that might confuse adjusters who lack restoration experience.
          </p>
          <p>
            Structure damage descriptions logically: start with loss event overview, describe affected areas systematically, explain damage progression and secondary impacts, and conclude with restoration requirements and timeline considerations. This logical flow helps adjusters follow your analysis and understand repair necessities.
          </p>
          <p>
            Include relevant industry standards and technical references that support your restoration approach. References to IICRC standards, manufacturer recommendations, or building code requirements demonstrate professional competence while justifying specific materials and methods.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Professional Formatting and Presentation
          </h3>
          <p>
            Present documentation in professional formats that reflect well on your business and inspire confidence in your capabilities. Well-organized reports with consistent formatting, clear headings, and logical information flow create positive impressions that support claim approval processes.
          </p>
          <p>
            Use standardized templates that ensure consistent information inclusion across all claims while allowing customization for specific project requirements. Templates reduce the risk of missing critical information while improving efficiency and maintaining professional presentation standards.
          </p>
          <p>
            Include company branding and contact information that reinforces your professional identity while providing adjusters with easy access to additional information or clarification. Professional presentation differentiates your business from competitors while building the credibility necessary for smooth claim processing.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Moisture Testing and Environmental Monitoring Documentation
          </h2>
          <p>
            Moisture testing and environmental monitoring provide the technical foundation for water damage restoration decisions. This documentation demonstrates professional competence while justifying drying approaches, equipment duration, and completion criteria that directly impact project costs and timelines.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Initial Assessment and Testing Protocols
          </h3>
          <p>
            Document initial moisture conditions systematically, using calibrated testing equipment and industry-standard measurement protocols. Record readings from multiple locations and materials to establish baseline conditions that guide restoration planning and monitor progress throughout the drying process.
          </p>
          <p>
            Include moisture testing documentation that shows: initial moisture readings from affected and unaffected areas for comparison, testing method identification (pin-type, pinless, or thermal imaging), equipment calibration information demonstrating accuracy, and environmental conditions (temperature, humidity) that affect drying requirements.
          </p>
          <p>
            Create moisture maps that visually document affected areas and moisture levels throughout the property. These maps help adjusters understand damage extent while providing progress tracking tools that justify equipment placement and duration decisions.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Daily Monitoring and Progress Tracking
          </h3>
          <p>
            Daily monitoring documentation demonstrates professional drying protocols while providing evidence that supports equipment rental costs and project duration. Adjusters need to see consistent progress toward dry conditions to justify extended drying periods and associated costs.
          </p>
          <p>
            Daily monitoring reports should include: current moisture readings from key monitoring points, environmental conditions and equipment adjustments, progress toward drying goals with trend analysis, and any issues or complications requiring attention or equipment modification. This systematic documentation justifies professional monitoring charges while demonstrating technical competence.
          </p>
          <p>
            Use charts and graphs to visualize drying progress over time, making it easy for adjusters to understand the drying process and verify that appropriate progress is being achieved. Visual presentation of technical data improves comprehension while supporting professional image development.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Scope of Work Documentation and Justification
          </h2>
          <p>
            Scope documentation must clearly connect proposed repair work to observed damage conditions while justifying repair methods and materials selected for restoration work. This documentation supports cost estimates while demonstrating that proposed work is necessary and appropriate for the specific loss conditions.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Line Item Justification and Technical Rationale
          </h3>
          <p>
            Each line item in your scope requires documentation that justifies its necessity and appropriateness for the specific damage conditions. Generic scopes that fail to address specific property conditions create opportunities for adjuster challenges and claim disputes.
          </p>
          <p>
            Line item justification should address: why specific work is necessary based on observed damage conditions, why proposed methods are appropriate for the materials and damage type, how proposed work restores the property to pre-loss condition, and any industry standards or code requirements that influence repair methods or materials.
          </p>
          <p>
            <Link href="/xactimate-estimating-tips" className="text-primary-400 hover:text-primary-300 transition-colors">Document relationships between line items</Link> to help adjusters understand why certain work components appear together. For example, explain why water damage repair includes demolition, drying, cleaning, and reconstruction phases, and how each phase contributes to successful restoration.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Material and Method Selection Documentation
          </h3>
          <p>
            Document the rationale behind material and method selection, particularly when proposing premium materials or specialized techniques that command higher pricing. Adjusters need to understand why standard approaches are inappropriate for specific damage conditions or property characteristics.
          </p>
          <p>
            Material selection documentation includes: existing material identification and matching requirements, performance specifications necessary for the application, availability and lead time considerations affecting project scheduling, and any customer preferences that influence material selection within reasonable cost parameters.
          </p>
          <p>
            Method selection justification addresses efficiency, effectiveness, and appropriateness of proposed restoration techniques. For example, explain why injection drying is more appropriate than conventional demolition for specific wall assemblies, or why specialized equipment is necessary for particular drying challenges.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Common Documentation Mistakes That Lead to Claim Denials
          </h2>
          <p>
            Understanding common documentation mistakes helps contractors avoid the pitfalls that lead to claim denials, payment delays, and adjuster disputes. Most documentation problems stem from incomplete information, unclear explanations, or failure to address adjuster concerns proactively.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Insufficient Damage Evidence
          </h3>
          <p>
            The most common documentation failure is insufficient evidence linking proposed repairs to visible damage conditions. Adjusters cannot approve work that appears unnecessary based on documentation provided, regardless of contractor expertise or customer requests.
          </p>
          <p>
            Insufficient damage evidence includes: photos that don't clearly show damage extent or characteristics, measurements that don't support calculated areas or scope line items, descriptions that rely on contractor assertions rather than observable conditions, and missing documentation for hidden damage discovered during restoration work.
          </p>
          <p>
            Address these issues by providing comprehensive visual documentation, detailed measurements with verification, clear descriptions linking damage conditions to repair requirements, and systematic documentation of work progression that reveals additional damage or complications.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Scope Creep and Undocumented Changes
          </h3>
          <p>
            Scope creep — the addition of work not clearly justified by initial damage assessment — creates significant claim disputes and payment delays. Adjusters expect scopes to reflect actual damage conditions rather than contractor assumptions or customer preferences for improvements.
          </p>
          <p>
            Common scope creep issues include: upgrading materials beyond pre-loss condition without justification, adding work not directly related to covered loss events, increasing scope based on customer preferences rather than damage requirements, and failing to document discovered conditions that justify additional work.
          </p>
          <p>
            Prevent scope creep problems by maintaining clear documentation of pre-loss conditions, photographing and describing discovered damage before expanding scope, obtaining adjuster approval for significant scope changes, and distinguishing between covered restoration work and customer-requested improvements.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Technology Tools for Improved Documentation
          </h2>
          <p>
            Modern technology tools can significantly improve documentation quality and efficiency while reducing the administrative burden of comprehensive claim documentation. The key is selecting tools that integrate well with your existing workflows while providing clear value improvements over traditional documentation methods.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Mobile Documentation Platforms
          </h3>
          <p>
            Mobile documentation platforms enable systematic data collection in the field with automatic organization and cloud-based storage that ensures information security and accessibility. These platforms typically include photo management, measurement tools, and report generation capabilities that streamline the documentation process.
          </p>
          <p>
            Effective mobile platforms provide: automatic photo organization by project and room location, integrated measurement tools with scale references, voice note capabilities for detailed observations, and offline functionality that enables field use without internet connectivity. Look for platforms that export data in formats compatible with estimating software and insurance systems.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            AI-Powered Documentation Enhancement
          </h3>
          <p>
            <Link href="/ai-damage-assessment-restoration" className="text-primary-400 hover:text-primary-300 transition-colors">AI-powered documentation tools</Link> like ClaimScribe AI can analyze photos and voice notes to generate comprehensive damage assessments and professional reports automatically. These tools reduce documentation time while improving completeness and consistency across all projects.
          </p>
          <p>
            AI documentation capabilities include: automatic damage identification and description from photos, voice-to-text conversion with restoration industry terminology, comprehensive scope generation based on damage assessment, and professional report formatting with appropriate technical language and industry standards.
          </p>
          <p>
            AI tools learn from each project, improving accuracy and completeness over time while maintaining consistency across different team members and project types. This consistency helps build adjuster confidence in your documentation quality while reducing review and approval times.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Building Long-Term Adjuster Relationships Through Documentation Excellence
          </h2>
          <p>
            Consistently excellent documentation builds trust and credibility with adjusters that benefits all future claims. Adjusters who trust your documentation quality spend less time questioning your estimates and more time processing approvals, creating competitive advantages that compound over time.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Reputation Building Through Consistency
          </h3>
          <p>
            Professional reputation in the insurance industry spreads through adjuster networks as adjusters share experiences about reliable contractors who consistently provide quality documentation. This reputation becomes a business asset that smooths claim processing while generating referral opportunities.
          </p>
          <p>
            Build reputation through consistent delivery of: comprehensive documentation packages that anticipate adjuster questions, accurate scope and pricing that requires minimal supplements, responsive communication and additional information when requested, and professional presentation that reflects competence and attention to detail.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Continuous Improvement and Feedback Integration
          </h3>
          <p>
            Seek feedback from adjusters about documentation quality and areas for improvement. Most adjusters appreciate contractors who actively work to improve their documentation and will provide constructive suggestions that benefit both parties. This feedback creates opportunities for continuous improvement while strengthening professional relationships.
          </p>
          <p>
            Implement systematic improvement processes based on adjuster feedback, claim review outcomes, and industry best practice developments. Regular review of documentation standards and continuous training for team members ensures that documentation quality improves over time rather than declining through complacency or staff turnover.
          </p>

          <h2 className="text-2xl font-bold text-white pt-4">
            Documentation Standards for Different Damage Types
          </h2>
          <p>
            Different types of property damage require specialized documentation approaches that address the unique characteristics and restoration requirements of each damage type. Understanding these differences helps contractors provide appropriate documentation that supports successful claim processing.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Water Damage Documentation Requirements
          </h3>
          <p>
            <Link href="/water-damage-scope-of-work-template" className="text-primary-400 hover:text-primary-300 transition-colors">Water damage documentation</Link> must address water category determination, affected material identification, moisture assessment, and drying progress tracking. These technical requirements directly impact restoration approaches and associated costs.
          </p>
          <p>
            Water damage documentation includes: source identification and category determination based on contamination levels, extent mapping showing water travel patterns and affected areas, moisture testing results with baseline and progress monitoring data, and material assessment documenting restorability versus replacement requirements. Include environmental monitoring data that supports drying approach and equipment duration decisions.
          </p>

          <h3 className="text-xl font-semibold text-white pt-3">
            Fire and Smoke Damage Documentation
          </h3>
          <p>
            Fire and smoke damage requires documentation of thermal damage, smoke penetration patterns, odor assessment, and specialized cleaning requirements. The complexity of smoke damage assessment requires systematic evaluation of different materials and cleaning approaches.
          </p>
          <p>
            Fire damage documentation should include: thermal damage assessment with char depth and heat penetration analysis, smoke travel patterns and penetration depth in different materials, air quality testing when health concerns exist, and specialized cleaning requirements for different content and structural materials. Document the rationale for disposal versus restoration decisions for affected contents and materials.
          </p>

          <div className="mt-12 p-6 rounded-xl border border-primary-600/20 bg-primary-600/5">
            <p className="text-white font-semibold mb-2">
              Create professional documentation automatically
            </p>
            <p className="text-gray-400 text-sm mb-4">
              ClaimScribe AI transforms your field photos and voice notes into comprehensive documentation packages that adjusters trust. Generate professional reports, detailed scopes, and supporting evidence that gets claims approved faster.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center text-sm text-primary-400 font-medium hover:text-primary-300 transition-colors"
            >
              Improve your documentation quality <ArrowLeft className="ml-1 h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
      <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="insurance-claim-documentation-tips" /><NewsletterSignup /></div>
    </article>
    </>
  );
}