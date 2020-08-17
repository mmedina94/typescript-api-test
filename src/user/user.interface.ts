
import { Location } from "./../location/location.intrface";

export interface User {
    id:string;
    name: string;
    lastname: string;
    email: string;
    password: string;
    firebaseToken: string;
    location?: Location;
}