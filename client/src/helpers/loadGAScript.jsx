export function loadGAScript(measurementId) {
  // Schon geladen?
  if (window.gtag) return;

  // <script async ...>
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // <script> window.dataLayer = ... </script>
  const script2 = document.createElement("script");
  script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
  document.head.appendChild(script2);
}
