import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ApiResponse } from "../types/DataAPI";

export default async function Home() {
    const response = await fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json');
    const { locations }: ApiResponse = await response.json();
    
  return (
    <main>
      <Header/>
      <Footer />
    </main>
  );
}