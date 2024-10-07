import React from 'react';
import BannerRow from '@/app/components/banner-row/BannerRow';
import BannerTagline from '@/app/components/banner-tagline/BannerTagline';
import TrustedLogos from '@/app/components/trusted-logos/TrustedLogos';
import FunctionalitiesRow from '@/app/components/functionalities-row/FunctionalitiesRow';
import UsersRow from '@/app/components/users-row/UsersRow';
import CleverSEO from '@/app/components/try-cleverseo/CleverSEO';

export default function HomeComponent() {
  return (
    <>
        <BannerRow />
        <BannerTagline />
        <TrustedLogos />
        <FunctionalitiesRow />
        <UsersRow />
        <CleverSEO />
    </>
  )
}
