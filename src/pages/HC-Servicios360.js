import React from "react";
import FormHC from "../components/form";
import Satisfaccion from "../components/garantiaClientes";
import Ourclients from "../components/nuestrosClientes";
import Servicios360Component from "../components/Servicios-360";
import FaqSection from "../components/FaqSection";
import { servicios360Faqs } from "../data/faqData";

function Servicios360() {
    return (
        <>
            <main>
                <Servicios360Component />
                <Ourclients />
                <Satisfaccion />
                <FaqSection
                    items={servicios360Faqs}
                    eyebrow="PREGUNTAS FRECUENTES · MARKETING 360°"
                    title="Todo sobre tu"
                    highlight="Evolución Digital 360°"
                    subtitle="Conoce qué incluye el plan, cómo funciona nuestra metodología trimestral y cómo respaldamos nuestra garantía de resultados."
                    schemaId="hicomerce-faq-servicios-360"
                    theme="dark"
                />
                <FormHC />
            </main>
        </>
    );
}

export default Servicios360;