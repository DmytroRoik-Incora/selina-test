const allLocations = 'https://locations.selinatech.com/locations';
const locationById = (id: string) => `https://events.selinatech.com/events/aggregated/${id}`;

export const LocationEndpoints = { allLocations, locationById };
