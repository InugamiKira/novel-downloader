import { Book } from "../../../main/Book";
import { BaseRuleClass, ChapterParseObject } from "../../../rules";
export declare class Shubl extends BaseRuleClass {
    constructor();
    bookParse(): Promise<Book>;
    chapterParse(chapterUrl: string, chapterName: string | null, isVIP: boolean, isPaid: boolean, charset: string, options: object): Promise<ChapterParseObject>;
}
export declare class Duread extends BaseRuleClass {
    constructor();
    bookParse(): Promise<Book>;
    chapterParse(chapterUrl: string, chapterName: string | null, isVIP: boolean, isPaid: boolean, charset: string, options: object): Promise<ChapterParseObject>;
}
