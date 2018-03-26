function createLoader<T>(componentPath: string): () => Promise<T>  {
    return () => new Promise<T>((resolve) => {
        return require.ensure([componentPath], () => {
          resolve(require(componentPath));
        });
      });
}
