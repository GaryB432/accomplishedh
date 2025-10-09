type CoordinateValue = {
  latitude: number;
  longitude: number;
  precision: number;
};

export function serialize(datavalue: {
  type: "globecoordinate";
  value: CoordinateValue;
}): string {
  const { latitude, longitude, precision } = datavalue.value;
  // TODO check wikibase documentation on preciison
  const p = 4;
  const x = latitude.toFixed(p);
  const y = longitude.toFixed(p);

  return `(${x},${y})`;
}
