import React from "react";

/* Componentes del Index */
import Ourclients from "../components/nuestrosClientes";
import ResultadosHC from "../components/resultadosMetricas";
import Satisfaccion from "../components/garantiaClientes";
import FormHC from "../components/form";
import HeroHC from "../components/hero";
import AboutusHC from "../components/beneficios";
import FaqSection from "../components/FaqSection";
import { homeFaqs } from "../data/faqData";
/* import ProyectosClientesHC from '../components/proyectosCliente' */

function IndexHC() {
    return (
        <>
            <main>
                <HeroHC />
                <AboutusHC />
                <Ourclients />
                <ResultadosHC />
               {/*  <ProyectosClientesHC /> */}
                <Satisfaccion />
                <FaqSection
                    items={homeFaqs}
                    schemaId="hicomerce-faq-home"
                    theme="dark"
                />
                <FormHC />
            </main>
        </>
    );
}

export default IndexHC;