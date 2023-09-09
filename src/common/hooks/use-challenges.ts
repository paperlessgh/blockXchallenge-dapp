"use client";

// react
import { useState, useEffect } from "react";
// imports
import { gql } from "@apollo/client";

// client
import glaphqlClient from "../graphql-client";

// entities
import { Challenge, QueryChallengesArgs } from "@/common/types/graphql";

// query
const CHALLENGES = gql`
  query Challenges {
    challenges {
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
function useChallenges(args?: QueryChallengesArgs) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<Challenge[]>();

  useEffect(() => {
    fetchChallenges(args)
      .then(({ data, error }) => {
        if (error) {
          setError(error);
          setLoading(false);
          return;
        }

        setData(data.challenges);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [args]);

  const fetchChallenges = async (args?: QueryChallengesArgs) => {
    return await glaphqlClient.query<
      {
        challenges: Challenge[];
      },
      QueryChallengesArgs
    >({
      query: CHALLENGES,
      // variables: args,
    });
  };

  return {
    data,
    loading,
    error,
  };
}

export default useChallenges;
