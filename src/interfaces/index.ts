export interface Skip {
  id: number;
  size: number;
  hire_period_date: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  postcode: string;
  area: string;
  price_before_vat: number;
  updated_at: Date;
  vat: number;
  forbidden: boolean;
  created_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}