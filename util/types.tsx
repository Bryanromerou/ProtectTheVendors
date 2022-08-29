// Profile structure
export type profileType = {
  profileType: "vendor" | "customer";
  location?: string;
  locationCoordinates?: {
    latitude: string;
    longitude: string;
  };
  permit?: boolean;
  name: string;
  locationName: string;
  tags: string[];
  description: string;
  userID: string;
};
