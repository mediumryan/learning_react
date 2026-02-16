import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "~/index.css";
import App from "~/App.tsx";
import { BrowserRouter } from "react-router";
import "~/i18n";
import { Provider } from "jotai";
import { appStore } from "~/data/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
