export interface IContainerChildLink {
  childLinks: IChildLink[];
}

export interface IChildLink {
  title: string;
  path: string;
  subtitle?: string;
  icon?: string;
  exact?: boolean;
}
