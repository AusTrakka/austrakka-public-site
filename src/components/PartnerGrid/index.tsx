import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface Partner {
  name: string;
  url: string;
  logo: string;
}

interface PartnerSectionProps {
  title: string;
  partners: Partner[];
}

function PartnerSection({ title, partners }: PartnerSectionProps) {
  return (
    <div className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.grid}>
        {partners.map((p) => (
          <Link key={p.name} to={p.url} className={styles.card}>
            <img src={p.logo} alt={p.name} />
            <figcaption>{p.name}</figcaption>
          </Link>
        ))}
      </div>
    </div>
  );
}

const LABS: Partner[] = [
  {
    name: 'Microbiological Diagnostic Unit Public Health Laboratory (MDU PHL)',
    url: 'https://biomedicalsciences.unimelb.edu.au/departments/microbiology-Immunology/research/services/microbiological-diagnostic-unit-public-health-laboratory',
    logo: 'img/partner-logos/mdu.webp',
  },
  {
    name: 'Victorian Infectious Diseases Reference Laboratory (VIDRL)',
    url: 'https://www.vidrl.org.au/',
    logo: 'img/partner-logos/vidrl.webp',
  },
  {
    name: 'PathWest',
    url: 'https://www.pathwest.health.wa.gov.au/',
    logo: 'img/partner-logos/pathwest.webp',
  },
  {
    name: 'Royal Darwin Hospital',
    url: 'https://nt.gov.au/wellbeing/hospitals-health-services/royal-darwin-hospital',
    logo: 'img/partner-logos/royaldarwin.webp',
  },
  {
    name: 'Royal Hobart Hospital',
    url: 'https://www.health.tas.gov.au/hospitals/royal-hobart-hospital',
    logo: 'img/partner-logos/rhh.webp',
  },
  {
    name: 'SA Pathology',
    url: 'https://www.sapathology.sa.gov.au/',
    logo: 'img/partner-logos/sa-path.webp',
  },
  {
    name: 'Institute of Clinical Pathology and Medical Research (ICPMR)',
    url: 'https://www.wsce.com.au/project/institute-of-clinical-pathology-medical-research/',
    logo: 'img/partner-logos/icpmr.webp',
  },
  {
    name: 'Public and Environmental Health Reference Laboratories (PEHRL)',
    url: 'https://www.health.qld.gov.au/public-health/pathology-queensland',
    logo: 'img/partner-logos/queensland-pathology.webp',
  },
  {
    name: 'ACT Pathology',
    url: 'https://www.canberrahealthservices.act.gov.au/health-professionals/act-pathology',
    logo: 'img/partner-logos/act-path.webp',
  },
];

const COMMITTEES: Partner[] = [
  {
    name: 'Australian Health Protection Committee (AHPC)',
    url: 'https://www.health.gov.au/committees-and-groups/australian-health-protection-committee-ahpc?language=en',
    logo: 'img/partner-logos/health-dep-aus.webp',
  },
  {
    name: 'Communicable Disease Network Australia',
    url: 'https://www.cdc.gov.au/about-us/advisory-groups-and-committees/communicable-diseases-network-australia-cdna',
    logo: 'img/partner-logos/cdna.webp',
  },
  {
    name: 'Public Health Laboratory Network',
    url: 'https://www.cdc.gov.au/about/advisory-groups-and-committees/public-health-laboratory-network-phln',
    logo: 'img/partner-logos/phln.webp',
  },
  {
    name: 'Communicable Diseases Genomics Network',
    url: 'https://www.cdgn.org.au/',
    logo: 'img/partner-logos/CDGN-logo-transparent.webp',
  },
  {
    name: 'OzFoodNet',
    url: 'https://www.cdc.gov.au/diseases/surveillance-systems-and-networks/ozfoodnet-network',
    logo: 'img/partner-logos/ozfoodnet.webp',
  },
];

const FUNDERS: Partner[] = [
  {
    name: 'Australian Centre for Disease Control',
    url: 'https://www.cdc.gov.au/',
    logo: 'img/partner-logos/acdc.svg',
  },
];

export default function PartnerGrid() {
  return (
    <div>
      <PartnerSection title="Public Health Laboratories" partners={LABS} />
      <hr />
      <PartnerSection title="National Committees" partners={COMMITTEES} />
      <hr />
      <PartnerSection title="Funder" partners={FUNDERS} />
    </div>
  );
}
