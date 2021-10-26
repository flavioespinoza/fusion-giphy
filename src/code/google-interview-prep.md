# Google Interview Prep

## Critical

Now that we've talked a little bit about some of the knowledge areas that we expect you to know, we want to offer you three final tips to really be successful

### `explain` and `clarify`

- `extremely important` to **`talk through your thought process`** during the interview
- much better to `say what you're thinking` than to stay silent
- even if you're discarding ideas along the way your **`interviewer wants to know your thought process`**
- which `ideas you're NOT going to use` and `which idea you are going to use`
- `Clarifying the questions` is also important
- Questions at Google are `intentionally vague`
- interviewer `wants to know what questions you would ask` if you're in a `real world` solutions that had a `vague question`

---

## Ask this Question

## **`Are there any time or space complexity requirements?`**

---

### `keep thinking`

- we know this is really strenuous interviewing is really long, but the first solution that you come up with might not be the most elegant so we encourage you to keep thinking through the problems
- Think about your current solution and how you could potentially improve it.

### `practice`

- make sure that you practice physically writing your code. You won't have an editor no color code or comments no autocorrect Be sure to test your code. Be sure that it's easily readable out labs, find problems, write code, solve them. There's no better way of practicing than actually writing out code. And that's it for today. Thanks so much for joining us.

## Prove what's on your resume

**We're gonna want**:

1. some critical pieces from you
1. including the bread and butter of software engineering
1. data structures

## Data Structures and Algorithms

**We want things like**:

1. hash tables
1. stacks
1. arrays
1. algorithms
1. space and time complexity

We also want things like be prepared to code on a whiteboard. This is very different from coding on a computer so it's highly recommended to go out find a whiteboard or a chalkboard and try coding something up. It's a little different. And finally, we want to make sure that you're brushed up on system design as well as object oriented programming.

## Problem Solving Skills

**`The interviewer wants to know if they be comfortable working with you.`**

1. **coding question**, providing efficient code and short time frame
1. **design question**, work with your interviewer to create a high level system applicable, delving into deeper issues
1. **general analysis question**, surely understand all aspects of problem and if necessary, offer multiple solutions discussing the relative merits

## Coding  Questions

**You will be expected to know**:

1. API's
1. object oriented design and programming
1. how to test your code and be able to come up with corner cases and edge cases for yours and other people's.

## Algorithms

**So you also want to know**:

1. how complex your algorithm is
1. time and space complexity
1. how to improve or change it

**`O of n better than O of n factorial or O of n squared.`**

## Data Structures - NP Complete

**`NP complete problems`**

1. the traveling salesman
    - As with others in this thread I built a solution to an NP complete problem in college (it was a side project for a friend) - a scheduling program. At the time that I agreed to work on his problem I did not know what NP complete was. I later realized I had come up with some fairly good heuristics for solving the problem
    - but of course the `real trick` was `knowing when to tell the user that there was no solution` and `they had over-constrained the problem`.
    - It was a great way to bring together my eventual theoretical classes and the real world.
    - Again, heuristics and "close enough" are generally fine for real world uses where near-optimal solutions are preferred because of the cost of finding and implementing the ideal solution.

1. the knapsack.

### question: `What does NP complete actually mean?`

### answer: `Nondeterministic Polynomial-time Complete`

## What is [NP](https://en.wikipedia.org/wiki/NP_(complexity))?

NP is the set of all [decision problems](https://en.wikipedia.org/wiki/Decision_problem) (questions with a yes-or-no answer) for which the 'yes'-answers can be ***verified*** in **`polynomial time`** === **O(n<sup>k</sup>)**

- where _n_ is the problem size
- and _k_ is a constant by a [deterministic Turing machine](http://en.wikipedia.org/wiki/Deterministic_Turing_machine).
  
Polynomial time is sometimes used as the definition of *fast* or *quickly*.

## What is [P](https://en.wikipedia.org/wiki/P_(complexity))?

P is the set of all decision problems which can be **solved** in _polynomial time_ by a _deterministic Turing machine_. Since they can be solved in polynomial time, they can also be verified in polynomial time. Therefore P is a subset of NP.

## What is [NP-Complete](https://en.wikipedia.org/wiki/NP-complete)?

A problem x that is in NP is also in NP-Complete _if and only if_ every other problem in NP can be quickly (ie. in polynomial time) transformed into x.

In other words:

 1. x is in NP, and
 2. Every problem in NP is [_reducible_](https://en.wikipedia.org/wiki/Reduction_(complexity)) to x

So, what makes _NP-Complete_ so interesting is that if any one of the NP-Complete problems was to be solved quickly, then all _NP_ problems can be solved quickly.

See also the post [What's "P=NP?", and why is it such a famous question?](https://stackoverflow.com/questions/111307/whats-pnp-and-why-is-it-such-a-famous-question)

## What is [NP-Hard](https://en.wikipedia.org/wiki/NP-hard)?

NP-Hard are problems that are at least as hard as the hardest problems in NP. Note that NP-Complete problems are also NP-hard. However not all NP-hard problems are NP (or even a decision problem), despite having `NP` as a prefix. That is the NP in NP-hard does not mean _non-deterministic polynomial time_. Yes, this is confusing, but its usage is entrenched and unlikely to change.

## Data Structures - Common

**You should absolutely know**:

1. trees
1. some basic tree construction traversal and manipulation algorithms
1. hash tables
1. stacks
1. arrays
1. link lists

## Math

Also, math. Some of our interviewers will ask basic discrete math problems. Don't worry they will be very relevant counting problems, probability things that happen in everyday life. So before you come in, spend some time refreshing your memory on these things, or learning the essentials of probability theory and combinatorics. You should be pretty familiar with n choose k problems and the like.

## Recursion

Many coding problems involve thinking recursively and maybe coding a recursive solution. Prepare for recursion, which can sometimes be tricky, if not approach properly. Practice some problems which can be solved iteratively but a more elegant solution is recursion

## Operating Systems - Processes Threads - Concurrency Issues

1. semaphores
1. new Texas
1. locks
1. resource allocation
    - what resources a process or thread might need
1. context switching
    - understand that it's initiated in the operating system and underlying hardware
1. know a little bit about how scheduling works.

## System Design

Candidates who've been in the industry for more than five years should have experience with systems design. These questions are used to see your ability to combine knowledge theory and judgment towards solving a real world problem. Sample topics include feature sets interfaces, class argues distributed systems, and designing a system under certain constraints. You should also have an understanding of how the Internet actually works and be familiar with the various pieces, routers, domain name servers, load balancers and firewalls. Also understand the basics of how search works.

## Testing

If you have less than three years within the industry, we're just going to test you for your testing aptitude. You can expect questions such as How would you unit test the code you write what interesting inputs or test cases can you think of? And we may also ask you to design end to end integration, loading performance or even security tests for real world systems such as Gmail, for example,
