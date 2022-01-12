interface Paged<T> {
    count: number;
    next?: string;
    previous?: string;
    results: T[];
}
