export abstract class PdfReaderPort {
  /**
   * Extrahiert den reinen Text aus einer übergebenen PDF-Datei.
   * @param file Die hochgeladene PDF-Datei.
   * @returns Ein Promise, das den rohen extrahierten Text als String auflöst.
   */
  abstract extractText(file: File): Promise<string>;
}