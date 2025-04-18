import React from 'react';
import type { ReactNode } from 'react';
import { Carousel } from 'primereact/carousel';
import Overview from '@site/docs/overview.mdx';
import useBaseUrl from '@docusaurus/core/lib/client/exports/useBaseUrl';
import styles from './styles.module.css';

export default function HomepageFeatures(): ReactNode {
  const partners = [
    {
      name: 'ACT Pathology',
      image: useBaseUrl('img/partner-logos/act-path.png'),
      url: 'https://www.canberrahealthservices.act.gov.au/health-professionals/act-pathology',
    },
    {
      name: 'Australian Health Protection Principal Committee',
      image: useBaseUrl('img/partner-logos/ahppc.jpg'),
      url: 'https://www.directory.gov.au/portfolios/health-and-aged-care/department-health-and-aged-care/australian-health-protection-principal-committee',
    },
    {
      name: 'Communicable Diseases Genomics Network',
      image: useBaseUrl('img/partner-logos/CDGN-logo-transparent.png'),
      url: 'https://www.cdgn.org.au',
    },
    {
      name: 'Institute of Clinical Pathology and Medical Research',
      image: useBaseUrl('img/partner-logos/icpmr.png'),
      url: 'https://www.wslhd.health.nsw.gov.au/Education-Portal/Research/Research-Categories/Centre-for-infectious-Diseases-and-Microbiology-Public-Health',
    },
    {
      name: 'Microbiology Diagnostic Unit Public Health Laboratory',
      image: useBaseUrl('img/partner-logos/mdu.png'),
      url: 'https://biomedicalsciences.unimelb.edu.au/departments/microbiology-Immunology/research/services/microbiological-diagnostic-unit-public-health-laboratory',
    },
    {
      name: 'OzFoodNet Network',
      image: useBaseUrl('img/partner-logos/ozfoodnet.jpg'),
      url: 'https://www.health.gov.au/our-work/ozfoodnet-network',
    },
    {
      name: 'PathWest',
      image: useBaseUrl('img/partner-logos/pathwest.png'),
      url: 'https://www.pathwest.health.wa.gov.au/',
    },
    {
      name: 'Public Health Laboratory Network',
      image: useBaseUrl('img/partner-logos/phln.jpg'),
      url: 'https://www.health.gov.au/committees-and-groups/phln',
    },
    {
      name: 'Royal Darwin Hospital',
      image: useBaseUrl('img/partner-logos/royaldarwin.jpg'),
      url: 'https://nt.gov.au/wellbeing/hospitals-health-services/royal-darwin-hospital',
    },
    {
      name: 'Royal Hobart Hospital',
      image: useBaseUrl('img/partner-logos/rhh.jpg'),
      url: 'https://www.health.tas.gov.au/hospitals/royal-hobart-hospital',
    },
    {
      name: 'SA Pathology',
      image: useBaseUrl('img/partner-logos/sa-path.webp'),
      url: 'https://www.sapathology.sa.gov.au/',
    },
    {
      name: 'Victorian Infectious Diseases Reference Laboratory',
      image: useBaseUrl('img/partner-logos/vidrl.jpg'),
      url: 'https://www.vidrl.org.au/',
    },
  ];
  
  interface AusTrakkaPartner {
    name: string;
    image: string;
    url: string;
  }

  const ausTrakkaPartnersTemplate = (partner: AusTrakkaPartner) => (
    <div className={styles.carouselImage}>
      <a href={partner.url} target="_blank" rel="noreferrer">
        <div className={styles.imageContainer}>
          <img src={partner.image} alt={partner.name} className={styles.partnerLogo} />
        </div>
        <div className={styles.carouselCaption}>
          <h4>{partner.name}</h4>
        </div>
      </a>
    </div>
  );
  
  return (
    <div className="container">
      <Overview />
      <img
        className={styles.overviewImage}
        src={useBaseUrl('img/content-images/at-funcs.png')}
        alt="Diagram of platform functions and architecture"
      />
      <hr />
      <h1>Partners</h1>
      <Carousel
        value={partners}
        numVisible={3}
        numScroll={1}
        circular
        autoplayInterval={3000}
        itemTemplate={ausTrakkaPartnersTemplate}
      />
    </div>
  );
}
