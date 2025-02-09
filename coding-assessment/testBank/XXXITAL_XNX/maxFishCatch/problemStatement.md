# Max Fish Catch with Limited Baits
Imagine that you are going fishing at the local pond. The size of the bait must be strictly smaller than the size of the fish for it to catch. Once the fish is caught, it is removed from the pond and cannot be caught again. However, each bait can be used up to 3 times before depletion.

Given two arrays of fish and baits, where fish[i] corresponds to the size of the ith fish in the pond, and baits[j] corresponds to the size of the jth bait, your task is to return the maximum number of fish you can catch from the pond with the given baits.

To compute the answer, you need to use each bait to its possible extent, going from the largest bait to the smallest bait. Use each bait to catch the largest fish remaining in the pond and move to the next bait if the current bait was used three times or if it is not strictly smaller than the largest remaining fish. When you run out of baits, return the number of caught fish.

Note: You are not expected to provide the most optimal solution, but a solution with time complexity not worse than
O(max(fish.length, baits.length)^3) will fit within the execution time limit.

# Example

For fish = [1, 2, 3] and baits = [1], the output should be solution(fish, baits) = 2.

Explanation:
Using baits[0] = 1, it is possible to catch 2 fish fish[2] = 3 and fish[1] = 2, since 1 < 3 and 1 < 2