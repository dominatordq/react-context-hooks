import { useEffect } from 'react';

export default function useDocumentTitle(title) {
    useEffect(() => { // === to componentDidMount/Update
        document.title = title;

        return () => { // === to componentDidUnmount
            console.log("Clean up");
        }
    }); // can have second argument - dependency array
}