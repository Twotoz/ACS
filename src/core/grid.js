export function toIndex(position, grid) {
  return position.y * grid.width + position.x;
}

export function fromIndex(index, grid) {
  return { x: index % grid.width, y: Math.floor(index / grid.width) };
}

export function getNeighborIndices(index, grid) {
  const { x, y } = fromIndex(index, grid);
  const neighbors = [];
  for (let dy = -1; dy <= 1; dy += 1) {
    for (let dx = -1; dx <= 1; dx += 1) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < grid.width && ny >= 0 && ny < grid.height) {
        neighbors.push(toIndex({ x: nx, y: ny }, grid));
      }
    }
  }
  return neighbors;
}

export function distance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
