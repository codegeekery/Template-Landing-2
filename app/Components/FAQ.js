import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react";




const FAQ = () => {
    return (
        <>

            <React.Fragment>
                <Accordion type="single" collapsible className="text-black flex flex-col justify-center container translate-y-24">
                    <h1 className="text-2xl font-bold">FAQ</h1>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>¿Es accesible?</AccordionTrigger>
                        <AccordionContent>
                            Sí. Se adhiere al patrón de diseño WAI-ARIA.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>¿Cómo se instala?</AccordionTrigger>
                        <AccordionContent>
                            Puedes instalarlo utilizando npm o yarn. Simplemente ejecuta `npm install` o `yarn add` en tu terminal.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>¿Qué navegadores son compatibles?</AccordionTrigger>
                        <AccordionContent>
                            Es compatible con los navegadores más modernos como Chrome, Firefox, Safari, y Edge.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>¿Tiene soporte para dispositivos móviles?</AccordionTrigger>
                        <AccordionContent>
                            Sí, el diseño es responsivo y funciona bien en dispositivos móviles.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>¿Cómo se personaliza el estilo?</AccordionTrigger>
                        <AccordionContent>
                            Puedes personalizar el estilo utilizando CSS o preprocesadores como SASS. También es posible usar librerías de estilos como Styled Components.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>¿Se puede usar con frameworks de frontend?</AccordionTrigger>
                        <AccordionContent>
                            Sí, es compatible con frameworks como React, Vue, y Angular.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-7">
                        <AccordionTrigger>¿Ofrece soporte técnico?</AccordionTrigger>
                        <AccordionContent>
                            Sí, ofrecemos soporte técnico a través de nuestro foro de comunidad y servicio de atención al cliente.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-8">
                        <AccordionTrigger>¿Cuáles son los requisitos mínimos del sistema?</AccordionTrigger>
                        <AccordionContent>
                            Los requisitos mínimos del sistema son tener un navegador moderno actualizado y Node.js para desarrollo.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </React.Fragment>



        </>
    );
}

export { FAQ }