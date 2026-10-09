export function findDuplicatesSlow(values) {
  const duplicates = [];

  for (let i = 0; i < values.length; i += 1) {
    const current = values[i];

    if (duplicates.includes(current)) {
      continue;
    }

    let repeated = false;
    for (let j = 0; j < i; j += 1) {
      if (values[j] === current) {
        repeated = true;
        break;
      }
    }

    if (repeated) {
      duplicates.push(current);
    }
  }

  return duplicates;
}

export function findDuplicates(values) {
  const seen = new Set();
  const duplicates = new Set();

  for (const value of values) {
    if (seen.has(value)) {
      duplicates.add(value);
    } else {
      seen.add(value);
    }
  }

  return [...duplicates];
}
