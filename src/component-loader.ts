export function createLoader<T>(componentPath: string, destructuring?: (module: any) => T): () => Promise<T> {
    return () => new Promise<T>((resolve) => {
        return require.ensure([componentPath], () => {
                return resolve(require(componentPath));
        });
    }).then(module => destructuring ?  destructuring(module) : module);
}
