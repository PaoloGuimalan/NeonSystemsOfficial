import MainLayout from "@/components/layouts/MainLayout";
import Neon from "@/assets/icons/Neon";

const Home = () => {
  return (
    <MainLayout title="Neon Systems" description="Neon Homepage">
      <div className="flex flex-1 flex-col w-full h-[100vh] items-center justify-center">
        <Neon className="w-120 h-120" />
        <span className="font-epilogue text-3xl text-dark-100 font-bold">
          Neon Systems
        </span>
        <span className="font-epilogue text-[16px] text-gray-500">
          Returning Soon
        </span>
      </div>
    </MainLayout>
  );
};

export default Home;
