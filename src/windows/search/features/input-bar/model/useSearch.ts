import { useLayoutEffect, useState } from "react";
import { promptSearch } from "../api";
import { Result, Store } from "../../../types";

interface Replacer {
    [name: string]: string
}

const testPath: Store = {
    pathsMap: {
        "4311030a-f1b9-466a-bd25-f885189a7492": {
            path: "D:\\Links",
            isActive: true
        },
        // "5b91a8e2-dbaa-41d3-8ead-489ea8086285": {
        //     path: "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs",
        //     isActive: true
        // }
    },
    pathsIds: [
        "4311030a-f1b9-466a-bd25-f885189a7492",
        // "5b91a8e2-dbaa-41d3-8ead-489ea8086285"
    ]
}
export const useSearch = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState<Result[]>([]);

    const languageShift = (prompt: string) => {
        const isEnStr = !!prompt.match(new RegExp(`^\\w+`, 'gi'));
        const replacer: Replacer = {
            "q": "й", "w": "ц", "e": "у", "r": "к", "t": "е", "y": "н", "u": "г",
            "i": "ш", "o": "щ", "p": "з", "[": "х", "]": "ъ", "a": "ф", "s": "ы",
            "d": "в", "f": "а", "g": "п", "h": "р", "j": "о", "k": "л", "l": "д",
            ";": "ж", "'": "э", "z": "я", "x": "ч", "c": "с", "v": "м", "b": "и",
            "n": "т", "m": "ь", ",": "б", ".": "ю", "/": ".",
        }

        if (isEnStr) return prompt.split("").map((e) => replacer[e]).join("");
        else return prompt.split("").map((e) => Object.keys(replacer).find(key => replacer[key] === e)).join("");
    }

    useLayoutEffect(() => {
        if (!prompt) return;
        const search = async () => {
            const resultRaw: Result[] = await promptSearch(prompt, testPath);
            const resultShift: Result[] = await promptSearch(languageShift(prompt), testPath)

            setResult(resultRaw.concat(resultShift));
        }
        search();
    }, [prompt])

    return { prompt, result, search: setPrompt }
}