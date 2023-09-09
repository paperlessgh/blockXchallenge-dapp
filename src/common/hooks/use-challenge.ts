"use client";

// react
import { useState, useEffect } from "react";
// imports
import { gql } from "@apollo/client";

// client
import glaphqlClient from "../graphql-client";

// entities
import { Challenge, QueryChallengeArgs } from "@/common/types/graphql";

// query
const old = gql`
  query Challenge(
    $block: Block_height
    $first: Int
    $orderBy: Topic_orderBy
    $orderDirection: OrderDirection
    $skip: Int
    $subgraphError: Boolean
    $where: Topic_filter
  ) {
    topics(
      block: $block
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      skip: $skip
      subgraphError: $subgraphError
      where: $where
    ) {
      id
      title
      description
      maintainer
      evaluator
      state
    }
  }
`;
const CHALLENGES = gql`
  query Challenge($id: ID!) {
    challenge(id: $id) {
      id
      stake
      createdAt
      maturity
      state
      topic {
        id
        title
        description
      }
      participants {
        id
      }
      results
      params
    }
  }
`;

// hook
function useChallenges(challengeId: string | null) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<Challenge>();

  useEffect(() => {
    if (!challengeId) {
      return;
    }

    fetchChallenge(challengeId)
      .then(({ data, error }) => {
        if (error) {
          setError(error);
          setLoading(false);
          return;
        }

        setData(data.challenge);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [challengeId]);

  const fetchChallenge = async (challengeId: string) => {
    return await glaphqlClient.query<
      {
        challenge: Challenge;
      },
      QueryChallengeArgs
    >({
      query: CHALLENGES,
      variables: {
        id: challengeId,
      },
    });
  };

  return {
    data,
    loading,
    error,
  };
}

export default useChallenges;
