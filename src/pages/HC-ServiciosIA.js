import React from "react";
import FormHC from "../components/form";
import ServiciosIAComponent from "../components/ServiciosIA";
import FaqSection from "../components/FaqSection";
import { serviciosIaFaqs } from "../data/faqData";

function ServiciosIA() {
    return (
        <>
        <main>
            <ServiciosIAComponent />
            <FaqSection
                items={serviciosIaFaqs}
                eyebrow="PREGUNTAS FRECUENTES · IA"
                title="Dudas frecuentes sobre"
                highlight="nuestros Agentes de IA"
                subtitle="Todo lo que necesitas saber sobre automatización de prospección, WhatsApp, SEO/GEO e integraciones con tu CRM."
                schemaId="hicomerce-faq-servicios-ia"
                theme="dark"
            />
            <FormHC />
        </main>
        </>
    );
}

export default ServiciosIA;