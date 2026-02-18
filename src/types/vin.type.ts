export interface VinDataApiResponse {
  Variable: string;
  Value: string | null;
  ValueId?: string | null;
  VariableId?: number;
}

export interface VinDataAllFieldsProps {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VinDataApiResponse[];
}
