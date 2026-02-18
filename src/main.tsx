// react
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// react-router
import { BrowserRouter } from "react-router";
// atoms
import { Provider } from "jotai";
import { appStore } from "~/data/store.ts";
// styles
import "~/index.css";
// components
import App from "~/App.tsx";
// i18n
import "~/i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
