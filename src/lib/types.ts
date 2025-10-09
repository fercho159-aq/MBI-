export type Property = {
  id: string;
  title: string;
  description: string;
  location: string;
  price?: string;
  type: 'Terreno' | 'Departamento' | 'Industrial' | 'Comercial' | 'Turismo';
  imageId: string;
  details?: { label: string; value: string }[];
};
