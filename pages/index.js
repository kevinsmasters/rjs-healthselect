import Head from 'next/head'
import Accordions from '../components/Accordions'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Health Selector</title>
      </Head>

      <main>
          <header className="p-1"></header>
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-3 col-lg-2 d-md-block sidebar collapse">
                  </div>
                  <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                      <div className="pt-3 pb-2 mb-3 border-bottom">
                        <p>The below lists of core rodent pathogens are excluded
                        from ALL Taconic Biosciences health standards:</p>
                        <Accordions />
                      </div>
                  </div>
              </div>
          </div>
      </main>


    </>
  )
}
