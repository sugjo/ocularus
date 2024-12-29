import { Page } from "../pages";
import { Layout } from "./Layout";

function App() {
  const pages = [
    {
      name: "general",
      icon: "tune",
      title: "Общее",
      page: <Page.General />
    },
    // {
    //   name: "customization",
    //   icon: "format_paint",
    //   title: "Кастомизация",
    //   disabled: true,
    //   page: <Page.Customization />
    // },
    {
      name: "about",
      icon: "info",
      title: "О приложении",
      page: <Page.About />
    }
  ]

  return (
    <Layout
      defaultValue="general"
      pages={pages}
    />
  );
}

export default App;
