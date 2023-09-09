"use client";

// react
import { useState, useEffect } from "react";
// imports
import { gql } from "@apollo/client";

// client
import glaphqlClient from "../graphql-client";

// entities
import { Topic, QueryTopicsArgs } from "@/common/types/graphql";

// query
const old = gql`
query ChallengeTopics(
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
const CHALLENGE_TOPICS = gql`
  query ChallengeTopics {
    topics {
      id
      title
      description
      maintainer
      evaluator
      state
    }
  }
`;

// hook
function useChallengeTopics(args?: QueryTopicsArgs) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<Topic[]>();

  useEffect(() => {
    fetchTopics(args)
      .then(({ data, error }) => {
        if (error) {
          setError(error);
          setLoading(false);
          return;
        }

        setData(data.topics);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [args]);

  const fetchTopics = async (args?: QueryTopicsArgs) => {
    return await glaphqlClient.query<
      {
        topics: Topic[];
      },
      QueryTopicsArgs
    >({
      query: CHALLENGE_TOPICS,
      // variables: args,
    });
  };

  return {
    data,
    loading,
    error,
  };
}

export default useChallengeTopics;
