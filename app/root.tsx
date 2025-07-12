import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  data,
} from "react-router";
import { Layout as DefaultLayout } from "./components/layout";
import { HoneypotProvider } from "remix-utils/honeypot/react";
import { honeypot } from "~/lib/utils/honeypot.server";

import type { Route } from "./+types/root";
import "./styles/index.css";
import "./styles/fonts.css";
import "./styles/animations.css";
import { Toast } from "@base-ui-components/react";
import { ToastList } from "./components/toast";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const honeyProps = await honeypot.getInputProps();

  return data({
    honeyProps,
  });
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  console.log('🚀 Starting Mariana script loading...');
                  
                  // Only load if not already loaded
                  if (window.__marianaScriptsLoaded) {
                    console.log('✅ Mariana scripts already loaded');
                    return;
                  }
                  
                  var TENANT_NAME = 'flexcorepilates';
                  var d = document;
                  var sA = ['polyfills', 'js'];
                  var loadedCount = 0;
                  
                  function initMariana() {
                    try {
                      console.log('🔄 Attempting to initialize Mariana...');
                      if (window.__initMTIntegrations) {
                        window.__initMTIntegrations();
                        console.log('✅ Called __initMTIntegrations');
                        
                        // Check if MTIntegrations was created
                        if (window.MTIntegrations) {
                          console.log('✅ MTIntegrations is available');
                          window.__marianaReady = true;
                        } else {
                          console.log('⚠️ MTIntegrations not available yet, retrying...');
                          setTimeout(initMariana, 500);
                        }
                      } else {
                        console.log('⚠️ __initMTIntegrations not available yet, retrying...');
                        setTimeout(initMariana, 500);
                      }
                    } catch (e) {
                      console.warn('❌ Mariana init error:', e);
                    }
                  }
                  
                  for (var i = 0; i < sA.length; i++) {
                    var s = d.createElement('script');
                    s.src = 'https://' + TENANT_NAME + '.marianaiframes.com/' + sA[i];
                    s.setAttribute('data-timestamp', +new Date());
                    
                    console.log('📦 Loading script:', s.src);
                    
                    s.onload = function() {
                      loadedCount++;
                      console.log('✅ Script loaded (' + loadedCount + '/' + sA.length + '):', this.src);
                      
                      if (loadedCount === sA.length) {
                        console.log('🎉 All scripts loaded, initializing...');
                        window.__marianaScriptsLoaded = true;
                        setTimeout(initMariana, 200);
                      }
                    };
                    
                    s.onerror = function(e) {
                      console.warn('❌ Mariana script failed to load:', e.target.src);
                    };
                    
                    (d.head || d.body).appendChild(s);
                  }
                } catch (e) {
                  console.warn('❌ Error loading Mariana scripts:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <div className="root">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  return (
    <HoneypotProvider {...data.honeyProps}>
      <Toast.Provider>
        <DefaultLayout>
          <Outlet />

          <Toast.Portal>
            <Toast.Viewport className="fixed top-auto mx-auto flex md:right-8 md:bottom-8 md:w-80">
              <ToastList />
            </Toast.Viewport>
          </Toast.Portal>
        </DefaultLayout>
      </Toast.Provider>
    </HoneypotProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  console.error("❌ Full error: ", error);

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
