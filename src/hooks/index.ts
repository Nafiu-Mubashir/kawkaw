import { ArrayParam, BooleanParam, NumberParam, StringParam, useQueryParams, withDefault } from "use-query-params"

export const useDataControl = (rows = 12) => {
  return useQueryParams({
    dataOrientation: withDefault(BooleanParam, false),
    search: withDefault(StringParam, ''),
    page_size: withDefault(NumberParam, rows),
    page: withDefault(NumberParam, 1),
    categories: withDefault(ArrayParam, Array<string>()),
    prices: withDefault(StringParam, ''),
    authors: withDefault(ArrayParam, Array<string>())
  })
}