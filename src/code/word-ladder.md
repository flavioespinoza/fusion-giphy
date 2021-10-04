# Word Ladder

## Time Complexity: O(M^2 x N)

Where M is the length of each word and N is the total number of words in the input word list.

For each word in the word list, we iterate over its length to find all the intermediate words corresponding to it. Since the length of each word is M and we have N words, the total number of iterations the algorithm takes to create all_combo_dict is (M × N). Additionally, forming each of the intermediate word takes O(M) time because of the substring operation used to create the new string. This adds up to a complexity of O(M^2 x N),

Breadth first search in the worst case might go to each of the N words. For each word, we need to examine M possible intermediate words/combinations. Notice, we have used the substring operation to find each of the combination. Thus, M combinations take O(M^2) time. As a result, the time complexity of BFS traversal would also be O(M^2 x N)

Combining the above steps, the overall time complexity of this approach is O(M^2 x N)

## Space Complexity: O(M^2 x N)

Each word in the word list would have M intermediate combinations. To create the all_combo_dict dictionary we save an intermediate word as the key and its corresponding original words as the value. Note, for each of MM intermediate words we save the original word of length MM. This simply means, for every word we would need a space of M^2 to save all the transformations corresponding to it. Thus, all_combo_dict would need a total space of O(M^2 x N)

Visited dictionary would need a space of O(M × N) as each word is of length M.

Queue for BFS in worst case would need a space for all O(N) words and this would also result in a space complexity of O(M×N).
Combining the above steps, the overall space complexity is:

O(M^2 × N) + O(M x N) + O(M x N)O = O(M^2 x N) space.

Optimization: We can definitely reduce the space complexity of this algorithm by storing the indices corresponding to each word instead of storing the word itself.
