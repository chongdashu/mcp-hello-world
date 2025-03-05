import { useState } from "react";
import "./App.css";

function App() {
  const [isWonkyLayout, setIsWonkyLayout] = useState(false);
  const [showViteErrorModal, setShowViteErrorModal] = useState(false);

  const handleLogInfo = () => {
    console.log("This is a regular console log message for debugging");
  };

  const handleLogWarning = () => {
    console.warn(
      "This is a warning message that will be highlighted in yellow"
    );
  };

  const handleLogError = () => {
    console.error("This is an error message that will be highlighted in red");
  };

  const handleLogEverything = () => {
    // Initial logs - using console methods with objects instead of strings
    console.log("%c🚀 Application initialized", "font-weight: bold;");
    console.log("%c📦 Loading resources...", "color: #3498db;");
    console.warn(
      "%c⚠️ Some assets might be missing",
      "background: #fffacd; color: #f39c12; font-weight: bold;"
    );
    console.log("%c🔍 User session started", "color: #3498db;");
    console.error(
      "%c❌ Failed to load user preferences",
      "color: #e74c3c; font-weight: bold;"
    );
    console.warn(
      "%c⚠️ Using default settings instead",
      "background: #fffacd; color: #f39c12;"
    );
    console.log("%c🔄 Syncing data with server", "color: #3498db;");
    console.error(
      "%c❌ Network connection unstable",
      "color: #e74c3c; font-weight: bold;"
    );
    console.warn(
      "%c⚠️ Retrying connection in 5 seconds",
      "background: #fffacd; color: #f39c12;"
    );
    console.log(
      "%c✅ Connection established successfully",
      "color: #2ecc71; font-weight: bold;"
    );

    // Add more chaotic logs with styled console outputs
    setTimeout(() => {
      console.log("%c🔍 Scanning for updates...", "color: #3498db;");
      console.warn(
        "%c⚠️ Update server not responding",
        "background: #fffacd; color: #f39c12;"
      );
      console.log("%c🔄 Trying backup server", "color: #3498db;");
    }, 500);

    setTimeout(() => {
      console.error(
        "%c❌ Authentication token expired",
        "color: #e74c3c; font-weight: bold;"
      );
      console.warn(
        "%c⚠️ Security warning: Using insecure connection",
        "background: #fffacd; color: #f39c12;"
      );
      console.log(
        "%c🔑 Requesting new authentication token",
        "color: #3498db;"
      );
      console.log("%c🔐 New token received", "color: #2ecc71;");
    }, 1000);

    setTimeout(() => {
      console.log("%c📊 Loading user statistics", "color: #3498db;");
      console.error(
        "%c❌ Database query failed",
        "color: #e74c3c; font-weight: bold;"
      );
      console.warn(
        "%c⚠️ Using cached data from local storage",
        "background: #fffacd; color: #f39c12;"
      );
      console.log("%c📈 Rendering charts with limited data", "color: #3498db;");
    }, 1500);

    setTimeout(() => {
      console.warn(
        "%c⚠️ Memory usage high",
        "background: #fffacd; color: #f39c12;"
      );
      console.log("%c🧹 Running garbage collection", "color: #3498db;");
      console.error(
        "%c❌ Failed to free memory",
        "color: #e74c3c; font-weight: bold;"
      );
      console.log("%c⏱️ Performance degradation detected", "color: #3498db;");
    }, 2000);

    setTimeout(() => {
      // Using console.groupCollapsed for error groups
      console.groupCollapsed(
        "%c❌ Critical error in module: UserManager",
        "color: #e74c3c; font-weight: bold;"
      );
      console.error("%c❌ Stack trace:", "color: #e74c3c;", {
        error: "Error at line 42 in UserManager.js",
        component: "UserManager",
        time: new Date().toISOString(),
      });
      console.warn(
        "%c⚠️ Attempting recovery procedure",
        "background: #fffacd; color: #f39c12;"
      );
      console.log("%c🔄 Reloading core modules", "color: #3498db;");
      console.groupEnd();
    }, 2500);

    setTimeout(() => {
      console.log("%c📡 Websocket connection established", "color: #3498db;");
      console.warn(
        "%c⚠️ Receiving malformed data packets",
        "background: #fffacd; color: #f39c12;"
      );
      console.log("%c🔍 Analyzing data structure", "color: #3498db;");
      console.error(
        "%c❌ JSON parse error:",
        "color: #e74c3c; font-weight: bold;",
        {
          message: "Unexpected token at position 217",
          data: '{"users":[{"id":1,"name":"John"...',
        }
      );
    }, 3000);

    setTimeout(() => {
      console.warn(
        "%c⚠️ API rate limit approaching",
        "background: #fffacd; color: #f39c12;"
      );
      console.log("%c⏳ Throttling requests", "color: #3498db;");
      console.error(
        "%c❌ Request timeout for endpoint:",
        "color: #e74c3c; font-weight: bold;",
        {
          url: "/api/users",
          timeout: "30000ms",
          status: 408,
        }
      );
      console.log("%c🔄 Retrying with exponential backoff", "color: #3498db;");
    }, 3500);
  };

  const toggleLayout = () => {
    setIsWonkyLayout(!isWonkyLayout);
    console.log(`Layout is now ${!isWonkyLayout ? "wonky" : "good"}`);
  };

  const toggleViteErrorModal = () => {
    setShowViteErrorModal(!showViteErrorModal);
  };

  return (
    <>
      <header>
        <h1>MCP Made Simple</h1>
        <h2 className="subtitle">Lesson 2: Browser Tools</h2>

        <div className="author-section">
          <p className="created-by">Created by:</p>
          <div className="social-links">
            <a
              href="https://www.x.com/chongdashu"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link twitter"
            >
              <svg
                className="twitter-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
              @chongdashu
            </a>
            <span className="footer-divider">•</span>
            <a
              href="https://www.youtube.com/@AIOriented"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link youtube"
            >
              <svg
                className="youtube-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
              @AIOriented
            </a>
          </div>
          <div className="more-tutorials">
            <p>Follow for more content on AI vibe coding related content</p>
          </div>
        </div>
      </header>

      <div className="debug-section">
        <h2>Debugging Demo</h2>
        <div className="layout-status">
          <span
            className={`status-indicator ${isWonkyLayout ? "wonky" : "good"}`}
          >
            Layout Status: {isWonkyLayout ? "WONKY" : "GOOD"}
          </span>
        </div>
        <button
          className={`layout-toggle ${isWonkyLayout ? "wonky" : "good"}`}
          onClick={toggleLayout}
        >
          {isWonkyLayout ? "Fix Layout" : "Make Layout Wonky"}
        </button>
        <div className={`debug-buttons ${isWonkyLayout ? "wonky" : "good"}`}>
          <button className="log-button info" onClick={handleLogInfo}>
            Log Info
          </button>
          <button className="log-button warning" onClick={handleLogWarning}>
            Log Warning
          </button>
          <button className="log-button error" onClick={handleLogError}>
            Log Error
          </button>
          <button className="log-button stream" onClick={handleLogEverything}>
            Chaos Log
          </button>
          <button
            className="log-button vite-error"
            onClick={toggleViteErrorModal}
          >
            Show Vite Error
          </button>
        </div>
        <p>
          Click the buttons above and open your browser's console (F12) to see
          the different log types
        </p>
      </div>

      {showViteErrorModal && (
        <div
          className="vite-error-modal-overlay"
          onClick={toggleViteErrorModal}
        >
          <div
            className="vite-error-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="vite-error-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <h1>Vite</h1>
              <button className="close-button" onClick={toggleViteErrorModal}>
                ×
              </button>
            </div>
            <div className="vite-error-content">
              <h2>Failed to load module</h2>
              <div className="error-message">
                <pre>
                  <code>
                    {`Error: Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.
    at http://localhost:5173/src/main.jsx
    at async loadModuleFromNetwork (http://localhost:5173/@vite/client:271:7)
    at async loadModule (http://localhost:5173/@vite/client:246:22)
    at async fetchModule (http://localhost:5173/@vite/client:814:14)`}
                  </code>
                </pre>
              </div>
              <div className="error-stack">
                <h3>Stack Trace:</h3>
                <pre>
                  <code>
                    {`Error: Cannot find module './components/Header'
Import trace for requested module:
./src/App.jsx
./src/main.jsx`}
                  </code>
                </pre>
              </div>
              <div className="error-hint">
                <p>Possible causes:</p>
                <ul>
                  <li>
                    The file './components/Header' does not exist in your
                    project
                  </li>
                  <li>There might be a typo in the import path</li>
                  <li>You might need to create the missing component</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
