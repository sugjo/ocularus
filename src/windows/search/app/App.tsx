import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { Layout } from "./Layout";
import { ResultList } from "../widgets/result-list";
import { InputBar, inputBarModel } from "../widgets/input-bar";
import { useInit } from "./lib/useInit";

const { useSearch } = inputBarModel;

function App() {
  useInit();
  const { prompt, result, search } = useSearch();
  const isResultVisible = Boolean(prompt);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => search(e.currentTarget.value);
  const triggerHandler = (hovered: number) => invoke("open", { path: result[hovered].path });

  return (
    <Layout
      resultList={
        <ResultList
          result={result}
          onTrigger={triggerHandler}
        />
      }
      inputBar={
        <InputBar
          changeHandler={changeHandler}
        />
      }
      resultVisible={isResultVisible}
    />
  );
}

export default App;
