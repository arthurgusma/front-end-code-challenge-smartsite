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
      <SmartFitProvider>
        <Form />
        <DescripitionList />
        <LocationCardList />
      </SmartFitProvider>
      <Footer />
    </main>
  );
}