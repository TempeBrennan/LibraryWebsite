export interface BookInfo {
    ISBN: number;
    name: string;
    author: string;
    publisher: string;
    publishYear: number;
    version: number;
    priority: string;
    count: number;
    loanCount: number;
    totalLoanCount: number;
    intro?: string;
}