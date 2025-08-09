const { widget } = figma;

import { ChecklistWidget } from "./components/ChecklistWidget";
import { configAdapters } from "./utils/configFactory";
import checklist from "./checklists";
import { getDeviceId } from "./lib/device";
import { activateLicense } from "./lib/api";

async function askUserForKey(): Promise<string> {
  return new Promise((resolve) => {
    figma.showUI(`
      <style>
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          margin: 20px; 
        }
        input { 
          width: 100%; 
          padding: 8px; 
          margin: 10px 0; 
          border: 1px solid #ccc; 
          border-radius: 4px; 
        }
        button { 
          background: #0d99ff; 
          color: white; 
          border: none; 
          padding: 10px 20px; 
          border-radius: 4px; 
          cursor: pointer; 
        }
      </style>
      <h3>Enter License Key</h3>
      <input type="text" id="licenseKey" placeholder="Enter your license key" />
      <br/>
      <button onclick="parent.postMessage({pluginMessage: {type: 'license-key', key: document.getElementById('licenseKey').value}}, '*')">
        Activate
      </button>
    `, { width: 300, height: 150 });

    figma.ui.onmessage = (msg) => {
      if (msg.type === 'license-key') {
        figma.closePlugin();
        resolve(msg.key);
      }
    };
  });
}

function PropertyMenuWidget() {
  const config = configAdapters.fromExistingChecklist(
    checklist,
    "qa",
    "QA Checklist"
  );

  return <ChecklistWidget config={config} />;
}

async function promptAndActivate() {
  const licenseKey = await askUserForKey();
  const id = await getDeviceId();

  try {
    const msg = await activateLicense(id, licenseKey);
    figma.notify(msg);
    await figma.clientStorage.setAsync("ck_license_key", licenseKey);
  } catch (err: any) {
    figma.notify(`Activation failed: ${err.message}`, { error: true });
  }
}

// Run license activation when widget loads
promptAndActivate().catch(err => {
  figma.notify(`License activation failed: ${err.message}`, { error: true });
});

widget.register(PropertyMenuWidget);

// Export everything for external use
export { ChecklistWidget } from "./components/ChecklistWidget";
export { createChecklistConfig, configAdapters } from "./utils/configFactory";
export * from "./types/index";
