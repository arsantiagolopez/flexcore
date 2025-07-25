import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

const TENANT_NAME = "flexcorepilates";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <script
        src={`https://${TENANT_NAME}.marianaiframes.com/polyfills`}
        async={true}
      ></script>
      <script
        src={`https://${TENANT_NAME}.marianaiframes.com/js`}
        async={true}
      ></script>
      <HydratedRouter />
    </StrictMode>
  );
});
