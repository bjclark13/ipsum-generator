import { ReactNode } from "react";

function IpsumDisplay({ paragraphs, children }: { paragraphs: string[], children: ReactNode }) {
    return (
        <>{paragraphs.map(paragraph => <p>{paragraph} {children}</p>)}</>
    )
}

export default IpsumDisplay;