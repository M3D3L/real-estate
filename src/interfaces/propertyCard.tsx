export interface PropertyCardProps {    
    id: number;
    title: string;
    description: string;
    image: string;
    rooms?: number;
    bathrooms?: number;
    parking?: number;
    area: number;
    price: number;
    address?: {
        street?: string,
        city?: string,
        state?: string,
        zip?: string
      },
    anemities?: string[];
}