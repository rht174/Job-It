import { useRouter, useSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";

const JobDetails = () => {
  const params = useSearchParams();
  const router = useRouter();

  return <Text>hiii</Text>;
};

export default JobDetails;
