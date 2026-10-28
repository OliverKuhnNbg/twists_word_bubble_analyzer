export interface AnalyzedWord {
  readonly text: string;
  readonly frequency: number;
}

export interface LayoutedWordNode extends AnalyzedWord {
  readonly size: number;
  readonly x?: number;
  readonly y?: number;
  readonly rotate?: number;
}
