# Built-in / Inherent Events
These are events that are tied / a part of elements within our HTML.
# Forms
- ```<form>``` groups input fields together
- ```onsubmit``` will gather data within the input fields and pass it on.
- Methods:
    - Types: (CRUD)
        - POST (Create)
        - Get (Read)
        - PUT (Update)
        - DELETE
    - Part of HTTP structure in how we pass data (Will learn about in unit 5 & 6)
- When a form is submitted, it automatically refreshes our browser.


## Some Attributes
- ```for``` helps tie labels with the input field.
- ```autocomplete``` allows us to show previous inputs that we might have had in past forms. Governs and depends on the browser's autocomplete feature.
- ```type``` notes what type of data to expect/we will receive.
- ```name``` associates the name of the input (helps the label know what input it's attached to)
- ```placeholder``` is a way for us to write a note to users as to what might be input/written into the input field. Helper/guide text.
- `value` is what is held within the input when submitted.
    - This gets populated when a user types into it/interacts with it.
    
## Steps for DOM Manipulation
- **Create** the element.
- **Assign** any values to properties.
  - Provide text, class names, id names, etc.
- **Append** to a parent element.

*Note:* If an element already exists, we might only need to *assign* it a new value to update it.