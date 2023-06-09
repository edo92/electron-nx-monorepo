export interface API {
  greet: (message: unknown) => Promise<string>;
}
