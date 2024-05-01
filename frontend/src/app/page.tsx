import Image from 'next/image'
import { CustomFilter, Hero, SearchBar } from "../../components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
        <h1 style={{ fontSize: '2.25rem', fontWeight: '800' }}>Parlays Catalog</h1>
          <p>Pick and choose the right parlays for you.</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          {/* <div className='home__filer-container'>
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div> */}
        </div>
      </div>
    </main>
  );
}
