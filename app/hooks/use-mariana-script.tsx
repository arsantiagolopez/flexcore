import React from "react";

export function useMarianaScript() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    // Check if scripts are already loaded and initialized
    if (window.__initMTIntegrations && window.MTIntegrations) {
      setIsLoaded(true);
      return;
    }

    const loadScript = () => {
      const TENANT_NAME = "flexcorepilates";
      const d = document;
      const sA = ["polyfills", "js"];

      let loadedCount = 0;

      const tryInitializeAndCheck = () => {
        if (window.__initMTIntegrations) {
          try {
            // Call the init function - this should create MTIntegrations
            window.__initMTIntegrations();

            // Now check if MTIntegrations was created
            if (window.MTIntegrations) {
              setIsLoaded(true);
              return true;
            }
          } catch (error) {
            console.error("Error calling __initMTIntegrations:", error);
          }
        }

        return false;
      };

      const pollForInitialization = () => {
        let attempts = 0;
        const maxAttempts = 10;

        const poll = () => {
          attempts++;

          if (tryInitializeAndCheck()) {
            return; // Success!
          }

          if (attempts < maxAttempts) {
            setTimeout(poll, 500);
          }
        };

        poll();
      };

      for (let i = 0; i < sA.length; i++) {
        const s = d.createElement("script");
        s.src = "https://" + TENANT_NAME + ".marianaiframes.com/" + sA[i];
        s.setAttribute("data-timestamp", String(+new Date()));

        s.onload = () => {
          loadedCount++;

          if (loadedCount === sA.length) {
            // Try initializing immediately
            if (!tryInitializeAndCheck()) {
              // If immediate initialization fails, start polling
              setTimeout(pollForInitialization, 500);
            }
          }
        };

        s.onerror = (error) => {
          console.error("Failed to load Mariana script:", s.src, error);
        };

        (d.head || d.body).appendChild(s);
      }
    };

    loadScript();
  }, []);

  return isLoaded;
}
