import Head from "next/head";
import Accordions from "../components/Accordions";
import SelectAgent from "../components/SelectAgent";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Home({ standards }) {
  return (
    <>
      <Head>
        <title>Health Selector</title>
      </Head>

      <main>
        <header className="p-1"></header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 ms-sm-auto px-md-4 offset-md-2">
              <div className="pt-3 pb-2 mb-3 border-bottom">
                <h1>
                  Generic BioTechnology&reg; <br />
                  Model Health Standard Selector
                </h1>
                <p>
                  The below lists of core rodent pathogens are excluded from ALL
                  Generic BioTechnology&reg; health standards:
                </p>
                <Accordions />
                <SelectAgent standards={standards} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/ref-standards.json`);

  const standards = await res.json();

  return {
    props: {
      standards,
    },
  };
};
