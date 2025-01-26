import { useSessionStorage } from "@mantine/hooks";
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";
import { useLayoutEffect } from "react";

export const useInit = () => {
    const [isColdStartup, setIsColdStartup] = useSessionStorage({
        key: "isColdStartup",
        defaultValue: true
    });

    useLayoutEffect(() => {
        const coldStartup = listen("toggle", async () => {
            if (!isColdStartup) return;

            console.log(isColdStartup);

            setIsColdStartup(false);

            await invoke("set_search_toggle", { value: false });
            await invoke("set_search_toggle", { value: true });

        })

        return () => {
            coldStartup.then((f: () => void) => f());
        };
    }, [isColdStartup])
}