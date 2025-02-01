# Questions - Anwsers

1. What were the main UX concerns you considered in designing the component?

My main concerns regarding UX were about accessibility (easy to navigate with keyboard and screen) and usability (easy to use, selected country directly visible).

2. How would you approach improving the search function to allow variants of country names (e.g. &quot;USA&quot;)?

I'd change the countries.json to return an array of objects. A new key per country in which the potential synonyms and aliases can be implemented along with a fuzzy search algorithm.

3. What would be your next steps to make this into a generic, reusable component that could be used in a larger app?

Break down the component even more into smaller re-usable little components.
Maybe enabling props to style it more.
Finally, maybe using a tool like storybook to enable devs and users to test the component.
