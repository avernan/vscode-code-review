import { QuickPickItem, Range } from 'vscode';
import { CsvEntry } from './model';

export class CommentPickEntry implements QuickPickItem {
  constructor(
    public readonly id: string,
    public readonly label: string,
    public readonly description: string,
    public readonly detail: string,
    public readonly csvEntry: CsvEntry,
    public readonly lines: Range[],
  ) {
    this.description = '(' + this.description + ')';
  }
}
