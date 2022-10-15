import { repos } from "@apihero/github";
import { createEndpoint } from "@apihero/react";

export const useGetRepo = createEndpoint(repos.getRepo);
