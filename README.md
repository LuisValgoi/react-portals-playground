### VIDEO

- [https://www.youtube.com/watch?v=HpHLa-5Wdys&ab_channel=Codevolution](https://www.youtube.com/watch?v=HpHLa-5Wdys&ab_channel=Codevolution)

### WHAT

- provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component

### BENEFITS

- we can have multiple `root`s

### USAGE

- for Modals

### NOTES

- Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way.
- This includes event bubbling.
- An event fired from inside a portal will propagate to ancestors in the containing *React tree*, even if those elements are not ancestors in the *DOM tree*

### REFERENCE

- [https://reactjs.org/docs/portals.html](https://reactjs.org/docs/portals.html)