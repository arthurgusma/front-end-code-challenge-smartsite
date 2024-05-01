import { ApiResponse } from "../types/DataAPI";

export default async function Home() {
    const response = await fetch('https://test-frontend-developer.s3.amazonaws.com/data/locations.json');
    const { locations }: ApiResponse = await response.json();
    
  return (
    <main>
      {locations.map((local)=>{
        return <p key={local.id}>{local.city_name}</p>;
      })}
    </main>
  );
}