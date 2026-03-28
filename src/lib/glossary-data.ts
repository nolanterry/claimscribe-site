export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  longDescription: string;
  relatedTerms: string[];
  category: string;
}

export const GLOSSARY_CATEGORIES = [
  "Insurance & Claims",
  "Water Damage",
  "Fire & Smoke",
  "Mold Remediation",
  "Estimating & Scoping",
  "Business Operations",
] as const;

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Xactimate",
    slug: "xactimate",
    definition: "The industry-standard estimating software used by insurance carriers and restoration contractors to scope and price claims.",
    longDescription: "Xactimate, developed by Verisk (formerly Xactware), is the dominant estimating platform in the insurance restoration industry, used by approximately 90% of U.S. insurance carriers. It provides standardized pricing databases updated monthly for labor, materials, and equipment costs by region. Restoration contractors use Xactimate to create detailed line-item estimates (scopes of loss) that match the format insurance adjusters expect. Key features include sketch-based area calculations, macros for common repair scenarios, and integration with carrier claim systems. While powerful, Xactimate has a steep learning curve and creating accurate estimates is time-consuming. ClaimScribe's AI accelerates damage scoping and generates Xactimate-compatible outputs.",
    relatedTerms: ["scope-of-loss", "line-item-estimate", "supplement", "adjuster"],
    category: "Estimating & Scoping",
  },
  {
    term: "Scope of Loss",
    slug: "scope-of-loss",
    definition: "A detailed documentation of all damage found at a property loss, used to build the repair estimate.",
    longDescription: "The scope of loss (also called damage scope or scope report) is the comprehensive documentation of all damage resulting from a covered event (water intrusion, fire, storm, etc.). It includes room-by-room documentation of affected areas, materials, and quantities; photo and video evidence of damage; moisture readings and mapping; cause of loss determination; and an itemized list of repair/replacement items. The accuracy and completeness of the scope of loss directly determines the estimate amount and, ultimately, the contractor's revenue. Incomplete scoping is the leading cause of unprofitable restoration jobs — missed items can't be supplemented if they weren't documented initially. ClaimScribe's AI ensures comprehensive scoping by identifying commonly missed items.",
    relatedTerms: ["xactimate", "supplement", "moisture-mapping", "photo-documentation"],
    category: "Estimating & Scoping",
  },
  {
    term: "Supplement",
    slug: "supplement",
    definition: "An additional estimate submitted to the insurance carrier for damage or repair items not included in the original scope.",
    longDescription: "A supplement is a revised or additional estimate submitted to the insurance carrier when the original scope of loss did not capture all necessary repair work. Supplements are common in restoration because hidden damage is often discovered during demolition and drying (mold behind walls, structural damage under flooring, additional rooms affected by moisture migration). The supplement process requires documenting the newly discovered damage with photos and measurements, creating a revised Xactimate estimate, and negotiating approval with the adjuster. Supplements can represent 20-40% of total job revenue on water and fire losses. Timely, well-documented supplements are essential for profitability. ClaimScribe tracks supplement opportunities and generates supporting documentation automatically.",
    relatedTerms: ["scope-of-loss", "xactimate", "adjuster", "line-item-estimate"],
    category: "Estimating & Scoping",
  },
  {
    term: "Adjuster",
    slug: "adjuster",
    definition: "An insurance professional who investigates claims, assesses damage, and determines the amount the carrier will pay.",
    longDescription: "An adjuster (or claims adjuster) is a professional who investigates insurance claims on behalf of the carrier. Types include staff adjusters (employed by the carrier), independent adjusters (contract firms used during catastrophes or high volume), and public adjusters (hired by the policyholder, not the carrier). The adjuster inspects the property, reviews the scope of loss, evaluates coverage under the policy, and determines the approved estimate amount. The relationship between restoration contractors and adjusters is critical — contractors must present professional, well-documented scopes that justify the repair costs. Understanding how adjusters evaluate estimates and what documentation they require is essential for timely claim approval and full payment.",
    relatedTerms: ["scope-of-loss", "supplement", "xactimate", "depreciation"],
    category: "Insurance & Claims",
  },
  {
    term: "ACV (Actual Cash Value)",
    slug: "acv",
    definition: "The replacement cost of damaged property minus depreciation — the initial amount most insurance claims pay.",
    longDescription: "Actual Cash Value (ACV) is the value of damaged property calculated as replacement cost minus depreciation. Most insurance policies initially pay claims at ACV, withholding the depreciation (recoverable depreciation) until the insured completes repairs. For example, if replacing damaged flooring costs $10,000 and depreciation is $3,000, the initial ACV payment is $7,000. The remaining $3,000 is recoverable upon proof of completed repairs. Understanding the ACV vs. RCV (Replacement Cost Value) distinction is critical for restoration contractors because cash flow and profitability depend on managing both the initial ACV payment and the depreciation recovery process. ClaimScribe tracks depreciation amounts and helps contractors manage the recovery process.",
    relatedTerms: ["rcv", "depreciation", "adjuster", "scope-of-loss"],
    category: "Insurance & Claims",
  },
  {
    term: "RCV (Replacement Cost Value)",
    slug: "rcv",
    definition: "The full cost to replace damaged property with materials of like kind and quality, without deduction for depreciation.",
    longDescription: "Replacement Cost Value (RCV) is the total cost to repair or replace damaged property with materials of like kind and quality at current market prices. RCV policies are the most common in homeowners insurance and provide the most complete coverage. When a claim is processed, the carrier calculates both the RCV (total cost) and the ACV (RCV minus depreciation). The carrier pays the ACV initially, and the policyholder can recover the withheld depreciation by completing repairs and submitting documentation. For restoration contractors, the RCV represents the total revenue opportunity on a claim, while the ACV represents the initial cash available. Understanding this distinction helps contractors manage cash flow and ensure they capture full payment.",
    relatedTerms: ["acv", "depreciation", "scope-of-loss", "supplement"],
    category: "Insurance & Claims",
  },
  {
    term: "Depreciation",
    slug: "depreciation",
    definition: "The reduction in value of property due to age, wear, and obsolescence — withheld from initial insurance payments.",
    longDescription: "Depreciation in insurance claims represents the decrease in value of damaged items due to age, wear and tear, and obsolescence. Insurance carriers calculate depreciation based on the item's useful life, age, and condition at the time of loss. Common depreciation rates vary by material: carpet (10-15 years useful life), roofing (20-30 years), hardwood flooring (50+ years), appliances (10-15 years). Depreciation is initially withheld from the claim payment (the difference between RCV and ACV), but is recoverable when the policyholder completes repairs and submits documentation within the policy's time limit (typically 180 days to 2 years). Recoverable depreciation recovery is a significant revenue component that contractors must actively manage.",
    relatedTerms: ["acv", "rcv", "adjuster", "scope-of-loss"],
    category: "Insurance & Claims",
  },
  {
    term: "Moisture Mapping",
    slug: "moisture-mapping",
    definition: "The process of documenting moisture levels in materials and mapping the extent of water intrusion in a structure.",
    longDescription: "Moisture mapping is the systematic process of measuring and documenting moisture content in building materials to determine the full extent of water damage. Technicians use moisture meters (pin-type for wood, capacitance for drywall), thermal imaging cameras, and hygrometers to identify wet materials, track moisture migration, and determine drying goals. A moisture map is created showing readings at specific locations (typically on a grid pattern), with readings taken daily until materials reach dry standard. The IICRC S500 standard provides guidelines for acceptable moisture levels. Thorough initial moisture mapping is critical because it defines the scope of demolition, determines equipment placement, and documents the need for drying services. Incomplete mapping leads to missed damage and potential mold growth.",
    relatedTerms: ["scope-of-loss", "iicrc-s500", "drying-equipment", "water-damage-categories"],
    category: "Water Damage",
  },
  {
    term: "IICRC S500",
    slug: "iicrc-s500",
    definition: "The standard and reference guide for professional water damage restoration, published by the IICRC.",
    longDescription: "IICRC S500 (Standard and Reference Guide for Professional Water Damage Restoration) is the industry standard that defines best practices for water damage restoration. It covers assessment and inspection, water damage categories (1-3) and classes (1-4), psychrometry and drying science, structural drying procedures, contents restoration, microbial considerations, and documentation requirements. The S500 is widely referenced by insurance carriers and is the basis for most water damage training programs. Following S500 protocols and documenting compliance is essential for restoration contractors because adjusters use it as the benchmark for evaluating the necessity and appropriateness of restoration activities. ClaimScribe aligns documentation with S500 requirements automatically.",
    relatedTerms: ["moisture-mapping", "water-damage-categories", "drying-equipment", "iicrc-s520"],
    category: "Water Damage",
  },
  {
    term: "Water Damage Categories",
    slug: "water-damage-categories",
    definition: "Classification system (Category 1-3) defining water contamination level, which determines restoration procedures and costs.",
    longDescription: "The IICRC S500 defines three categories of water based on contamination level: Category 1 (Clean Water) originates from a sanitary source and does not pose substantial risk (broken supply lines, rain through roof). Category 2 (Gray Water) contains significant contamination and can cause illness — sources include dishwasher/washing machine overflows, toilet overflow with urine, and aquarium water. Category 3 (Black Water) is grossly contaminated and contains pathogenic agents — sources include sewage backups, rising floodwater, and toilet overflow with feces. Water category directly impacts restoration procedures, required PPE, and costs. Category 1 water can degrade to Category 2 or 3 if left untreated (typically within 48-72 hours). Proper category classification is essential for both health/safety and accurate estimating.",
    relatedTerms: ["iicrc-s500", "moisture-mapping", "scope-of-loss", "mold-remediation"],
    category: "Water Damage",
  },
  {
    term: "Drying Equipment",
    slug: "drying-equipment",
    definition: "Specialized equipment (dehumidifiers, air movers, air scrubbers) used to dry water-damaged structures and contents.",
    longDescription: "Drying equipment encompasses the specialized machinery used in structural drying operations. Key equipment types include: LGR (Low Grain Refrigerant) dehumidifiers — remove moisture from the air, typically 1 per 1,000 sq ft; air movers — create airflow across wet surfaces to accelerate evaporation, typically 1 per 10-16 linear feet of wall; air scrubbers — HEPA-filter the air to remove particulates and microbial contamination; injectidry systems — force air behind walls and under cabinets; desiccant dehumidifiers — for specialty or extreme drying conditions. Equipment placement and quantity must follow IICRC S500 guidelines and be documented. Equipment charges (per unit per day) are a significant revenue line — typically 40-60% of a water mitigation invoice. Accurate equipment inventory and daily monitoring documentation are essential for claim approval.",
    relatedTerms: ["moisture-mapping", "iicrc-s500", "water-damage-categories", "scope-of-loss"],
    category: "Water Damage",
  },
  {
    term: "Fire Damage Scoping",
    slug: "fire-damage-scoping",
    definition: "The process of assessing and documenting all damage from fire, smoke, soot, and water used in suppression.",
    longDescription: "Fire damage scoping involves assessing and documenting the full extent of damage from a fire loss, which includes direct fire/heat damage, smoke and soot damage (often extending far beyond the fire origin), water damage from fire suppression, and structural damage. Fire scoping is particularly complex because smoke travels through HVAC systems, plumbing penetrations, and structural cavities, affecting areas not visible during initial inspection. Different fuel sources create different types of soot (protein, synthetic, natural substance) requiring different cleaning methods and costs. A comprehensive fire scope must also address odor (ozone, thermal fogging, hydroxyl treatment), content cleaning vs. replacement decisions, and code upgrade requirements when rebuilding. Incomplete fire scoping frequently leads to costly supplements.",
    relatedTerms: ["smoke-damage-classes", "scope-of-loss", "supplement", "contents-cleaning"],
    category: "Fire & Smoke",
  },
  {
    term: "Smoke Damage Classes",
    slug: "smoke-damage-classes",
    definition: "Classification of smoke/soot residue types based on the fuel source, determining appropriate cleaning methods.",
    longDescription: "Smoke and soot are classified by the fuel source that produced them, and each type requires different cleaning approaches: Protein residue (from burned food, grease) — nearly invisible but produces strong odor, yellow-brown film, requires solvent-based cleaners. Synthetic residue (from burned plastics, synthetics) — black, smeared, difficult to clean, often requires aggressive methods or replacement. Natural substance residue (from wood, paper) — powdery, gray-black, often responds to dry cleaning methods. Fuel oil soot (from puff-back events) — fine, black, pervasive, extremely difficult to clean. Mixed residue — combination of types, most common in structural fires, requires multi-step cleaning. Correctly identifying smoke type determines the cleaning method, cost, and whether items can be restored or must be replaced — directly impacting the estimate.",
    relatedTerms: ["fire-damage-scoping", "contents-cleaning", "scope-of-loss"],
    category: "Fire & Smoke",
  },
  {
    term: "Contents Cleaning",
    slug: "contents-cleaning",
    definition: "The restoration of personal property and contents affected by water, fire, smoke, or mold through specialized cleaning processes.",
    longDescription: "Contents cleaning encompasses the restoration of personal property and building contents damaged by water, fire, smoke, or mold. Methods include ultrasonic cleaning (for hard goods, electronics), dry cleaning and wet cleaning (for soft goods), ozone treatment (for odor), and specialized processes for electronics, documents, and artwork. The decision to clean vs. replace is based on the item's pre-loss value, cleaning cost, and likelihood of successful restoration. Contents processing is typically done either on-site or at a dedicated contents cleaning facility (pack-out). Contents claims can represent 30-50% of total loss value on fire claims. Proper documentation of pre-loss condition, cleaning methods used, and results is essential for claim approval. ClaimScribe helps estimate contents cleaning vs. replacement costs accurately.",
    relatedTerms: ["fire-damage-scoping", "smoke-damage-classes", "scope-of-loss", "pack-out"],
    category: "Fire & Smoke",
  },
  {
    term: "Mold Remediation",
    slug: "mold-remediation",
    definition: "The process of containing, removing, and preventing mold growth in buildings following water damage or moisture problems.",
    longDescription: "Mold remediation is the controlled process of removing mold growth and contaminated materials from a building. The IICRC S520 standard defines remediation procedures based on the extent of contamination. Key steps include assessment and testing (air and surface samples), containment (polyethylene barriers, negative air pressure), removal of contaminated materials (drywall, insulation, carpet), HEPA vacuuming of structural surfaces, antimicrobial treatment, air scrubbing, and post-remediation verification (clearance testing). Mold remediation is often a separate scope from water mitigation and may require a separate protocol from an industrial hygienist. Mold claims are complex because coverage varies widely by policy, and documentation requirements are stringent. Proper scoping ensures all contaminated materials are addressed while avoiding unnecessary removal.",
    relatedTerms: ["iicrc-s520", "moisture-mapping", "water-damage-categories", "scope-of-loss"],
    category: "Mold Remediation",
  },
  {
    term: "IICRC S520",
    slug: "iicrc-s520",
    definition: "The standard and reference guide for professional mold remediation, published by the IICRC.",
    longDescription: "IICRC S520 (Standard and Reference Guide for Professional Mold Remediation) is the industry standard defining best practices for mold remediation in buildings. It covers assessment, remediation procedures, containment requirements, personal protective equipment, cleaning and disinfection, waste disposal, and post-remediation evaluation. The S520 classifies mold contamination by condition levels (1-3) based on area affected and type of contamination, with each level requiring different containment and remediation approaches. Following S520 protocols is critical for both health and safety compliance and insurance claim approval. Carriers expect remediation contractors to document compliance with S520 at every step. ClaimScribe generates S520-compliant documentation templates and checklists.",
    relatedTerms: ["mold-remediation", "iicrc-s500", "moisture-mapping"],
    category: "Mold Remediation",
  },
  {
    term: "Line-Item Estimate",
    slug: "line-item-estimate",
    definition: "A detailed, itemized estimate listing every repair task with its unit cost, quantity, and total — the standard format for insurance claims.",
    longDescription: "A line-item estimate is a detailed, itemized breakdown of every repair or restoration task needed to return a property to pre-loss condition. Each line includes a description, unit of measure (square foot, linear foot, each), quantity, unit price, and extended total. Insurance carriers require line-item estimates (typically in Xactimate format) rather than lump-sum bids. Line items must correspond to standardized Xactimate categories and use the carrier's accepted pricing. Common line items include demolition, drying equipment, cleaning, drywall repair, painting, flooring replacement, and general conditions (overhead and profit). The completeness and accuracy of line-item estimates directly determines contractor revenue — missed items require supplements, and incorrect quantities lead to underpayment.",
    relatedTerms: ["xactimate", "scope-of-loss", "supplement", "overhead-and-profit"],
    category: "Estimating & Scoping",
  },
  {
    term: "Overhead and Profit (O&P)",
    slug: "overhead-and-profit",
    definition: "The general contractor's markup (typically 10% overhead + 10% profit) applied to restoration estimates involving multiple trades.",
    longDescription: "Overhead and Profit (O&P) is the markup applied to restoration estimates to compensate the general contractor for managing and coordinating the project. The industry standard is 10% overhead (to cover business expenses: insurance, vehicles, office, staff) plus 10% profit, applied to the total estimate. O&P is one of the most disputed items between contractors and carriers. Carriers often argue O&P is only warranted when the contractor manages multiple subcontractor trades (the 'three-trade rule'), while contractors argue that coordination, project management, and business overhead justify O&P on all jobs. Properly documenting the scope and complexity of a project — including the number of trades involved — strengthens the case for O&P and can add 20%+ to the estimate total.",
    relatedTerms: ["line-item-estimate", "xactimate", "supplement", "scope-of-loss"],
    category: "Business Operations",
  },
  {
    term: "Emergency Services",
    slug: "emergency-services",
    definition: "The initial response activities performed within 24-48 hours of a loss to mitigate damage and prevent further deterioration.",
    longDescription: "Emergency services (also called mitigation or first response) encompass the initial activities performed immediately after a loss to prevent further damage. For water losses, this includes water extraction, emergency board-up, content manipulation (moving furniture off wet carpet), placing initial drying equipment, and documenting pre-existing damage. For fire losses, emergency services include board-up, tarping, content protection, and initial debris removal. Emergency services are typically authorized directly by the policyholder or carrier without detailed estimates — speed is critical. However, thorough documentation during emergency services is essential because it establishes the baseline scope and justifies all subsequent work. ClaimScribe's mobile documentation captures emergency service activities in real-time for immediate scope development.",
    relatedTerms: ["scope-of-loss", "moisture-mapping", "drying-equipment", "adjuster"],
    category: "Business Operations",
  },
  {
    term: "Photo Documentation",
    slug: "photo-documentation",
    definition: "Systematic capture of photographic evidence showing damage conditions, repair progress, and completed work.",
    longDescription: "Photo documentation is the systematic capture and organization of photographs throughout the restoration process. Best practices include taking photos before any work begins (establishing pre-work conditions), during demolition (revealing hidden damage), during drying (equipment placement, moisture readings), and at completion (showing repaired conditions). Photos should include overview shots (entire room), detail shots (specific damage), reference shots (with rulers/moisture meters for scale/readings), and identification shots (room labels, addresses). Each photo should be timestamped and geotagged. Thorough photo documentation is the single most important factor in claim approval and supplement success. Adjusters who cannot see the damage cannot approve the repair. ClaimScribe's AI analyzes photos to identify damage types and suggest scope items automatically.",
    relatedTerms: ["scope-of-loss", "supplement", "moisture-mapping", "adjuster"],
    category: "Estimating & Scoping",
  },
  {
    term: "Pack-Out",
    slug: "pack-out",
    definition: "The process of inventorying, boxing, and removing contents from a damaged property for off-site cleaning or storage.",
    longDescription: "A pack-out is the process of systematically inventorying, documenting, packing, and removing personal property from a damaged structure for cleaning, restoration, or storage at an off-site facility. Pack-outs are common on fire losses and large water losses where contents cannot remain in the structure during restoration. Each item must be photographed, described, categorized (clean, restore, replace), packed with protective materials, and logged into an inventory system. Pack-outs are labor-intensive and can represent significant revenue (contents manipulation charges, storage fees, pack/unpack labor). Proper inventory documentation protects both the contractor and the homeowner and is essential for contents claim processing. Missing or damaged items during pack-out create significant liability exposure.",
    relatedTerms: ["contents-cleaning", "fire-damage-scoping", "scope-of-loss", "line-item-estimate"],
    category: "Fire & Smoke",
  },
  {
    term: "Subcontractor Management",
    slug: "subcontractor-management",
    definition: "The coordination and oversight of specialty trade contractors involved in restoration and reconstruction projects.",
    longDescription: "Subcontractor management in restoration involves coordinating multiple specialty trades needed to complete a reconstruction project: electricians, plumbers, HVAC technicians, roofers, flooring installers, painters, cabinetmakers, and others. Effective subcontractor management includes maintaining a vetted network of qualified subs, verifying insurance and licensing, scheduling and sequencing work to avoid conflicts, quality inspection at each phase, ensuring code compliance, managing change orders, and documenting all work for the insurance claim. Poor subcontractor management leads to project delays, quality issues, code violations, and reduced margins. The presence of three or more trades is the standard justification for O&P charges. ClaimScribe helps track subcontractor activities and tie their work to specific estimate line items.",
    relatedTerms: ["overhead-and-profit", "line-item-estimate", "scope-of-loss"],
    category: "Business Operations",
  },
  {
    term: "Large Loss",
    slug: "large-loss",
    definition: "A restoration project exceeding a carrier-defined threshold (typically $100K+) requiring specialized management and documentation.",
    longDescription: "A large loss is a restoration claim that exceeds a threshold (varying by carrier, typically $100K-$500K+) that triggers enhanced claim handling procedures. Large losses typically involve dedicated adjusters (often forensic specialists), engineering assessments, extensive documentation requirements, phased scope development, and multiple rounds of negotiations. For restoration contractors, large losses represent significant revenue opportunities but also increased complexity, cash flow challenges (slower payment cycles), and documentation burden. Successful large loss management requires experienced estimators, strong project management, meticulous documentation, and the ability to present professional, well-supported supplements. ClaimScribe's comprehensive documentation and scoping tools are particularly valuable on large losses where missed items can represent tens of thousands in lost revenue.",
    relatedTerms: ["scope-of-loss", "supplement", "adjuster", "overhead-and-profit"],
    category: "Business Operations",
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return GLOSSARY_TERMS.filter((t) => t.category === category);
}

export function getAllGlossarySlugs(): string[] {
  return GLOSSARY_TERMS.map((t) => t.slug);
}
