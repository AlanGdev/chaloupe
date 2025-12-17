import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RestaurantSection1 from '@/components/RestaurantSection1';
import RestaurantSection2 from '@/components/RestaurantSection2';
import RestaurantSection3 from '@/components/RestaurantSection3';

export default function RestaurantPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-center bg-gray-100 py-8">
          Bienvenue au restaurant La Chaloupe
        </h1>
        <RestaurantSection1 />
        <RestaurantSection2 />
        <RestaurantSection3 />
      </div>
      <Footer />
    </>
  );
}
