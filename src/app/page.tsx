import BannerRow from "@/components/banner-row/BannerRow";
import BannerTagline from "@/components/banner-tagline/BannerTagline";
import TrustedLogos from "@/components/trusted-logos/TrustedLogos";
import FunctionalitiesRowowitiesRow from "@/components/functionalities-row/FunctionalitiesRow";
import UsersRow from "@/components/users-row/UsersRow";
import CleverSEO from "@/components/try-cleverseo/CleverSEO";
import AppFlow from "@/components/app-flow/AppFlow";

export default function Home() {
  return (
    <>
      <BannerRow />
      <BannerTagline />
      <AppFlow />
      <TrustedLogos />
      <FunctionalitiesRowowitiesRow />
      <UsersRow />
      <CleverSEO />
    </>
  );
}
