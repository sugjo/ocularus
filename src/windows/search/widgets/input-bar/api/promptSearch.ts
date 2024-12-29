import { invoke } from "@tauri-apps/api/core";
import { Store } from "../../../types";

export async function promptSearch(prompt: string, testPaths: Store) {
    return JSON.parse(await invoke<string>("prompt_search", {
        value: prompt, paths: JSON.stringify(testPaths.pathsMap)
    }));
}