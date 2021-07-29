export interface LocationItem {
  id: string;
  booking_id: string;
  biLocationID: string;
  winks_accommodation_id: number;
  status: string;
  location: {
    id: string;
    value: string;
    uiRegion: string;
  };
  options: {
    requiresCheckConfirmation: boolean;
  };
  agentIDWeb: string;
  agentIDMobile: string;
  agentIDResidency: null;
  agentIDInfluencer: string;
  name: string;
  opening_date: string;
  address: string;
  contact: {
    email: string;
    phones: string[];
    website: string;
  };
  description_title: string;
  description: string;
  description_web: string;
  directions: {
    label: string;
    type: string;
    value: string;
  };
  tags: {
    id: string;
    value: string;
  }[];
  features: {
    label: string;
    image: string;
  }[];
  photos: string[];
  position: {
    longitude: number;
    latitude: number;
  };
}

export interface LocationEvent {
  id: string;
  name: string;
  description: string;
  startDateUTC: string;
  endDateUTC: string;
  startDateISO8601: string;
  endDateISO8601: string;
  startDate: string;
  endDate: string;
  price: string;
  type: string;
  images: string[];
  areasAtLocation: string[];
  bookEventURL: string;
  onlineEventURL: string;
  country: string;
  isDaily: boolean;
  currencyCode: string;
}
