import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WorkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Home {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}

export declare class Work {
  readonly id: string;
  readonly name?: string | null;
  readonly place?: string | null;
  readonly photoDatetime?: string | null;
  readonly dispTime?: string | null;
  readonly imageUrl?: string | null;
  readonly result?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Work, WorkMetaData>);
  static copyOf(source: Work, mutator: (draft: MutableModel<Work, WorkMetaData>) => MutableModel<Work, WorkMetaData> | void): Work;
}