/// <reference lib="dom" />

export async function getDeviceId(): Promise<string> {
  const cached = (await figma.clientStorage.getAsync("ck_device_id")) as
    | string
    | undefined;

  if (cached) {
    return cached;
  }

  const id = crypto.randomUUID();
  await figma.clientStorage.setAsync("ck_device_id", id);
  return id;
}

