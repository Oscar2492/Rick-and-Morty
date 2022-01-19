import { Location } from "./location.models";
import { Origin } from "./origin.models";
export interface Person {
  status: string;
  species: string;
  location: Location;
  origin: Origin;
  name: string;
  image: string;
}
