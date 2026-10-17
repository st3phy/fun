/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
const validPath = (n, edges, source, destination) => {
    // Map each vertex to its adjacent verteces
    const path = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        path[u].push(v);
        path[v].push(u);
    }

    const visited = new Set();

    // Depth-first-search alg
    const dfs = node => {
        if (node === destination) return true;

        visited.add(node);

        for (const neighbor of path[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor)) {
                    return true;
                }
            }
        }

        return false;
    };

    return dfs(source);
};

module.exports = { validPath };

console.log(
    validPath(
        6,
        [
            [0, 1],
            [0, 2],
            [3, 5],
            [5, 4],
            [4, 3]
        ],
        0,
        5
    )
);
