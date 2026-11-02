class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
      
\`<div></div>\`

\`\`\`js
// this is multi-line code:
function example(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**!... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
|-------------|--------------|----------------|
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`,
    };
   
    this.handleChange = this.handleChange.bind(this);
    
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
    <div>
        {/* Editor */}
        <textarea
          id="editor"
          value={this.state.input}
          onChange={this.handleChange}
          style={{ width: "100%", height: "200px" }}
        />

        <h4>Preview:</h4>

        {/* Preview rendered Markdown as HTML */}
        <div
          id="preview"
          style={{ border: "1px solid #ccc", padding: "10px" }}
          dangerouslySetInnerHTML={{
            __html: marked.parse(this.state.input, { gfm: true, breaks: true })
          }}
        />
      </div>
    );
  }
}

ReactDOM.render(<MarkdownPreviewer />, document.getElementById("container"));
