import { Helmet } from "react-helmet";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
};

const MainLayout = ({ children, title, description }: Props) => {
  return (
    <div className="min-h-screen select-none w-full bg-[#fafafa] font-epilogue  relative">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Helmet>
      {/* <Navigation /> */}
      <div className="min-h-screen">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
