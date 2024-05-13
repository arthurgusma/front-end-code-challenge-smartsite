import DescripitionList from "@/components/DescriptionList";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import Header from "@/components/Header";
import { SmartFitProvider } from '../ContextAPI/SmartLocationsContext';
import LocationCardList from "@/components/LocationCardList";

export default async function Home() {

  return (
    <main>
      <Header />
      <div className="md:w-2/3 px-4 m-auto">
      <SmartFitProvider>
        <Form />
        <DescripitionList />
        <LocationCardList />
      </SmartFitProvider>
      </div>
      <Footer />
    </main>
  );
}