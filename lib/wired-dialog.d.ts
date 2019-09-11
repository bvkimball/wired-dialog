import { WiredBase, TemplateResult, CSSResult } from "wired-lib/lib/wired-base";
export declare class WiredDialog extends WiredBase {
    name: string;
    open: boolean;
    static readonly styles: CSSResult;
    render(): TemplateResult;
    show(): void;
    close(): void;
    _watchEscape(event: KeyboardEvent): void;
}
export declare function openDialog(name: string): void;
