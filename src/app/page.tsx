import Image from "next/image";
// import HomeComponent from "@/pages/home/Home";
import BannerRow from "@/components/banner-row/BannerRow";
import BannerTagline from "@/components/banner-tagline/BannerTagline";
import TrustedLogos from "@/components/trusted-logos/TrustedLogos";
import FunctionalitiesRowowitiesRow from "@/components/functionalities-row/FunctionalitiesRow";
import UsersRow from "@/components/users-row/UsersRow";
import CleverSEO from "@/components/try-cleverseo/CleverSEO";

export default function Home() {
  return (
    <>
      <BannerRow />
      <BannerTagline />
      <TrustedLogos />
      <FunctionalitiesRowowitiesRow />
      <UsersRow />
      <CleverSEO />
    </>
  );
}
