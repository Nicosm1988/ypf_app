import { practiceSources } from "./sources.js";

const productLoaders = Object.freeze({
  "power-bi": async () => (await import("./powerBi.js")).powerBiPracticeLibrary,
  "power-apps": async () => (await import("./powerApps.js")).powerAppsPracticeLibrary,
  "power-automate": async () => (await import("./powerAutomate.js")).powerAutomatePracticeLibrary,
});

const libraryCache = new Map();

export async function loadGatePractices(productSlug, gateSlug) {
  const loader = productLoaders[productSlug];
  if (!loader) throw new Error(`Producto sin biblioteca de prácticas: ${productSlug}`);

  if (!libraryCache.has(productSlug)) {
    const pendingLibrary = loader().catch((error) => {
      libraryCache.delete(productSlug);
      throw error;
    });
    libraryCache.set(productSlug, pendingLibrary);
  }

  const library = await libraryCache.get(productSlug);
  const gate = library[gateSlug];
  if (!gate) throw new Error(`Gate sin biblioteca de prácticas: ${productSlug}/${gateSlug}`);

  validateGateLibrary(productSlug, gateSlug, gate);

  return {
    ...gate,
    practices: gate.practices.map((practice) => ({
      ...practice,
      sources: practice.sourceIds.map((sourceId) => practiceSources[sourceId]),
    })),
  };
}

export function validateGateLibrary(productSlug, gateSlug, gate) {
  if (!gate?.intro || !Array.isArray(gate.practices) || gate.practices.length < 3) {
    throw new Error(`Biblioteca incompleta: ${productSlug}/${gateSlug}`);
  }

  const ids = new Set();
  gate.practices.forEach((practice) => {
    if (!practice.id || ids.has(practice.id)) {
      throw new Error(`ID de práctica inválido o repetido: ${productSlug}/${gateSlug}`);
    }
    ids.add(practice.id);

    const requiredText = [practice.title, practice.decision, practice.why];
    const missingSource = practice.sourceIds?.find((sourceId) => !practiceSources[sourceId]);
    if (
      requiredText.some((value) => !value) ||
      !practice.evidence?.length ||
      !practice.appliesTo?.length ||
      !practice.sourceIds?.length ||
      missingSource ||
      practice.examples?.length !== 3
    ) {
      throw new Error(`Contrato incompleto en ${practice.id}`);
    }

    practice.examples.forEach((example) => {
      if (![example.title, example.scenario, example.application, example.proof].every(Boolean)) {
        throw new Error(`Ejemplo incompleto en ${practice.id}`);
      }
    });
  });

  return true;
}
