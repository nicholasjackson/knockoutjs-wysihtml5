knockoutjs-wysihtml5
====================

KnockoutJS - Wysihtml5 binding

This is a KnockoutJS simple binding for the Wysihtml5 text area, for examples of usage please see the examples and for help with wysihtml5 options please see https://github.com/jhollingworth/bootstrap-wysihtml5/ 

Simple rich text box without any options
```html
<textarea id="sometext" data-bind="wysihtml5: $data.ExampleText" placeholder="Enter text ..."></textarea>
````

Rich text box with option to remove font-styles dropdown
```html
<textarea id="sometext" data-bind="wysihtml5: {data: $data.ExampleText, options: {'font-styles': false}}" 
placeholder="Enter text ..."></textarea>
```
