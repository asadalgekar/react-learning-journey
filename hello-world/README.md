# CDN: 
A Content delivery networks improves speed of website by placing content in different server across the globe. It is then delivered to application from nearest server.

# Crossorigin in script tag:
Purpose of crossorigin attribute is used to share resources from one domain to another. It is used to handle cross origin resource sharing (CORS) is a mechanism by which one webpage request another domain for resources.

# create.Element(type,props,childrens)
createElement lets you create a React element. It serves as an alternative to writing JSX.
type: The type argument must be a valid React component type. For example, it could be a tag name string (such as 'div' or 'h1'),
props: The props argument must either be an object or null. i.e attribute like id, classname.
optional ...children: Zero or more child nodes.  single child or Array of childs.

# createRoot(domNode, options?) 
createRoot lets you create a root to display React components inside a browser DOM node.
domNode: A DOM element. React will create a root for this DOM element and allow you to call functions on the root, such as render to display rendered React content.
createRoot returns an object with two methods: render and unmount.

# root.render(reactNode) 
Call root.render to display a piece of JSX (“React node”) into the React root’s browser DOM node.
