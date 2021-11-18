import { useState, useEffect } from 'react';

function IpsumForm({ submitForm, max }: { submitForm: (p: number) => void, max: number }) {
    const [paragraphs, setParagraphs] = useState<number>(1)

    // TODO: BJ check out the error here
   // every time paragraphs changes, run submitForm()
    useEffect(() => {
        submitForm(paragraphs);
    }, [paragraphs, submitForm]) // by using paragraphs in your dependencies, every time this state changes, it re-calls the use effect callback    

    return <form>
        <label>
            How many paragraphs? {paragraphs}
            <input
                type="number"
                onChange={(e) => setParagraphs(parseInt(e.target.value))}
                value={paragraphs}
            />
        </label>
    </form>
}

export default IpsumForm;