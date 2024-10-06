import { Layout } from "./Layout";
import { InputBar, inputBarModel } from "./features/input-bar";
import { ResultList } from "./features/result-list";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

const { useSearch } = inputBarModel;

function App() {
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
