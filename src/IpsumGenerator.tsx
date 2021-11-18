import { useState, useEffect } from "react";
import IpsumForm from './IpsumForm';
import IpsumDisplay from './IpsumDisplay';
import getIpsum from './getIpsum';


function IpsumGenerator() {
    const [actualPs, setPs] = useState<string[]>([]);

    // callback functions are used to change the parent's data from the child
    // scope

    useEffect(() => {
        // what we do when the component first loads
        const defaultPs = 3;

        getIpsum(defaultPs)
        .then((paragraphs) => {
            setPs(paragraphs);
        });

    }, [])


    const onSubmit = (ps: number) => {
        // call getIpsum
        // returns a promise
        // when that promise resolves,
        // then call our setPs()
        getIpsum(ps)
            .then((paragraphs) => {
                setPs(paragraphs);
            });


        // setPs(possiblePs.slice(0, ps))
    };

    return (
        <main>
            <IpsumForm max={1000} submitForm={onSubmit} />

            <IpsumDisplay paragraphs={actualPs} />
        </main >
    )
}

export default IpsumGenerator;