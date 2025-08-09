/// <reference lib="dom" />

/**
 * Minimal wrapper around the /licenses-activate Edge Function.
 *
 * @param deviceId   The unique ID for this machine (from getDeviceId()).
 * @param licenseKey The customer-ID string stored in license_keys.stripe_customer_id.
 * @returns          Plain-text response from the function.
 *                   - "Activation successful"
 *                   - "Device already activated"
 *                   - "No seats available"
 *                   - Any other error text
 */
const BASE_URL =
  "https://ejsyfrpncoiirilcqrfy.functions.supabase.co/licenses-activate";
const API_KEY =
  "sb_publishable_Id7urQWJPoymwpkYaszCBg_2sW7x4r_"; // Supabase publishable key

export async function activateLicense(
  deviceId: string,
  licenseKey: string,
): Promise<string> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY,
    },
    body: JSON.stringify({
      device_id: deviceId,
      license_key: licenseKey,
    }),
  });

  // Convert non-200 responses into readable text
  const text = await res.text();
  if (!res.ok) {
    throw new Error(text || `HTTP ${res.status}`);
  }
  return text; // success or “Device already activated” etc.
}

