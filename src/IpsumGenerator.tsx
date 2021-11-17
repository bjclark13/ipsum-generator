import { useState, useEffect } from "react";
import IpsumForm from './IpsumForm';
import IpsumDisplay from './IpsumDisplay';
import ipsumService from './ipsumService';

function IpsumGenerator() {
    const [actualPs, setPs] = useState<string[]>([]);

    useEffect(() => {
        ipsumService(4).then((paragraphs: string[]) => {
            setPs(paragraphs);
        })
    }, [])

    return (
        <main>
            <IpsumForm max={50} submitForm={(ps: number) =>
                ipsumService(ps).then((paragraphs: string[]) => {
                    setPs(paragraphs);
                })
            } />

            <IpsumDisplay paragraphs={actualPs} />
        </main >
    )
}

export default IpsumGenerator;