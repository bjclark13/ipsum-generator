function IpsumDisplay({ paragraphs }: { paragraphs: string[] }) {
    return (
        <>{paragraphs.map(paragraph => <p>{paragraph}</p>)}</>
    )
}

export default IpsumDisplay;