import { useEffect } from "react";
import { parse as csvParse } from 'csv-parse/browser/esm/sync';


// expõe o parse globalmente pro HTML legado (sem redeclarar)
if (!(window as any).csvParse) {
  (window as any).csvParse = csvParse;
}

export default function LegacyPage() {
  useEffect(() => {
    const container = document.getElementById("legacy-container");
    if (!container) return;

    fetch("/src/legacy/index.html")
      .then((res) => res.text())
      .then((html) => {
        // Parse do HTML e inserção do body
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");

        // limpar container antes
        container.innerHTML = "";
        container.innerHTML = doc.body.innerHTML;

        // Função utilitária para detectar se um script define csvParse (heurística)
        function scriptSeemsToDefineCsvParse(scriptText, src) {
          if (typeof src === "string" && /papaparse|csvParse/i.test(src)) return true;
          if (typeof scriptText === "string" && /\bcsvParse\b/.test(scriptText)) return true;
          return false;
        }

        // Reexecuta scripts de forma controlada
        const scripts = Array.from(doc.querySelectorAll("script"));
        scripts.forEach(oldScript => {
          try {
            const src = oldScript.src || null;
            const text = oldScript.textContent || "";

            // se já existe window.csvParse e o script parece definir csvParse, pula a injeção
            if (window && (window as any).csvParse && scriptSeemsToDefineCsvParse(text, src)) {
              console.warn("Pulando script que definiria csvParse pois já existe window.csvParse:", src || "[inline]");
              return;
            }

            // criar novo script
            const s = document.createElement("script");
            if (src) {
              s.src = src;
              s.async = false; // manter ordem
              // para scripts locais relativos, ajustar caminho relativo se necessário
              if (src.startsWith("/src/legacy/")) {
                // já está apontando para a pasta legacy no build dev; deixa assim
              }
            } else {
              s.textContent = text;
            }
            document.body.appendChild(s);
          } catch (e) {
            console.error("Erro ao injetar script legado:", e);
          }
        });
      })
      .catch(err => {
        console.error("Erro ao carregar index.html legado:", err);
      });
  }, []);

  return <div id="legacy-container"></div>;
}
