export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  avatar: string;
  bio: string;
  rating: number;
  reviews: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  specialty: string;
  price: number;
}

export interface Facility {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface ClinicLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  image: string;
}
