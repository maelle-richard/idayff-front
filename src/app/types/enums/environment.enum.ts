export const enum EnvironmentEnum {
  DEV,
  STG1,
  STG2,
  PROD,
}

export const environmentStringToId: Map<string, EnvironmentEnum> = new Map([
  ["dev", EnvironmentEnum.DEV],
  ["stg1", EnvironmentEnum.STG1],
  ["stg2", EnvironmentEnum.STG2],
  ["prod", EnvironmentEnum.PROD],
]);
