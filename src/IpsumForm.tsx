import { useState } from 'react';

function IpsumForm({ submitForm, max }: { submitForm: (p: number) => {}, max: number }) {
    const [paragraphs, setParagraphs] = useState<number>(1)

    return <form onSubmit={(e) => {
        e.preventDefault();
        submitForm(paragraphs);
    }}>
        <label>
            How many paragraphs?
            <input
                type="number"
                onChange={(e) => setParagraphs(parseInt(e.target.value))}
                value={paragraphs}
            />
        </label>

        <button> Submit </button>
    </form>
}

export default IpsumForm;