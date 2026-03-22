export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
}

export const AUTHORS: Author[] = [
  {
    slug: 'nolan-terry',
    name: 'Nolan Terry',
    role: 'Founder & CEO',
    bio: 'Nolan Terry is the founder of ClaimScribe and CEO of Nolan Ventures, building AI-powered software for the restoration industry. He created ClaimScribe after seeing contractors consistently leave money on the table due to incomplete damage scoping and poor insurance documentation.',
    expertise: ['Restoration Technology', 'AI Damage Assessment', 'Insurance Claims', 'SaaS'],
  },
  {
    slug: 'claimscribe-team',
    name: 'ClaimScribe Editorial Team',
    role: 'Restoration Industry Research',
    bio: 'The ClaimScribe editorial team produces actionable guides on damage scoping, Xactimate estimating, insurance documentation, and restoration business operations. Our content helps contractors write better scopes, win more supplements, and get paid what their work is worth.',
    expertise: ['Xactimate Estimating', 'Damage Scoping', 'Insurance Claims', 'Restoration Business'],
  },
];

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find(a => a.slug === slug);
}
