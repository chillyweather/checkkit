const empty = `<svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="26"
      height="26"
      rx="6"
      ry="6"
      fill="white"
      stroke="#6B7280"
      stroke-width="2"
    />
  </svg>`;
const half = `
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="26"
      height="26"
      rx="6"
      ry="6"
      fill="#6B7280"
      stroke="#6B7280"
      stroke-width="2"
    />
    <rect
      x="8"
      y="12"
      width="12"
      height="4"
      rx="2"
      ry="2"
      fill="white"
    />
  </svg>`;

const full = `
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1"
      y="1"
      width="26"
      height="26"
      rx="6"
      ry="6"
      fill="#6B7280"
      stroke="#6B7280"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.507 10.9535L12.9999 18.4606L9.09277 14.5535L10.507 13.1393L12.9999 15.6322L19.0928 9.53931L20.507 10.9535Z"
      fill="white"
    />
  </svg>`;
export { empty, half, full };
