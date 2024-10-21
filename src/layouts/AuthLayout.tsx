import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
  hideHeaderFooter?: boolean; // Optional prop
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, hideHeaderFooter }) => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/login-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
      className="flex justify-center items-center w-full"
    >
      <div className="text-center">
        <Image
          src="/images/CleverSEO.png"
          alt="CleverSEO"
          width={400}
          height={70}
          className="w-auto h-auto object-contain mb-4"
        />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
