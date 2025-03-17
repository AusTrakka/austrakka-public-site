import React from 'react';
import type { ReactNode } from 'react';
import { Carousel } from 'primereact/carousel';
import Overview from '@site/docs/overview.mdx';
import useBaseUrl from '@docusaurus/core/lib/client/exports/useBaseUrl';
import styles from './styles.module.css';

export default function HomepageFeatures(): ReactNode {
  const partners = [
    {
      name: 'Communicable Diseases Genomics Network',
      image: useBaseUrl('img/CDGN-logo-transparent.png'),
      url: 'https://www.cdgn.org.au',
    },
    {
      name: 'Public Health Laboratory Network',
      image: useBaseUrl('img/phln.jpg'),
      url: 'https://www.health.gov.au/committees-and-groups/phln',
    },
    {
      name: 'OzFoodNet Network',
      image: useBaseUrl('img/ozfoodnet.jpg'),
      url: 'https://www.health.gov.au/our-work/ozfoodnet-network',
    },
    {
      name: 'Institute of Clinical Pathology and Medical Research',
      image: useBaseUrl('img/icpmr.png'),
      url: 'https://www.wslhd.health.nsw.gov.au/Education-Portal/Research/Research-Categories/Centre-for-infectious-Diseases-and-Microbiology-Public-Health',
    },
    {
      name: 'Microbiology Diagnostic Unit Public Health Laboratory',
      image: useBaseUrl('img/mdu.png'),
      url: 'https://biomedicalsciences.unimelb.edu.au/departments/microbiology-Immunology/research/services/microbiological-diagnostic-unit-public-health-laboratory',
    },
    {
      name: 'PathWest',
      image: useBaseUrl('img/pathwest.png'),
      url: 'https://www.pathwest.health.wa.gov.au/',
    },
    {
      name: 'SA Pathology',
      image: useBaseUrl('img/sa-path.webp'),
      url: 'https://www.sapathology.sa.gov.au/',
    },
    {
      name: 'ACT Pathology',
      image: useBaseUrl('img/act-path.png'),
      url: 'https://www.canberrahealthservices.act.gov.au/health-professionals/act-pathology',
    },
    {
      name: 'Royal Hobart Hospital',
      image: useBaseUrl('img/rhh.jpg'),
      url: 'https://www.health.tas.gov.au/hospitals/royal-hobart-hospital',
    },
    {
      name: 'Victorian Infectious Diseases Reference Laboratory',
      image: useBaseUrl('img/vidrl.jpg'),
      url: 'https://www.vidrl.org.au/',
    },
    {
      name: 'Royal Darwin Hospital',
      image: useBaseUrl('img/royaldarwin.jpg'),
      url: 'https://nt.gov.au/wellbeing/hospitals-health-services/royal-darwin-hospital',
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
        src={useBaseUrl('img/at-funcs.png')}
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
