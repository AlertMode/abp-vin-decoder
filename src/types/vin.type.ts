export interface VinDataApiResponse {
  Value: string | null;
  ValueId?: string | null;
  Variable: string;
  VariableId?: number;
}

export interface VinDataAllFieldsProps {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VinDataApiResponse[];
}

export interface VinVariablesApiResponse {
  DataType: string;
  Description: string;
  GroupName: string | null;
  ID: number;
  Name: string;
}

export interface VinVariablesAllFieldsProps {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VinVariablesApiResponse[];
}
