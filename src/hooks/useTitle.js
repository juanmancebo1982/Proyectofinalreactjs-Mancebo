import { useEffect } from "react";

export const useTitle = (conditional, documentTitle, dependencies = []) => {
    useEffect(() => {
        if (conditional) {
            document.title = documentTitle;

        } else {
            document.title = 'ComicShop | Inicio';
        }
    }, [dependencies]);
};
