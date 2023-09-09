export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /** 8 bytes signed integer */
  Int8: { input: any; output: any; }
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Challenge = {
  __typename?: 'Challenge';
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  maturity: Scalars['BigInt']['output'];
  params: Scalars['String']['output'];
  participants: Array<ParticipantChallenge>;
  results: Scalars['BigInt']['output'];
  stake: Scalars['BigInt']['output'];
  state: Scalars['Int']['output'];
  topic: Topic;
};


export type ChallengeParticipantsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ParticipantChallenge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ParticipantChallenge_Filter>;
};

export type Challenge_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Challenge_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maturity?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  maturity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_not?: InputMaybe<Scalars['BigInt']['input']>;
  maturity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Challenge_Filter>>>;
  params?: InputMaybe<Scalars['String']['input']>;
  params_contains?: InputMaybe<Scalars['String']['input']>;
  params_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_gt?: InputMaybe<Scalars['String']['input']>;
  params_gte?: InputMaybe<Scalars['String']['input']>;
  params_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_lt?: InputMaybe<Scalars['String']['input']>;
  params_lte?: InputMaybe<Scalars['String']['input']>;
  params_not?: InputMaybe<Scalars['String']['input']>;
  params_not_contains?: InputMaybe<Scalars['String']['input']>;
  params_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  params_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  params_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  params_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  params_starts_with?: InputMaybe<Scalars['String']['input']>;
  params_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  participants_?: InputMaybe<ParticipantChallenge_Filter>;
  results?: InputMaybe<Scalars['BigInt']['input']>;
  results_gt?: InputMaybe<Scalars['BigInt']['input']>;
  results_gte?: InputMaybe<Scalars['BigInt']['input']>;
  results_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  results_lt?: InputMaybe<Scalars['BigInt']['input']>;
  results_lte?: InputMaybe<Scalars['BigInt']['input']>;
  results_not?: InputMaybe<Scalars['BigInt']['input']>;
  results_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stake?: InputMaybe<Scalars['BigInt']['input']>;
  stake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stake_not?: InputMaybe<Scalars['BigInt']['input']>;
  stake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  state?: InputMaybe<Scalars['Int']['input']>;
  state_gt?: InputMaybe<Scalars['Int']['input']>;
  state_gte?: InputMaybe<Scalars['Int']['input']>;
  state_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  state_lt?: InputMaybe<Scalars['Int']['input']>;
  state_lte?: InputMaybe<Scalars['Int']['input']>;
  state_not?: InputMaybe<Scalars['Int']['input']>;
  state_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  topic?: InputMaybe<Scalars['String']['input']>;
  topic_?: InputMaybe<Topic_Filter>;
  topic_contains?: InputMaybe<Scalars['String']['input']>;
  topic_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_ends_with?: InputMaybe<Scalars['String']['input']>;
  topic_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_gt?: InputMaybe<Scalars['String']['input']>;
  topic_gte?: InputMaybe<Scalars['String']['input']>;
  topic_in?: InputMaybe<Array<Scalars['String']['input']>>;
  topic_lt?: InputMaybe<Scalars['String']['input']>;
  topic_lte?: InputMaybe<Scalars['String']['input']>;
  topic_not?: InputMaybe<Scalars['String']['input']>;
  topic_not_contains?: InputMaybe<Scalars['String']['input']>;
  topic_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  topic_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  topic_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  topic_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  topic_starts_with?: InputMaybe<Scalars['String']['input']>;
  topic_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Challenge_OrderBy {
  CreatedAt = 'createdAt',
  Id = 'id',
  Maturity = 'maturity',
  Params = 'params',
  Participants = 'participants',
  Results = 'results',
  Stake = 'stake',
  State = 'state',
  Topic = 'topic',
  TopicDescription = 'topic__description',
  TopicEvaluator = 'topic__evaluator',
  TopicId = 'topic__id',
  TopicMaintainer = 'topic__maintainer',
  TopicState = 'topic__state',
  TopicTitle = 'topic__title'
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Participant = {
  __typename?: 'Participant';
  Challenges: Array<ParticipantChallenge>;
  id: Scalars['String']['output'];
};


export type ParticipantChallengesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ParticipantChallenge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ParticipantChallenge_Filter>;
};

export type ParticipantChallenge = {
  __typename?: 'ParticipantChallenge';
  challenge: Challenge;
  id: Scalars['String']['output'];
  participant: Participant;
};

export type ParticipantChallenge_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<ParticipantChallenge_Filter>>>;
  challenge?: InputMaybe<Scalars['String']['input']>;
  challenge_?: InputMaybe<Challenge_Filter>;
  challenge_contains?: InputMaybe<Scalars['String']['input']>;
  challenge_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  challenge_ends_with?: InputMaybe<Scalars['String']['input']>;
  challenge_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  challenge_gt?: InputMaybe<Scalars['String']['input']>;
  challenge_gte?: InputMaybe<Scalars['String']['input']>;
  challenge_in?: InputMaybe<Array<Scalars['String']['input']>>;
  challenge_lt?: InputMaybe<Scalars['String']['input']>;
  challenge_lte?: InputMaybe<Scalars['String']['input']>;
  challenge_not?: InputMaybe<Scalars['String']['input']>;
  challenge_not_contains?: InputMaybe<Scalars['String']['input']>;
  challenge_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  challenge_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  challenge_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  challenge_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  challenge_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  challenge_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  challenge_starts_with?: InputMaybe<Scalars['String']['input']>;
  challenge_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<ParticipantChallenge_Filter>>>;
  participant?: InputMaybe<Scalars['String']['input']>;
  participant_?: InputMaybe<Participant_Filter>;
  participant_contains?: InputMaybe<Scalars['String']['input']>;
  participant_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_ends_with?: InputMaybe<Scalars['String']['input']>;
  participant_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_gt?: InputMaybe<Scalars['String']['input']>;
  participant_gte?: InputMaybe<Scalars['String']['input']>;
  participant_in?: InputMaybe<Array<Scalars['String']['input']>>;
  participant_lt?: InputMaybe<Scalars['String']['input']>;
  participant_lte?: InputMaybe<Scalars['String']['input']>;
  participant_not?: InputMaybe<Scalars['String']['input']>;
  participant_not_contains?: InputMaybe<Scalars['String']['input']>;
  participant_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  participant_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  participant_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  participant_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  participant_starts_with?: InputMaybe<Scalars['String']['input']>;
  participant_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum ParticipantChallenge_OrderBy {
  Challenge = 'challenge',
  ChallengeCreatedAt = 'challenge__createdAt',
  ChallengeId = 'challenge__id',
  ChallengeMaturity = 'challenge__maturity',
  ChallengeParams = 'challenge__params',
  ChallengeResults = 'challenge__results',
  ChallengeStake = 'challenge__stake',
  ChallengeState = 'challenge__state',
  Id = 'id',
  Participant = 'participant',
  ParticipantId = 'participant__id'
}

export type Participant_Filter = {
  Challenges_?: InputMaybe<ParticipantChallenge_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Participant_Filter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Participant_Filter>>>;
};

export enum Participant_OrderBy {
  Challenges = 'Challenges',
  Id = 'id'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  challenge?: Maybe<Challenge>;
  challenges: Array<Challenge>;
  participant?: Maybe<Participant>;
  participantChallenge?: Maybe<ParticipantChallenge>;
  participantChallenges: Array<ParticipantChallenge>;
  participants: Array<Participant>;
  topic?: Maybe<Topic>;
  topics: Array<Topic>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryChallengeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryChallengesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Challenge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Challenge_Filter>;
};


export type QueryParticipantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryParticipantChallengeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryParticipantChallengesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ParticipantChallenge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ParticipantChallenge_Filter>;
};


export type QueryParticipantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Participant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Participant_Filter>;
};


export type QueryTopicArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTopicsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Topic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Topic_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  challenge?: Maybe<Challenge>;
  challenges: Array<Challenge>;
  participant?: Maybe<Participant>;
  participantChallenge?: Maybe<ParticipantChallenge>;
  participantChallenges: Array<ParticipantChallenge>;
  participants: Array<Participant>;
  topic?: Maybe<Topic>;
  topics: Array<Topic>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionChallengeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionChallengesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Challenge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Challenge_Filter>;
};


export type SubscriptionParticipantArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionParticipantChallengeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionParticipantChallengesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ParticipantChallenge_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ParticipantChallenge_Filter>;
};


export type SubscriptionParticipantsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Participant_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Participant_Filter>;
};


export type SubscriptionTopicArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTopicsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Topic_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Topic_Filter>;
};

export type Topic = {
  __typename?: 'Topic';
  description: Scalars['String']['output'];
  evaluator: Scalars['String']['output'];
  id: Scalars['String']['output'];
  maintainer: Scalars['String']['output'];
  state: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Topic_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Topic_Filter>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_gt?: InputMaybe<Scalars['String']['input']>;
  description_gte?: InputMaybe<Scalars['String']['input']>;
  description_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_lt?: InputMaybe<Scalars['String']['input']>;
  description_lte?: InputMaybe<Scalars['String']['input']>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  description_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  description_starts_with?: InputMaybe<Scalars['String']['input']>;
  description_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  evaluator?: InputMaybe<Scalars['String']['input']>;
  evaluator_contains?: InputMaybe<Scalars['String']['input']>;
  evaluator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  evaluator_ends_with?: InputMaybe<Scalars['String']['input']>;
  evaluator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  evaluator_gt?: InputMaybe<Scalars['String']['input']>;
  evaluator_gte?: InputMaybe<Scalars['String']['input']>;
  evaluator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  evaluator_lt?: InputMaybe<Scalars['String']['input']>;
  evaluator_lte?: InputMaybe<Scalars['String']['input']>;
  evaluator_not?: InputMaybe<Scalars['String']['input']>;
  evaluator_not_contains?: InputMaybe<Scalars['String']['input']>;
  evaluator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  evaluator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  evaluator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  evaluator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  evaluator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  evaluator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  evaluator_starts_with?: InputMaybe<Scalars['String']['input']>;
  evaluator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maintainer?: InputMaybe<Scalars['String']['input']>;
  maintainer_contains?: InputMaybe<Scalars['String']['input']>;
  maintainer_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  maintainer_ends_with?: InputMaybe<Scalars['String']['input']>;
  maintainer_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maintainer_gt?: InputMaybe<Scalars['String']['input']>;
  maintainer_gte?: InputMaybe<Scalars['String']['input']>;
  maintainer_in?: InputMaybe<Array<Scalars['String']['input']>>;
  maintainer_lt?: InputMaybe<Scalars['String']['input']>;
  maintainer_lte?: InputMaybe<Scalars['String']['input']>;
  maintainer_not?: InputMaybe<Scalars['String']['input']>;
  maintainer_not_contains?: InputMaybe<Scalars['String']['input']>;
  maintainer_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  maintainer_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  maintainer_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maintainer_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  maintainer_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  maintainer_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maintainer_starts_with?: InputMaybe<Scalars['String']['input']>;
  maintainer_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Topic_Filter>>>;
  state?: InputMaybe<Scalars['Int']['input']>;
  state_gt?: InputMaybe<Scalars['Int']['input']>;
  state_gte?: InputMaybe<Scalars['Int']['input']>;
  state_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  state_lt?: InputMaybe<Scalars['Int']['input']>;
  state_lte?: InputMaybe<Scalars['Int']['input']>;
  state_not?: InputMaybe<Scalars['Int']['input']>;
  state_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_gt?: InputMaybe<Scalars['String']['input']>;
  title_gte?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_lt?: InputMaybe<Scalars['String']['input']>;
  title_lte?: InputMaybe<Scalars['String']['input']>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Topic_OrderBy {
  Description = 'description',
  Evaluator = 'evaluator',
  Id = 'id',
  Maintainer = 'maintainer',
  State = 'state',
  Title = 'title'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}
