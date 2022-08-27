// Profile structure
export type profileType = {
  profileType: "vendor" | "customer";
  location?: string;
  permit?: boolean;
  name: string;
  locationName: string;
  tags: string[];
  description: string;
  userID: string;
};
